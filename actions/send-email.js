import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  //configure API key
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
      from: "FinWelth <onboarding@resend.dev>",
      to,
      subject,
      react,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
