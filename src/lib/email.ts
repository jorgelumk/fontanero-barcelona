import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

interface LeadData {
  nombre: string;
  telefono: string;
  servicio: string;
  mensaje?: string;
  fecha?: string;
}

const DESTINATION_EMAIL = process.env.RESEND_TO_EMAIL || 'jorge@agenciaiasolutions.com';

export async function sendLeadEmail(lead: LeadData): Promise<{ success: boolean; method: string; error?: string }> {
  const fechaStr = lead.fecha || new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

  // HTML Email Body
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-radius: 12px; background-color: #ffffff;">
      <div style="background-color: #0f172a; color: #ffffff; padding: 16px 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0; font-size: 20px;">🚨 NUEVO LEAD DE FONTANERÍA (Barcelona 24h)</h2>
      </div>
      <div style="padding: 20px; color: #334155; line-height: 1.6;">
        <p style="font-size: 16px; margin-top: 0;">Has recibido una nueva solicitud de asistencia o presupuesto:</p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 140px;">Nombre:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${lead.nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Teléfono:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-size: 18px; font-weight: bold; color: #dc2626;">
              <a href="tel:${lead.telefono}" style="color: #dc2626; text-decoration: none;">${lead.telefono}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Servicio Solicatado:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #2563eb;">${lead.servicio}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Detalles / Mensaje:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${lead.mensaje || 'Sin detalles adicionales'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Fecha y Hora:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${fechaStr}</td>
          </tr>
        </table>
        <div style="background-color: #f8fafc; padding: 14px; border-radius: 6px; font-size: 13px; color: #64748b;">
          Este mensaje ha sido generado automáticamente por el portal web <strong>fontanerosbarcelona24h.com</strong>.
        </div>
      </div>
    </div>
  `;

  const textContent = `NUEVO LEAD DE FONTANERÍA BARCELONA 24H\nNombre: ${lead.nombre}\nTeléfono: ${lead.telefono}\nServicio: ${lead.servicio}\nMensaje: ${lead.mensaje || 'N/A'}\nFecha: ${fechaStr}`;

  // Always save lead to a local file (leads_saved.json) as fail-safe persistence
  try {
    const leadsFilePath = path.join(process.cwd(), 'leads_saved.json');
    let existingLeads: LeadData[] = [];
    if (fs.existsSync(leadsFilePath)) {
      const raw = fs.readFileSync(leadsFilePath, 'utf-8');
      existingLeads = JSON.parse(raw);
    }
    existingLeads.push({ ...lead, fecha: fechaStr });
    fs.writeFileSync(leadsFilePath, JSON.stringify(existingLeads, null, 2));
    console.log(`[LEAD PERSISTED] Saved to leads_saved.json`);
  } catch (err) {
    console.error('Error saving lead locally:', err);
  }

  // 1. Try Resend if RESEND_API_KEY is available
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.RESEND_FROM_EMAIL || 'Fontaneros Barcelona 24h <onboarding@resend.dev>';
      
      await resend.emails.send({
        from: fromEmail,
        to: [DESTINATION_EMAIL],
        subject: `🚨 NUEVO LEAD: ${lead.servicio} - ${lead.nombre} (${lead.telefono})`,
        html: htmlContent,
        text: textContent,
      });

      console.log(`[EMAIL SUCCESS] Sent via Resend to ${DESTINATION_EMAIL}`);
      return { success: true, method: 'Resend' };
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error('[EMAIL RESEND ERROR]', errMsg);
    }
  }

  // 2. Try Nodemailer SMTP if SMTP_HOST is available
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"Fontaneros Barcelona 24h" <${process.env.SMTP_USER}>`,
        to: DESTINATION_EMAIL,
        subject: `🚨 NUEVO LEAD: ${lead.servicio} - ${lead.nombre} (${lead.telefono})`,
        html: htmlContent,
        text: textContent,
      });

      console.log(`[EMAIL SUCCESS] Sent via SMTP to ${DESTINATION_EMAIL}`);
      return { success: true, method: 'SMTP' };
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error('[EMAIL SMTP ERROR]', errMsg);
    }
  }

  // 3. Fallback: Logged & saved locally
  console.log(`[EMAIL NOTICE] No RESEND_API_KEY or SMTP configured in .env.local. Lead saved locally to leads_saved.json and logged.`);
  return { 
    success: true, 
    method: 'LocalPersistence',
    error: 'Falta configurar RESEND_API_KEY o SMTP en .env.local para el envío por email real'
  };
}
