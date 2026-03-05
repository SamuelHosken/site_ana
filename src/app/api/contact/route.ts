import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tipo, avaliacao, localizacao, mensagem, nome, email, telefone } = body;

    if (!tipo || !nome || !email || !telefone) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Later Nobilis <contato@laternobilis.com>",
      to: "imobiliaria@laternobilis.com",
      subject: `Novo contato: ${nome} — ${tipo}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <div style="border-bottom: 2px solid #B45309; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; margin: 0; color: #B45309;">Novo Lead — Later Nobilis</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px;">Interesse</td>
              <td style="padding: 8px 0; font-weight: 600;">${tipo}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Avaliação feita?</td>
              <td style="padding: 8px 0;">${avaliacao || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Localização</td>
              <td style="padding: 8px 0;">${localizacao || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Mensagem</td>
              <td style="padding: 8px 0;">${mensagem || "—"}</td>
            </tr>
            <tr style="border-top: 1px solid #eee;">
              <td style="padding: 12px 0 8px; color: #888;">Nome</td>
              <td style="padding: 12px 0 8px; font-weight: 600;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">E-mail</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #B45309;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Telefone</td>
              <td style="padding: 8px 0;"><a href="tel:${telefone}" style="color: #B45309;">${telefone}</a></td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 11px; color: #aaa;">
            Enviado pelo formulário do site laternobilis.com
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
