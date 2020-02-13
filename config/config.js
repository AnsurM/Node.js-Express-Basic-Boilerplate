/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

/* Make all variables from our .env file available in our process */
require("dotenv").config();
const mysql2 = require("mysql2");

module.exports = {
  development: {
    dialect: "mysql",
    dialectModule: mysql2,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
      timestamps: false
    },
    logging: false
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    logging: false,
    dialect: "mysql",
    use_env_variable: "DATABASE_URL"
  },
  mailtrapConfig: {
    host: process.env.MAILTRAPHOST,
    port: process.env.MAILTRAPPORT,
    auth: {
      user: process.env.MAILTRAPUSER,
      pass: process.env.MAILTRAPPASS
    },
    from: process.env.MAILTRAPSENDER
  },
  gmailConfig: {
    host: process.env.Gmail_SMTP_server_address,
    port: process.env.Gmail_SMTP_port_TLS,
    auth: {
      user: process.env.Gmail_SMTP_username,
      pass: process.env.Gmail_SMTP_password
    },
    from: process.env.MAIL_SENDER
  }
};
