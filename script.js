const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Chiudi il menu' : 'Apri il menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) { menuButton.textContent = '☰'; menuButton.setAttribute('aria-label', 'Apri il menu'); }
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Inserire qui il numero WhatsApp reale in formato internazionale, senza + o spazi.
const WHATSAPP_NUMBER = '393289625891';
const form = document.getElementById('contactForm');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!WHATSAPP_NUMBER) {
    alert('Il modulo è pronto. Per attivare l’invio, configura il numero WhatsApp reale nel file script.js.');
    return;
  }
  const data = new FormData(form);
  const message = [
    'Buongiorno, vorrei richiedere informazioni per un lavoro.',
    `Nome: ${data.get('nome')}`,
    `Telefono: ${data.get('telefono')}`,
    `Servizio: ${data.get('servizio')}`,
    `Dettagli: ${data.get('messaggio') || 'Da definire'}`
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
