const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  effect: 'slide',
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


const introText = document.querySelector('.introText');

window.addEventListener('scroll', () => {
  const top = introText.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(top < windowHeight - 50) {  
    introText.style.opacity = 1;
    introText.style.transform = 'translateY(0)';
  }
});

let scrollTimeout;

window.addEventListener('scroll', () => {
  document.body.classList.add('scrolling');

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('scrolling');
  }, 1500); // po 1,5 s scrollování zmizí
});


const backToTopBtn = document.getElementById('backToTop');


window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { 
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
