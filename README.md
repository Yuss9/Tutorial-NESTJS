# NestJS

Link of the tutorial : [https://www.youtube.com/watch?v=F_oOtaxb0L8](https://www.youtube.com/watch?v=F_oOtaxb0L8)

## Notes :

---

### What’s Nest.js ?

- A Nodes.js Framework
- Builds up on Express.js* (* flexible Adapters)
- Embracers TypeScript, Dependency Injection & modularity (”Angular for BackEnd”)
- Can bu used to build MVC apps or REST or GraphQL APIs
- Enforces clean code and clear project structure by giving you a series of building blocks
- Makes building complex applications easy

## Commande à effectuer :

```bash
npm run start:dev
```

## Les différentes requêtes a effectué pour manipuler le back-end

> Pour l’instant aucune BDD est mise en place, on manipule un tableau d’objet “Product”
> 

Permet d’ajouter un produit et renvoie l’ID du produit sous format JSON, requête en POST

localhost:3000/products

<aside>
❗ Dans le body, on doit ajouter ceci avant d’envoyer la requête

</aside>

```json
{
  "title" : "Product to delete", 
  "description" :  "First Product",
  "price" : 29.99
}
```

---

Permet de récupérer TOUS les produits en JSON, requête GET

localhost:3000/products/

---

Permet de récupérer UN seul produit, on doit donner l’id du produit, requête GET

localhost:3000/products/<ID PRODUT HERE>

---

Permet d’update un produit, on doit donner l’ID du produit, requête en PATCH

localhost:3000/products/<ID PRODUT HERE>

---

Permet de supprimer un produit, on doit donner l’ID du produit, requête en DELETE

localhost:3000/products/<ID PRODUT HERE>

---


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
