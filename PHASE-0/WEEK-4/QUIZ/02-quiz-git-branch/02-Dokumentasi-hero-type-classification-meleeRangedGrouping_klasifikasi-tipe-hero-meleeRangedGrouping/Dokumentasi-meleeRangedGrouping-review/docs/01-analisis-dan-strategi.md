# 🔍 Analisis & Strategi Penyelesaian

### ✨ _Memahami pola, menemukan algoritma, dan merancang kerangka kode sebelum menulis satu baris pun_

> 🎯 **Tujuan:** Setelah membaca file ini, kamu akan memahami cara membedah string input menjadi data terstruktur, memiliki algoritma "bahasa manusia" yang jelas, serta kerangka kode (blueprint) yang siap diisi.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔎 | [Analisis Input-Output](#analisis-io) | Memahami format data masuk dan keluar |
| ✂️ | [Strategi Pemecahan String](#strategi-pemecahan) | Menemukan 2 delimiter kunci |
| 🧠 | [Algoritma Bahasa Manusia](#algoritma) | 5 langkah logika sebelum koding |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode kosong + tabel penamaan |

---

<a name="analisis-io"></a>

## 🔎 Analisis Input-Output

Langkah pertama: pahami **apa yang masuk** dan **apa yang harus keluar**.

```
🎯 Input    → String panjang berisi daftar hero + tipe, dipisahkan koma
📌 Output   → Array 2 dimensi: [ [Ranged], [Melee] ]
🔐 Analogi  → Seperti memilah kartu pemain ke dalam 2 tumpukan berbeda
```

**Contoh konkret:**

| Input (String Mentah) | Output (Array 2D) |
|---|---|
| `'Razor-Ranged,Meepo-Melee'` | `[ ['Razor'], ['Meepo'] ]` |
| `'Dazzle-Ranged,Io-Ranged'` | `[ ['Dazzle', 'Io'], [] ]` |
| `''` | `[]` |

> [!NOTE]
> Perhatikan: Index `[0]` **selalu** untuk Ranged, Index `[1]` **selalu** untuk Melee — tidak peduli urutan kemunculan di input.

---

<a name="strategi-pemecahan"></a>

## ✂️ Strategi Pemecahan String (2 Delimiter)

Bayangkan input string itu seperti satu rangkaian gerbong kereta yang digandeng:

```
[Razor-Ranged] 🔗 [Invoker-Ranged] 🔗 [Meepo-Melee] 🔗 [Axe-Melee]
```

Untuk bisa mengecek tipe masing-masing hero, kita perlu **2 kali pemotongan**:

| Tahap | Potong Berdasarkan | Fungsi | Contoh Hasil |
|:-----:|:------------------:|--------|--------------|
| **1** | Koma (`,`) | Memisahkan antar hero | `['Razor-Ranged', 'Meepo-Melee']` |
| **2** | Strip (`-`) | Memisahkan nama dan tipe | Nama: `'Razor'`, Tipe: `'Ranged'` |

> [!TIP]
> Urutan pemotongan itu penting! Selalu potong **koma dulu** (pisahkan antar gerbong), baru potong **strip** (buka isi masing-masing gerbong).

---

<a name="algoritma"></a>

## 🧠 Algoritma "Bahasa Manusia" (5 Langkah)

Sebelum menulis kode, kita merancang logikanya secara verbal. Setiap langkah menyertakan **alasan "Kenapa"** dan **contoh angka konkret**.

---

### Langkah 1 — Guard Clause: Tangani String Kosong `[PENGAMAN]`
Cek apakah input berupa string kosong. Jika ya, langsung kembalikan `[]`.
- **Kenapa:** Jika string kosong dipaksa di-`.split()`, hasilnya `['']` (array berisi 1 string kosong) — ini akan menyebabkan error atau hasil yang salah.
- **Contoh:** Input `''` → langsung `return []`.

### Langkah 2 — Siapkan Wadah 2 Kamar `[INISIALISASI]`
Buat array 2 dimensi kosong `[ [], [] ]` sebagai tempat penampungan akhir.
- **Kenapa:** Soal meminta output selalu punya 2 kelompok: index `0` untuk Ranged, index `1` untuk Melee. Jadi wadahnya harus sudah punya 2 kamar kosong sejak awal.
- **Contoh:** `const groupedHeroes = [ [], [] ]`

### Langkah 3 — Potong String Utama Berdasarkan Koma `[PARSING TAHAP 1]`
Pecah string input menggunakan `.split(',')` agar setiap hero menjadi elemen array terpisah.
- **Kenapa:** Kita perlu mengakses setiap hero secara individual sebelum bisa memeriksa tipenya.
- **Contoh:** `'Razor-Ranged,Meepo-Melee'` → `['Razor-Ranged', 'Meepo-Melee']`

### Langkah 4 — Potong Setiap Hero Berdasarkan Strip `[PARSING TAHAP 2]`
Didalam perulangan, pecah setiap elemen (misal `'Razor-Ranged'`) menggunakan `.split('-')` lalu tangkap hasilnya dengan Array Destructuring.
- **Kenapa:** Kita butuh memisahkan **nama** dan **tipe** agar bisa membuat keputusan pengelompokan.
- **Contoh:** `'Razor-Ranged'.split('-')` → `['Razor', 'Ranged']` → `name = 'Razor'`, `type = 'Ranged'`

### Langkah 5 — Filter dan Kelompokkan `[PENGELOMPOKAN]`
Gunakan pengkondisian `if` untuk mendorong (`.push()`) nama hero ke wadah yang sesuai.
- **Kenapa:** Ini inti dari seluruh fungsi — memilah data ke kelompok yang tepat berdasarkan tipenya.
- **Contoh:** `type === 'Ranged'` → push `'Razor'` ke `groupedHeroes[0]`

> [!WARNING]
> Langkah 4 menggunakan Array Destructuring (`const [name, type] = ...`). Pastikan urutan variabel sesuai posisi data: **nama selalu di index 0** dan **tipe selalu di index 1** dari hasil `.split('-')`.

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|---|---|---|---|
| Input Parameter | `heroesString` | `str`, `s` | `str` hanya menginformasikan tipe data, bukan isi |
| Wadah Hasil Akhir | `groupedHeroes` | `result`, `res` | Menjelaskan isinya: hero yang sudah dikelompokkan |
| Array Hasil Split | `heroList` | `formatted`, `arr` | `formatted` = kata sifat, bukan benda |
| Item Loop Saat Ini | `heroItem` | `item`, `el` | Lebih spesifik menunjukkan konteks hero |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Potong → Loop → Pilah)

function meleeRangedGrouping(heroesString) {
  // [PENGAMAN] → tangani string kosong
  if (!heroesString) return [];

  // [INISIALISASI] → siapkan wadah 2 kamar (Ranged & Melee)
  const groupedHeroes = [[], []];

  // [PARSING TAHAP 1] → pecah per hero (❌ jangan 'formatted')
  const heroList = heroesString.split(',');

  for (const heroItem of heroList) {         // [LOOP] → cek satu per satu
    const [name, type] = heroItem.split('-'); //   [PARSING TAHAP 2] → pecah nama & tipe

    // [PENGELOMPOKAN] → if Ranged ke index 0, if Melee ke index 1
  }

  return groupedHeroes;
}
```

> [!TIP]
> Blueprint ini sengaja dikosongkan bagian `if`-nya. Gunakan kerangka ini sebagai "peta" sebelum mengisi logika pengelompokan di file selanjutnya.

---

⬅️ Kembali ke [README.md](../README.md) · ➡️ Lanjut ke [02-solusi-dan-evolusi.md](02-solusi-dan-evolusi.md)
