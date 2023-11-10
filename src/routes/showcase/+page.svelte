<script lang="ts">
  import { displayModal } from '$lib/utils.ts';
  import type { Modal } from '$lib/types.ts';

  import TestModal from '$src/components/TestModal.svelte';
  import TestModalWithProps from '$src/components/TestModalWithProps.svelte';

  const displayModalNTimes = (modal: Modal, n: number) => {
    for (let i = 0; i < n; i++) displayModal(modal.component, modal.props);
  };
</script>

<button on:click={() => displayModal(TestModal, {})}>open modal</button>
<br />
<button on:click={() => displayModal(TestModalWithProps, { text: 'foo' })}>open modal</button>
<br />
<button on:click={() => displayModalNTimes({ component: TestModal, props: {} }, 3)}
  >open modal 3 times</button
>
<br />
<button
  on:click={() =>
    [1, 2, 3, 4, 5].forEach(($) => displayModal(TestModalWithProps, { text: `${$}` }))}
  >open modal with props 5 times</button
>
