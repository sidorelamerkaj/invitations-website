// ----- Envelope: click to open -----
const envelopeScreen = document.getElementById('envelope-screen');
const inviteContent = document.getElementById('invite-content');

function openEnvelope() {
  if (!envelopeScreen || envelopeScreen.classList.contains('is-open')) return;
  envelopeScreen.classList.add('is-open');
  inviteContent.classList.add('is-visible');
  document.body.style.overflow = '';
}

envelopeScreen?.addEventListener('click', openEnvelope);
envelopeScreen?.addEventListener('touchstart', openEnvelope, { passive: true });

// Keep invite content scroll hidden until opened
document.body.style.overflow = 'hidden';
inviteContent?.classList.remove('is-visible');

// ----- Footer year -----
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ----- Countdown -----
const WEDDING_DATE = new Date('2026-06-15T15:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('mins').textContent = '00';
    document.getElementById('secs').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  const el = (id, n) => {
    const e = document.getElementById(id);
    if (e) e.textContent = String(n).padStart(2, '0');
  };
  el('days', days);
  el('hours', hours);
  el('mins', mins);
  el('secs', secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ----- Scroll reveal -----
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.invite-quote, .countdown-section, .gallery, .venue, .details').forEach((section) => {
  section.classList.add('reveal');
  observer.observe(section);
});
