const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

//const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user:  'email',
      clientId: '',
      clientSecret: '',
      refreshToken: '',
      accessToken: '',
      expiires: 1484314697598
    }
  });



transport.sendMail({
  from: '<email>',
  to: 'email',
  subject: "hello",
  text: 'Hello world',
  html: "<b>Hello world?</b>"
});

  module.exports = transport;