'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, ShieldCheck, Clock, ChevronDown, Wrench, ArrowRight } from 'lucide-react';
import { SITE_INFO, SERVICES_LIST } from '@/data/content';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-lg border-b border-slate-800">
      {/* Top Notification & Trust Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Fontanería y Urgencias en Barcelona & AMB</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Presupuesto gratis sin compromiso · Garantía por escrito</span>
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium text-slate-200">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="hover:text-white transition flex items-center gap-1.5 font-bold text-red-400 hover:text-red-300"
            >
              <Phone className="w-3 h-3 animate-pulse text-red-500" />
              <span>Llamada Directa: {SITE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 gap-4">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex flex-col shrink-0 group">
            <span className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5">
              <span className="text-blue-500 font-extrabold group-hover:text-blue-400 transition">FONTANEROS</span>
              <span>BARCELONA</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-blue-600/30 text-blue-400 font-bold border border-blue-500/30">24h</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">
              {SITE_INFO.teamSize} · Cobertura AMB
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-slate-200 hover:text-blue-400 transition-colors">
              Inicio
            </Link>

            {/* SERVICES DROPDOWN (DESKTOP) */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1.5 py-2 text-slate-200 hover:text-blue-400 transition-colors font-semibold focus:outline-none cursor-pointer"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Servicios de Fontanería</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {/* Floating Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 pb-3 mb-1 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" /> Catálogo de Servicios en Barcelona y AMB
                    </span>
                    <span className="text-[11px] text-slate-400">12 Servicios Disponibles</span>
                  </div>

                  {SERVICES_LIST.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700/60 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover/item:text-blue-400 transition flex items-center gap-1">
                          <span>{service.title}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-400" />
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                          {service.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-slate-200 hover:text-blue-400 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Action Buttons (Desktop & Laptop) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl text-emerald-400 bg-emerald-950/70 border border-emerald-700/60 hover:bg-emerald-900/80 transition shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs xl:text-sm font-black rounded-xl text-white bg-red-600 hover:bg-red-700 transition shadow-md shadow-red-600/30 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0 animate-pulse" />
              <span>{SITE_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800"
          >
            Inicio
          </Link>

          {/* Mobile Accordion Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-md"
            >
              <span className="font-bold text-blue-400">Servicios de Fontanería ({SERVICES_LIST.length})</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-blue-400' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pr-2 pt-1 pb-2 space-y-1 bg-slate-950/60 rounded-xl my-1 border border-slate-800">
                {SERVICES_LIST.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition flex items-center gap-2"
                  >
                    <Wrench className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Blog
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-white bg-red-600 text-center shadow"
            >
              <Phone className="w-5 h-5" /> Llamar al {SITE_INFO.phoneDisplay}
            </a>
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700 text-center"
            >
              <MessageSquare className="w-5 h-5" /> Enviar mensaje por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
