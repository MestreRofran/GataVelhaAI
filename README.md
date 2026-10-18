# GataVelhaAI

GataVelhaAI é um jogo da velha com temática de gatinhos, criado para rodar diretamente no navegador e também funcionar como aplicativo instalável (PWA).

## O que o projeto oferece

- jogo da velha com **tabuleiros 3x3, 4x4 e 5x5**;
- modos **partida única, melhor de 3, melhor de 10 e infinito**;
- quatro níveis de dificuldade contra a IA;
- modo para **dois jogadores no mesmo aparelho**;
- variações visuais com **gatos 3D, gatos 2D e símbolos X/O**;
- ranking local e ranking global via **Firebase**;
- funcionamento **offline** após a primeira carga do aplicativo;
- instalação como app em celulares e computadores compatíveis.

## Versão incluída

Este pacote inclui a versão **GataVelhaAI 1.6**.

## Estrutura principal

- `index.html` → arquivo principal para publicar no GitHub Pages;
- `GataVelhaAI1.6.html` → cópia versionada do app;
- `manifest.webmanifest` → manifesto do PWA;
- `sw.js` → service worker para cache/offline;
- `icons/` → ícones para favicon, instalação e atalhos;
- `README.md` → este arquivo.

## Firebase

O HTML já está configurado com o projeto Firebase informado:

- **projectId:** `gatavelhaai`
- **authDomain:** `gatavelhaai.firebaseapp.com`
- **storageBucket:** `gatavelhaai.firebasestorage.app`

### Recursos ligados ao Firebase

- autenticação anônima;
- autenticação por popup (Google), se habilitada no console;
- consulta e envio opcional de pontuações para ranking global no Firestore.

## Antes de publicar

No console do Firebase, confirme que os seguintes recursos estão ativados:

1. **Authentication**
   - habilitar **Anônimo**;
   - se desejar, habilitar também **Google**.

2. **Cloud Firestore**
   - criar o banco no modo desejado;
   - ajustar as regras de segurança antes de abrir o ranking ao público.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste pacote para a raiz do repositório.
3. Nas configurações do repositório, abra **Pages**.
4. Em **Build and deployment**, escolha:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (ou a branch usada) / `/root`
5. Salve.
6. Aguarde o GitHub publicar a página.

## Instalação como aplicativo

Depois de publicado com HTTPS (como no GitHub Pages), o navegador compatível permitirá instalar o app.

- Android/Chrome: opção **Instalar app** ou **Adicionar à tela inicial**;
- Desktop/Chrome/Edge: ícone de instalação na barra do navegador;
- iPhone/iPad/Safari: **Compartilhar → Adicionar à Tela de Início**.

## Observações

- O jogo continua funcionando localmente mesmo sem internet.
- O ranking global depende da conexão com a internet e do Firebase ativo.
- O service worker faz cache do shell principal e dos ícones para uso offline.

---

Desenvolvido por **Rofran Pires** · 2026
