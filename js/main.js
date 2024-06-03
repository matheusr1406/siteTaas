document.addEventListener("scroll", function () {
  var titulo = document.querySelector(".titulo");
  var tituloPos = titulo.getBoundingClientRect().top + window.scrollY; // Posição absoluta do título na página
  var windowPos = window.scrollY + window.innerHeight; // Posição da janela atual

  if (windowPos > tituloPos) {
    titulo.style.opacity = "1"; // Torna o título visível
    titulo.style.transform = "translateY(0)"; // Move para a posição final
  } else {
    titulo.style.opacity = "0"; // Mantém invisível
    titulo.style.transform = "translateY(20px)"; // Manter deslocado enquanto não estiver visível
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    // Ajuste o valor de acordo com sua preferência
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Fundo mais opaco ao rolar
  } else {
    navbar.style.backgroundColor = "transparent"; // Transparente no topo
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });
});

$(document).ready(function(){
  $('#portfolioCarousel').carousel({
    interval: 2000
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const dynamicText = document.querySelector('.dynamic-text');
  const wordsPT = ['Reinventar!', 'Transformar!', 'Resolver!'];
  const wordsEN = ['Reinvent!', 'Transform!', 'Solve!'];
  let words = wordsPT; // Default to Portuguese

  // Detect the current page to set the words array
  if (window.location.pathname.includes('CC.html')) {
      words = wordsEN;
  } else {
      words = wordsPT;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
          dynamicText.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
              isDeleting = false;
              wordIndex = (wordIndex + 1) % words.length;
              setTimeout(type, 500);
          } else {
              setTimeout(type, 100);
          }
      } else {
          dynamicText.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentWord.length) {
              isDeleting = true;
              setTimeout(type, 2000);
          } else {
              setTimeout(type, 200);
          }
      }
  }

  type();
});

