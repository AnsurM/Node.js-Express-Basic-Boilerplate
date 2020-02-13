/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

const bcrypt = require("bcrypt");

/**
 * Validates that the provided password matches the hashed counterpart
 *
 * @since 1.0.0
 * @category validation
 * @param {String} password The password provided by the user
 * @param {String} hashedPassword The password stored in your db
 * @returns {Boolean} the
 */

const validatePassword = async (password, hashedPassword) => {
  let validateResult = await bcrypt.compareSync(password, hashedPassword);
  return await validateResult;
};
module.exports = validatePassword;
