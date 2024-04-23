# Projeto: Consumindo uma API pública

> 1. Baixe este arquivo e edite o texto em formato Markdown conforme as instruções a seguir.
> 2. Substitua todos os trechos de texto iniciados com "Substitua" por informações do seu projeto, conforme solicitado em cada trecho.
> 3. Substitua a imagem por um screenshot do projeto (arquivo pode ser armazenado no repositório ou em URL externa). GIFs animados também são permitidos!
> 4. Remova todas as instruções de entrega.
> 5. Double-check: Certifique-se de que seu README.md não contenha instruções de entrega!
> 6. Entregue este README.md dentro da pasta raiz do repositório de entrega.
> Opcional: é permitido alterar a formatação do README, desde que sejam mantidas todas as informações solicitadas (tudo bem adicionar mais informações)

![Substitua a imagem ao lado por um screenshot do seu projeto](https://img001.prntscr.com/file/img001/lcf6VqDwTuSUsRDRj04yOg.png "Screenshot do projeto")

Acesso: Substitua este texto pela URL de deploy do projeto

### Desenvolvedores

- Renan Bick - Sistemas de Informação
- Thales Lagemann - Sistemas de Informação

### Nosso produto

Quiz de Programação
Quiz com perguntas que tocam em várias áreas da programação e desenvolvimento de software, como Linguagens, Frameworks, Bibliotecas, Conceitos, Paradigmas, Ferramentas, etc.

#### API escolhida

~~Iremos utilizar o web-aplicativo Notion para criar nossas tabelas e fazer chamadas de API.~~
Consumimos a API do QuizAPI para nossas perguntas.

[~~Notion~~](https://www.notion.so/pt-br)
[QuizAPI](https://quizapi.io/)

### Desenvolvimento

Começamos criando instalando React no repositório do projeto e criando um design básico no Figma.
Tentamos adicionar TailWind para estilização, porém depois de muitos problemas para fazer funcionar acabamos desistindo e utilizando uma biblioteca de estilização chamada Styled Components.
Criamos a base do aplicativo com React, como nenhum dos dois participantes do grupo era experiente com o framework, utilizamos a ajuda do ChatGPT para construir a estrutura base do projeto.
Com alguns componentes já feitos, integramos tudo em uma única tela de forma a ter um fluxo de execução funcional.
Após isso, tentamos integrar nosso fluxo já existente com a API do Notion, porém novamente tivemos muitos problemas e decidimos partir para uma solução mais simples.
Adicionamos então uma chamada para a API do quizapi.io para buscar as perguntas que iriamos utilizar no nosso quiz.
Então, após um bom tempo corrigindo problemas no programa, chegamos a um fluxo de exexução funcional e bem decente.

#### Tecnologias

- ~~Notion (API e Backend)~~
- [QuizAPI](https://quizapi.io/) (API e Backend)
- [React](https://pt-br.legacy.reactjs.org/) (Frontend)
- ~~TailWind (Styling)~~
- [Styled Components](https://styled-components.com/) ("styled-components": "^6.1.8",) (Styling)
- [ChatGPT](https://chat.openai.com/)

#### Ambiente de desenvolvimento

- [VS Code](https://code.visualstudio.com/) (IDE)
- [Google Chrome](https://www.google.com/intl/pt-BR/chrome/)
- [Brave](https://brave.com/pt-br/)

#### Referências e créditos

Substitua este trecho por uma lista bem detalhada de todo material consultado para ajudar no projeto, por exemplo:  URL de templates usados, URL de icon kits usados, créditos para colegas que colaboraram, geradores de código (incluindo alguns prompts usados para o ChatGPT, se for o caso)
- [ChatGPT](https://chat.openai.com/) foi bastante usado para rearranjar elementos na tela e para estilização, então temos muitos prompts do tipo: "put it into a floating container and make the background dark", "make the container brighter", "centralize the page title and put the score to the very right of the appbar, also put the question underneath the question number, on a different line", vários prompts desse tipo.
- [StackOverflow](https://stackoverflow.com/) foi muito usado também, em páginas como [How to work with styled components in my react app?](https://stackoverflow.com/questions/42374080/how-to-work-with-styled-components-in-my-react-app), (Switch' is not exported from 'react-router-dom')[https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom]
---
Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2024a) em 2024a