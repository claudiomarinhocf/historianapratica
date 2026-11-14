export const UPSELL = {
  price: 47.90,
  format: 'PDF',
  lessons: 8,
  approximatePages: 80,
  cover: null as { url: string; width: number; height: number } | null,
  // Only paste the official Hotmart SALES FUNNEL snippet supplied by the owner.
  widgetHtml: '',
};

export const lessons = [
  ['Começando com a IA', 'Entenda as possibilidades da inteligência artificial para professores de História.'],
  ['Aprendendo a criar prompts', 'Aprenda a escrever comandos mais claros e eficientes.'],
  ['Criando apresentações', 'Descubra como utilizar IA no desenvolvimento de apresentações didáticas.'],
  ['Elaborando atividades', 'Aprenda a produzir atividades e exercícios personalizados.'],
  ['Tornando aulas interativas', 'Conheça maneiras de criar dinâmicas e estratégias de participação.'],
  ['Criando avaliações', 'Aprenda a elaborar questões, avaliações e gabaritos com apoio da IA.'],
  ['Criando recursos visuais', 'Descubra como utilizar ferramentas digitais para produzir materiais visuais.'],
  ['Montando uma aula completa', 'Combine os conhecimentos adquiridos para planejar uma aula do início ao fim.'],
] as const;

export const faqs = [
  ['É um curso em vídeo?', 'Não. É um e-book digital ilustrado, com 8 aulas práticas e orientações passo a passo.'],
  ['Preciso saber utilizar inteligência artificial?', 'Não. O material começa com conceitos introdutórios e avança progressivamente.'],
  ['O material é exclusivo para professores de História?', 'Foi desenvolvido especialmente para professores de História, com exemplos de aplicação pedagógica nessa disciplina.'],
  ['Esse material substitui o História na Prática?', 'Não. Ele complementa o pacote principal, ensinando como criar e personalizar outros recursos.'],
] as const;

export const formatPrice = (price: number) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });