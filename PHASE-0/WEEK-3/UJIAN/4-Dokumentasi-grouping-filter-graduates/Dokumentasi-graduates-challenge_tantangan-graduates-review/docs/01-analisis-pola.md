# 🔍 Analisis Pola & Blueprint Kode

### ✨ _Dari simulasi manual ke kerangka kode — sebelum menulis satu baris pun_

> 🎯 **Tujuan:** Menemukan pola algoritma lewat simulasi tabel manual,
> membangun mental model "Grouping First", lalu menyiapkan blueprint
> kerangka kode beserta kamus variabel.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧠 | [Analogi Guru & Map Kelas](#analogi) | Memahami masalah lewat analogi dunia nyata |
| 📊 | [Simulasi Manual](#simulasi) | Tabel breakdown langkah-per-langkah |
| 🎯 | [3 Langkah Inti Algoritma](#langkah-inti) | Rumus algoritma yang ditemukan dari simulasi |
| 📖 | [Kamus Variabel](#kamus-variabel) | Tabel naming convention ❌ vs ✅ |
| 🗺️ | [Blueprint Kerangka Kode](#blueprint) | Struktur kode kosong dengan komentar peran |

---

<a name="analogi"></a>

## 🧠 Analogi: Guru & Map Kelas

Bayangkan kamu seorang **guru** yang memegang setumpuk kertas nilai murid.
Tugasmu: pisahkan kertas ke dalam **folder (map) per kelas**, tapi hanya untuk
murid yang **lulus** (nilai > 75).

```
🎯 Misi       → Pisahkan kertas nilai ke folder per kelas
📌 Syarat     → Hanya murid lulus (score > 75) yang masuk folder
🔐 Jebakan    → Folder kelas yang isinya murid gagal semua
                 TETAP harus ada di meja (sebagai folder kosong)
```

> [!NOTE]
> Analogi ini menjadi fondasi strategi **Grouping First** —
> siapkan semua folder kelas di atas meja **terlebih dahulu**,
> baru pilih-pilih kertas mana yang dimasukkan.

---

<a name="simulasi"></a>

## 📊 Simulasi Manual (Tabel Breakdown)

Berikut simulasi langkah-per-langkah memproses setiap murid.
Perhatikan bagaimana **map kelas selalu dibuat duluan**, terlepas dari nilai:

| Kertas Murid (Data) | 1. Siapkan Map Kelas | 2. Cek Lulus (> 75)? | 3. Aksi Lanjutan |
| :--- | :--- | :--- | :--- |
| Dimitri (foxes, 90) | Map `foxes` belum ada → Buat baru `[]` | Lulus ✅ | Masukkan Dimitri (90) ke map `foxes` |
| Alexei (wolves, 85) | Map `wolves` belum ada → Buat baru `[]` | Lulus ✅ | Masukkan Alexei (85) ke map `wolves` |
| Sergei (foxes, 74) | Map `foxes` sudah ada → Lewati | Tidak Lulus ❌ | Kertas dibuang *(map `foxes` tetap utuh!)* |
| Ivan (bears, 50) | Map `bears` belum ada → Buat baru `[]` | Tidak Lulus ❌ | Kertas dibuang *(map `bears` tetap ada: `[]`)* |

> [!IMPORTANT]
> Perhatikan baris **Ivan** — meskipun dia tidak lulus, map `bears`
> tetap tercipta sebagai `[]`. Inilah inti dari strategi Grouping First.

---

<a name="langkah-inti"></a>

## 🎯 3 Langkah Inti Algoritma

Dari simulasi di atas, ditemukan **3 langkah** yang dieksekusi **per murid** di
dalam satu loop. Urutannya **mutlak tidak boleh dibalik**:

### Langkah 1 — Siapkan Map Kelas (Grouping)

> **Kenapa?** Jika map kelas hanya dibuat saat murid lulus, maka kelas yang
> seluruh muridnya gagal tidak akan pernah terdaftar di output.

**Contoh konkret:** Saat memproses Ivan (bears, 50), kita **tetap** membuat
`result["bears"] = []` meskipun nilainya 50. Tanpa langkah ini, properti
`bears` tidak akan muncul di hasil akhir.

### Langkah 2 — Cek Lulus (Filtering)

> **Kenapa?** Filtering dilakukan **setelah** grouping agar informasi kelas
> tidak hilang. Kita hanya perlu tahu: apakah murid ini layak dimasukkan?

**Contoh konkret:** Sergei (foxes, 74) → `74 > 75` = `false` → tidak
dimasukkan ke map, tapi map `foxes` sudah aman ada dari langkah 1.

### Langkah 3 — Masukkan Data (Push)

> **Kenapa?** Push hanya terjadi jika langkah 2 lolos. Ini menjamin hanya
> murid lulus yang masuk ke dalam array kelasnya.

**Contoh konkret:** Dimitri (foxes, 90) → `90 > 75` = `true` →
`result["foxes"].push({ name: "Dimitri", score: 90 })`.

---

<a name="kamus-variabel"></a>

## 📖 Kamus Variabel (Naming Convention)

| Lokasi / Peran | ❌ Jangan | ✅ Rekomendasi | Alasan |
| :--- | :--- | :--- | :--- |
| Object properti kelas | `class` | `className` | `class` adalah *reserved keyword* JS. Gunakan alias saat destructuring: `class: className` |
| Penampung akhir | `res`, `r` | `result` / `acc` | Eksplisit dan jelas. `acc` (*accumulator*) adalah standar industri untuk `reduce` |
| Parameter loop | `(x) => x.score` | `({ score })` | Destructuring langsung di parameter menghindari pemanggilan properti berulang |
| Parameter input | `student`, `data` | `students` | Kata benda jamak (*plural*) untuk Array — menampung sekumpulan entitas |

> [!TIP]
> Selalu manfaatkan **Object Destructuring dengan alias** (`class: className`)
> ketika properti menggunakan kata kunci terlarang seperti `class`, `function`,
> atau `return`.

---

<a name="blueprint"></a>

## 🗺️ Blueprint Kerangka Kode

Sebelum menulis kode, siapkan **kerangka kosong** dengan komentar peran
di setiap bagian — ini adalah *mental model* yang bisa di-recall kapan saja:

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Grouping First)
function graduates(students) {
  // [WADAH] → Objek kosong untuk menampung hasil akhir

  // [LOOP] → Iterasi setiap murid, destructure { name, score, class: className }

    // [BAGIAN 1] → Siapkan map kelas (jika belum ada, buat array kosong)

    // [BAGIAN 2] → Cek apakah murid lulus (score > 75)

    // [BAGIAN 3] → Jika lulus, push { name, score } ke map kelasnya

  // [RETURN] → Kembalikan objek hasil
}
```

> [!NOTE]
> Blueprint ini berlaku universal untuk **semua versi solusi** (for...of maupun
> reduce). Yang berbeda hanya mekanisme loop-nya, bukan urutan logikanya.
> Lihat implementasi lengkap di [02 — Solusi Bertahap](02-solusi-bertahap.md).

---

⬅️ [Kembali ke README](../README.md) · ➡️ [02 — Solusi Bertahap](02-solusi-bertahap.md)
