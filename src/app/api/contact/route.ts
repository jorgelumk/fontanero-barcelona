import { NextResponse } from 'next/server';
import { sendLeadEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, servicio, mensaje } = body;

    if (!nombre || !telefono || !servicio) {
      return NextResponse.json(
        { error: 'Por favor, rellena los campos obligatorios.' },
        { status: 400 }
      );
    }

    const result = await sendLeadEmail({
      nombre,
      telefono,
      servicio,
      mensaje,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud recibida correctamente.',
        method: result.method,
        note: result.error,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
