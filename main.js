const header = document.querySelector("header");
const imgLogo = document.createElement("img");
imgLogo.src =
  "https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg";
imgLogo.alt = "logo PC componentes";
imgLogo.classList.add("imagelogo");

const menuHamburguesa = document.createElement("img");
menuHamburguesa.src =
  "https://miro.medium.com/v2/resize:fit:730/1*ZAOQ_hsNNjO1CEEeSB75eQ.png";
menuHamburguesa.alt = "Menu hamburguesa";
menuHamburguesa.classList.add("imageHamburguesa");

const categorias = document.createElement("a");
categorias.href = "#";
categorias.textContent = "Todas las categorías";

const sectionHeader = document.createElement("section");
sectionHeader.classList.add("sectionHeader");
sectionHeader.append(imgLogo, menuHamburguesa, categorias);
header.appendChild(sectionHeader);

const btn = document.createElement("button");
btn.classList.add("dropbtn");
btn.textContent = "Todo el catálogo ▼";

const divContainerBtn = document.createElement("div");
divContainerBtn.classList.add("dropdown-content");
const todoCatalogo = document.createElement("a");
todoCatalogo.href = "#";
todoCatalogo.textContent = "Todo el catálogo";
const reacondicionados = document.createElement("a");
reacondicionados.href = "#";
reacondicionados.textContent = "reacondicionados";
divContainerBtn.append(todoCatalogo, reacondicionados);
const divContainer = document.createElement("div");
divContainer.classList.add("dropdown");
divContainer.append(btn, divContainerBtn);
header.appendChild(divContainer);

const buscar = document.createElement("input");
buscar.type = "search";
buscar.placeholder = "Buscar en PC componentes";
buscar.classList.add("inputBuscar");
header.appendChild(buscar);

const divBuscar = document.createElement("div");
divBuscar.classList.add("divBuscar");
divBuscar.append(divContainer, buscar);
header.appendChild(divBuscar);

const ul = document.createElement("ul");
const iuser = document.createElement("i");
iuser.classList.add("fas", "fa-user");
const miCuenta = document.createElement("li");
const enlacemicuenta = document.createElement("a");
enlacemicuenta.href = "https://www.pccomponentes.com/login";
enlacemicuenta.textContent = "Mi  cuenta";
miCuenta.append(iuser, enlacemicuenta);
const icart = document.createElement("i");
icart.classList.add("fas", "fa-cart-flatbed");
const miCesta = document.createElement("li");
const enlacemicesta = document.createElement("a");
enlacemicesta.href = "https://www.pccomponentes.com/";
enlacemicesta.textContent = "Mi  cesta";
miCesta.append(icart, enlacemicesta);
ul.append(iuser, miCuenta, icart, miCesta);
header.appendChild(ul);

const h1 = document.createElement("h1");
const divparrafos = document.createElement("div");
divparrafos.classList.add("divparrafos");
h1.textContent = "Especial Monitores";
const p1 = document.createElement("p");
p1.textContent =
  "Los mejores monitores relación calidad precio para ordenador ofrecen la combinación perfecta de resolución, frecuencia de actualización y tamaño para sumergirte en tus mundos de juego favoritos, o para ser todo lo productivo en tu trabajo que sea posible..";
divparrafos.append(h1, p1);

const imageframe = document.createElement("img");
imageframe.src =
  "https://img.pccomponentes.com/pcblog/529/elegir-mejor-monitor.jpg";
imageframe.alt = "Imagen de PCs";

const sectionframe = document.querySelector("#mainframe");
sectionframe.append(divparrafos, imageframe);

