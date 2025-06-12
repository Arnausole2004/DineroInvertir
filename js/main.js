// Desplazamiento suave al hacer clic en enlaces con #
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validación simple del formulario de contacto
const formulario = document.querySelector('#form-contacto');
if (formulario) {
  formulario.addEventListener('submit', function(e) {
    const campos = this.querySelectorAll('input, textarea');
    for (let campo of campos) {
      if (!campo.value.trim()) {
        e.preventDefault();
        alert('Por favor completa todos los campos.');
        return;
      }
    }
  });
}

