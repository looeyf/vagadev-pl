<h1 align="center">
    Avaliação Front-End PLENO N1
</h1>

<h3 align="center">
    Este repositório contém a solução front-end de um e-commerce proposto como desafio de um processo seletivo realizado pela <a href="https://agencian1.com.br/" target="_blank">Agência N1</a>.
</h3>

<h4 align="center"> 
	 Status: Incompleto
</h4>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#como-funciona">Como funciona</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
</p>

## Sobre

O desafio consiste em replicar o layout da seguinte aplicação [URL](https://www.figma.com/file/fcy8mdkluclGRQ4GqaVObN/Avalia%C3%A7%C3%A3o-Front-end-PLENO?node-id=1202%3A0). A mesma deve atender a todos os detalhes, deve ser responsivo, buscar dados via requisição e utilizar contextos para poder utilizar estados globais entre os componentes da aplicação.

Para me organizar, criei um [quadro](https://trello.com/b/HkyGZk2W/template-kanban) no trello e utilizei um modelo de kanban para separar as tarefas. Caso queira visualizar o que foi feito, mantive o quadro público, basta clicar no link disponibilizado anteriormente nesta frase.

---

## Como funciona

O projeto foi desenvolvido em React, utilizando Next.js para realizar a renderização no server side e também SASS para estilização dos componentes.

### Pré-requisitos

Antes de começar, você deve conter as seguintes ferramentas instalados em sua máquina:
[Git](https://git-scm.com/downloads), ultima versão estável do [Node JS](https://nodejs.org/pt-br/download/) (17.17.0 até a presente data).

Como o projeto foi desenvolvido em next e não foi buildado a versão de produção para rodar o projeto com "npm start" é necessário utilizar o [Yarn](https://yarnpkg.com/getting-started/install) no lugar do Node para gerenciar seus pacotes e rodar comandos citados neste readme via shell.

Também é recomendado conter um editor de texto para trabalhar com os códigos, como o [VSCode](https://code.visualstudio.com/)

#### Com tudo instalado, basta realizar os seguintes passos e a aplicação deverá rodar localmente

```bash

# instalar os pacotes React
$ npm install -g create-react-app


# Clonar este repositório
$ git clone https://github.com/looeyf/vagadev-pl.git

# Navegar até a pasta do projeto n1rush
# Instalar as dependencias do projeto
$ yarn install

# Abrir dois prompts de comando e rodar os seguintes códigos, um em cada janela (manter as janelas abertas enquanto utiliza o projeto)
$ yarn dev
$ yarn server

```

Após iniciar o servidor e a aplicação React, você conseguirá visualizar o projeto acessando o seu [localhost](http://localhost:3000/)
OBS.: Os comandos "yarn dev" e "yarn server" devem ser rodados em prompts separados e mantidos abertos até o fim do uso do projeto.

---

## Tech Stack

As seguintes ferramentas foram utilizadas para construir este projeto:

- **[Node.js](https://nodejs.org/pt-br/)**
- **[React.js](https://pt-br.reactjs.org)**
- **[Next.js](https://nextjs.org)**
- **[Axios](https://www.npmjs.com/package/axios)**
- **[Pure React Carousel](https://www.npmjs.com/package/pure-react-carousel)**
- **[React Icons](https://www.npmjs.com/package/react-icons)**
- **[React Responsive](https://www.npmjs.com/package/react-responsive)**
- **[React Select](https://www.npmjs.com/package/react-select)**
- **[SASS](https://www.npmjs.com/package/sass)**
