import express from 'express';
import nodemailer from 'nodemailer';
import { config } from "dotenv";

config();

const routerMail = express.Router();

routerMail.post('/inviaemail', async (req, res) => {
  const { email, cellulare, nome, cognome, data, ora, gusti, peso, scritta, altro } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
  });

    const mailOptionsToSelf = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'Prenotazione Torta',
      text: `
        Email: ${email}
        Cellulare: ${cellulare}
        Nome: ${nome}
        Cognome: ${cognome}
        Data: ${data} - ${ora}
        Gusti: ${gusti}
        Peso: ${peso}
        Scritta: ${scritta}
        Altro: ${altro}
      `
    };

    await transporter.sendMail(mailOptionsToSelf);
    res.status(200).send('Prenotazione inviata con successo!');
  } catch (error) {
    console.error('Errore durante la prenotazione:', error);
    res.status(500).send('Errore durante la prenotazione!');
  }
});

export default routerMail;