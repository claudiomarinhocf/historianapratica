import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { UpsellAulasCarousel } from './UpsellAulasCarousel';

const mocks = vi.hoisted(() => ({
  play: vi.fn(), stop: vi.fn(), reduced: false,
  events: {} as Record<string, () => void>,
}));
vi.mock('embla-carousel-auto-scroll', () => ({ default: () => ({ play: mocks.play, stop: mocks.stop }) }));
vi.mock('embla-carousel', () => {
  const api = { on: vi.fn((name: string, callback: () => void) => { mocks.events[name] = callback; return api; }), off: vi.fn(() => api), scrollPrev: vi.fn(), scrollNext: vi.fn(), destroy: vi.fn() };
  return { default: () => api };
});

beforeEach(() => {
  mocks.reduced = false;
  vi.clearAllMocks();
  vi.stubGlobal('IntersectionObserver', class {
    constructor(private callback: (entries: { isIntersecting: boolean }[]) => void) {}
    observe() { this.callback([{ isIntersecting: true }]); }
    disconnect() {}
  });
  vi.stubGlobal('matchMedia', () => ({ matches: mocks.reduced, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); vi.useRealTimers(); });

describe('Lesson carousel playback', () => {
  it('pauses on hover and resumes after leaving', () => {
    const { container } = render(<UpsellAulasCarousel />);
    expect(mocks.play).toHaveBeenCalled();
    mocks.stop.mockClear();
    const section = container.querySelector('section');
    if (!section) throw new Error('Missing carousel');
    fireEvent.pointerEnter(section);
    expect(mocks.stop).toHaveBeenCalled();
    mocks.play.mockClear();
    fireEvent.pointerLeave(section);
    expect(mocks.play).toHaveBeenCalled();
  });
  it('never starts automatic motion when reduced motion is requested', () => {
    mocks.reduced = true;
    render(<UpsellAulasCarousel />);
    expect(mocks.play).not.toHaveBeenCalled();
    expect(mocks.stop).toHaveBeenCalled();
  });
  it('pauses during manual dragging and resumes after interaction', () => {
    vi.useFakeTimers();
    render(<UpsellAulasCarousel />);
    mocks.stop.mockClear();
    const pointerDown = mocks.events['pointerDown'];
    const pointerUp = mocks.events['pointerUp'];
    if (!pointerDown || !pointerUp) throw new Error('Missing interaction handlers');
    pointerDown();
    expect(mocks.stop).toHaveBeenCalled();
    mocks.play.mockClear();
    pointerUp();
    vi.advanceTimersByTime(1799);
    expect(mocks.play).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(mocks.play).toHaveBeenCalled();
  });
  it('keeps automatic motion paused after the pause control is selected', () => {
    render(<UpsellAulasCarousel />);
    mocks.play.mockClear();
    fireEvent.click(screen.getByRole('button', { name: 'Pausar carrossel' }));
    expect(mocks.play).not.toHaveBeenCalled();
    expect(mocks.stop).toHaveBeenCalled();
  });
});