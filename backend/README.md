# Backend
npm
```bash
npm install
```
node
```bash
npm init
```
```bash
npm start
```

## Les outils et technologies utilisés :
 - [MongoDB](https://www.mongodb.com/home)
 - [Express](https://expressjs.com/)
 - [Nodejs](https://nodejs.org/en/download/)


## Référence API

#### register 

```http
  POST auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nom` | `string` | **Required**. 
| `prenom` | `string` | **Required**. 
| `email` | `string` | **Required**. 
| `password` | `string` | **Required**. 

```http
  POST auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. 
| `password` | `string` | **Required**. 


```http
  Get admin/getclient
```
### Desactiver un compte 
```http
  POST admin/desactivercomptclient/${id}
```
### Activer un compte 
```http
  POST admin/activercomptclient/${id}
```

### Client Get Transactions
```http
  Get client/getTransactions
```
### Client Create Transactions
```http
 POST client/createTransaction
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `montant` | `Number` | **Required**. 
| `receveur` | `String` | **Required**. 
| `type`   |  `String` | **Required**. 



