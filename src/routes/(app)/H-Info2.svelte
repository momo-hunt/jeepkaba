<section>
  <header>
    <h4>Catatan Pemakaian</h4>
    <sup>Bulan ini</sup>
  </header>

  <article>
    <div>
      <p>Kilometer <br /><small>Terakhir</small></p>
      <h4>{new Intl.NumberFormat("id-ID").format(243234)}</h4>
    </div>
    <div>
      <p>Kilometer <br /><small>Pemakaian</small></p>
      <h4>{new Intl.NumberFormat("id-ID").format(600)}</h4>
    </div>
    <div>
      <p>Solar <br /><small>Liter</small></p>
      <h4>{new Intl.NumberFormat("id-ID").format(89)}</h4>
    </div>
    <div>
      <p>Solar <br /><small>Rp.</small></p>
      <h4>{new Intl.NumberFormat("id-ID").format(500000)}</h4>
    </div>
    <div>
      <p>Kilometer / Liter <br /><small>Nilai</small></p>
      <h4>
        {new Intl.NumberFormat("id-ID").format(Number(600 / 89).toFixed(2))}
      </h4>
    </div>
  </article>
</section>

<style>
  section {
    margin: 1rem;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  article > * {
    flex-grow: 1;
    background: var(--white);
    padding: 1rem;
  }

  article > * > h4 {
    text-align: right;
  }
</style>
