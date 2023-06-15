<script>
  import ElButton from "$lib/elements/El-Button.svelte";
  import PeList from "./Pe-List.svelte";
  import PeModalTambah from "./Pe-ModalTambah.svelte";

  export let data;
</script>

<main>
  {data?.name}
  <hr />
  <h2>Pemakaian</h2>

  <ElButton color="primary">Tambah Baru</ElButton>
</main>

<main>
  <h4>Bulan ini</h4>
</main>
<PeList />

<!-- <PeModalTambah /> -->

<style>
  main {
    margin: 1rem;
  }
</style>
