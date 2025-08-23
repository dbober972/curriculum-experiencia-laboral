const cambiocolor = document.getElementById("seleccion1");

cambiocolor.addEventListener("mouseover", () => {
  cambiocolor.style.border = "3px solid yellow";
});
cambiocolor.addEventListener("mouseout", () => {
  cambiocolor.style.border = "none";
});



const colorcambiar = document.getElementById("seleccion2");

colorcambiar.addEventListener("mouseover", () => {
  colorcambiar.style.backgroundColor = "rgb(247, 229, 126)";
})

document.addEventListener("DOMContentLoaded", () => {
  const enlacepersonal = document.getElementById("habilidades_personales");

  enlacepersonal.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("habilidades_personal").scrollIntoView({ behavior: "smooth" });
  })
})