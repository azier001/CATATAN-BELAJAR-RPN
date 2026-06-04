# 🎓 Challenge: Graduates

### ✨ _Mengelompokkan murid lulus per kelas — dengan jaminan setiap kelas tetap tercatat_

> 🎯 **Tujuan:** Memahami algoritma **Grouping First** untuk mengelompokkan data
> ke dalam objek berdasarkan kategori, sambil menjamin bahwa kategori tanpa
> anggota tetap muncul sebagai array kosong `[]`.

---

<a name="deskripsi-soal"></a>

## 📝 Deskripsi Soal

Diberikan sebuah **Array of Objects** berisi data murid dengan properti `name`, `class`, dan `score`. Tugas kita:

1. **Saring** murid yang lulus (nilai > 75)
2. **Kelompokkan** murid lulus berdasarkan kelasnya
3. **Jamin** setiap kelas yang muncul di input tetap ada di output — meskipun **tidak ada satupun murid yang lulus** dari kelas tersebut (muncul sebagai `[]`)

**Contoh Input:**
```javascript
const students = [
  { name: "Dimitri", class: "foxes", score: 90 },
  { name: "Alexei",  class: "wolves", score: 85 },
  { name: "Sergei",  class: "foxes", score: 74 },
  { name: "Ivan",    class: "bears", score: 50 },
];
```

**Expected Output:**
```javascript
{
  foxes:  [{ name: "Dimitri", score: 90 }],
  wolves: [{ name: "Alexei", score: 85 }],
  bears:  []   // ← Tidak ada yang lulus, tapi kelas TETAP muncul!
}
```

> [!IMPORTANT]
> Syarat krusial yang membedakan challenge ini dari grouping biasa:
> **kelas tanpa murid lulus harus tetap muncul sebagai array kosong.**
> Ini adalah edge case yang paling sering dijadikan jebakan.

---

<a name="daftar-isi"></a>

## 📑 Daftar Dokumentasi

| No | File | Deskripsi |
|----|------|-----------|
| 🔍 | [01 — Analisis Pola](docs/01-analisis-pola.md) | Visualisasi simulasi manual, blueprint kerangka kode, kamus variabel |
| 🛠️ | [02 — Solusi Bertahap](docs/02-solusi-bertahap.md) | Kode V1 (`for...of`) step-by-step + dua jebakan logika |
| 🚀 | [03 — Evolusi Solusi](docs/03-evolusi-solusi.md) | V2 `reduce` konvensional, V3 `reduce` + `||=`, perbandingan versi & naming |
| ⚠️ | [04 — Gotcha: Edge Case](docs/04-gotcha-edge-case.md) | Deep dive anti-pattern `filter().reduce()` dan solusi best practice |
| 📋 | [Ringkasan Versi Kode](ringkasan-versi-kode.md) | Cheat sheet semua versi kode untuk copy-paste cepat |

---

<a name="konsep-inti"></a>

## 💡 Konsep Inti: Grouping First

```
🎯 Strategi    → Siapkan wadah (map kelas) DULU, baru saring data
📌 Prinsip     → Inisialisasi dan filtering adalah 2 fase TERPISAH
🔐 Analogi     → Siapkan semua folder kelas di atas meja,
                  baru pilih-pilih kertas murid mana yang dimasukkan
```

Tiga langkah yang dieksekusi **per murid** dalam satu loop:

1. **Siapkan Map Kelas** — Buat array kosong jika kelas belum terdaftar
2. **Cek Lulus** — Apakah `score > 75`?
3. **Masukkan Data** — Jika lulus, push ke map kelasnya

> [!TIP]
> Urutan ini **mutlak tidak boleh dibalik**. Jika filtering dilakukan sebelum
> grouping, kelas yang seluruh muridnya gagal akan hilang dari output.

---

<a name="catatan-akhir"></a>

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **4 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ Mulai baca: [01 — Analisis Pola](docs/01-analisis-pola.md)
