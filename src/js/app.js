document.addEventListener("DOMContentLoaded", function () {
   iniciarApp();

   function iniciarApp() {
      crearGaleria();
   }

   function crearGaleria() {
      const galeria = document.querySelector(".galeria-imagenes");

      for (let i = 1; i <= 15; i++) {
         const imagen = document.createElement("picture");
         galeria.appendChild(imagen);
         imagen.innerHTML = `
            
            <img src="./build/assets/img/thumb/${i}.jpg" width="200" height="300">
        `;
      }
   }
});
