<script lang="ts">
  import ModalBoilerplate from '$src/components/ModalBoilerplate.svelte';

  export let text: string;
</script>

<ModalBoilerplate>
  <h1>This is a modal with props</h1>
  <p>{text}</p>
</ModalBoilerplate>
