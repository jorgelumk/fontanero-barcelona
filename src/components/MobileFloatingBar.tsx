'use client';

import React from 'react';
import { Phone, MessageSquare, ClipboardList } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

export function MobileFloatingBar() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('formulario-contacto');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/#formulario-contacto';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 p-2 shadow-2xl block sm:hidden">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
        {/* Button 1: Llamar */}
        <a
          href={`tel:${SITE_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-red-600 text-white active:bg-red-700 shadow"
        >
          <Phone className="w-5 h-5 mb-0.5 animate-pulse" />
          <span>Llamar</span>
        </a>

        {/* Button 2: WhatsApp */}
        <a
          href={SITE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-600 text-white active:bg-emerald-700 shadow"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Button 3: Presupuesto */}
        <button
          onClick={scrollToForm}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-blue-600 text-white active:bg-blue-700 shadow"
        >
          <ClipboardList className="w-5 h-5 mb-0.5" />
          <span>Presupuesto</span>
        </button>
      </div>
    </div>
  );
}
