const nodemailer = require("nodemailer");

const { gmailConfig } = require("./config");

let transport = nodemailer.createTransport(gmailConfig);

const sendEmail = async (to, messageBody, callback) => {
  let message = {
    from: gmailConfig.from,
    to,
    ...messageBody
  };
  await transport.sendMail(message, callback);
};

module.exports = { sendEmail };
