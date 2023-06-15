<script>
    export let images = [
      { path: "/img/image1.jpg", description: "Description 1" },
      { path: "/img/image2.jpg", description: "Description 2" },
      { path: "/img/image3.jpg", description: "Description 3" },
      { path: "/img/image4.jpg", description: "Description 1" },
      { path: "/img/image5.jpg", description: "Description 2" },
      { path: "/img/image6.jpg", description: "Description 3" }
    ];  
 
  import { onMount, createEventDispatcher } from "svelte";

  let currentIndex = 0;
  const dispatch = createEventDispatcher();

  onMount(() => {
    const transitionInterval = setInterval(() => {
      handleSwipe("left");
    }, 4000);

    return () => clearInterval(transitionInterval);
  });

  function handleSwipe(direction) {
    const totalImages = images.length;
    let newIndex;

    if (direction === "left") {
      newIndex = (currentIndex + 1) % totalImages;
    } else if (direction === "right") {
      newIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      dispatch("imageChanged", currentIndex);
    }
  }
</script>

<style>
  .carrousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    overflow: hidden;
    position: relative;
    touch-action: pan-y;
  }

  .carrousel img {
    width: 100%;
    object-fit: cover;
    max-height: 150%;
    transition: transform 0.3s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: transform;
  }

  .current {
    transform: translateX(0%);
    z-index: 2;
  }

  .next {
    transform: translateX(100%);
    z-index: 1;
  }

  .previous {
    transform: translateX(-100%);
    z-index: 1;
  }

  .transitioning {
    transition: transform 2s ease-out;
  }
</style>

<div class="carrousel" on:swipeleft={() => handleSwipe("left")} on:swiperight={() => handleSwipe("right")}>
  {#each images as image, index}
    <img
      src={image.path}
      alt={image.description}
      class:current={index === currentIndex}
      class:next={index === (currentIndex + 1) % images.length}
      class:previous={index === (currentIndex - 1 + images.length) % images.length}
      class:transitioning={index === currentIndex || index === (currentIndex + 1) % images.length || index === (currentIndex - 1 + images.length) % images.length}
    />
  {/each}
</div>
