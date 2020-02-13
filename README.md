# [Express-Boilerplate](https://github.com/AnsurM/express-jwt-mysql-mvc-boilerplate)

Express / [Nodejs Starter] with [JWT authentication](https://jwt.io/introduction/), [MySQL](https://www.mysql.com/) database, [Sequelize](http://docs.sequelizejs.com/) ORM, [Nodemailer](https://nodemailer.com/about/) mailing module unit tests and basic tooling (to be implemented).

<br />

![Open-Source Nodejs Starter - Product cover image.](https://github.com/app-generator/static/blob/master/products/boilerplate-code-nodejs-starter-cover.jpg?raw=true)

<br />

## Requirements

- [Node.js](https://nodejs.org/) >= 6.x

<br />

## Authentication

Authentication is based on [json web tokens](https://jwt.io). `passport-jwt` strategy is used to handle the email / password authentication.
After a successful login the generated token is sent to the requester.

<br />

## API

### Login: `api/users/login`

```
POST api/users/login
Host: localhost:3000
Content-Type: application/json

{
    "email": "demo@appseed.us",
    "password": "demo"
}
```

### Signup: `/api/users/signup`

```
POST api/users/signup
Host: localhost:3000
Content-Type: application/json

{
    "email": "demo@appseed.us",
    "password": "demo",
    "name": "George",
    "surname": "Clooney"
}
```

<br />

## Setting up for development

- clone repo: `git clone https://github.com/AnsurM/express-jwt-mysql-mvc-boilerplate.git`
- change directory to express-jwt-mysql-mvc-boilerplate:
- create a file named .env which should contain the following default setup:

```
SALT=35kj7waj3k5kja09jeoi21kn0pg13iuhlkn // used in password hashing
JWT_SECRET=secret        // used in JWT signing
SESSION_SECRET=secret    // used for session data
PORT=3000                // the port on which your server will be available on
SERVER_ADDRESS=127.0.0.1 // or 0.0.0.0 for all or other interface address you want to listen
```

- users are saved in file `config/users.js`

<br />

## Scripts

**Install Modules**

```bash
$ npm i
$ npm i nodemon -g
```

<br />

**Run**

```bash
$ npm run start # classic start OR
$ npm run dev # with nodemon live update
```

Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 3000 by default. This can be overwritten by `PORT` constant in `.env` file.

<br />

## Support

For issues and features request, use **Github** or reach out to support at [support page](ansurmehdi@gmail.com) provided by **Syed Ansur Mehdi**

<br />

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

<br />

---

[Express Basic Starter](https://appseed.us/boilerplate-code/nodejs-starter) provided by **Syed Ansur Mehdi** with starter pulled from `Nodejs-starter` by **AppSeed**
