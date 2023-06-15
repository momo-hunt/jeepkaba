<script>
  import CoCard from "$lib/components/Co-Card.svelte";
</script>

<CoCard>
  <h2 slot="header">Typografi</h2>

  <table>
    <tr>
      <td><span>h1</span></td>
      <td><h1>Heading</h1></td>
    </tr>
    <tr>
      <td><span>h2</span></td>
      <td><h2>Heading</h2></td>
    </tr>
    <tr>
      <td><span>h3</span></td>
      <td><h3>Heading</h3></td>
    </tr>
    <tr>
      <td><span>h4</span></td>
      <td><h4>Heading</h4></td>
    </tr>
    <tr>
      <td><span>h5</span></td>
      <td><h5>Heading</h5></td>
    </tr>
    <tr>
      <td><span>h6</span></td>
      <td><h6>Heading</h6></td>
    </tr>
    <tr>
      <td><span>p</span></td>
      <td><p>Paragraf</p></td>
    </tr>
    <tr>
      <td><span>sup</span></td>
      <td><sup>Sup</sup></td>
    </tr>
    <tr>
      <td><span>sub</span></td>
      <td><sub>Sub</sub></td>
    </tr>
    <tr>
      <td><span>small</span></td>
      <td><small>Small</small></td>
    </tr>
  </table>
</CoCard>

<CoCard>
  <h1>Lorem ipsum dolor sit.</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, iusto
    aliquam. Aspernatur enim vel earum.
  </p>
  <p>Lorem, ipsum dolor.</p>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, eveniet?
  </p>
</CoCard>

<style>
  /* * {
    border: 1px solid gray;
  } */

  table {
    border-collapse: collapse;
  }

  table tr td {
    padding: 0 1rem;
    border: 1px solid gray;
  }
</style>
