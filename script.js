// Exemplo de script para um botão de "voltar ao topo"

window.onscroll = function() {
    // Código para mostrar ou esconder o botão
};

document.getElementById("btn-topo").addEventListener("click", function() {
    // Código para rolar a página para o topo
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 /* A seção será animada quando 10% dela estiver visível */
    });

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});

document.getElementById('animated-text').textContent = '';