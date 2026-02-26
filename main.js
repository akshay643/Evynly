// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ==========================================
// WAITLIST FORM SUBMISSION
// ==========================================
const waitlistForm = document.querySelector('.waitlist-form');

if (waitlistForm) {
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = waitlistForm.querySelector('input').value;

    // TODO: Add your actual form submission logic here
    // Example: Send to Firebase, backend API, etc.
    console.log('Waitlist signup:', email);

    // Show success message
    alert("🎉 Thanks for joining! We'll notify you when beta is ready.");
    waitlistForm.reset();

    // Optional: Track with analytics
    // gtag('event', 'waitlist_signup', { email: email });
  });
}

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .step').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// ==========================================
// PREVENT CLICKS ON DISABLED BUTTONS
// ==========================================
document.querySelectorAll('.store-button-disabled').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('📱 Beta version coming soon! Join the waitlist to get notified.');
  });
});

console.log('✨ Evenly Beta website loaded!');
