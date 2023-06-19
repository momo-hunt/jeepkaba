<script>
  export let data = [];
</script>

{#if data.length == 0}
  <p>Data kosong.</p>
{/if}

{#if data.length > 0}
  <ul>
    {#each data as d}
      <li>
        <div>
          Juni <h4>17</h4>
        </div>
        <div>
          <h4>{d.keperluan} ({d.tujuan})</h4>
          <small>Hari, 5 hari lalu</small>
          <p>Kilometer {d.km_akhir}</p>
        </div>
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    margin: 1rem -1rem;
  }

  ul li {
    display: flex;
    gap: 1rem;
    background: var(--white);
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--bg-2);
  }

  ul li > *:first-child {
    text-align: right;
  }
</style>
