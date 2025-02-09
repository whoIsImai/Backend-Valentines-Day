import { Resend } from 'resend';
import 'dotenv/config';
const resend = new Resend(process.env.RESEND_API_KEY);

export const yes = async(req,res)=>{
    const { data, error } = await resend.emails.send({
        from: process.env.FROMEMAIL,
        to: process.env.TOEMAIL,
        subject: 'VALENTINES WEB APP RESPONSE',
        html: '<p>Congrats she said <strong>YES!</strong>!</p>'
      })
      if (error) {
        return res.json({error});
      }
      res.json(data)
}

export const no = async(req,res)=>{
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'eltalk30@gmail.com',
        subject: 'VALENTINES WEB APP RESPONSE',
        html: '<p>My Bad she said <strong>NO!</strong>!</p>'
      })
      if (error) {
        return res.json({error});
      }
      res.json(data)
}
