Perfecto, Peke. Aquí tienes tu JS con la misma estructura y funcionalidad, pero adaptado con un toque personalizado para tu web "Cómo ganar dinero con la IA":

```js
// Inicializa animaciones AOS solo una vez por elemento
AOS.init({ once: true });

// Suaviza el scroll para enlaces internos que comienzan con #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
<script>
  // Alternar visibilidad del menú
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
  });

  // Cerrar el menú cuando se hace clic en un enlace
  document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.getElementById("menu").classList.add("hidden");
    });
  });
</script>

}

```
}

