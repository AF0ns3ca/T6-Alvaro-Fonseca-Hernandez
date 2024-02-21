document.addEventListener("DOMContentLoaded", function () {
    appInit();
  });
  
  function appInit() {
    navFix();
    createGallery();
    scrollNav();
    
    let yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
  }
  
  function createGallery() {
    const galeria = document.querySelector(".galeria-imagenes");
  
    for (let i = 1; i <= 15; i++) {
      const imagen = document.createElement("picture");
      imagen.innerHTML = `
              <source srcset="/build/assets/img/thumb/${i}.webp" type="image/webp">
              <img loading="lazy" width="200" height="300" src="/build/assets/img/thumb/${i}.jpg" alt="imagen galeria">
          `;
      imagen.onclick = function () {
        imageFull(i);
      };
  
      galeria.appendChild(imagen);
    }
  }
  
  function imageFull(id) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
          <source srcset="/build/assets/img/big/${id}.webp" type="image/webp">
          <img loading="lazy" src="/build/assets/img/big/${id}.jpg" alt="imagen galeria">
      `;
  
    // Crea el Overlay con la imagen
    const overlay = document.createElement("div");
    overlay.classList.add("overlay-img");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    overlay.onclick = function () {
      const body = document.querySelector("body");
      body.classList.remove("fijar-body");
      overlay.remove();
    };
  
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
  }


  function scrollNav() {
    const enlaces = document.querySelectorAll(".nav-list a");
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", function (e) {
        e.preventDefault();
        const seccionScroll = e.target.attributes.href.value;
        const seccion = document.querySelector(seccionScroll);
        seccion.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
  
  function navFix() {
    const barra = document.querySelector(".main");
    const video = document.querySelector(".video-hero");
    const body = document.querySelector("body");
  
    window.addEventListener("scroll", function () {
      if (
        video.getBoundingClientRect().bottom < 0 &&
        this.window.innerWidth >= 768
      ) {
        barra.classList.add("fijo");
        body.classList.add("body-scroll");
      } else {
        barra.classList.remove("fijo");
        body.classList.remove("body-scroll");
      }
    });
  }
  

  