const screens = [
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1075/10756386/1454-alurin-corevision-100ipslite-238-fhd-100hz-freesync-comprar.jpg",
    title: "Alurin CoreVision 100IPSLite 23.8 FHD 100Hz Freesync",
    url: "https://www.pccomponentes.com/alurin-corevision-100ipslite-238-fhd-100hz-freesync",
    price: 84.99,
    star: 4.5,
    seller: "Pccomponentes",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1074/10740783/1872-msi-g24c4-e2-236-led-fullhd-180-hz-freesync-premium-curva-c8ce3664-afa7-4146-8917-e6ee95e29276.jpg",
    title:
      "MSI G24C4 E2 23.6 LED FullHD 180 Hz FreeSync Premium Curva",
    url: "https://www.pccomponentes.com/msi-g24c4-e2-236-led-fullhd-180-hz-freesync-premium-curva",
    price: 119,
    star: 4.7,
    seller: "Pccomponentes",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1081/10817370/1698-asus-rog-swift-oled-pg32ucdm-315-qd-oled-ultrahd-4k-240hz-g-sync-compatible-usb-c.jpg",
    title: "ASUS ROG Swift OLED PG32UCDM 31.5 QD-OLED UltraHD 4K 240Hz G-SYNC Compatible USB-C",
    url: "https://www.pccomponentes.com/asus-rog-swift-oled-pg32ucdm-315-qd-oled-ultrahd-4k-240hz-g-sync-compatible-usb-c",
    price: 1469,
    star: 4,
    seller: "Pccomponentes",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1076/10769991/1701-philips-27m1n3200zs-00-27-led-ips-fullhd-165hz-freesync-premium.jpg",
    title:
      "Philips 27M1N3200ZS/00 27 LED IPS FullHD 165Hz FreeSync Premium",
    url: "https://www.pccomponentes.com/philips-27m1n3200zs-00-27-led-ips-fullhd-165hz-freesync-premium",
    price: 177.84,
    star: 4.1,
    seller: "eWeki",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1082/10827108/1149-aoc-24b3hma2-238-led-va-fullhd-100hz.jpg",
    title: "AOC 24B3HMA2 23.8 LED VA FullHD 100Hz",
    url: "https://www.pccomponentes.com/aoc-24b3hma2-238-led-va-fullhd-100hz",
    price: 149.9,
    star: 4.2,
    seller: "Macservice",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1020/10205054/1734-xiaomi-mi-2k-gaming-monitor-27-ips-qhd-165hz.jpg",
    title: "Xiaomi Mi 2K Gaming Monitor 27 IPS QHD 165Hz",
    url: "https://www.pccomponentes.com/xiaomi-mi-2k-gaming-monitor-27-ips-qhd-165hz",
    price: 327.86,
    star: 4.,
    seller: "visunext ES",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1006/10060172/1211-philips-32m1n5800a-00-315-led-ips-ultrahd-4k-144hz.jpg",
    title: "Philips 32M1N5800A/00 31.5 LED IPS UltraHD 4K 144Hz",
    url: "https://www.pccomponentes.com/philips-32m1n5800a-00-315-led-ips-ultrahd-4k-144hz",
    price: 479.99,
    star: 4.5,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1084/10849314/1961-msi-mag-342cqr-e2-34-led-va-ultrawide-qhd-180hz-curva.jpg",
    title: "MSI MAG 342CQR E2 34 LED VA UltraWide QHD 180Hz Curva",
    url: "https://www.pccomponentes.com/monitor-msi-mag-342cqr-e2-34-led-va-ultrawide-qhd-180hz-curva",
    price: 349,
    star: 4.7,
    seller: "Pccomponentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1084/10844479/1381-xiaomi-g34wqi-34-led-ultrawide-qhd-180hz-freesync-curva.jpg",
    title: "Xiaomi G34WQi 34 LED UltraWide QHD 180Hz FreeSync Curva",
    url: "https://www.pccomponentes.com/aoc-q27g2e-27-led-qhd-155hz-freesync-premium",
    price: 276.36,
    star: 4.2,
    seller: "AhorroElectro",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1046/10465191/118-pccom-elysium-go2780cv-27-led-fullhd-165hz-freesync-curva-comprar.jpg",
    title: "PcCom Elysium GO2780CV 27 LED FullHD 165Hz Freesync",
    url: "https://www.pccomponentes.com/pccom-elysium-go2780cv-27-led-fullhd-165hz-freesync-curva",
    price: 149.99,
    star: 4.6,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1076/10764138/1111-acer-b247y-e-238-led-ips-fullhd-100hz-freesync.jpg",
    title: "Acer B247Y E 23.8 LED IPS FullHD 100Hz FreeSync",
    url: "https://www.pccomponentes.com/acer-b247y-e-238-led-ips-fullhd-100hz-freesync",
    price: 147.87,
    star: 5,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1083/10832156/1175-asus-rog-strix-xg27ucs-27-led-fast-ips-ultrahd-4k-160hz-g-sync-compatible.jpg",
    title: "ASUS ROG Strix XG27UCS 27 LED Fast IPS UltraHD 4K 160Hz G-Sync Compatible",
    url: "https://www.pccomponentes.com/monitor-asus-rog-strix-xg27ucs-27-led-fast-ips-ultrahd-4k-160hz-g-sync-compatible",
    price: 399,
    star: 4.6,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1064/10642442/1379-msi-optix-g32cq4-e2-315-led-wqhd-170hz-freesync-premium-curva.jpg",
    title: "MSI Optix G32CQ4 E2 31.5 LED WQHD 170Hz FreeSync Premium Curva",
    url: "https://www.pccomponentes.com/msi-optix-g32cq4-e2-315-led-wqhd-170hz-freesync-premium-curva",
    price: 249.01,
    star: 5,
    seller: "Pccomponentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1082/10820781/1428-alurin-alu-27-100ips-f-27-ips-fhd-100hz-freesync-blanco-comprar.jpg",
    title: "Alurin ALU-27-100IPS-F 27 IPS FHD 100Hz FreeSync Blanco",
    url: "https://www.pccomponentes.com/monitor-alurin-alu-27-100ips-f-27-ips-fhd-100hz-freesync-blanco",
    price: 114.95,
    star: 3.5,
    seller: "eWeki",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1084/10847588/1298-aoc-q27g4xf-27-led-fast-ips-qhd-180hz.jpg",
    title: "AOC Q27G4XF 27 LED Fast IPS QHD 180Hz",
    url: "https://www.pccomponentes.com/monitor-aoc-q27g4xf-27-led-fast-ips-qhd-180hz",
    price: 109.9,
    star: 4.7,
    seller: "Macservice",
    delivery: "Envio Gratis",
  },
  
];

