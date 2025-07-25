import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "trumpcardworld@gmail.com", // Replace with your email
      subject: `New Contact Form Submission on Different Strokes.`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 400 })
    }

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: "Failed to send message" }, { status: 500 })
  }
}

