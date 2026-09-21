'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MapPin } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Jordi M.',
    location: 'Eixample Esquerra, Barcelona',
    service: 'Detección de Fuga 24h',
    rating: 5,
    date: 'Hace 3 días',
    comment: 'Tenía una fuga de agua oculta que mojaba al vecino a las 11 de la noche. En 25 minutos estaba el fontanero en casa con equipo termográfico. Localizó el punto exacto sin romper de más. Trato impecable.',
  },
  {
    id: '2',
    name: 'Carmen R.',
    location: 'Barri de Gràcia, Barcelona',
    service: 'Cambio de Bañera por Ducha',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Cambiamos la bañera antigua por plato de ducha antideslizante para mi madre mayor. Empezaron a las 8:30h y por la tarde ya estaba terminado y limpio. Con garantía firmada. Muy profesionales.',
  },
  {
    id: '3',
    name: 'Marc S.',
    location: 'Sarrià - Sant Gervasi, Barcelona',
    service: 'Reparación de Caldera de Gas',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'La caldera se bloqueó en pleno invierno. El técnico certificado vino el sábado por la mañana con la pieza Vaillant original y la dejó funcionando. Se nota que son instaladores de gas autorizados.',
  },
  {
    id: '4',
    name: 'Elena V.',
    location: "L'Hospitalet de Llobregat",
    service: 'Desatasco Urgente de Fregadero',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Se atascó la tubería principal de la cocina. Nos dieron presupuesto cerrado antes de venir y en media hora solución total con la manguera de alta presión. Rapidez, limpieza y transparencia.',
  },
  {
    id: '5',
    name: 'David & Marta',
    location: 'Sant Martí - Poblenou, Barcelona',
    service: 'Reforma de Fontanería Integral',
    rating: 5,
    date: 'Hace 3 semanas',
    comment: 'Renovamos todas las tuberías de plomo por multicapa en nuestra vivienda. Trato cercano, asesoramiento honesto y cumplimiento de plazos. 100% recomendables.',
  },
  {
    id: '6',
    name: 'Antoni B.',
    location: 'Les Corts, Barcelona',
    service: 'Instalación de Caldera Gas',
    rating: 5,
    date: 'Hace 1 mes',
    comment: 'Sustitución rápida de caldera por un modelo de condensación eficiente. Tramitaron el boletín y certificado de gas oficial el mismo día. Gran servicio.',
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of items per slide on PC: 3, on mobile: 1
  const totalItems = TESTIMONIALS_DATA.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Helper to get 3 items starting from currentIndex for PC grid
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS_DATA[(currentIndex + i) % totalItems]);
    }
    return items;
  };

  const visibleThree = getVisibleTestimonials();
  const currentSingle = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Opiniones Reales Verificadas</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Lo que dicen nuestros clientes en Barcelona
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Más de 15 años resolviendo averías de fontanería en todos los barrios de la ciudad y municipios del Área Metropolitana.
          </p>
        </div>

        {/* DESKTOP VIEW (PC): 3 CARDS SIDE BY SIDE */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {visibleThree.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col justify-between relative hover:border-blue-500/50 transition duration-300"
            >
              <Quote className="absolute top-4 right-5 w-10 h-10 text-slate-700/40 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <span>{item.name}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-700/60 px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Verificado
                      </span>
                    </h3>
                  </div>
                  <span className="bg-slate-900/90 text-blue-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-700 shrink-0">
                    {item.service}
                  </span>
                </div>

                <p className="text-slate-200 text-sm italic leading-relaxed mb-4">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-700/60">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {item.location}
                </span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW (< PC): 1 CARD PER SLIDE */}
        <div className="block lg:hidden max-w-xl mx-auto bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl relative">
          <Quote className="absolute top-5 right-6 w-12 h-12 text-slate-700/40 pointer-events-none" />

          <div className="flex flex-col gap-3 border-b border-slate-700 pb-4 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(currentSingle.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2 flex-wrap">
              <span>{currentSingle.name}</span>
              <span className="inline-flex items-center gap-1 text-xs bg-emerald-950 text-emerald-400 border border-emerald-700/60 px-2 py-0.5 rounded-full font-medium">
                <CheckCircle2 className="w-3 h-3" />
                Cliente verificado
              </span>
            </h3>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{currentSingle.location}</span>
              <span className="mx-1">•</span>
              <span>{currentSingle.date}</span>
            </p>
            <div className="inline-block self-start bg-slate-900 px-3 py-1 rounded-lg border border-slate-700 text-xs font-semibold text-blue-300">
              {currentSingle.service}
            </div>
          </div>

          <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed mb-6">
            &ldquo;{currentSingle.comment}&rdquo;
          </p>
        </div>

        {/* CONTROLS & INDICATOR DOTS (FOR BOTH PC AND MOBILE) */}
        <div className="flex items-center justify-between max-w-7xl mx-auto mt-8 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-slate-700 hover:bg-slate-600 w-2.5'
                }`}
                aria-label={`Ir a grupo de opiniones ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition border border-slate-700 shadow-md"
              aria-label="Opiniones anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition shadow-lg shadow-blue-600/30"
              aria-label="Siguientes opiniones"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
