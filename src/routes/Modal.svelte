<script>
    export let imageUrl;
    export let closeModal;
    export let altText;
    export let hasImage;
  </script>
  
  <div class="fixed inset-0 flex items-center justify-center z-40">
    <div class="fixed inset-0 bg-black opacity-80" on:click={closeModal}></div>
    <div class="relative">
      <button class="absolute top-2 right-2 text-white" on:click={closeModal}>
        <i class="fa-solid fa-times"></i>
      </button>
      {#if hasImage}
      <img class="w-4/5 m-auto" src={imageUrl} alt={altText} />
      {/if}
    </div>
  </div>
  