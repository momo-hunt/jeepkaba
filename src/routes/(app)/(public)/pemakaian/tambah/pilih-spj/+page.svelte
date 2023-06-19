<script>
  import { fly, fade } from "svelte/transition";
  import { obj } from "$lib/stores";
  import { goto } from "$app/navigation";

  function goBack(data) {
    obj.set("pilih-spj", data);
    goto("./");
  }
</script>

<main transition:fade>
  <a href="./" class="back">&nbsp;</a>
  <ul transition:fly={{ y: 200 }}>
    <h5>Pilih SPJ</h5>
    <li>
      <button type="button" on:click={() => goBack({ no_spj: "1/x" })} />
      satu
    </li>
    <li>
      <button type="button" on:click={() => goBack({ no_spj: "2/x" })} />
      dua
    </li>
  </ul>
</main>

<style>
  main {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--black-20);
  }

  a.back {
    position: relative;
    height: 4rem;
  }
  a.back::before {
    content: "";
    position: absolute;
    bottom: 4px;
    width: 50%;
    height: 8px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--white);
    border-radius: 8px;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    width: 100%;
    height: 100%;
  }

  ul h5 {
    margin: 1rem 0;
    text-align: center;
  }

  ul {
    border-radius: 2rem 2rem 0 0;
    flex-grow: 1;
    background: var(--white);
    overflow-y: auto;
  }

  ul li {
    position: relative;
    padding: 1rem;
    border-bottom: 1px solid var(--bg-1);
  }
</style>
