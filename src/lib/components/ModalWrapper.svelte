<script lang="ts">
  import { modals } from '$lib/stores.js';
</script>

{#if $modals.length > 0}
  {@const modal = $modals[0]}
  <div class="modal-wrapper">
    <svelte:component this={modal.component} {...modal.props} />
  </div>
  <slot />
{:else}
  <slot />
{/if}

<style lang="scss">
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100svw;
    height: 100svh;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
