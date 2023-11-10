import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import { modals } from './stores.js';

export const addModalToStack = <T extends SvelteComponent>(
  component: ComponentType<T>,
  props: ComponentProps<T>
) => modals.update((currentModals) => [...currentModals, { component, props }]);

export const addModalToQueue = <T extends SvelteComponent>(
  component: ComponentType<T>,
  props: ComponentProps<T>
) => modals.update((currentModals) => [{ component, props }, ...currentModals]);

export const closeModal = () => modals.update((currentModals) => currentModals.slice(1));

export { addModalToStack as displayModal };
export { addModalToQueue as queue };
export { addModalToStack as stack };
