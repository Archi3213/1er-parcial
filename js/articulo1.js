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
  
    
    // Se crea el div contenedor
    const divContenedor = document.createElement('div');
    divContenedor.className = 'contenedor';
    document.body.appendChild(divContenedor);

    const articulo = {
        h1 : 'Tsunami arrasa la costa de Malvidas',
        linkImagen : 'img/imgarticulo1.jpg',
        p1 : 'Un fuerte terremoto de magnitud 8.5 en la escala de Richter sacudió el océano Índico y  generó un devastador tsunami que azotó las islas Maldivas, causando enormes daños materiales y humanos. Según las autoridades locales, el tsunami alcanzó una altura de más de 10 metros y arrasó con todo a su paso, inundando las islas, destruyendo infraestructuras y arrastrando vehículos, embarcaciones y personas.',
        p2 : 'El balance provisional es de más de 5.000 muertos, 10.000 heridos y 50.000 desaparecidos, además de miles de desplazados que han perdido sus hogares y sus medios de vida. El gobierno de las Maldivas ha declarado el estado de emergencia nacional y ha solicitado ayuda internacional para hacer frente a la catástrofe. Muchos países han enviado equipos de rescate, asistencia médica y suministros básicos para socorrer a los afectados.',
        p3 : 'Entre los damnificados se encuentran también cientos de turistas que habían viajado a las islas Maldivas para disfrutar de sus paradisíacas playas y resorts. Algunos lograron sobrevivir refugiándose en los pisos superiores de los hoteles o en los hidroaviones que los evacuaron, pero otros no tuvieron tanta suerte y fueron arrastrados por el agua o quedaron atrapados bajo los escombros.'
    };

    const articuloContenido = document.createElement('article');
    articuloContenido.className = 'entrada-articulos';

    const h1Articulo = document.createElement('h1');
    const imgArticulo = document.createElement('img');
    const p1Articulo = document.createElement('p');
    const p2Articulo = document.createElement('p');
    const p3Articulo = document.createElement('p');

    h1Articulo.textContent = articulo.h1;
    imgArticulo.src = articulo.linkImagen;
    p1Articulo.textContent = articulo.p1;
    p2Articulo.textContent = articulo.p2;
    p3Articulo.textContent = articulo.p3;


    articuloContenido.appendChild(h1Articulo);
    articuloContenido.appendChild(imgArticulo);
    articuloContenido.appendChild(p1Articulo);
    articuloContenido.appendChild(p2Articulo);
    articuloContenido.appendChild(p3Articulo);
    divContenedor.appendChild(articuloContenido);


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
  