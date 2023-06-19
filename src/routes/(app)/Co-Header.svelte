<script>
  import { Bars3, Icon } from "svelte-hero-icons";
</script>

<header>
  <div>
    <h5>Hi, Hari</h5>
    <small>Admin</small>
  </div>
  <button class="toggle-menu">
    <Icon src={Bars3} size="32" solid />
    <nav>
      <a href="/">Beranda</a>
      <a href="/pemakaian">Pemakaian</a>
    </nav>
  </button>
</header>

<style>
  header {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  button.toggle-menu {
    position: relative;
  }

  button.toggle-menu:hover nav {
    display: flex;
  }

  nav {
    content: "";
    position: absolute;
    background: var(--white);
    top: 100%;
    right: 1rem;
    display: none;
    flex-direction: column;
    text-align: right;
  }

  nav a {
    padding: 0.5rem 1rem;
    background: inherit;
  }

  nav a:hover,
  nav a:focus {
    filter: brightness(0.9);
  }
</style>
