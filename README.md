![licence](https://img.shields.io/github/license/JessPergentino/str-f7r?style=for-the-badge) ![version](https://img.shields.io/github/package-json/v/jesspergentino/str-f7r?style=for-the-badge)![build](https://img.shields.io/github/workflow/status/jesspergentino/str-f7r/str-f7r-workflow)

# str-f7r

Um Formatador de Strings em JavaScript

## 📁Estrutura de Diretórios do Projeto

Este projeto está organizado da seguinte maneira:

```
src
│   index.js        # Classe princial da aplicação
└───case            # Features da aplicação
|___count
|___format
|___util            # Funções utilitarias da aplicação
test                # Testes das funções da aplicação
```

[Referência - Como organizar e estruturar projetos com node.js](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)

## 🛠️ Como usar

Para instalar a biblioteca com npm execute o comando abaixo:

    npm install str-f7r

### CommonJS modules

Depois importe o modulo na sua aplicação

    var str = require('str-f7r');
    str.camelCase(' Hello World ');      // => 'helloWorld'

### ES2015 modules

A biblioteca também é compativel com o modulos ES2015

    import str from 'str-f7r';
    str.camelCase(' Hello World ');      // => 'helloWorld'

## ✅Tecnologias utilizadas

- Node.js
- Typescript
- ESLint
- Prettier

## 📝Licença

O projeto str-f7r é licenciado pelo MIT.
