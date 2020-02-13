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

## Setting up for development

- clone repo: `git clone https://github.com/AnsurM/express-jwt-mysql-mvc-boilerplate.git`
- change directory to express-jwt-mysql-mvc-boilerplate:
- create a file named .env which should contain a default setup as shown in the example environment file `.env.example`:

        SALT=35kj7waj3k5kja09jeoi21kn0pg13iuhlkn
        JWT_SECRET=myjwtsecret
        SESSION_SECRET=secret
        PORT=3000
        SERVER_ADDRESS=127.0.0.1

        DB_USERNAME=root
        DB_PASSWORD=mysql@123
        DB_NAME=test

        SALT_ROUNDS = 10

        MAILTRAP_HOST=smtp.mailtrap.io
        MAILTRAP_PORT=2525,
        MAILTRAP_USER=c18jrei892sd42
        MAILTRAP_PASS=1a83nfj37jmf6c

        Gmail_SMTP_username=johndoe@gmail.com
        Gmail_SMTP_password=jkerjidisajdk
        Gmail_SMTP_server_address=smtp.gmail.com
        Gmail_SMTP_port_TLS=587
        Gmail_SMTP_port_SSL=465
        Gmail_SMTP_TLS_SSL_required=yes

        MAIL_SENDER="John Doe johndoe@gmail.com"

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
