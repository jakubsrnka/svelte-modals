import { writable } from 'svelte/store';
import type { Modal } from './types.js';

export const modals = writable<Modal[]>([]);
