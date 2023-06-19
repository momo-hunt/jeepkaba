<!-- sopir tujuan tanggal_berangkat jam_berangkat tanggal_kembali jam_kembali km_awal km_akhir km_pemakaian -->

<script>
  import { Icon, Calendar, Clock } from "svelte-hero-icons";

  export let valueSPJ = null;
</script>

{#if valueSPJ}
  <div>
    <label for="no_spj">No SPJ</label>
    <input
      type="text"
      name="no_spj"
      id="no_spj"
      value={valueSPJ?.no_spj || ""}
    />
  </div>
{/if}

<div>
  <label for="sopir">Sopir</label>
  <!-- <input type="text" name="sopir" id="sopir" value={valueSPJ?.sopir || ""} /> -->
  <select name="sopir" id="sopir" value={valueSPJ?.sopir || ""}>
    <option value="as">asd</option>
  </select>
</div>

<div>
  <label for="tujuan">Tujuan</label>
  <input type="list" name="tujuan" id="tujuan" value={valueSPJ?.tujuan || ""} />
  <datalist id="tujuan">
    <option value="Dampit" />
    <option value="Turen" />
    <option value="Malang" />
    <option value="Wonosari" />
    <option value="Surabaya" />
    <option value="Jember" />
  </datalist>
</div>

<div>
  <label for="keperluan">Keperluan</label>
  <input
    type="text"
    name="keperluan"
    id="keperluan"
    value={valueSPJ?.keperluan || ""}
  />
</div>

<label for="">Berangkat</label>
<div class="row">
  <div>
    <label for="tanggal_berangkat">Tanggal</label>
    <input
      type="date"
      name="tanggal_berangkat"
      id="tanggal_berangkat"
      value={valueSPJ?.tanggal_berangkat || ""}
    />
  </div>
  <div>
    <label for="jam_berangkat">Jam</label>
    <input
      type="time"
      name="jam_berangkat"
      id="jam_berangkat"
      value={valueSPJ?.jam_berangkat || ""}
    />
  </div>
</div>

<label for="">Kembali</label>
<div class="row">
  <div>
    <label for="tanggal_kembali">Tanggal</label>
    <input
      type="date"
      name="tanggal_kembali"
      id="tanggal_kembali"
      value={valueSPJ?.tanggal_kembali || ""}
    />
  </div>
  <div>
    <label for="jam_kembali">Jam</label>
    <input
      type="time"
      name="jam_kembali"
      id="jam_kembali"
      value={valueSPJ?.jam_kembali || ""}
    />
  </div>
</div>

<label for="">Kilometer</label>
<div class="row">
  <div>
    <label for="km_awal">Awal</label>
    <input
      type="number"
      name="km_awal"
      id="km_awal"
      value={valueSPJ?.km_awal || ""}
    />
  </div>
  <div>
    <label for="km_akhir">Akhir</label>
    <input
      type="number"
      name="km_akhir"
      id="km_akhir"
      value={valueSPJ?.km_akhir || ""}
    />
  </div>
</div>
<div>
  <label for="km_akhir">Pemakaian</label>
  <input
    type="number"
    name="km_pemakaian"
    id="km_pemakaian"
    value={valueSPJ?.km_pemakaian || ""}
  />
</div>

<style>
  .row {
    display: flex;
    gap: 0 1rem;
  }
  .row > div {
    width: 50%;
  }
</style>
