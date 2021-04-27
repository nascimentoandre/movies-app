# Sobre

Este é um aplicativo construído com React Native que permite visualizar uma lista com os filmes mais populares e mais bem avaliados do dia, além de realizar buscas por filmes específicos. Para tanto, foi utilizada a API de filmes [The Movie Database](https://developers.themoviedb.org/3).

# Inicializando

## Pré-requisitos

Eu utilizei o [Expo](https://docs.expo.io/), um framework/plataforma que visa facilitar a construção de aplicativos com React Native. Caso necessário, ele pode ser instalado via npm:

```sh
npm install --global expo-cli
```
## Chave da API

O app requer que um arquivo chamado strings.js contendo a chave da API esteja presente na pasta raíz. O conteúdo desse arquivo deve estar no formato:

```sh
export const KEY = "Sua chave aqui"
```

## Dependências

As dependências do aplicativo podem ser instaladas via npm ou yarn:

```sh
yarn install
```

ou

```sh
npm install
```

## Rodando

O aplicativo pode ser inicializado com o comando:

```sh
expo start
```
