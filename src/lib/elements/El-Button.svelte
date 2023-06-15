<script>
  import { Icon } from "svelte-hero-icons";
  import { space } from "svelte/internal";

  export let color = "";
  export let size = "16";
  export let outline = null;
  export let icon = null;
  export let rounded = null;
  export let pill = null;
  export let href = null;
</script>

{#if href}
  <a {href} role="button" class={color} class:outline class:rounded class:pill>
    {#if icon}
      <span><Icon src={icon} {size} solid /></span>
    {/if}
    {#if $$slots.default}
      <span><slot /></span>
    {/if}
  </a>
{/if}

{#if !href}
  <button class={color} class:outline class:rounded class:pill>
    {#if icon}
      <span class="icon"><Icon src={icon} {size} solid /></span>
    {/if}
    {#if $$slots.default}
      <span><slot /></span>
    {/if}
  </button>
{/if}

<style>
  /* * {
    border: 1px solid red;
  } */

  a[role="button"],
  button {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: none;
    outline: none;
    background: var(--bg-1);
    font-size: 1rem;
    line-height: 1rem;
    height: 2.5rem;
    padding: 0 1rem;
    display: inline-flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  span {
    display: inline-flex;
  }

  button.outline:not(.ghost) {
    background: var(--white);
    border: 1px solid var(--bg-2);
  }

  button.pill {
    border-radius: 2rem;
  }

  button.rounded {
    aspect-ratio: 1/1;
    padding: 0;
    border-radius: 50%;
  }

  button.ghost {
    background: var(--white);
  }

  /* primary */
  a[role="button"].primary,
  button.primary {
    background: var(--primary);
    color: var(--white);
  }

  button.primary.outline {
    background: var(--white);
    border-color: var(--primary);
    color: var(--primary);
  }

  /* danger */
  button.danger {
    background: var(--danger);
    color: var(--white);
  }

  button.danger.outline {
    background: var(--white);
    border-color: var(--danger);
    color: var(--danger);
  }

  /* warning */
  button.warning {
    background: var(--warning);
    color: var(--white);
  }

  button.warning.outline {
    background: var(--white);
    border-color: var(--warning);
    color: var(--warning);
  }

  /* success */
  button.success {
    background: var(--success);
    color: var(--white);
  }

  button.success.outline {
    background: var(--white);
    border-color: var(--success);
    color: var(--success);
  }

  /* hover color */
  button::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1%;
    height: 1%;
    border-radius: 50%;
    background: hsla(0, 0%, 0%, 0.1);
    transition: all 0.3s ease;
  }

  button:not(.outline):hover::before {
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  /* active */
  button:active {
    filter: contrast(0.5);
  }

  button:focus {
    outline: 2px solid var(--bg-2);
    outline-offset: 1px;
  }

  button.primary:focus {
    outline-color: var(--primary);
  }
  button.danger:focus {
    outline-color: var(--danger);
  }
  button.warning:focus {
    outline-color: var(--warning);
  }
  button.success:focus {
    outline-color: var(--success);
  }
  button.primary:focus {
    outline-color: var(--primary);
  }

  button.outline:hover {
    transition: all 0.3s ease;
    background: var(--bg-2);
  }

  button.primary.outline:hover {
    background: var(--primary);
    color: var(--white);
  }

  button.danger.outline:hover {
    background: var(--danger);
    color: var(--white);
  }

  button.warning.outline:hover {
    background: var(--warning);
    color: var(--white);
  }

  button.success.outline:hover {
    background: var(--success);
    color: var(--white);
  }
</style>
