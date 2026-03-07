import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (per IP, 5 requests per minute)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Aguarde um momento." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { tipo, avaliacao, localizacao, mensagem, nome, email, telefone } = body;

    if (!tipo || !nome || !email || !telefone) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    const safe = {
      tipo: escapeHtml(String(tipo)),
      avaliacao: escapeHtml(String(avaliacao || "—")),
      localizacao: escapeHtml(String(localizacao || "—")),
      mensagem: escapeHtml(String(mensagem || "—")),
      nome: escapeHtml(String(nome)),
      email: escapeHtml(String(email)),
      telefone: escapeHtml(String(telefone)),
    };

    await resend.emails.send({
      from: "Later Nobilis <contato@laternobilis.com>",
      to: "imobiliaria@laternobilis.com",
      subject: `Novo contato: ${safe.nome} — ${safe.tipo}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <div style="border-bottom: 2px solid #B45309; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; margin: 0; color: #B45309;">Novo Lead — Later Nobilis</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px;">Interesse</td>
              <td style="padding: 8px 0; font-weight: 600;">${safe.tipo}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Avaliação feita?</td>
              <td style="padding: 8px 0;">${safe.avaliacao}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Localização</td>
              <td style="padding: 8px 0;">${safe.localizacao}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Mensagem</td>
              <td style="padding: 8px 0;">${safe.mensagem}</td>
            </tr>
            <tr style="border-top: 1px solid #eee;">
              <td style="padding: 12px 0 8px; color: #888;">Nome</td>
              <td style="padding: 12px 0 8px; font-weight: 600;">${safe.nome}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">E-mail</td>
              <td style="padding: 8px 0;"><a href="mailto:${safe.email}" style="color: #B45309;">${safe.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Telefone</td>
              <td style="padding: 8px 0;"><a href="tel:${safe.telefone}" style="color: #B45309;">${safe.telefone}</a></td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 11px; color: #aaa;">
            Enviado pelo formulário do site laternobilis.com
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email de contato:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
