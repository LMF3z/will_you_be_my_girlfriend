'use server';

import { Resend } from 'resend';

export const handleSendEmail = async (name: string) => {
  try {
    const resend = new Resend(process.env.RESEND_KEY);
    const res = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['moisesfreites3@gmail.com'],
      subject: `name: ${name} from wylgowm`,
      react: `<p>${name} dijo que si!</p>`,
    });

    console.log('res email', res);

    return true;
  } catch (error) {
    console.log('error to send email', error);
    return false;
  }
};
