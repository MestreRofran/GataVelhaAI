# GataVelhaAI 🐱

**GataVelhaAI** é um jogo da velha com gatinhos, desenvolvido por **Rofran Pires** (2026). Pode ser jogado diretamente no navegador e instalado no celular ou computador como um **PWA (Progressive Web App)**.

## Principais recursos

- Tabuleiros **3×3, 4×4 e 5×5** e metas de **3 ou 4 gatos** em sequência, dependendo do formato da rodada.
- Partida única, melhor de 3, melhor de 10 e modo infinito.
- Contra a IA (quatro dificuldades) ou dois jogadores no mesmo aparelho.
- Gatos 3D, gatos 2D, X/O 3D e X/O 2D. Nos gatos 2D, o padrão é **Aleatório**, sorteando um dos cinco pares por rodada.
- **Alternância de quem começa**: brancas, pretas, brancas e assim por diante.
- **Modo inteligente**, opcional em **Configurações → Jogadores → Ritmo das rodadas**: identifica quando não existe mais nenhuma linha que qualquer equipe possa completar, pisca as casas vazias em vermelho e conclui a rodada como empate, mantendo pontuação, histórico e avanço de rodadas.
- Ranking e histórico locais; login e ranking global opcionais via Firebase.
- Salva preferências e séries locais automaticamente; exporta/importa backup JSON.
- Instalação como PWA e funcionamento do **jogo local** offline após o cache inicial. Conexão e autenticação Firebase exigem internet.

## Pacote GitHub Pages / PWA — v1.7

Arquivos principais:

| Arquivo | Função |
|---|---|
| `index.html` | Página principal que o GitHub Pages abre automaticamente |
| `GataVelhaAI1.7.html` | Cópia versionada do mesmo aplicativo |
| `manifest.webmanifest` | Configuração de instalação PWA, tela inicial e ícones |
| `sw.js` | Service Worker que guarda o jogo e ícones para uso offline |
| `icons/` | Favicons, ícones para celulares e imagens `maskable` |
| `.nojekyll` | Evita processamento Jekyll desnecessário no GitHub Pages |
| `README.md` | Este guia |

## Publicação no GitHub Pages

1. Crie um repositório no GitHub ou abra o repositório atual do GataVelhaAI.
2. Extraia este ZIP e envie **o conteúdo da pasta**, incluindo `index.html`, `sw.js`, `manifest.webmanifest`, a pasta `icons/` e `.nojekyll`, para **a raiz** do repositório (não uma subpasta adicional).
3. Vá para **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e diretório `/(root)`.
4. Aguarde a publicação HTTPS. Abra o endereço do GitHub Pages no navegador e atualize para receber a versão 1.7.
5. Nas **Configurações → Dados**, o **último botão é Instalar App**. Se o navegador oferecer a instalação nativa, aparece a confirmação. Se não, siga a orientação do menu do navegador.

**Importante:** para instalar o PWA, abra o endereço do GitHub Pages por HTTPS. Um arquivo HTML aberto em `file://` não oferece instalação PWA. No Android Chrome, use **Instalar app** ou **Adicionar à tela inicial**; no iOS Safari, use **Compartilhar → Adicionar à Tela de Início**.

## Firebase

O HTML já contém a configuração pública do Firebase informada para o projeto `gatavelhaai`, usado para autenticação e ranking global. Para funcionar:

- Ative **Authentication** (provedor Anônimo e, opcionalmente, Google e E-mail/Senha).
- Habilite **Cloud Firestore** e configure regras que permitam ler `gatovelhaai_ranking` publicamente e criar pontuações somente com autenticação.
- Configure os domínios autorizados para login externo em **Authentication → Settings → Authorized domains**.
- No jogo, habilite **Publicar pontuação no ranking global** caso queira enviar resultados ao Firestore.

**Segurança:** o `apiKey` do Firebase Web é um identificador público do projeto, não substitui regras de segurança. Como o jogo é executado no cliente, a pontuação enviada pode ser manipulada; a validação rigorosa exigiria um backend.

## Dados e atualizações

- O progresso local é guardado no navegador (armazenamento do mesmo endereço web).
- Antes de limpar dados do navegador ou mudar o endereço do app, faça backup em **Configurações → Dados → Exportar backup JSON**.
- O Service Worker usa cache versionado e remove caches anteriores do GataVelhaAI no momento da ativação.

**Crédito:** Desenvolvido por Rofran Pires · 2026.
