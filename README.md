<h1 align="center">Lista de Compras Inteligente</h1>

<p align="center">
  Aplicação web desenvolvida para organizar itens de compra por categoria, controlar quantidades, acompanhar produtos pendentes e comprados, além de manter os dados salvos no navegador com LocalStorage.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-application-logic">Lógica da aplicação</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-layout-and-design-decisions">Layout e decisões de design</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Como executar</a>
</p>

<br>

<img src="./assets/Mockup - Lista de Compras Inteligente.png" alt="Mockup Lista de Compras Inteligente" width="100%">

---

## 🛒 About the project

A **Lista de Compras Inteligente** é uma aplicação web desenvolvida com foco em praticar conceitos fundamentais de **JavaScript puro**, manipulação do DOM, controle de estado, renderização dinâmica e persistência de dados no navegador.

O projeto permite que o usuário cadastre itens de compra informando nome, quantidade e categoria. Além disso, é possível marcar produtos como comprados, excluir itens individualmente, filtrar a lista por categoria e visualizar apenas os itens pendentes.

A proposta do projeto vai além de uma lista simples: a aplicação trabalha com uma estrutura baseada em **array de objetos**, onde cada item possui propriedades próprias, como identificador, nome, quantidade, categoria e status de compra. Dessa forma, a interface é atualizada dinamicamente com base no estado real da aplicação.

Este projeto foi desenvolvido como parte da minha evolução prática em **Front-End**, com o objetivo de fortalecer a lógica de programação, organização de código e construção de interfaces interativas sem o uso de frameworks.

---

## 🧰 Features

- Cadastro de novos itens de compra
- Validação de campos obrigatórios
- Adição de nome, quantidade e categoria para cada produto
- Criação dinâmica de cards com JavaScript
- Marcação de itens como comprados
- Estilização visual diferente para itens comprados
- Exclusão individual de produtos
- Filtro por categoria
- Filtro por status dos itens
- Contagem total de itens cadastrados
- Soma total de unidades
- Contagem de itens comprados
- Contagem de itens pendentes
- Persistência de dados com LocalStorage
- Recuperação automática dos dados ao recarregar a página
- Layout responsivo para desktop, tablet e mobile
- Interface simples, limpa e funcional

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript
- DOM
- LocalStorage
- Media Queries
- Responsividade
- Git e GitHub

---

## 👷 Project structure

A estrutura principal do projeto está organizada em:

- Header
- Cards de resumo
- Formulário de cadastro
- Filtros por categoria
- Filtros por status
- Área de listagem dos itens

Além disso, o projeto conta com os seguintes arquivos principais:

- `index.html`
- `style.css`
- `script.js`
- `assets/` para imagens, ícones e mockups

---

## 🧠 Application logic

A lógica da aplicação foi construída com base no conceito de **estado centralizado**.

Todos os produtos cadastrados são armazenados dentro de um array chamado `products`. Cada produto é representado por um objeto com informações como:

- `id`
- `name`
- `amount`
- `category`
- `purchased`

A tela não é manipulada de forma isolada. Em vez disso, cada ação do usuário altera o array principal, e a interface é renderizada novamente com base nesses dados atualizados.

O fluxo principal da aplicação segue esta lógica:

1. O usuário preenche o formulário com nome, quantidade e categoria.
2. O JavaScript valida os campos.
3. Um novo objeto é criado representando o produto.
4. Esse objeto é adicionado ao array `products`.
5. Os dados são salvos no LocalStorage.
6. A interface é renderizada novamente.
7. Os cards, filtros e totais são atualizados automaticamente.

Essa abordagem reforça conceitos importantes de desenvolvimento front-end, como:

- separação entre dados e interface
- renderização dinâmica
- atualização de estado
- manipulação de arrays
- uso de métodos como `forEach()` e `filter()`
- controle de eventos
- persistência local de dados

---

## 🔎 Filters and state control

O projeto possui filtros por categoria e por status.

As categorias disponíveis são:

- Todas
- Alimentos
- Limpeza
- Higiene

Os status disponíveis são:

- Todos
- Pendentes

A filtragem é feita sem alterar a lista original de produtos. A aplicação cria uma lista temporária apenas para exibição, mantendo o array principal preservado.

Isso permite combinar filtros e renderizar somente os itens correspondentes ao estado atual da interface.

Exemplo:

- Categoria ativa: `Alimentos`
- Status ativo: `Pendentes`

Resultado: a aplicação exibe apenas os itens da categoria **Alimentos** que ainda não foram comprados.

---

## 💾 Data persistence

A aplicação utiliza `LocalStorage` para manter os dados salvos no navegador.

Isso significa que os itens adicionados permanecem disponíveis mesmo após atualizar ou fechar a página.

A persistência acontece em ações como:

- adicionar novo item
- marcar item como comprado
- remover item da lista

Ao carregar a página, o JavaScript verifica se existem dados salvos e restaura automaticamente a lista de compras.

---

## 🎨 Layout and design decisions

O layout foi pensado para ser simples, funcional e fácil de usar, mantendo uma aparência moderna e organizada.

Alguns pontos de destaque no design:

- interface limpa e objetiva
- cards com bordas arredondadas
- separação clara entre resumo, formulário, filtros e lista
- uso de cores diferentes para itens pendentes e comprados
- destaque visual para botões ativos
- adaptação para diferentes tamanhos de tela
- experiência consistente em desktop, tablet e mobile

A responsividade foi construída com Media Queries, permitindo que o projeto se adapte bem em telas menores sem comprometer a usabilidade.

---

## 📱 Responsive layout

O projeto foi desenvolvido para funcionar em diferentes dispositivos.

No desktop, o layout aproveita melhor o espaço horizontal, exibindo formulário e lista lado a lado.

Em tablets e celulares, a estrutura se reorganiza para melhorar a leitura e a interação, mantendo os cards, filtros e formulário acessíveis ao usuário.

---

## 📚 Main learning points

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de JavaScript e Front-End, como:

- manipulação do DOM
- criação dinâmica de elementos HTML
- eventos de clique
- validação de inputs
- uso de arrays e objetos
- atualização de estado
- renderização condicional
- filtros com `filter()`
- iteração com `forEach()`
- persistência com LocalStorage
- responsividade com CSS
- organização de código JavaScript

---

## 🔰 Getting Started

### Prerequisites

Antes de começar, você vai precisar ter instalado:

- Git
- Um navegador de sua preferência
- Visual Studio Code ou outro editor de código

---

### Clone the repository

```bash
git clone https://github.com/seu-usuario/lista-de-compras-inteligente.git