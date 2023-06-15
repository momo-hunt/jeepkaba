<header>
  <a href="/"><h4>Jeep Kaba</h4></a>
  <div>Hari</div>
</header>

<slot />

<style>
  header {
    background: var(--white);
    /* background: var(--bg-6); */
    /* color: var(--white); */
    display: flex;
    align-items: center;
    height: 3rem;
    margin-bottom: 1rem;
  }

  header > *:first-child {
    margin-right: auto;
    padding: 0 1rem;
  }
</style>
