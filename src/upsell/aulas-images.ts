import aula2 from '@/assets/upsell_receber_2_v2.webp.asset.json';
import aula3 from '@/assets/upsell_receber_3_v2.webp.asset.json';
import aula4 from '@/assets/upsell_receber_4_v2.webp.asset.json';
import aula5 from '@/assets/upsell_receber_5_v2.webp.asset.json';
import aula6 from '@/assets/upsell_receber_6_v2.webp.asset.json';
import aula7 from '@/assets/upsell_receber_7_v2.webp.asset.json';
import aula8 from '@/assets/upsell_receber_8_v2.webp.asset.json';
import { lessons } from './content';

export const aulasImages = [aula2, aula3, aula4, aula5, aula6, aula7, aula8].map((asset, index) => ({
  url: asset.url,
  alt: `Aula ${index + 2} — ${lessons[index + 1]?.[0] ?? ''}`,
  width: 600,
  height: 600,
}));