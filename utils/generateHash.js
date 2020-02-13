const bcrypt = require("bcrypt");
const saltRounds =
  (process.env.SALT_ROUNDS && Number(process.env.SALT_ROUNDS)) || 10;
const generateHash = async plainPassword => {
  return await bcrypt.hashSync(plainPassword, saltRounds);
};

module.exports = generateHash;
