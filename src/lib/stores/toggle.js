import { writable } from "svelte/store";

const stored = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    open: (name, data) =>
      update((n) => ({ ...n, [name]: { value: true, data } })),
    close: (name, data) =>
      update((n) => ({ ...n, [name]: { value: false, data } })),
  };
};

export const toggle = stored();
