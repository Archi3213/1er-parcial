/* jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function () {
    // Obtener una referencia al elemento <body>
    var bodyElement = document.body;
    // Crea el elemento <header> con la clase "header"
    var header = document.createElement("header");
    header.classList.add("header");
    // Crea el elemento <div> con la clase "contenedor"
    var contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    // Crea el elemento <div> con la clase "barra"
    var barra = document.createElement("div");
    barra.classList.add("barra");
    // Crea el enlace del logo
    var logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.classList.add("logo");
    // Crea el elemento <h1> con las clases "logo__nombre", "no-margin", "centrar-texto" y "imagen-contenedor"
    var logoTitulo = document.createElement("h1");
    logoTitulo.classList.add(
      "logo__nombre",
      "no-margin",
      "centrar-texto",
      "imagen-contenedor"
    );
    // Crea el elemento <span> con la clase "logo__bold"
    var logoBold = document.createElement("span");
    logoBold.classList.add("logo__bold");
    // Crea el elemento <nav> con la clase "navegacion"
    var navegacion = document.createElement("nav");
    navegacion.classList.add("navegacion");
    // Crea enlaces de navegación
    var enlaceNosotros = document.createElement("a");
    enlaceNosotros.href = "nosotros.html";
    enlaceNosotros.classList.add("navegacion__enlace", "imagen-contenedor");
    enlaceNosotros.textContent = "Nosotros";
    // Crea enlaces de navegación
    var enlaceContacto = document.createElement("a");
    enlaceContacto.href = "contacto.html";
    enlaceContacto.classList.add("navegacion__enlace", "imagen-contenedor");
    enlaceContacto.textContent = "Contacto";
    // Crea el elemento <div> con la clase "header__texto"
    var headerTexto = document.createElement("div");
    headerTexto.classList.add("header__texto");
    // Crea el elemento <h2> con la clase "no-margin"
    var subtitulo = document.createElement("h2");
    subtitulo.classList.add("no-margin");
    // Crea el elemento <div> con la clase "contenido-principal"
    var contenidoPrincipal = document.createElement("div");
    contenidoPrincipal.classList.add("contenido-principal");
    contenidoPrincipal.style.display = "flex";
    contenidoPrincipal.style.justifyContent = "center";
    contenidoPrincipal.style.columnGap = "4rem";
  
    //Estilos del styles.css
    // Definir estilos en JavaScript
    var estilos = `
          :root {
          --fuenteHeading: 'PT Sans', sans-serif;
          --fuenteParrafos: 'Raleway', sans-serif;
          --primario: #784D3C;
          --gris: #e1e1e1;
          --blanco: #FFFFFF;
          --negro: #000000;
          }
  
          html {
              box-sizing: border-box;
              font-size: 62.5%;
          }
  
          *, *:before, *:after {
              box-sizing: inherit;
          }
  
          `;
  
    // Crea un elemento <style> y agregar los estilos definidos
    var styleElement = document.createElement("style");
    styleElement.textContent = estilos;
  
    // Agrega el elemento <style> al <head> del documento
    document.head.appendChild(styleElement);
  
    // Aplica estilos CSS usando la propiedad style
    bodyElement.style.fontFamily = "'Raleway', sans-serif";
    bodyElement.style.fontSize = "1.6rem";
    bodyElement.style.lineHeight = "2";
  
    // Agrega texto al elemento <h1>
    logoTitulo.textContent = "Weather";
  
    // Agrega texto al elemento <span>
    logoBold.textContent = "Solutions";
  
    // Agrega el elemento <span> como hijo del elemento <h1>
    logoTitulo.appendChild(logoBold);
  
    // Agrega el elemento <h1> al enlace del logo
    logoLink.appendChild(logoTitulo);
  
    // Agrega los enlaces al elemento <nav>
    navegacion.appendChild(enlaceNosotros);
    navegacion.appendChild(enlaceContacto);
  
    // Agrega el enlace del logo y la navegación al elemento <div> con la clase "barra"
    barra.appendChild(logoLink);
    barra.appendChild(navegacion);
  
    // Agrega el elemento <div> con la clase "barra" al elemento <div> con la clase "contenedor"
    contenedor.appendChild(barra);
  
    // Agrega texto al elemento <h2>
    subtitulo.textContent = "Pronóstico del clima";
  
    // Agrega el elemento <h2> al elemento <div> con la clase "header__texto"
    headerTexto.appendChild(subtitulo);
  
    // Agrega todos los elementos al documento
    header.appendChild(contenedor);
    header.appendChild(headerTexto);
    document.body.appendChild(header);
  
    // Contenido principal y condiciones climáticas de la semana
  
    // Crea la información para "Hoy"
    var hoy = document.createElement("div");
  
    var tituloHoy = document.createElement("h2");
    tituloHoy.textContent = "Hoy";
  
    var imagenHoy = document.createElement("div");
    imagenHoy.classList.add("imagen-contenedor");
    var imgHoy = document.createElement("img");
    imgHoy.src = "img/llovera.jpg";
    imgHoy.alt = "Condiciones climáticas";
    imagenHoy.appendChild(imgHoy);
  
    var fechaHoy = document.createElement("p");
    fechaHoy.textContent = "Fecha: 20 de Septiembre, 2023";
  
    var ciudadHoy = document.createElement("p");
    ciudadHoy.textContent = "Ciudad: Merida";
  
    var tempMaxHoy = document.createElement("p");
    tempMaxHoy.textContent = "Temperatura máxima: 42°C";
  
    var tempMinHoy = document.createElement("p");
    tempMinHoy.textContent = "Temperatura mínima: 30°C";
  
    var vientoHoy = document.createElement("p");
    vientoHoy.textContent = "Viento: 10km/h";
  
    var probLluviaHoy = document.createElement("p");
    probLluviaHoy.textContent = "Probabilidad de lluvia: 91%";
  
    // Agrega elementos al contenedor de "Hoy"
    hoy.appendChild(tituloHoy);
    hoy.appendChild(imagenHoy);
    hoy.appendChild(fechaHoy);
    hoy.appendChild(ciudadHoy);
    hoy.appendChild(tempMaxHoy);
    hoy.appendChild(tempMinHoy);
    hoy.appendChild(vientoHoy);
    hoy.appendChild(probLluviaHoy);
  
    // Agrega "Hoy" al "contenido-principal"
    contenidoPrincipal.appendChild(hoy);
  
    // Crea la información para "Mañana" MananaMananaMananaMananaMananaMananaMananaMananaMananaMananaManana
    var manana = document.createElement("div");
  
    var tituloManana = document.createElement("h2");
    tituloManana.textContent = "Mañana";
  
    var imagenManana = document.createElement("div");
    imagenManana.classList.add("imagen-contenedor");
    var imgManana = document.createElement("img");
    imgManana.src = "img/soleado.jpg";
    imgManana.alt = "Condiciones climáticas";
    imagenManana.appendChild(imgManana);
  
    var fechaManana = document.createElement("p");
    fechaManana.textContent = "Fecha: 21 de Septiembre, 2023";
  
    var ciudadManana = document.createElement("p");
    ciudadManana.textContent = "Ciudad: Merida";
  
    var tempMaxManana = document.createElement("p");
    tempMaxManana.textContent = "Temperatura máxima: 38°C";
  
    var tempMinManana = document.createElement("p");
    tempMinManana.textContent = "Temperatura mínima: 25°C";
  
    var vientoManana = document.createElement("p");
    vientoManana.textContent = "Viento: 7km/h";
  
    var probLluviaManana = document.createElement("p");
    probLluviaManana.textContent = "Probabilidad de lluvia: 3%";
  
    // Agrega elementos al contenedor de "Manana"
    manana.appendChild(tituloManana);
    manana.appendChild(imagenManana);
    manana.appendChild(fechaManana);
    manana.appendChild(ciudadManana);
    manana.appendChild(tempMaxManana);
    manana.appendChild(tempMinManana);
    manana.appendChild(vientoManana);
    manana.appendChild(probLluviaManana);
  
    // Agrega "Mañana" al "contenido-principal"
    contenidoPrincipal.appendChild(manana);
  
    // Crea la información para "22 de Septiembre"
    var diaTres = document.createElement("div");
  
    var tituloDiaTres = document.createElement("h2");
    tituloDiaTres.textContent = "22 de Septiembre";
  
    var imagenDiaTres = document.createElement("div");
    imagenDiaTres.classList.add("imagen-contenedor");
    var imgDiaTres = document.createElement("img");
    imgDiaTres.src = "img/mediosoleado.jpg";
    imgDiaTres.alt = "Condiciones climáticas";
    imagenDiaTres.appendChild(imgDiaTres);
  
    var fechaDiaTres = document.createElement("p");
    fechaDiaTres.textContent = "Fecha: 22 de Septiembre, 2023";
  
    var ciudadDiaTres = document.createElement("p");
    ciudadDiaTres.textContent = "Ciudad: Merida";
  
    var tempMaxDiaTres = document.createElement("p");
    tempMaxDiaTres.textContent = "Temperatura máxima: 30°C";
  
    var tempMinDiaTres = document.createElement("p");
    tempMinDiaTres.textContent = "Temperatura mínima: 22°C";
  
    var vientoDiaTres = document.createElement("p");
    vientoDiaTres.textContent = "Viento: 5km/h";
  
    var probLluviaDiaTres = document.createElement("p");
    probLluviaDiaTres.textContent = "Probabilidad de lluvia: 59%";
  
    // Agrega elementos al contenedor de "diaTres"
    diaTres.appendChild(tituloDiaTres);
    diaTres.appendChild(imagenDiaTres);
    diaTres.appendChild(fechaDiaTres);
    diaTres.appendChild(ciudadDiaTres);
    diaTres.appendChild(tempMaxDiaTres);
    diaTres.appendChild(tempMinDiaTres);
    diaTres.appendChild(vientoDiaTres);
    diaTres.appendChild(probLluviaDiaTres);
  
    // Agrega "22 de Septiembre" al "contenido-principal"
    contenidoPrincipal.appendChild(diaTres);
  
    // Crea la información para "23 de Septiembre"
    var diaCuatro = document.createElement("div");
  
    var tituloDiaCuatro = document.createElement("h2");
    tituloDiaCuatro.textContent = "23 de Septiembre";
  
    var imagenDiaCuatro = document.createElement("div");
    imagenDiaCuatro.classList.add("imagen-contenedor");
    var imgDiaCuatro = document.createElement("img");
    imgDiaCuatro.src = "img/lluvia.jpg";
    imgDiaCuatro.alt = "Condiciones climáticas";
    imagenDiaCuatro.appendChild(imgDiaCuatro);
  
    var fechaDiaCuatro = document.createElement("p");
    fechaDiaCuatro.textContent = "Fecha: 23 de Septiembre, 2023";
  
    var ciudadDiaCuatro = document.createElement("p");
    ciudadDiaCuatro.textContent = "Ciudad: Merida";
  
    var tempMaxDiaCuatro = document.createElement("p");
    tempMaxDiaCuatro.textContent = "Temperatura máxima: 25°C";
  
    var tempMinDiaCuatro = document.createElement("p");
    tempMinDiaCuatro.textContent = "Temperatura mínima: 21°C";
  
    var vientoDiaCuatro = document.createElement("p");
    vientoDiaCuatro.textContent = "Viento: 11km/h";
  
    var probLluviaDiaCuatro = document.createElement("p");
    probLluviaDiaCuatro.textContent = "Probabilidad de lluvia: 87%";
  
    // Agrega elementos al contenedor de "diaCuatro"
    diaCuatro.appendChild(tituloDiaCuatro);
    diaCuatro.appendChild(imagenDiaCuatro);
    diaCuatro.appendChild(fechaDiaCuatro);
    diaCuatro.appendChild(ciudadDiaCuatro);
    diaCuatro.appendChild(tempMaxDiaCuatro);
    diaCuatro.appendChild(tempMinDiaCuatro);
    diaCuatro.appendChild(vientoDiaCuatro);
    diaCuatro.appendChild(probLluviaDiaCuatro);
  
    // Agrega "23 de Septiembre" al "contenido-principal"
    contenidoPrincipal.appendChild(diaCuatro);
  
    // Crea la información para "24 de Septiembre"
    var diaCinco = document.createElement("div");
  
    var tituloDiaCinco = document.createElement("h2");
    tituloDiaCinco.textContent = "24 de Septiembre";
  
    var imagenDiaCinco = document.createElement("div");
    imagenDiaCinco.classList.add("imagen-contenedor");
    var imgDiaCinco = document.createElement("img");
    imgDiaCinco.src = "img/mediosoleado.jpg";
    imgDiaCinco.alt = "Condiciones climáticas";
    imagenDiaCinco.appendChild(imgDiaCinco);
  
    var fechaDiaCinco = document.createElement("p");
    fechaDiaCinco.textContent = "Fecha: 24 de Septiembre, 2023";
  
    var ciudadDiaCinco = document.createElement("p");
    ciudadDiaCinco.textContent = "Ciudad: Merida";
  
    var tempMaxDiaCinco = document.createElement("p");
    tempMaxDiaCinco.textContent = "Temperatura máxima: 25°C";
  
    var tempMinDiaCinco = document.createElement("p");
    tempMinDiaCinco.textContent = "Temperatura mínima: 20°C";
  
    var vientoDiaCinco = document.createElement("p");
    vientoDiaCinco.textContent = "Viento: 3km/h";
  
    var probLluviaDiaCinco = document.createElement("p");
    probLluviaDiaCinco.textContent = "Probabilidad de lluvia: 65%";
  
    // Agrega elementos al contenedor de "diaCinco"
    diaCinco.appendChild(tituloDiaCinco);
    diaCinco.appendChild(imagenDiaCinco);
    diaCinco.appendChild(fechaDiaCinco);
    diaCinco.appendChild(ciudadDiaCinco);
    diaCinco.appendChild(tempMaxDiaCinco);
    diaCinco.appendChild(tempMinDiaCinco);
    diaCinco.appendChild(vientoDiaCinco);
    diaCinco.appendChild(probLluviaDiaCinco);
  
    // Agrega "24 de Septiembre" al "contenido-principal"
    contenidoPrincipal.appendChild(diaCinco);
  
    // Crea la información para "25 de Septiembre"
    var diaSeis = document.createElement("div");
  
    var tituloDiaSeis = document.createElement("h2");
    tituloDiaSeis.textContent = "25 de Septiembre";
  
    var imagenDiaSeis = document.createElement("div");
    imagenDiaSeis.classList.add("imagen-contenedor");
    var imgDiaSeis = document.createElement("img");
    imgDiaSeis.src = "img/mediosoleado.jpg";
    imgDiaSeis.alt = "Condiciones climáticas";
    imagenDiaSeis.appendChild(imgDiaSeis);
  
    var fechaDiaSeis = document.createElement("p");
    fechaDiaSeis.textContent = "Fecha: 25 de Septiembre, 2023";
  
    var ciudadDiaSeis = document.createElement("p");
    ciudadDiaSeis.textContent = "Ciudad: Merida";
  
    var tempMaxDiaSeis = document.createElement("p");
    tempMaxDiaSeis.textContent = "Temperatura máxima: 27°C";
  
    var tempMinDiaSeis = document.createElement("p");
    tempMinDiaSeis.textContent = "Temperatura mínima: 23°C";
  
    var vientoDiaSeis = document.createElement("p");
    vientoDiaSeis.textContent = "Viento: 8km/h";
  
    var probLluviaDiaSeis = document.createElement("p");
    probLluviaDiaSeis.textContent = "Probabilidad de lluvia: 78%";
  
    // Agrega elementos al contenedor de "diaSeis"
    diaSeis.appendChild(tituloDiaSeis);
    diaSeis.appendChild(imagenDiaSeis);
    diaSeis.appendChild(fechaDiaSeis);
    diaSeis.appendChild(ciudadDiaSeis);
    diaSeis.appendChild(tempMaxDiaSeis);
    diaSeis.appendChild(tempMinDiaSeis);
    diaSeis.appendChild(vientoDiaSeis);
    diaSeis.appendChild(probLluviaDiaSeis);
  
    // Agrega "25 de Septiembre" al "contenido-principal"
    contenidoPrincipal.appendChild(diaSeis);
  
    // Agrega "contenido-principal" al cuerpo del documento
    document.body.appendChild(contenidoPrincipal);
  
    // Crea el elemento <div> con la clase "slide opacity-transition"
    var slideDiv = document.createElement("div");
    slideDiv.classList.add("slide", "opacity-transition");
  
    // Crea el elemento <h1> con estilo inline
    var h1Element = document.createElement("h1");
    h1Element.style.textAlign = "center";
    h1Element.textContent = "Imagenes Satelitales del clima";
  
    // Crea el elemento <div> con la clase "slide-inner"
    var slideInnerDiv = document.createElement("div");
    slideInnerDiv.classList.add("slide-inner");
  
    // Crea los elementos de radio y los elementos de imagen
    var images = [
      { src: "img/tierra.jpg", alt: "Imagen satelital" },
      { src: "img/clima.jpg", alt: "Imagen satelital" },
      { src: "img/merida.jpg", alt: "Imagen satelital" }
    ];
  
    for (let i = 0; i < images.length; i++) {
      var radioInput = document.createElement("input");
      radioInput.setAttribute("type", "radio");
      radioInput.id = "slide-" + (i + 1);
      radioInput.name = "slide";
      radioInput.setAttribute("aria-hidden", "true");
      radioInput.setAttribute("hidden", "");
      if (i === 0) {
        radioInput.setAttribute("checked", "checked");
      }
  
      var slideItemDiv = document.createElement("div");
      slideItemDiv.classList.add("slide-item");
  
      var image = document.createElement("img");
      image.src = images[i].src;
      image.alt = images[i].alt;
  
      slideItemDiv.appendChild(image);
      slideInnerDiv.appendChild(radioInput);
      slideInnerDiv.appendChild(slideItemDiv);
    }
  
    // Crea los elementos de etiqueta para los controles
    var controlLabels = [
      { for: "slide-3", className: "prev-control-1", text: "‹" },
      { for: "slide-2", className: "next-control-1", text: "›" },
      { for: "slide-1", className: "prev-control-2", text: "‹" },
      { for: "slide-3", className: "next-control-2", text: "›" },
      { for: "slide-2", className: "prev-control-3", text: "‹" },
      { for: "slide-1", className: "next-control-3", text: "›" }
    ];
    
  
    for (var j = 0; j < controlLabels.length; j++) {
      var controlLabel = document.createElement("label");
      controlLabel.setAttribute("for", controlLabels[j].for);
      controlLabel.classList.add("slide-control", controlLabels[j].className);
      controlLabel.textContent = controlLabels[j].text;
      slideInnerDiv.appendChild(controlLabel);
    }
  
    // Crea la lista ordenada de indicadores
    var slideIndicadorOl = document.createElement("ol");
    slideIndicadorOl.classList.add("slide-indicador");
  
    for (var k = 0; k < images.length; k++) {
      var indicadorLi = document.createElement("li");
      var indicadorLabel = document.createElement("label");
      indicadorLabel.setAttribute("for", "slide-" + (k + 1));
      indicadorLabel.classList.add("slide-circulo");
      indicadorLabel.textContent = "•";
      indicadorLi.appendChild(indicadorLabel);
      slideIndicadorOl.appendChild(indicadorLi);
    }
  
    // Agrega todos los elementos al documento
    slideDiv.appendChild(h1Element);
    slideDiv.appendChild(slideInnerDiv);
    slideDiv.appendChild(slideIndicadorOl);
    document.body.appendChild(slideDiv);
  
    // Crea el elemento <div> con la clase "contenedor cuatro-columnas"
    var contenedorDiv = document.createElement("div");
    contenedorDiv.classList.add("contenedor", "cuatro-columnas");
  
    // Crea un array de objetos con los datos de los artículos
    var articulos = [
      {
        titulo: "Tsunami arrasa la costa de Malvidas",
        imagenSrc: "img/articulo1.jpg",
        contenido:
          "Riesgo de tsunami para las Islas Malvinas por deslizamientos de tierra submarinos. Las Islas Malvinas están en riesgo de tsunamis causados por deslizamientos de tierra bajo el agua, según la evidencia de eventos prehistóricos encontrada en el denominado canal Malvinas, al sur del archipiélago ubicado en el Atlántico sur.",
        enlace: "./articulo1.html"
      },
      {
        titulo: "Tormenta solar se aproxima en el año 2060",
        imagenSrc: "img/articulo2.jpg",
        contenido:
          "La expulsión de una enorma bola de plasma del Sol prendió las alarmas ante la advertencia de la llegada de una tormenta solar, que impactará a la Tierra en las próximas horas.",
        enlace: "./articulo2.html"
      },
      {
        titulo: "Grecia, Sumergida en el Barro tras Paso de la Tormenta Daniel",
        imagenSrc: "img/articulo3.jpg",
        contenido:
          "El centro de Grecia sigue sumergido en el barro, ocho días después de que la tormenta Daniel azotara la región y provocará inundaciones y riadas que ya han causado 15 víctimas mortales, mientras que miles de personas permanecen sin electricidad o suministro de agua potable.",
        enlace: "./articulo3.html"
      },
      {
        titulo:
          "La capa de hielo marino de la Antártida Occidental, estaría en vías de colapso",
        imagenSrc: "img/articulo4.jpg",
        contenido:
          "El calentamiento global hasta la fecha podría ser ya suficiente para desencadenar la lenta pero segura pérdida de la capa de hielo de la Antártida Occidental en los próximos cientos o miles de años.",
        enlace: "./articulo4.html"
      }
    ];
  
    // Recorre el array de artículos y crear elementos HTML para cada artículo
    for (let i = 0; i < articulos.length; i++) {
      var articulo = articulos[i];
  
      // Crea el elemento <article> con la clase "entrada-articulo"
      var articleElement = document.createElement("article");
      articleElement.classList.add("entrada-articulos");
  
      // Crea el elemento <h1> con el título del artículo
      let h1Element = document.createElement("h1");
      h1Element.textContent = articulo.titulo;
  
      // Crea el elemento <div> con la clase "imagen-contenedor"
      var imagenContenedorDiv = document.createElement("div");
      imagenContenedorDiv.classList.add("imagen-contenedor");
  
      // Crea el elemento <img> con la imagen del artículo
      var imgElement = document.createElement("img");
      imgElement.src = articulo.imagenSrc;
      imgElement.alt = "Imagen satelital";
  
      // Crea el elemento <p> con el contenido del artículo
      var pElement = document.createElement("p");
      pElement.textContent = articulo.contenido;
  
      // Crea el elemento <a> con el enlace "Leer más"
      var aElement = document.createElement("a");
      aElement.href = articulo.enlace;
      aElement.textContent = "Leer más";
      aElement.classList.add("imagen-contenedor");
  
      // Agrega los elementos al artículo
      articleElement.appendChild(h1Element);
      imagenContenedorDiv.appendChild(imgElement);
      articleElement.appendChild(imagenContenedorDiv);
      articleElement.appendChild(pElement);
      articleElement.appendChild(aElement);
  
      // Agrega el artículo al contenedor
      contenedorDiv.appendChild(articleElement);
    }
  
    // Agrega el contenedor al cuerpo del documento
    document.body.appendChild(contenedorDiv);
  
    // Crea el elemento <footer> con la clase "footer"
    var footerElement = document.createElement("footer");
    footerElement.classList.add("footer");
  
    // Crea el elemento <div> con la clase "contenedor"
    let contenedorDiv2 = document.createElement("div");
    contenedorDiv2.classList.add("contenedor");
  
    // Crea el elemento <div> con la clase "barra"
    var barraDiv = document.createElement("div");
    barraDiv.classList.add("barra");
  
    // Crea el elemento <a> con la clase "logo"
    let logoLink2 = document.createElement("a");
    logoLink2.href = "index.html";
    logoLink2.classList.add("logo");
  
    // Crea el elemento <h1> con la clase "logo__nombre"
    var h1Element2 = document.createElement("h1");
    h1Element2.classList.add("logo__nombre", "no-margin", "centrar-texto");
    h1Element2.textContent = "Weather";
  
    // Crea el elemento <span> con la clase "logo__bold"
    var spanElement = document.createElement("span");
    spanElement.classList.add("logo__bold");
    spanElement.textContent = "Solutions";
  
    // Agrega el <span> al <h1>
    h1Element2.appendChild(spanElement);
  
    // Agrega el <h1> al <a>
    logoLink2.appendChild(h1Element2);
  
    // Crea el elemento <div> para las redes sociales
    var redesDiv = document.createElement("div");
  
    // Crea el elemento <h4> (en blanco en tu HTML)
    var h4Element = document.createElement("h4");
  
    // Crea la lista <ul> con la clase "redes"
    var ulElement = document.createElement("ul");
    ulElement.classList.add("redes");
  
    // Crea los elementos <li> para las redes sociales
    var redesSociales = [
      {
        href: "https://www.facebook.com/meteoredofficial",
        imgSrc: "img/facebook.png"
      },
      { href: "https://twitter.com/meteoredmx", imgSrc: "img/twitter.png" },
      {
        href: "https://www.youtube.com/c/MeteoredOfficial",
        imgSrc: "img/youtube.png"
      },
      {
        href: "https://www.instagram.com/meteoredofficial/",
        imgSrc: "img/instagram.png"
      }
    ];
  
    for (let i = 0; i < redesSociales.length; i++) {
      var redSocial = redesSociales[i];
  
      // Crea el elemento <li>
      var liElement = document.createElement("li");
  
      // Crea el elemento <a> para el enlace de la red social
      var aElement2 = document.createElement("a");
      aElement2.href = redSocial.href;
  
      // Crea el elemento <img> para el ícono de la red social
      var imgElement2 = document.createElement("img");
      imgElement2.src = redSocial.imgSrc;
      imgElement2.width = 45;
      imgElement2.height = 45;
  
      // Agrega el <img> al <a>
      aElement2.appendChild(imgElement2);
  
      // Agrega el <a> al <li>
      liElement.appendChild(aElement2);
  
      // Agrega el <li> a la lista <ul>
      ulElement.appendChild(liElement);
    }
  
    // Agrega los elementos al documento
    redesDiv.appendChild(h4Element);
    redesDiv.appendChild(ulElement);
    barraDiv.appendChild(logoLink2);
    barraDiv.appendChild(redesDiv);
    contenedorDiv2.appendChild(barraDiv);
    footerElement.appendChild(contenedorDiv2);
    document.body.appendChild(footerElement);
  });
  