document.getElementById('open-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav__menu').classList.add('active');
    document.getElementById('open-menu-btn').classList.add('active');
    document.getElementById('close-menu-btn').classList.add('active');
  });
  
  document.getElementById('close-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav__menu').classList.remove('active');
    document.getElementById('open-menu-btn').classList.remove('active');
    document.getElementById('close-menu-btn').classList.remove('active');
  });

// Detectar rolagem e aplicar a classe para o fundo da navbar
window.addEventListener('scroll', function() {
   const navbar = document.querySelector('nav');
   if (window.scrollY > 50) { // Ativar após 50px de rolagem
     navbar.classList.add('nav-scrolled');
   } else {
     navbar.classList.remove('nav-scrolled');
   }
 });
 

 function toggleCities(id) {
    // Oculta todas as listas de cidades, exceto a que foi clicada
    const cityLists = document.querySelectorAll('.city-list');
    cityLists.forEach(list => {
        if (list.id !== id) {
            list.classList.remove('open'); // Fecha todas as outras listas
        }
    });

    // Alterna a classe 'open' na lista do estado selecionado
    const cityList = document.getElementById(id);
    cityList.classList.toggle('open');
}



