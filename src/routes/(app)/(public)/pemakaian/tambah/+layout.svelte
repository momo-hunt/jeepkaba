<script>
  import { onMount } from "svelte";
  import { obj } from "$lib/stores";
  import { ArrowSmallLeft, Icon } from "svelte-hero-icons";
  import CoForm from "$lib/components/Co-Form.svelte";
  import { page } from "$app/stores";
  import TaFieldForm from "./Ta-FieldForm.svelte";

  $: valueSPJ = $obj["pilih-spj"];
  $: textSPJ = valueSPJ ? "Ganti SPJ" : "Pilih SPJ";

  onMount(() => {
    // console.log("tambah loading");
  });
</script>

<main>
  <header>
    <a href="./" role="button">
      <Icon src={ArrowSmallLeft} size="24" />
    </a>
    <h3>Tambah Pemakaian</h3>
  </header>

  <a href={`${$page.url.pathname}/pilih-spj`} role="button" class="outline">
    {textSPJ}
  </a>
  <CoForm action="/?/add" title="Tambah Pemakaian">
    <div class="form">
      <TaFieldForm bind:valueSPJ />
      <button type="submit">Tambah</button>
    </div>
  </CoForm>
</main>

<slot />

<style>
  main {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
  }

  header {
    display: flex;
    padding: 1rem 0;
  }

  .form {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* .row {
      display: flex;
      align-items: center;
    } */
</style>
