'use client';

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

/**
 * Helper safety wrapper to push objects to window.dataLayer
 */
export function pushToDataLayer(data: Record<string, any>) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
}

/**
 * Triggers WhatsApp click events for Google Tag Manager
 * Matches GTM Custom Event Trigger: "Click to Chat"
 */
export function trackWhatsAppClick(sourceLabel: string = 'WhatsApp Link') {
  pushToDataLayer({
    event: 'Click to Chat',
    event_category: 'engagement',
    event_label: sourceLabel,
  });
  
  // Secondary event for GA4 explicit tag if configured by event name
  pushToDataLayer({
    event: 'clic_whatsapp',
    event_category: 'engagement',
    event_label: sourceLabel,
  });
}

/**
 * Triggers Phone call click events for Google Tag Manager
 * Matches GTM Link Click Trigger & GA4 "clic_telefono" event
 */
export function trackPhoneClick(sourceLabel: string = 'Phone Call') {
  pushToDataLayer({
    event: 'clic_telefono',
    event_category: 'engagement',
    event_label: sourceLabel,
  });
}

/**
 * Triggers Form Submission events & feeds Enhanced Conversions DataLayer variables:
 * - name (dlv - Nombre usuario)
 * - email (dlv - Email usuario)
 * - phone (dlv - Teléfono usuario)
 */
export function trackFormSubmit(formData: {
  name: string;
  phone: string;
  email?: string;
  service?: string;
}) {
  const payload = {
    event: 'formulario_enviado',
    event_category: 'lead',
    event_label: formData.service || 'Presupuesto',
    name: formData.name,
    phone: formData.phone,
    email: formData.email || '',
    servicio: formData.service || '',
  };

  pushToDataLayer(payload);

  // Additional form_submission event trigger fallback for standard GTM forms
  pushToDataLayer({
    event: 'form_submission',
    name: formData.name,
    phone: formData.phone,
    email: formData.email || '',
  });
}
