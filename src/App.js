import React, { useState } from "react";
import "./App.css";

function App() {
  const [produkList, setProdukList] = useState([]);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");

  const tambahProduk = (e) => {
    e.preventDefault();
    if (!nama || !harga) {
      alert("Isi nama dan harga dulu ya!");
      return;
    }
    const produkBaru = { id: Date.now(), nama, harga };
    setProdukList([...produkList, produkBaru]);
    setNama("");
    setHarga("");
  };

  const hapusProduk = (id) => {
    setProdukList(produkList.filter((p) => p.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="judul">🛍️ Daftar Produk React</h1>

      <form onSubmit={tambahProduk} className="form-produk">
        <input
          type="text"
          placeholder="Nama Produk"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="number"
          placeholder="Harga Produk"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>

      <div className="list-produk">
        <h2>📋 Daftar Produk</h2>
        {produkList.length === 0 ? (
          <p className="kosong">Belum ada produk.</p>
        ) : (
          <ul>
            {produkList.map((produk) => (
              <li key={produk.id}>
                <div>
                  <strong>{produk.nama}</strong> <br />
                  Harga: Rp {produk.harga}
                </div>
                <button
                  className="hapus"
                  onClick={() => hapusProduk(produk.id)}
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
