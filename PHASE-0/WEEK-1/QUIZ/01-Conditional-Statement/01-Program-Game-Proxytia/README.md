# 🎮 Program Game Proxytia

> 📝 Membuat program sederhana yang memvalidasi input nama & peran, lalu memberikan respons berbeda sesuai peran yang dipilih

---

## 📋 Soal

Buat program game **Proxytia** yang membutuhkan 2 variabel: `nama` dan `peran`.

**Aturan validasi:**
- Jika `nama` kosong → tampilkan `"nama wajib diisi"`
- Jika `peran` kosong → tampilkan `"Pilih Peranmu untuk memulai game"`

**Respons berdasarkan peran (3 peran + default):**
- `Ksatria` → `"halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"`
- `Tabib` → `"halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"`
- `Penyihir` → `"halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"`
- Peran lain → `"tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"`

---

## 💻 Kode Solusi

```javascript
// ALGORITMA:
// 1. Siapkan variabel `nama` dan `peran` (isi manual nilainya buat ngetes).
// 2. Pertama, cek dulu apakah `nama` itu kosong.
// 3. Kalau `nama` kosong, munculin pesan di console: "nama wajib diisi".
// 4. Tapi kalau `nama` ada isinya, lanjut cek variabel `peran`.
// 5. Kalau `peran` ternyata masih kosong, munculin pesan: "Pilih Peranmu untuk memulai game".
// 6. Terakhir, kalau nama dan peran sudah aman terisi, baru kita tentuin sambutannya pakai switch-case:
//    - Kalau perannya 'Ksatria', kasih semangat buat menyerang.
//    - Kalau 'Tabib', bilang kalau dia tugasnya ngebantu teman.
//    - Kalau 'Penyihir', suruh dia bikin keajaiban.
//    - Kalau perannya aneh-aneh (nggak terdaftar), anggep aja dia jadi bot.

let nama = "", peran = "";

if (!nama) {
  console.log('nama wajib diisi');
} else if (!peran) {
  console.log('Pilih Peranmu untuk memulai game');
} else {
  switch (peran) {
    case 'Ksatria':
      console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
      break;

    case 'Tabib':
      console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
      break;

    case 'Penyihir':
      console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
      break;

    default:
      console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada');
  }
}
```

---

## 🔍 Penjelasan

**Alur logika program:**

```
[nama & peran] → [Cek nama kosong?]
                    ├─ Ya  → "nama wajib diisi"
                    └─ Tidak → [Cek peran kosong?]
                                 ├─ Ya  → "Pilih Peranmu untuk memulai game"
                                 └─ Tidak → [Switch peran]
                                              ├─ Ksatria  → pesan Ksatria
                                              ├─ Tabib    → pesan Tabib
                                              ├─ Penyihir → pesan Penyihir
                                              └─ default  → pesan bot
```

1. **Validasi `nama`** — cek dengan `!nama`. Jika string kosong (`""`), JavaScript menganggapnya **falsy**, jadi `!nama` bernilai `true`.
2. **Validasi `peran`** — menggunakan `else if`, sehingga pengecekan peran hanya terjadi kalau nama sudah lolos validasi.
3. **Pencocokan peran** — menggunakan `switch-case` karena ada 3 kemungkinan nilai + 1 default. Lebih rapi daripada menulis `if-else` berulang.
4. **`break`** — setiap case wajib diakhiri `break` agar tidak "jatuh" ke case berikutnya (*fall-through*).

---

## 🧪 Contoh Output

```
nama = "", peran = ""
→ nama wajib diisi
```

```
nama = "Budi", peran = ""
→ Pilih Peranmu untuk memulai game
```

```
nama = "Budi", peran = "Ksatria"
→ halo Ksatria Budi , kamu dapat menyerang dengan senjatamu!
```

```
nama = "Budi", peran = "Ninja"
→ tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Falsy Value** — string kosong `""` dianggap falsy, jadi `!nama` bisa dipakai sebagai shortcut pengecekan kosong
- ✅ **`if-else if-else`** — percabangan bertingkat untuk validasi berurutan (nama dulu, baru peran)
- ✅ **`switch-case`** — percabangan multi-pilihan yang lebih rapi dari `if-else` berulang, menggunakan **strict equality (`===`)**
- ✅ **Template Literal (Backtick)** — menyisipkan variabel ke dalam string dengan `${variabel}` tanpa operator `+`
- ✅ **`let` vs `const`** — gunakan `let` karena variabel ini nilainya bisa berubah saat testing

---

## 💡 Catatan Tambahan

- **Case Sensitivity** — `switch` membandingkan secara exact match. `"ksatria"` (huruf kecil) **tidak cocok** dengan case `"Ksatria"`. Solusi: gunakan `.toLowerCase()` pada variabel sebelum masuk switch.
- **Nested Logic** — struktur `if → else → switch` ini adalah contoh *nested control flow*. Masih aman dibaca, tapi hindari bersarang terlalu dalam (*Pyramid of Doom*).
- **Versi review ini** menggunakan variabel statis + `console.log` saja (tanpa `prompt`/`alert`) agar bisa ditest langsung di Node.js tanpa perlu browser.

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
