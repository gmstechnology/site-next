
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
    try{
        const testResult = await transport.verify()
    }catch(err){
        console.log(err)
        return
    }
    try{
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to: ["larissa.c.hirata@gmail.com", "henrique.h@gmstechnology.com.br", "erick.h@gmstechnology.com.br"],
            subject: `${data.name} mostrou interesse no equipamento ${data.eqName}`,
            html:
                `<h4> Mandar email para ${data.name} - ${data.email} sobre o equipamento: ${data.eqName} </h4>
                    <br />
                 <p> ${data.name} escreveu: ${data.msg}</p>
                `

        })
        return true
    }catch(err){
        console.log(err)
    }

}