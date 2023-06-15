<script>
  import HGreeting from "./H-Greeting.svelte";
  import HHeader from "./H-Header.svelte";
  import HInfo1 from "./H-Info1.svelte";
  import HInfo2 from "./H-Info2.svelte";

  export let data;
</script>

{data?.name}
<hr />
<HHeader />
<HGreeting />
<HInfo1 />
<HInfo2 />
