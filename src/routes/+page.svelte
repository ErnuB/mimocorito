<script>
    import Carrusel from "./Carrusel.svelte";
    import Navbar from "./Navbar.svelte";
    export let toggleNav
    import Modal from "./Modal.svelte";

    let isOverlayOpen = false;
    let selectedImage = null;
    let alternativeText = null;

    function openModal(imagen, altText) {
        selectedImage = imagen;
        alternativeText = altText;
        isOverlayOpen = true;
    };

    function closeModal() {
        selectedImage = null;
        alternativeText = null;
        isOverlayOpen = false;
    };


    let seccion = [
        {imagen:"/img/brush-azul.png", id:'antojitos', nombre:"Antojitos", descripcion:""},
        {imagen:"/img/brush-morado.png", id:'desayunos', nombre:"Desayunos Clásicos", descripcion:"(Acompañados de frijol con queso fresco y tortillas al comal)."},
        {imagen:"/img/brush-rosa.png", id:'omelette', nombre:"Omelettes", descripcion:"(Acompañados de frijol con queso oreado y tortillas de comal)"},
        {imagen:"/img/brush-rosita.png", id:'combinacion', nombre:"Combinaciones Regionales", descripcion:""},
        {imagen:"/img/brush-azul.png", id:'chilaquiles', nombre:"Chilaquileando", descripcion:"Chilaquiles coronados con 2 huevos estrellados o pollo acompañados de frijoles con queso oreado. Selecciona los chilaquiles de tu preferencia "},
        {imagen:"/img/brush-morado.png", id:'infantil', nombre:"Desayunos Infantiles", descripcion:""},
        {imagen:"/img/brush-rosa.png", id:'bebidas', nombre:"Bebidas", descripcion:""},
    ];

    let items = [
        {imagen:'/img/ayuntamiento.jpg', category: 'antojitos', nombre: 'Requesón Botanero', descripcion: "", precio: 60, hasImage:true },
        { category: 'antojitos', nombre: 'Quesito Picosito', descripcion: "", precio: 85 },
        { category: 'antojitos', nombre: 'Pan tostadito', descripcion: " Con mantequilla.", precio: 40 },
        { category: 'antojitos', nombre: 'Mini Pancakes', descripcion: "Espolvoreados  en azucar glass, platano, acompanados de mermelada de fresa y miel maple.", precio: 95 },
        { category: 'antojitos', nombre: 'Sopes Mocorito', descripcion: "4 sopes (chicharrón, chilorio, papas con chorizo y asientos con queso) servidas con lechuga y cebolla curtida y una rica salsa de mesa.", precio: 95 },
        { category: 'antojitos', nombre: 'Torta de Pechuga', descripcion: "Pechuga de pollo con jamon, aguacate, asadera tomate, lechuga, cebolla y salsa ranchera, acompanada de papas fritas.", precio: 85 },
        { category: 'desayunos', nombre: 'Huevos a la Mexicana', descripcion: "", precio: 95 },
        { category: 'desayunos', nombre: 'Huevos con Nopales/Ejotes', descripcion: "", precio: 95 },
        { category: 'desayunos', nombre: 'Huevos con Jamón/Tocino', descripcion: "", precio: 95 },
        { category: 'desayunos', nombre: 'Huesvos con Machaca/Chilorio', descripcion: "", precio: 110 },
        { category: 'desayunos', nombre: 'Huesvos con Chorizo', descripcion: "", precio: 99 },
        { category: 'desayunos', nombre: 'Huesvos Rancheros', descripcion: "", precio: 99 },
        { category: 'omelette', nombre: 'Champiñones', descripcion: "", precio: 99 },
        { category: 'omelette', nombre: 'Jamón', descripcion: "", precio: 95 },
        { category: 'omelette', nombre: 'Jamón y Champiñones', descripcion: "", precio: 105 },
        { category: 'omelette', nombre: 'Espinacas', descripcion: "", precio: 90 },
        { category: 'omelette', nombre: 'Corizo, Chilorio ó Machaca', descripcion: "", precio: 120 },
        { category: 'combinacion', nombre: 'Mi Mocorito', descripcion: "2 huevos estrellados o revueltos, acompañados de chilaquiles en salsa de chicharrón, quesadilla rellena de chilorio y frijoles con queso oreado.", precio: 140 },
        { category: 'combinacion', nombre: 'Mi Mocorito Recargado', descripcion: "2 huevos estrellados o revueltos, acompañados de 3 gorditas rellenas (chicharrón, papas con chorizo, mole, machaca, rajas, chilorio) y frijoles con queso oreado.", precio: 145 },
        { category: 'combinacion', nombre: 'San Benito', descripcion: "2 huevos estrellados o revueltos, tamal de elote frito bañado en rajas acompañado de frijol con queso oreado.", precio: 125 },
        { category: 'combinacion', nombre: 'Rosamorada', descripcion: "Mollete doradito con frijol y queso Chihuahua, coronado de huevos estrellados o revueltos, acompañados de salsa mexicana.", precio: 125 },
        { category: 'combinacion', nombre: 'Rancho Viejo', descripcion: "2 huevos revueltos con machaca, tamal de elote gratinado, chilaquiles poblanos y frijol con queso oreado.", precio: 145 },
        { category: 'combinacion', nombre: 'El Sinaloense', descripcion: "Machaca a la mexicana, chilorio y chicharrón en salsa mixta, acompañados de chilaquiles rancheros y frijol con queso oreado.", precio: 158 },
        { category: 'combinacion', nombre: 'El Norteño', descripcion: "Sopitas con tomate y chilorio coronados de 2 huevos estrellados o revueltos, acompañados de gordita rellena de chicharrón y frijol con queso oreado.", precio: 145 },
        { category: 'combinacion', nombre: 'Pericos', descripcion: "Huevos estrellados montados sobre tortilla frita, uno bañado con rajas en crema y el otro con  mole, acompañado de tamal de elote frito y frijol con queso oreado.", precio: 145 },
        { category: 'combinacion', nombre: 'El Guasimal', descripcion: "Omelette relleno de rajas y queso, bañado en salsa poblana, chilaquiles rancheros y frijoles con queso oreado.", precio: 135 },
        { category: 'combinacion', nombre: 'El Valle', descripcion: "2 huevos revueltos con chilorio, tamal de elote gratinado, chilaquiles enmolados acompañados de frijol con queso oreado.", precio: 145 },
        { category: 'combinacion', nombre: 'La Misión', descripcion: "Papitas a la mexicana coronadas con huevo estrellado, quesadilla de chicharrón y acompañadas de frijol con queso fresco. ", precio: 135 },
        { category: 'combinacion', nombre: 'Cerro Agudo', descripcion: "Calabacitas a la mexicana, requeson, chilaquiles en salsa de cacahuate, acompañado de frijol con queso oreado.", precio: 140 },
        { category: 'combinacion', nombre: 'Las Higueras', descripcion: "3 enchiladas rancheras  rellenas de papas con chorizo gratinadas  coronadas con  2 huevos estrellados  y acompañados de frijol con queso.", precio: 150 },
        { category: 'combinacion', nombre: 'La Huerta', descripcion: "3 gorditas rellenas (chicharrón, chilorio, machaca, papas con chorizo, rajas poblanas, mole) acompañados de frijol con queso fresco, salsa mexicana y ensalada fresca", precio: 115 },
        { category: 'combinacion', nombre: 'Las Juntas', descripcion: "Sopitas con huevo, sincronizada, acompañados de frijol con queso fresco", precio: 110 },
        { category: 'combinacion', nombre: 'Las Tahonas', descripcion: "Huevos estrellados/revueltos, tocino doradito, chilaquiles suizos y frijol con queso", precio: 135 },
        { category: 'combinacion', nombre: 'Lomas Blancas', descripcion: "Machaca a la mexicana o mochomeada acompañada de frijoles, asadera y ensalada fresca ", precio: 135 },
        { category: 'combinacion', nombre: 'El Pochote', descripcion: "Chicharron en salsa tatemada, acompañada de ricos frijoles, asadera y ensalda fresca.", precio: 140 },
        { category: 'combinacion', nombre: 'Tecomate', descripcion: "Higado encebollado, acomapañado de salsa verde picosita, frijoles y asadera ", precio: 125 },
        { category: 'combinacion', nombre: 'El Chinal', descripcion: "Bistec ranchero, dos quesadillas de maiz, frijol, asadera y ensalada fresca.", precio: 140 },
        { category: 'chilaquiles', nombre: 'Salsa Ranchera', descripcion: "", precio: 120 },
        { category: 'chilaquiles', nombre: 'Salsa Verde', descripcion: "", precio: 120 },
        { category: 'chilaquiles', nombre: 'Crema Suiza', descripcion: "", precio: 130 },
        { category: 'chilaquiles', nombre: 'Crema Poblana', descripcion: "", precio: 130 },
        { category: 'chilaquiles', nombre: 'Salsa Habanera', descripcion: "", precio: 120 },
        { category: 'chilaquiles', nombre: 'Mole', descripcion: "", precio: 130 },
        { category: 'chilaquiles', nombre: 'Salsa de Chicharrón', descripcion: "", precio: 130 },
        { category: 'infantil', nombre: 'Mocorito', descripcion: "1 Huevo estrellado o revuelto, con una sincronizada y frijol.", precio: 70 },
        { category: 'infantil', nombre: 'Pancakitos', descripcion: "Mini pancakes, 1 huevo estrellado o revuelto y tiras de tocino frito.", precio: 80 },
        { category: 'infantil', nombre: 'Huertita', descripcion: "3  gorditas rellenas, una de frijol con queso, una de papas gratinadas y una de huevos  con jamón.", precio: 75 },
        { category: 'infantil', nombre: 'Chinalito', descripcion: "Torta rellena de huevo con jamón gratinada y papas fritas ", precio: 85 },
        { category: 'infantil', nombre: 'Rosamoradita', descripcion: "Mini molletes de frijol con queso gratinado, acompañados de 1 huevo estrellado o revuelto.", precio: 80 },
        { category: 'bebidas', nombre: 'Jugo de Naranja', descripcion: "", precio: 42 },
        { category: 'bebidas', nombre: 'Jugo Verde', descripcion: "", precio: 50 },
        { category: 'bebidas', nombre: 'Limonada Natural', descripcion: "", precio: 35 },
        { category: 'bebidas', nombre: 'Limonada Mineral', descripcion: "", precio: 45 },
        { category: 'bebidas', nombre: 'Licuado de Fresa', descripcion: "", precio: 45 },
        { category: 'bebidas', nombre: 'Licuado de Plátano', descripcion: "", precio: 40 },
        { category: 'bebidas', nombre: 'Agua de Mazapán Artesanal', descripcion: "", precio: 40 },
        { category: 'bebidas', nombre: 'Chocomilk', descripcion: "", precio: 40 },
        { category: 'bebidas', nombre: 'Café Americano', descripcion: "", precio: 30 },
        { category: 'bebidas', nombre: 'Café de la olla', descripcion: "", precio: 38 },
        { category: 'bebidas', nombre: 'Agua para café', descripcion: "", precio: 25 },
        { category: 'bebidas', nombre: 'Leche para café', descripcion: "", precio: 35 },
        { category: 'bebidas', nombre: 'Refrescos', descripcion: "", precio: 35 },
    ];

  // Function to filter items based on section category
  function getFilteredItems(category) {
    return items.filter(item => item.category === category);
  }
