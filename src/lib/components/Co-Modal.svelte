<script>
  import { Icon, XMark } from "svelte-hero-icons";
  import ElButton from "../elements/El-Button.svelte";
</script>

<section>
  <article>
    <button class="close"><Icon src={XMark} solid size="32" /></button>
    <slot />
  </article>
</section>

<style>
  /* * {
    border: 1px solid red;
  } */

  section {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  article {
    background: var(--white);
    height: 100%;
  }

  button.close {
    background: none;
    outline: none;
    border: none;
    float: right;
  }
</style>
