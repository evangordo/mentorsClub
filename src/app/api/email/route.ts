// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';
// import Email from '@/email/welcome';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request, formData: FormData) {
//   try {
//     const name = formData.get("firstName") as string
//     const email = formData.get("email") as string

//     await resend.emails.send({
//       from: 'evan.gordon7@mail.dcu.ie',
//       to: email,
//       subject: 'Welcome!',
//       react: Email({ name }),
//     });

//     return NextResponse.json({ status: 'Ok' });
//   } catch (error) {
//     return NextResponse.json({ status: 'Error' });
//   }
// }