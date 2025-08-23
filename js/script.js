const elementos = [
  {
    id: "border1",
    mouseover: el => el.style.boxShadow = "3px 3px 3px red ",
    mouseout: el => el.style.boxShadow = "none"
  },
  {
    id: "border2",
    mouseover: el => el.style.border = "4px solid teal",
    mouseout: el => el.style.border = "none"
  },
  {
    id: "border3",
    mouseover: el => el.style.backgroundColor = "yellow",
    mouseout: el => el.style.backgroundColor = "white"
  },
  {
    id: "border4",
    mouseover: el => el.style.border = "3px solid red",
    mouseout: el => el.style.border = "none"
  },
  {
    id: "border5",
    mouseover: el => el.style.boxShadow = "5px 6px 5px blue",
    mouseout: el => el.style.boxShadow = "none"
  },
  {
    id: "border6",
    mouseover: el => el.style.boxShadow = "7px 6px 7px red",
    mouseout: el => el.style.boxShadow = "none"
  },
  {
    id: "border7",
    mouseover: el => el.style.color = "blue",
    mouseout: el => el.style.color = "black"
  }];

elementos.forEach(({ id, mouseover, mouseout }) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("mouseover", () => mouseover(el));
    el.addEventListener("mouseout", () => mouseout(el));
  }
})

/*const sombreado = document.getElementById("border1");
sombreado.addEventListener("mouseover", () => {
  sombreado.style.boxShadow = "2px 3px 5px red";
})
sombreado.addEventListener("mouseout", () => {
  sombreado.style.boxShadow = "none"
})


const colorarray = document.getElementById("border3");
colorarray.addEventListener("mouseover", () => {
  colorarray.style.border = "3px solid blue";
})
colorarray.addEventListener("mouseout", () => {
  colorarray.style.border = "none"
})


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
});
colorcambiar.addEventListener("mouseout", () => {
  colorcambiar.style.backgroundColor = "white";

});*/

document.addEventListener("DOMContentLoaded", () => {
  const enlacepersonal = document.getElementById("habilidades_personales");

  enlacepersonal.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("habilidades_personal").scrollIntoView({ behavior: "smooth" });
  })
})