<article>
  {#if $$slots.header}
    <header>
      <slot name="header" />
    </header>
  {/if}

  <main>
    <slot />
  </main>
  {#if $$slots.footer}
    <footer>
      <slot name="footer" />
    </footer>
  {/if}
</article>

<style>
  article {
    background: var(--white);
    margin: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--bg-2);
  }

  header,
  footer {
    padding: 0 1rem;
  }

  main {
    padding: 1rem;
  }
</style>
