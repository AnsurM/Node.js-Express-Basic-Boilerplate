/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

// const uuid = require("uuid/v4");
("use strict");
module.exports = (sequelize, DataTypes) => {
  let Todo = sequelize.define(
    "Todo",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      detail: DataTypes.STRING
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["id"]
        }
      ]
    }
  );

  return Todo;
};