const products = document.querySelector("#products");
const ulscreen = document.createElement("ul");
for (const screen of screens) {
  const imagescreen = document.createElement("a");
  imagescreen.href = screen.url;
  const imgscreen = document.createElement("img");
  imgscreen.src = screen.image;
  imgscreen.alt = screen.title;
  imagescreen.appendChild(imgscreen);

  const titleimage = document.createElement("a");
  titleimage.href = screen.url;
  titleimage.textContent = screen.title;
  const pricescreens = document.createElement("h2");
  pricescreens.textContent = screen.price + " €";

  const starscreens = document.createElement("div");
  const starCount = screen.star;
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    if (i <= starCount) {
      star.className = "fas fa-star"; // Estrella llena
    } else if (i === Math.ceil(starCount) && !Number.isInteger(starCount)) {
      star.className = "fas fa-star-half-alt"; // Media estrella
    } else {
      star.className = "far fa-star"; // Estrella vacía
    }
    starscreens.appendChild(star);
  }
  const sellerscreen = document.createElement("h4");
  sellerscreen.textContent = "Vendido y enviado por ";
  const sellerspan = document.createElement("span");
  sellerspan.textContent = screen.seller;
  sellerspan.classList.add("classspan");
  sellerscreen.appendChild(sellerspan);
  const deliveryscreen = document.createElement("p");
  deliveryscreen.textContent = screen.delivery;
  const liscreen = document.createElement("li");
  liscreen.append(
    imagescreen,
    titleimage,
    pricescreens,
    starscreens,
    sellerscreen,
    deliveryscreen
  );
  ulscreen.appendChild(liscreen);
}

products.appendChild(ulscreen);

const searchfilter = document.querySelector("#filter");

const form = document.createElement("form");
form.classList.add("formclass");
form.action = "";
form.method = "post";
const marca = document.createElement("p");
marca.textContent = "Marca";
form.appendChild(marca);

const marcas = ["Xiaomi","Alurin","PcCom", "Philips", "MSI", "AOC", "Acer", "Asus"];
marcas.forEach((modelo) => {
  const checkbox = document.createElement("input");
  checkbox.name = "marcas[]";
  checkbox.type = "checkbox";
  checkbox.value = modelo.toLocaleLowerCase();
  checkbox.addEventListener("change", filterProducts);
  const label = document.createElement("label");
  label.textContent = modelo;
  const divcheckbox = document.createElement("div");
  divcheckbox.classList.add("divcheckbox");
  divcheckbox.append(checkbox, label);
  form.appendChild(divcheckbox);
});
searchfilter.appendChild(form);

const formresolution = document.createElement("form");
formresolution.classList.add("formresolutionclass");
formresolution.action = "";
formresolution.method = "post";
const Resolución = document.createElement("p");
Resolución.textContent = "Frecuencia de refresco";
formresolution.appendChild(Resolución);

