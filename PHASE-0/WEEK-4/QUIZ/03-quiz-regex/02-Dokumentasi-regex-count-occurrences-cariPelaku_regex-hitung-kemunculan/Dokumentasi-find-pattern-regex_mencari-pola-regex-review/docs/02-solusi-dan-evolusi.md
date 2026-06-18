# 🚀 Solusi & Evolusi Kode

### ✨ _Dari solusi pertama yang bekerja, menuju kode one-liner yang elegan dan tahan banting_

> 🎯 **Tujuan:** Setelah membaca file ini, kamu akan paham cara membangun solusi secara bertahap, mengevolusi kode menjadi lebih ringkas, menerapkan naming convention, dan menghindari jebakan umum.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🛠️ | [Pendekatan Bertahap](#bertahap) | Membangun solusi V1 step-by-step |
| 🚀 | [Evolusi Solusi](#evolusi) | Refactoring ke V2 (one-liner + anti-error) |
| ⚖️ | [Perbandingan Versi](#perbandingan) | Tabel perbandingan V1 vs V2 |
| ✨ | [Naming Convention](#naming) | Penamaan variabel standar industri |
| ⚠️ | [Gotchas & Jebakan](#gotchas) | Peringatan error yang sering terjadi |

---

<a name="bertahap"></a>

## 🛠️ Pendekatan Bertahap (Versi 1)

Kita tidak langsung menulis kode final. Kita bangun **selangkah demi selangkah**.

### Step 1: Kumpulkan Semua "abc"

Gunakan method `.match()` dengan Regex `/abc/g` untuk mengumpulkan semua kemunculan kata "abc" ke dalam sebuah **Array**.

```javascript
function countOccurrences(text) {
  const matches = text.match(/abc/g);

  console.log(matches);
}

countOccurrences('mabcvabc');
// Output: ['abc', 'abc']  ← Array berisi 2 item
```

> [!NOTE]
> **Kenapa Array?** Karena `.match()` dengan flag `g` mengumpulkan semua hasil pencarian ke dalam satu wadah (Array). Setiap elemen di dalam Array adalah satu kemunculan "abc" yang berhasil ditemukan.

### Step 2: Hitung Jumlah Elemen Array

Soal meminta kita mengembalikan **angka** (jumlah kemunculan), bukan Array-nya. Gunakan properti `.length` untuk menghitung berapa banyak item di dalam Array.

```javascript
function countOccurrences(text) {
  const matches = text.match(/abc/g);

  return matches.length;
}

console.log(countOccurrences('mabcvabc'));   // 2
console.log(countOccurrences('abcabcabc'));  // 3
```

### ✅ Solusi V1 Lengkap

```javascript
function countOccurrences(text) {
  // Kumpulkan semua kemunculan "abc" ke dalam Array
  const matches = text.match(/abc/g);

  // Hitung jumlah elemen Array
  return matches.length;
}
```

```
🎯 Status   → Bekerja untuk semua test case standar
⚠️ Masalah  → Akan CRASH jika string tidak mengandung "abc" sama sekali
🔧 Solusi   → Lihat Evolusi ke V2 di bawah
```

---

<a name="evolusi"></a>

## 🚀 Evolusi Solusi (Versi 2)

V1 sudah bekerja, tapi punya **2 kelemahan** yang bisa kita perbaiki:

### Perbaikan 1: Penanganan Edge Case (`null`)

**Masalah:** Jika string tidak mengandung "abc" sama sekali, `.match()` mengembalikan `null` — bukan Array kosong. Memanggil `null.length` akan membuat program **crash**.

```javascript
'defgh'.match(/abc/g)   // null  (bukan [])
null.length              // ❌ TypeError: Cannot read property 'length' of null
```

**Solusi:** Gunakan *Short-Circuit OR* (`||`) sebagai **Penyelamat Default**.

```javascript
const matches = text.match(/abc/g) || [];
//                                  ^^^^
// Artinya: "Jika .match() menghasilkan null, ganti dengan Array kosong []"
// Sehingga [].length = 0  (aman, tidak crash!)
```

> [!TIP]
> **Cara baca `||` (OR):**
> *"Ambil nilai di kiri. TAPI, jika kiri bernilai falsy (`null`, `undefined`, `0`, `""`), maka ambil nilai di kanan sebagai cadangan."*

### Perbaikan 2: One-Liner (Ringkas)

Karena variabel `matches` hanya dipakai **satu kali** (langsung di-return), kita bisa menghapusnya dan menggabungkan semuanya dalam satu baris:

```javascript
// Dari 2 baris:
const matches = text.match(/abc/g) || [];
return matches.length;

// Menjadi 1 baris:
return (text.match(/abc/g) || []).length;
```

### ✅ Solusi V2 Lengkap (Final)

```javascript
function countOccurrences(text) {
  return (text.match(/abc/g) || []).length;
}
```

```
🎯 Status   → Bekerja untuk SEMUA kasus (termasuk edge case)
✨ Kelebihan → Ringkas (one-liner), tahan banting (anti-null), readable
```

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan Versi

| Aspek | V1 (Bertahap) | V2 (One-Liner) |
|---|---|---|
| **Jumlah Baris** | 2 baris | 1 baris |
| **Tahan Error** | ❌ Crash jika tidak ada match | ✅ Aman, return `0` |
| **Readability** | ✅ Lebih mudah dibaca pemula | ✅ Ringkas tapi perlu paham `\|\|` |
| **Kapan Pakai** | Saat belajar / debugging | Saat sudah paham & produksi |

> [!TIP]
> **Rekomendasi:** Gunakan **V2** sebagai solusi final. Tapi pastikan kamu **paham V1 terlebih dahulu** — jangan langsung loncat ke one-liner tanpa memahami prosesnya.

---

<a name="naming"></a>

## ✨ Naming Convention

Penamaan variabel yang baik membuat kode bisa "berbicara sendiri" tanpa perlu komentar berlebihan.

| Lokasi / Peran | ❌ Buruk | ✅ Rekomendasi | Alasan |
|---|---|---|---|
| Nama Function | `cariPelaku`, `fn` | `countOccurrences` | Jelas mendeskripsikan aksi: "menghitung kemunculan" |
| Parameter Input | `str`, `s`, `x` | `text` | Standar internasional untuk variabel penampung teks |
| Penampung Array | `hasil`, `res`, `arr` | `matches` | Jelas bahwa isinya adalah hasil pencarian regex |

> [!NOTE]
> **Kapan `i` boleh dipakai?** Hanya untuk **counter di dalam loop** (`for (let i = 0; ...)`). Di luar loop, selalu gunakan nama yang deskriptif.

---

<a name="gotchas"></a>

## ⚠️ Gotchas & Jebakan Umum

> ⚠️ **Jebakan 1: `.match()` return `null`, bukan `[]`**
> Jika Regex tidak menemukan apa-apa, hasilnya adalah `null`. Selalu gunakan `|| []` sebagai pengaman sebelum memanggil `.length`.

> ⚠️ **Jebakan 2: Lupa flag `g` pada Regex**
> Tanpa `/abc/g` (tanpa `g`), `.match()` hanya menemukan kemunculan **pertama** saja dan mengembalikan object match (bukan Array biasa). Hasilnya selalu `.length = 1`, meskipun ada lebih dari satu "abc".

> ⚠️ **Jebakan 3: Mengira `abdc` sama dengan `abc`**
> Regex `/abc/` mencari exact match — huruf `a`, `b`, `c` harus **berturut-turut tanpa jeda**. String `'abdc'` tidak cocok karena ada huruf `d` di antara `b` dan `c`.

---

⬅️ [01-analisis-pola.md](01-analisis-pola.md) · ⬆️ [README.md](../README.md)
