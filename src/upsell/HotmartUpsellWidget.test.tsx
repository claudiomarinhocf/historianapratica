import { StrictMode } from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { HotmartUpsellWidget } from './HotmartUpsellWidget';

afterEach(cleanup);
describe('Official widget installation', () => {
  it('mounts one official container under StrictMode and preserves script attributes', async () => {
    const { container } = render(<StrictMode><HotmartUpsellWidget html={'<div id="official-slot" data-offer="original"></div><script id="official-script" data-vendor="hotmart">/* official inline script */</script>'} /></StrictMode>);
    await waitFor(() => expect(container.querySelectorAll('#official-script').length).toBe(1));
    expect(container.querySelector('#official-slot')?.getAttribute('data-offer')).toBe('original');
    expect(container.querySelector('#official-script')?.getAttribute('data-vendor')).toBe('hotmart');
  });
  it('loads dependent external scripts in order', async () => {
    const { container } = render(<HotmartUpsellWidget html={'<div id="official-slot"></div><script src="https://example.test/official.js" data-token="test"></script><script id="dependent-script">/* dependent */</script>'} />);
    await waitFor(() => expect(container.querySelector('script[src]')).not.toBeNull());
    expect(container.querySelector('#dependent-script')).toBeNull();
    container.querySelector('script[src]')?.dispatchEvent(new Event('load'));
    await waitFor(() => expect(container.querySelector('#dependent-script')).not.toBeNull());
  });
  it('does not install anything after early unmount', async () => {
    const { container, unmount } = render(<HotmartUpsellWidget html={'<script id="cancelled-script">/* cancelled */</script>'} />);
    unmount();
    await Promise.resolve();
    expect(container.querySelector('#cancelled-script')).toBeNull();
  });
});