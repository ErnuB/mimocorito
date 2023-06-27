<script>
    import { onMount } from 'svelte';

    let seccion = [
        { imagen: "/img/brush-azul.png", id: 'antojitos', nombre: "Antojitos", descripcion: "" },
        { imagen: "/img/brush-morado.png", id: 'desayunos', nombre: "Desayunos Clásicos", descripcion: "(Acompañados de frijol con queso fresco y tortillas al comal)." },
        { imagen: "/img/brush-rosa.png", id: 'omelette', nombre: "Omelettes", descripcion: "(Acompañados de frijol con queso oreado y tortillas de comal)" },
        { imagen: "/img/brush-rosita.png", id: 'combinacion', nombre: "Combinaciones Regionales", descripcion: "" },
        { imagen: "/img/brush-azul.png", id: 'chilaquiles', nombre: "Chilaquileando", descripcion: "Chilaquiles coronados con 2 huevos estrellados o pollo acompañados de frijoles con queso oreado. Selecciona los chilaquiles de tu preferencia" },
        { imagen: "/img/brush-morado.png", id: 'infantil', nombre: "Desayunos Infantiles", descripcion: "" },
        { imagen: "/img/brush-rosa.png", id: 'bebidas', nombre: "Bebidas", descripcion: "" },
    ];

    let isNavOpen = false;

    const toggleNav = () => {
        isNavOpen = !isNavOpen;
        const navBar = document.getElementById('nav-bar');
        navBar.setAttribute('aria-expanded', isNavOpen.toString());
    };

    const closeNav = () => {
        isNavOpen = false;
        const navBar = document.getElementById('nav-bar');
        navBar.setAttribute('aria-expanded', isNavOpen.toString());
    };

    onMount(() => {
        const navBar = document.getElementById('nav-bar');
        navBar.setAttribute('aria-expanded', isNavOpen.toString());
    });
</script>

<section class="sticky top-0 flex flex-col bg-inherit z-30">
    <div class="flex items-center justify-center bg-violet-950">
        <div class="m-4 grow">
            <a href="#">
                <img src="/img/mimocorito.png" alt="Mi Mocorito" class="max-h-12">
            </a>
        </div>
        <button class="p-6" aria-expanded="{isNavOpen}" aria-controls="nav-bar" on:click={toggleNav}><i class="fa-solid text-xl fa-bars"></i></button>
    </div>
{#if isNavOpen}
    <nav id="nav-bar" class="flex flex-col items-center justify-center bg-yellow-400">
        {#each seccion as seccionItem}
        <div class="relative my-4">
            <a href="#{seccionItem.id}" class="m-4 relative text-lg z-30 font-mocorito font-semibold" on:click={closeNav}>{seccionItem.nombre}</a>
            <img src="{seccionItem.imagen}" alt="Pincelada" class="absolute top-0 z-20 h-10 w-full pointer-events-none">
        </div>
        {/each}
    </nav>
{/if}
</section>
