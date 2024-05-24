import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Email from '@/email/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, email } = await request.json();

    await resend.emails.send({
      from: 'evan.gordon7@mail.dcu.ie',
      to: email,
      subject: 'Welcome!',
      react: Email({ firstName }),
    });

    return NextResponse.json({ status: 'Ok' });
  } catch (error) {
    return NextResponse.json({ status: 'Error' });
  }
}
