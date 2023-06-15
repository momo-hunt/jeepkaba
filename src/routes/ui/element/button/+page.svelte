<script>
  import {
    DocumentPlus,
    FolderPlus,
    Home,
    Pencil,
    Plus,
  } from "svelte-hero-icons";
  import CoCard from "$lib/components/Co-Card.svelte";
  import ElButton from "$lib/elements/El-Button.svelte";
</script>

<CoCard>
  <h2>Button</h2>

  <h4>Button</h4>
  <div class="flex">
    <ElButton>Basic</ElButton>
    <ElButton color="primary" icon={Home}>Primary</ElButton>
    <ElButton color="danger" icon={Plus}>Danger</ElButton>
    <ElButton color="warning">Warning</ElButton>
    <ElButton color="success">Success</ElButton>
    <ElButton color="ghost">Ghost</ElButton>
  </div>

  <h4>Button pill</h4>
  <div class="flex">
    <ElButton pill>Basic</ElButton>
    <ElButton pill color="primary">Primary</ElButton>
    <ElButton pill color="danger">Danger</ElButton>
    <ElButton pill color="warning">Warning</ElButton>
    <ElButton pill color="success">Success</ElButton>
    <ElButton pill color="ghost">Ghost</ElButton>
  </div>

  <h4>Button Outline</h4>
  <div class="flex">
    <ElButton outline>Basic</ElButton>
    <ElButton outline color="primary">Primary</ElButton>
    <ElButton outline color="danger">Danger</ElButton>
    <ElButton outline color="warning">Warning</ElButton>
    <ElButton outline color="success">Success</ElButton>
    <ElButton outline color="ghost">Ghost</ElButton>
  </div>

  <h4>Button Outline pill</h4>
  <div class="flex">
    <ElButton outline pill>Basic</ElButton>
    <ElButton outline pill color="primary">Primary</ElButton>
    <ElButton outline pill color="danger">Danger</ElButton>
    <ElButton outline pill color="warning">Warning</ElButton>
    <ElButton outline pill color="success">Success</ElButton>
    <ElButton outline pill color="ghost">Ghost</ElButton>
  </div>

  <h4>Button Icon</h4>
  <div class="flex">
    <ElButton icon={Home} size="24" />
    <ElButton icon={Home} size="24" color="primary" />
    <ElButton icon={Home} size="24" color="danger" />
    <ElButton icon={Home} size="24" color="warning" />
    <ElButton icon={Home} size="24" color="success" />
    <ElButton icon={Home} size="24" color="ghost" />
  </div>

  <h4>Button Icon Rounded</h4>
  <div class="flex">
    <ElButton icon={Home} rounded size="24" />
    <ElButton icon={Pencil} rounded size="24" color="primary" />
    <ElButton icon={Plus} rounded size="24" color="danger" />
    <ElButton icon={Home} rounded size="24" color="warning" />
    <ElButton icon={Home} rounded size="24" color="success" />
    <ElButton icon={Home} rounded size="24" color="ghost" />
  </div>
</CoCard>

<style>
  .flex {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.5rem;
  }
</style>
