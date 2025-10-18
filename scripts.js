const nav = document.querySelector("nav");
const tlacitko = document.querySelector(".kuk");

tlacitko.addEventListener("click", () => {
  nav.classList.toggle('nav--active');

  const img = tlacitko.querySelector('img');

  if(nav.classList.contains('nav--active')){
      img.src = 'svg/x-svgrepo-com.svg';
  } else {
      img.src = 'svg/align-justify-svgrepo-com.svg';
  }
});