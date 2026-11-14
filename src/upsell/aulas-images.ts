import aula1 from '@/assets/professor_ia_aula_1.webp.asset.json';
import aula2 from '@/assets/professor_ia_aula_2.webp.asset.json';
import aula3 from '@/assets/professor_ia_aula_3.webp.asset.json';
import aula4 from '@/assets/professor_ia_aula_4.webp.asset.json';
import aula5 from '@/assets/professor_ia_aula_5.webp.asset.json';
import aula6 from '@/assets/professor_ia_aula_6.webp.asset.json';
import aula7 from '@/assets/professor_ia_aula_7.webp.asset.json';
import aula8 from '@/assets/professor_ia_aula_8.webp.asset.json';
import { lessons } from './content';

export const aulasImages = [aula1, aula2, aula3, aula4, aula5, aula6, aula7, aula8].map((asset, index) => ({
  url: asset.url,
  alt: `Aula ${index + 1} — ${lessons[index][0]}`,
  width: 600,
  height: 600,
}));