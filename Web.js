// Selecciona el botón por su ID
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");

// Agrega un evento de clic al botón
boton1.addEventListener("click", function() {
    imagen1.style.display = "block";
    //alert("¡Hiciste clic en el botón!");
});

boton2.addEventListener("click", function() {
    imagen2.style.display = "block";
    //alert("¡Hiciste clic en el botón!");
});

boton3.addEventListener("click", function() {
    imagen3.style.display = "block";
    //alert("¡Hiciste clic en el botón!");
});