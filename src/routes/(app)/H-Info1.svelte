<script>
  import { DocumentPlus, Plus, PlusCircle } from "svelte-hero-icons";
  import ElButton from "$lib/elements/El-Button.svelte";
</script>

<section>
  <header>
    <h4>Pemakaian terakhir</h4>
    <ElButton href="/pemakaian/tambah" color="primary" icon={DocumentPlus} />
  </header>

  <article>
    <div>
      <small>Juni</small>
      <h4>17</h4>
    </div>
    <div>
      <h5>Dinas BRI (Dampit)</h5>
      <p>Kilometer 526.231</p>
      <small>Hari, 7 hari lalu</small>
    </div>
  </article>
  <a href="/pemakaian">Selengkapnya</a>
</section>

<style>
  section {
    margin: 1rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  article {
    padding: 1rem;
    background: var(--white);
    display: flex;
    align-items: start;
    gap: 1rem;
  }

  article > *:first-child {
    text-align: right;
  }

  a {
    display: block;
    text-align: center;
    border: 2px dashed var(--bg-3);
    margin: 0.5rem 1rem;
    opacity: 0.8;
  }
</style>
