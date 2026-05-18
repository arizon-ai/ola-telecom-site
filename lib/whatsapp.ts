const WHATSAPP_NUMBER = '584247612828';

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappLinks = {
  generic: createWhatsAppLink('Hola Ari 👋'),
  coverage: createWhatsAppLink(
    'Hola Ari, quiero saber si tienen cobertura en mi zona 📍'
  ),
  payService: createWhatsAppLink('Hola Ari, quiero pagar mi servicio 💳'),
  hirePlan: createWhatsAppLink(
    'Hola Ari, quiero información sobre los planes'
  ),
};