</script>

<svelte:head>
  <title>Menú Mi Mocorito</title>
  <link rel="icon" href="/img/mimocorito.ico">
</svelte:head>

<header>
  <div class="w-4/5 m-auto p-5">
    <img src="/img/mimocorito.png" alt="Mi Mocorito">
  </div>
  <Carrusel />
</header>
<Navbar {toggleNav}/>
  <div class="p-4">
    <div class="flex gap-2 justify-center items-center">
    <img src="/img/mimocorito.ico" alt="Girasol" class="max-h-10">
    <p class="text-yellow-600 font-extrabold text-2xl italic text-center font-mocorito">El mejor mañanero con sabor a Mocorito</p>
    </div>
    {#each seccion as seccionItem}
    <div id="{seccionItem.id}" class="scroll-mt-20"></div>
    <div class="bg-yellow-400 py-4 my-4">
    <div class="flex justify-center relative">
        <img src="{seccionItem.imagen}" alt="Pincelada" class="absolute h-8 w-full z-0">
        <h2 class="text-xl font-bold z-10">{seccionItem.nombre}</h2>
    </div>
    <p class="text-sm mx-5">{seccionItem.descripcion}</p>
      {#each getFilteredItems(seccionItem.id) as item}
      {#if item.hasImage}
      <div class="flex gap-2 m-4 items-center">
        <h3 class="text-lg font-semibold" on:click={() => openModal('/img/ayuntamiento.jpg','Cuernito con huevo')}>{item.nombre}&thinsp;<i class="fa-regular fa-image"></i></h3>
        <div class="grow bg-violet-950 h-0.5"></div>
        <p>${item.precio}</p>
        </div>
      {:else}
      <div class="flex gap-2 m-4 items-center">
        <h3 class="text-lg font-semibold">{item.nombre}</h3>
        <div class="grow bg-violet-950 h-0.5"></div>
        <p>${item.precio}</p>
        </div>
      {/if}
        <p class="ml-5 mr-16 -mt-4 text-sm text-justify">{item.descripcion}</p>
      {/each}
    </div>
    <p class="px-2 my-8 font-cursiva text-3xl font-extralight text-center text-white">No dejes para mañana lo que puedes comerte hoy</p>
    {/each}
    
</div>
<div class="bg-white rounded-full w-12 h-12 text-center fixed z-20 top-24 right-2">
  <a href="https://wa.me/5216673718251" target="_blank"><i class="fa-brands fa-whatsapp text-4xl mt-1 text-green-600"></i></a>
</div>
<footer class="fixed bottom-0 z-50">
    <div class="flex p-4 bg-yellow-500">
        <a href="https://goo.gl/maps/xsDGc3mruRXqv6D16" class="text-sm w-2/3 border-r-2 px-2 border-violet-950"><i class="fa fa-location-dot"></i>&thinsp;Blvrd Dr Manuel Romero 93, Chapultepec, 80030 Culiacán Rosales, Sin.</a>
        <div class="flex flex-col mx-2 item-center w-1/3">
            <p class="self-center">Siguenos:</p>
            <div class="flex justify-around text-xl">
            <a href="https://www.facebook.com/Mi-Mocorito-111821841312821/"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/mi_mocorito/"><i class="fa-brands fa-instagram"></i></a>
            <a href="tel:+526673718251"><i class="fa fa-phone"></i></a>
            </div>
        </div>
    </div>
</footer>
{#if isOverlayOpen}
  <Modal imageUrl={selectedImage} altText={alternativeText} closeModal={closeModal} />
{/if}