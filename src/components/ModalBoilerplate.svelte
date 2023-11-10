<script lang="ts">
  import { closeModal } from '$lib/utils.ts';
</script>

<div class="modal-boilerplate">
  <button on:click={closeModal}>close modal</button>
  <slot />
</div>

<style lang="scss">
  .modal-boilerplate {
    font-family: sans-serif;
    background-color: white;
    padding: 2rem 4rem;
    border-radius: 16px;
    max-width: min(90vw, 600px);
  }
</style>
