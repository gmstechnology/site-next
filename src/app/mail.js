
import nodemailer from 'nodemailer'

export async function sendMail(data){    
    const { SMTP_PASSWORD, SMTP_EMAIL } = process.env

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        }
    })

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transport.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    })

    await new Promise((resolve, reject) => {

    let mailData = {
                from: SMTP_EMAIL,
                to: ["larissa.c.hirata@gmail.com"],// "henrique.h@gmstechnology.com.br", "erick.h@gmstechnology.com.br"
                subject: `${data.name} mostrou interesse no equipamento ${data.eqName}`,
                html: 
                    `<h4> Mandar email para ${data.name} - ${data.email} sobre o equipamento: ${data.eqName} </h4>
                        <br />
                    <p> ${data.name} escreveu: ${data.msg}</p>
                    `}
    transport.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    })
    })
}
