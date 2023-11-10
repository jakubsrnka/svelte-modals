import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';

export type Modal = {
  component: ComponentType<SvelteComponent>;
  props?: ComponentProps<SvelteComponent>;
};