const resolutions = ["100HZ","144HZ", "165HZ", "180HZ","200HZ","240HZ", "280HZ"];
resolutions.forEach((resolution) => {
  const checkboxresolution = document.createElement("input");
  checkboxresolution.name = "resolutions[]";
  checkboxresolution.type = "checkbox";
  checkboxresolution.value = resolution.toLocaleLowerCase();
  checkboxresolution.addEventListener("change", filterProducts);
  const labelresolution = document.createElement("label");
  labelresolution.textContent = resolution;

  const divcheckboxresolution = document.createElement("div");
  divcheckboxresolution.classList.add("divcheckboxresolution");
  divcheckboxresolution.append(checkboxresolution, labelresolution);
  formresolution.appendChild(divcheckboxresolution);
});

searchfilter.appendChild(formresolution);

const formsupplier = document.createElement("form");
formsupplier.classList.add("formsupplierclass");
formsupplier.action = "";
formsupplier.method = "post";
const psupplier = document.createElement("p");
psupplier.textContent = "Vendedor";
formsupplier.appendChild(psupplier);

const supplier = ["Pccomponentes","visunext ES", "eWeki", "Macservice","AhorroElectro"];
supplier.forEach((suppliers) => {
  const checkboxsupplier = document.createElement("input");
  checkboxsupplier.name = "supplier[]";
  checkboxsupplier.type = "checkbox";
  checkboxsupplier.value = suppliers.toLocaleLowerCase();
  checkboxsupplier.addEventListener("change", filterProducts);
  const labelsupplier = document.createElement("label");
  labelsupplier.textContent = suppliers;

  const divcheckboxsupplier = document.createElement("div");
  divcheckboxsupplier.classList.add("divcheckboxsupplier");
  divcheckboxsupplier.append(checkboxsupplier, labelsupplier);
  formsupplier.appendChild(divcheckboxsupplier);
});

searchfilter.appendChild(formsupplier);

function filterProducts() {
  const selectedBrands = Array.from(
    document.querySelectorAll("input[name='marcas[]']:checked")
  ).map((cb) => cb.value);
  const selectedResolutions = Array.from(
    document.querySelectorAll("input[name='resolutions[]']:checked")
  ).map((cb) => cb.value);
  const selectedSuppliers = Array.from(
    document.querySelectorAll("input[name='supplier[]']:checked")
  ).map((cb) => cb.value);

  const filteredScreens = screens.filter((screen) => {
    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(screen.title.toLowerCase().split(" ")[0]);
    const matchesResolution =
      selectedResolutions.length === 0 ||
      selectedResolutions.some((res) =>
        screen.title.toLowerCase().includes(res)
      );
    const matchesSupplier =
      selectedSuppliers.length === 0 ||
      selectedSuppliers.includes(screen.seller.toLowerCase());

    return matchesBrand && matchesResolution && matchesSupplier;
  });

  renderProducts(filteredScreens);
}

// Renderizar productos
function renderProducts(filteredScreens) {
  const products = document.querySelector("#products");
  products.innerHTML = "";
  const ulscreen = document.createElement("ul");

  for (const screen of filteredScreens) {
    const imagescreen = document.createElement("a");
    imagescreen.href = screen.url;
    const imgscreen = document.createElement("img");
    imgscreen.src = screen.image;
    imgscreen.alt = screen.title;
    imagescreen.appendChild(imgscreen);

    const titleimage = document.createElement("a");
    titleimage.href = screen.url;
    titleimage.textContent = screen.title;
    const pricescreens = document.createElement("h2");
    pricescreens.textContent = screen.price + " €";

    const starscreens = document.createElement("div");
    const starCount = screen.star;
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      if (i <= starCount) {
        star.className = "fas fa-star"; // Estrella llena
      } else if (i === Math.ceil(starCount) && !Number.isInteger(starCount)) {
        star.className = "fas fa-star-half-alt"; // Media estrella
      } else {
        star.className = "far fa-star"; // Estrella vacía
      }
      starscreens.appendChild(star);
    }
    const sellerscreen = document.createElement("h4");
    sellerscreen.textContent = "Vendido y enviado por ";
    const sellerspan = document.createElement("span");
    sellerspan.textContent = screen.seller;
    sellerspan.classList.add("classspan");
    sellerscreen.appendChild(sellerspan);
    const deliveryscreen = document.createElement("p");
    deliveryscreen.textContent = screen.delivery;
    const liscreen = document.createElement("li");
    liscreen.append(
      imagescreen,
      titleimage,
      pricescreens,
      starscreens,
      sellerscreen,
      deliveryscreen
    );
    ulscreen.appendChild(liscreen);
  }

  products.appendChild(ulscreen);
}

// Inicializar con todos los productos
renderProducts(screens);