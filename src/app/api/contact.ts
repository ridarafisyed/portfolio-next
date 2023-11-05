import nodemailer from 'nodemailer';

export default async function Email(req:any, res:any){

    const {email, message } = req.body;

    const data = {
        email, message
    }
    const transporter = nodemailer.createTransport({
        host:"stmp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: process.env.USER,
            pass: process.env.PASS,
        }

    })
    // console.log(req.body)
    const mail = await transporter.sendMail({
        from: email,
        to : "ridarafisyed@gmail.com",
        replyTo: email,
        
    })

    return res.status(200).json({message: "success"})
}