# elvenworks-challenge

### Sobre o projeto

Desafio do link (https://github.com/elvenworks/challenges).
De acordo com a documentação, entendi que era necessário ser feito um CRUD de listagem de recursos, em um modelo cliente-servidor, em que todas as informaçoes fossem armazenadas/manipuladas a partir de um banco de dados de minha escolha.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git],[Node.js],[npm],[postgres]. 

### Clonando repositório
```bash
# Crie uma pasta para clonar o repositório

# Dentro da pasta criada, clone este repositório
$ git clone git@github.com:caiobarroso/elvenworks-challenge.git
```

### 🎲 Rodando o Back End (servidor)

```bash

# Acesse a pasta do projeto no terminal/cmd

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação 
$ nodemon

# O servidor inciará na porta:8001 - acesse <http://localhost:8001>
```
### 🎲 Rodando o Front-End (cliente)

```bash
# Acesse a pasta do projeto no terminal/cmd

# Vá para a pasta client
$ cd client

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start
```
### 🎲 Configurando banco de dados 

```bash
# Antes de tudo, dentro da pasta server, no arquivo db.js modifique o campo 'password' 
para a sua senha configurada inicialmente no banco.

# Acesse o script de criaçao do banco em database.sql.

# Copie o script.

# Execute o script no CMD do banco.

# Com o Banco de dados criado, e todas as operações feitas acima, o projeto está pronto para ser compilado.

```
