'use client';

import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

export interface TocItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-8 shadow-sm">
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base sm:text-lg">
          <List className="w-5 h-5 text-blue-600" />
          <span>Tabla de Contenidos</span>
        </div>
        <button
          type="button"
          className="p-1 rounded-lg hover:bg-slate-200 text-slate-500 transition"
          aria-label={isOpen ? 'Ocultar tabla de contenidos' : 'Mostrar tabla de contenidos'}
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="mt-4 pt-4 border-t border-slate-200">
          <ol className="space-y-2.5 text-sm">
            {items.map((item, idx) => (
              <li key={item.id || idx} className="flex items-start gap-2.5">
                <span className="font-bold text-blue-600 shrink-0 text-xs mt-0.5">
                  {idx + 1}.
                </span>
                <a
                  href={`#${item.id}`}
                  className="text-slate-700 hover:text-blue-600 font-medium leading-snug transition hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
