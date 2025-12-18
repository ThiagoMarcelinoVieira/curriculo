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

<<<<<<< HEAD
document.getElementById('animated-text').textContent = '';


function copiarEmail() {
    const email = "thiagomarcelino897@gmail.com";
    navigator.clipboard.writeText(email);
    
    const label = document.getElementById('labelEmail');
    const originalText = label.innerText;
    
    label.innerText = "Copiado!";
    label.style.color = "#25d366";
    
    setTimeout(() => {
        label.innerText = originalText;
        label.style.color = "#fff";
    }, 2000);
}
=======
document.getElementById('animated-text').textContent = '';
>>>>>>> 550751bb3edf7b0aa1aa2772429323cee3a5f5f7
