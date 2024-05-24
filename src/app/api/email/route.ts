import {Resend} from 'resend'
import { NextResponse } from 'next/server';

import Email from '@/email/welcome';
const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(){
  

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'evan.gordon7@mail.dcu.ie',
  subject: 'hello world',
  react: Email()
});

return NextResponse.json({
    status: 'Ok'
})


}