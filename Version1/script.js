function mostrarLetra(index) {
  const letras = document.querySelectorAll(".song");
  const letra = letras[index];

  // Oculta las otras letras antes de mostrar la nueva
  letras.forEach((l, i) => {
    if (i !== index) l.style.display = "none";
  });

  // Alterna la visibilidad
  letra.style.display = letra.style.display === "block" ? "none" : "block";
}
