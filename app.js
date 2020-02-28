//npm install --save nodemailer
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "",
        pass: ""
    },
    tls: { rejectUnauthorized: false }
});

var mailOptions2 = {
    from: "@goldbit.com.br",
    to: "@gmail.com",
    subject: "Abertura de chamado",
    text: "Dados do cliente"
};
transporter.sendMail(mailOptions2, function(error, info) {
    if (error)
        console.log("Erro ao enviar");
    else
        console.log("enviado com sucesso")
}); //fim transporter