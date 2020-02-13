const { sendEmail } = require("../../config/mailer");
const handlebars = require("handlebars");
const fs = require("fs");
const welcomeHtml = handlebars.compile(
  "../../resources/views/welcome_mail.html"
);
// let welcomeMail;
// fs.readFileSync(require(), "utf8", (err, res) => {
//   if (err) return err;

//   welcomeMail = res;
// });
console.log(welcomeHtml);
let messageBody = {
  subject: "Hey! Design Your Model S | Tesla",
  text: "Have the most fun you can in a car. Get your Tesla today!",
  // html:
  //   "<h1>Hello! Welcome to Tesla Store!</h1> <br /> <p>Get your new tesla right now in a matter of minutes!</p>",
  // html: handlebars.compile(welcomeMail),
  html: welcomeHtml,
  attachments: [
    {
      // Use a URL as an attachment
      filename: "your-tesla.png",
      path:
        "https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048"
    }
  ]
};

const sendMail = () =>
  sendEmail("ansurmehdi@gmail.com", messageBody, (err, result) => {
    if (err) console.log("Error while sending email!");
    if (result) {
      console.log(
        `Demo email sent successfully 
         from ${result.envelope.from}, 
         to: ${result.envelope.to}.`
      );
    }
  });

module.exports = { sendMail };
