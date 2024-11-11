// Texto dinâmico
document.addEventListener('DOMContentLoaded', (event) => {
    const dynamicText = document.querySelector('.dynamic-text');
    const words = ['Negócios imobiliários', 'Investimentos', 'Grandes desafios'];
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

    // Inicia a função de digitação
    type();
});


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
   
// JavaScript para alternar entre as abas e mostrar o conteúdo correto
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todas as abas e oculta o conteúdo de todos os estados
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.state-content').forEach(content => content.style.display = 'none');

        // Adiciona a classe 'active' à aba clicada e exibe o conteúdo correspondente
        button.classList.add('active');
        document.getElementById(button.getAttribute('data-state')).style.display = 'block';
    });
});

