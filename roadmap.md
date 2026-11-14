# Atualização: História na Prática

## Auditoria atual de imagens e carregamento
- [x] Medir 49 imagens (33 usadas); recomprimir quatro com pixels RGBA idênticos, economizando 62.982 bytes (0,44% do total usado).
- [x] Auditar 16 arquivos sem referência atual; preservar todos porque versões anteriores publicadas podem depender deles; nenhum removido.
- [x] Conferir prioridades automáticas/explícitas das primeiras imagens, carregamento sob demanda, duas páginas em 1280/393px sem imagens quebradas ou overflow, pop-up e widget único; 26 testes e build OK. Tabela e medições locais entregues no relatório; sem comprovação de ganho de tempo ou medição pós-publicação.

## Widget oficial Hotmart em /upsell
- [x] Instalar HotmartSalesFunnel entre “Acesso imediato após a compra” e as bandeiras de pagamento, sem botões de pagamento próprios; script HTTP 200, um container/iframe, 17 testes aprovados, computador e celulares 393/320px sem rolagem horizontal. Hotmart exige compra em andamento; avisos Utmify preexistentes observados.
- [x] Publicar na URL existente e conferir https://historianapratica.lovable.app/upsell: script HTTP 200, um container/iframe, preço R$ 47,90 preservado.
- [ ] Validar aceite/recusa em compra real iniciada no checkout Hotmart (depende de compra e contexto real do funil).

## Carrossel das aulas no upsell
- [x] Publicar as oito artes enviadas em WebP sem perda (16,6% mais leves) e inserir um único carrossel antes da seção das oito aulas.
- [x] Validar movimento contínuo, pausa, navegação manual e movimento reduzido em computador (1280px e 1142px) e celular (393px e 320px), preservando a página principal; 12 testes aprovados e build OK. Falhas externas do pixel Utmify preexistentes.

## Página de upsell Professor de História com IA
- [x] Criar página isolada em /professor-de-historia-com-ia, com oferta R$ 47,90, conteúdo e perguntas frequentes; noindex/nofollow somente nesta página.
- [x] Preparar integração isolada para o widget oficial, sem pagamentos simulados; preservar parâmetros recebidos; 22 testes aprovados.
- [x] Validar computador, celular (393px e 320px), acesso direto, atualização, FAQ e rolagem até a oferta; arquivos, textos e links da página principal inalterados e popup existente abre normalmente; build OK. Avisos externos de rastreamento observados; nenhuma transação Hotmart realizada.
- [x] Aplicar capa original e imagem principal enviadas pelo usuário.
- [x] Receber código oficial Hotmart; instalação e validação acompanhadas na tarefa de integração acima.

## Limpeza e carregamento inicial
- [x] Remover 40 imagens locais sem referências (4,24 MB); preservar assets CDN usados por versões anteriores.
- [x] Antecipar a imagem principal no head; computador e celular confirmam prioridade alta, imagem carregada e um único download; 14 testes aprovados e build OK.

## Otimização de imagens WebP
- [x] Converter 10 imagens PNG usadas na página para WebP sem perda, preservando pixels, resolução e transparência; 8 slides já estavam em WebP.
- [x] Atualizar referências e conferir carregamento das 18 imagens em computador e celular (393px e 320px); build OK. Aviso de conexão do pixel externo Utmify identificado, sem relação com as imagens.
- [x] Medir peso anterior de 7.927.525 bytes, final de 5.952.206 bytes e redução de 1.975.319 bytes (24,92%).

## Identidade visual histórica
- [x] Aplicar paleta e tipografia aprovadas sem alterar conteúdo ou funcionalidades.
- [x] Tipografia revertida para Poppins (fonte original); paleta histórica mantida.
- [x] Validar contraste, imagens, botões e organização em desktop e mobile (393px e 320px); textos, links e seções preservados.
- [x] Bloco "VALOR TOTAL DOS BÔNUS / R$ 97,24 / Inclusos GRÁTIS no Pacote Completo!" na paleta (fundo azul-tinta, rótulo dourado, selo dourado com texto grafite, texto marfim).

- [x] Mapear seções em src/landing/LandingPage.tsx
- [x] Primeira dobra (headline, descrição, prova social)
- [x] Seção de problemas
- [x] Bônus: 4 cards + imagens enviadas
- [x] Seção de preços (R$10 / R$19,90, benefícios)
- [x] Como receber o acesso
- [x] Depoimentos: removidos depoimentos de Artes; estrutura mantida com aviso "em breve"
- [x] Garantia
- [x] FAQ
- [x] Fechamento + rodapé + head metadata
- [x] Removido aviso flutuante de compras simuladas (nomes/cidades aleatórios)
- [x] Validação: build OK, sem textos de "Artes", mobile sem cortes

## Pendentes (aguardando o usuário)
- [x] Trocar as galerias pelos oito slides de História enviados.
- [x] Atualizar prova social, respostas de FAQ e símbolos de História.
- [x] Remover fundo preto das quatro imagens de bônus, preservando as molduras e os pixels originais.
- [x] Mockup do produto História na Prática na primeira dobra (imagem enviada pelo usuário).
- [x] Depoimentos: cinco capturas reais enviadas pelo usuário no carrossel de "O que dizem nossos clientes".

## Atualização das ofertas
- [x] Aplicar verde #16A34A aos preços e CTAs e mover os depoimentos imediatamente antes dos pacotes; ordem, cores e popup conferidos no computador e celular; 11 testes aprovados e build OK.
- [x] Atualizar preços, economias, links Hotmart do popup e textos solicitados; remover descrição e acesso vitalício dos cards.
- [x] Aplicar preços antigos vermelhos e CTA do popup com movimento suave; validar preços e navegação em desktop e celular (393px e 320px); 11 testes aprovados e build OK.

## Nova seção de apresentação do produto
- [x] Inserir seção entre "Veja os slides por dentro" e "Bônus Exclusivos": card marfim centralizado (máx. 700px), arte do produto no topo, título, 10 benefícios com check verde e "E muito mais...".
- [x] Publicar a arte do produto (600×405, transparência original preservada) no CDN em WebP sem perda.
- [x] Validar no computador e celular (393px e 320px): card 700px, imagem 600×405 carregada, 10 itens, sem rolagem horizontal; 14 testes aprovados e build OK.

## Pendentes (aguardando o usuário)
- Confirmação de entrega por WhatsApp/Drive na Hotmart

## Ajustes de cards e primeira dobra
- [x] Removido o texto "Apresentações completas pra projetar em sala..." da primeira dobra.
- [x] Card Pacote Básico: nova arte do produto (700×472, transparência preservada) no lugar da antiga.
- [x] Card Pacote Completo: faixa de formas de pagamento (1200×144) abaixo de "OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO".
- [x] Validação no computador e celular (393px e 320px): imagens carregando, sem cortes nem rolagem horizontal; build OK.

## Troca de 4 slides da galeria "Veja os slides por dentro"
- [x] Substituir China Antiga (slide 02), Revolução Industrial (slide 05), Origens da Democracia (slide 06) e Brasil Colonial (slide 08) pelas artes enviadas, publicadas no CDN em WebP q85 (430 KB, 447 KB, 386 KB, 386 KB).
- [x] Validar no computador: 16 imagens da galeria carregando, 4 novas no ar, projetor final atualizado, sem rolagem horizontal; 14 testes aprovados e build OK.

