import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Send notification email to business
    await resend.emails.send({
      from: "AutoLead <noreply@autolead.no>",
      to: process.env.BUSINESS_EMAIL!,
      subject: "Ny demo forespørsel - Autolead",
      html: `
        <h2>Ny demo forespørsel</h2>
        <p>Noen har booket en demo via nettsiden.</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Tidspunkt:</strong> ${new Date().toLocaleString("no-NO", { timeZone: "Europe/Oslo" })}</p>
      `,
    })

    // Optionally send confirmation to the user
    await resend.emails.send({
      from: "Autolead <noreply@autolead.no>",
      to: email,
      subject: "Takk for din interesse - Autolead",
      html: `
        <h2>Takk for din interesse!</h2>
        <p>Vi har mottatt din forespørsel om en demo av AutoLead.</p>
        <p>En av våre rådgivere vil kontakte deg innen kort tid.</p>
        <br>
        <p>Med vennlig hilsen,</p>
        <p><strong>AutoLead-teamet</strong></p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
