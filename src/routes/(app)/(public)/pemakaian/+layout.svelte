<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import PeListView from "./Pe-ListView.svelte";

  onMount(() => {
    // console.log("layout Pemakaian");
  });
</script>

<h2>Pemakaian</h2>

<!-- <a href={`${$page.url.pathname}/tambah`} role="button">Tambah Pemakaian Baru</a> -->
<a href={`${$page.url.pathname}/tambah`} role="button">Tambah Pemakaian Baru</a>

<PeListView data />

<slot />
