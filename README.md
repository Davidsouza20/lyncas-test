# Backend do Teste da Lyncas

## Como rodar o projeto

Faça um clone do repositório

```sh
$ git clone https://github.com/davidsouza20/lyncas-test.git 
```

Navegue até a pasta backend 

```sh
$ cd lyncas-test/backend
```

Renomeie o arquivo .env_example para .env e informe uma Url de conexão com o banco de dados MongoDb local

```sh
$ cp .env_example .env
```

Insira a URL de conexão com o banco de dados coloque a URL entre aspas.

```sh
MONGODB_CONNECTION_URL="URL_DE_CONEXÃO_DO SEU_BANCO_DE_DADOS_LOCAL"
```

Rode os comandos abaixo para instalar as dependências do projeto e inicia-lo.

```sh
$ npm install
$ npm start
```



# Frontend do Teste da Lyncas

Para iniciar o projeto execute os comandos abaixo

```sh
$ cd lyncas-test/frontend
$ npm install
$ npm start
```


