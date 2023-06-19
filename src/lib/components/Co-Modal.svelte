<script>
  export let show = false;
</script>

{#if show}
  <section>
    <article>
      <slot />
    </article>
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: yellow; */
  }

  article {
    height: 100%;
    width: 100%;
    background: var(--white);
  }
</style>
