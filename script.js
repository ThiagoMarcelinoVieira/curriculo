window.onscroll = function () {
  // Código para mostrar ou esconder o botão
};

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
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
  });
});

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