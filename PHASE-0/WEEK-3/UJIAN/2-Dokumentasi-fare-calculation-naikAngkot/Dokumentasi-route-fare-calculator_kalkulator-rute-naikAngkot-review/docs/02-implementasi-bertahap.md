# 🔨 Implementasi Bertahap

### ✨ _Dari kerangka kosong ke kode berjalan — lalu evolusi ke versi yang lebih elegan_

> 🎯 **Tujuan:** Membangun solusi secara step-by-step menggunakan `for...of` (V1), lalu melakukan refactoring ke `.map()` (V2), dan memahami kapan memakai pendekatan mana.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧱 | [V1: Membangun Step-by-Step](#v1-step) | Mengisi blueprint menjadi kode berjalan dengan `for...of` |
| 🔄 | [Analisis Pola Transformasi](#analisis-pola) | Mengenali pola yang membuka jalan ke refactoring |
| 🚀 | [V2: Evolusi ke `.map()`](#v2-map) | Kode yang lebih deklaratif dan ringkas |
| ⚖️ | [Perbandingan V1 vs V2](#perbandingan) | Tabel head-to-head kedua pendekatan |
| 💣 | [Gotchas & Edge Cases](#gotchas) | Jebakan yang perlu diwaspadai |

---

<a name="v1-step"></a>

## 🧱 V1: Membangun Step-by-Step (`for...of`)

Berdasarkan blueprint di [Analisis & Strategi](01-analisis-dan-strategi.md#blueprint), kita mengisi kerangka kode bagian per bagian.

### Langkah 1 — Setup Wadah Hasil

Karena fungsi harus mereturn sebuah Array, kita siapkan wadah kosong:

```javascript
const naikAngkot = (arrPenumpang) => {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const result = [];

  // → loop akan diisi di langkah berikutnya

  return result;
};
```

> [!NOTE]
> **Kenapa `const` untuk array kosong?** Karena `const` mengunci *binding* variabel (tidak bisa di-reassign), tapi isi array-nya tetap bisa dimodifikasi dengan `push()`. Ini adalah best practice di JavaScript modern.

### Langkah 2 — Loop + Destructuring

Gunakan `for...of` untuk menelusuri setiap penumpang, dan **Array Destructuring** untuk langsung mengekstrak 3 elemen:

```javascript
for (const [name, start, end] of arrPenumpang) {
  const startIndex = rute.indexOf(start);
  const endIndex = rute.indexOf(end);

  const bayar = Math.abs(startIndex - endIndex) * 2000;

  result.push({
    penumpang: name,
    naikDari: start,
    tujuan: end,
    bayar,
  });
}
```

> [!TIP]
> **Array Destructuring** (`const [a, b, c] = array`) menghindari penulisan manual `array[0]`, `array[1]`, `array[2]`. Kode lebih bersih dan langsung terbaca peran setiap elemennya.

### Kode Lengkap V1

```javascript
const naikAngkot = (arrPenumpang) => {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const result = [];

  for (const [name, start, end] of arrPenumpang) {
    const startIndex = rute.indexOf(start);
    const endIndex = rute.indexOf(end);

    const bayar = Math.abs(startIndex - endIndex) * 2000;

    result.push({
      penumpang: name,
      naikDari: start,
      tujuan: end,
      bayar,
    });
  }

  return result;
};
```

---

<a name="analisis-pola"></a>

## 🔄 Analisis Pola Transformasi

Sebelum refactoring, kita amati **karakteristik** V1:

```
📥 Input:  Array of Array    → N item
📤 Output: Array of Object   → N item (jumlah SAMA)
🔁 Pola:   Setiap item input → tepat 1 item output
```

Pola transformasi **"satu-banding-satu"** seperti ini adalah sinyal kuat bahwa kode bisa di-refactor menggunakan `.map()` — method bawaan Array yang memang dirancang khusus untuk pola ini.

> [!IMPORTANT]
> **Kapan pakai `.map()`?** Ketika jumlah item output **sama persis** dengan input, dan setiap item ditransformasi secara independen. Jika jumlahnya berubah (misalnya filtering), gunakan `.filter()` atau `.reduce()` sebagai gantinya.

---

<a name="v2-map"></a>

## 🚀 V2: Evolusi ke `.map()`

Dengan `.map()`, kita tidak perlu lagi mendeklarasikan array kosong dan memanggil `push()`. Destructuring langsung dipasang di parameter callback:

```javascript
const naikAngkot = (arrPenumpang) => {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  return arrPenumpang.map(([name, start, end]) => {
    const startIndex = rute.indexOf(start);
    const endIndex = rute.indexOf(end);

    const bayar = Math.abs(startIndex - endIndex) * 2000;

    return {
      penumpang: name,
      naikDari: start,
      tujuan: end,
      bayar,
    };
  });
};
```

**Apa yang berubah dari V1?**
- ❌ `const result = []` → dihapus
- ❌ `result.push({...})` → diganti `return {...}`
- ❌ `return result` → diganti `return arrPenumpang.map(...)`
- ✅ Destructuring pindah ke parameter `.map()` — tetap bekerja sama persis

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan V1 vs V2

| Aspek | V1 (`for...of`) | V2 (`.map()`) |
|-------|:---:|:---:|
| **Gaya** | Imperatif | Deklaratif |
| **Jumlah baris** | ~15 baris | ~12 baris |
| **Variabel bantu** | `result = []` + `push()` | Tidak perlu |
| **Readability** | Jelas untuk pemula | Lebih ringkas untuk yang sudah terbiasa |
| **Edge case `[]`** | `for...of` otomatis skip | `.map()` otomatis return `[]` |
| **Umum di industri** | Jarang di proyek modern | ⭐ Sangat lazim (React, dll.) |

> [!TIP]
> **Rekomendasi:** Gunakan **V2 (`.map()`)** sebagai solusi utama. Pahami **V1 (`for...of`)** sebagai fondasi logika agar kamu mengerti apa yang sebenarnya terjadi di balik layar `.map()`.

---

<a name="gotchas"></a>

## 💣 Gotchas & Edge Cases

### 1. Lupa `Math.abs()` → Tarif Negatif

Jika penumpang naik dari halte yang index-nya lebih besar ke yang lebih kecil, hasilnya negatif. Selalu bungkus dengan `Math.abs()`. Lihat penjelasan lengkap di [Gotcha: Nilai Negatif](01-analisis-dan-strategi.md#gotcha-negatif).

### 2. Array Kosong — Tidak Perlu Guard Clause

```javascript
// ❌ TIDAK PERLU melakukan ini:
if (arrPenumpang.length === 0) return [];

// ✅ Kedua versi OTOMATIS menangani array kosong:
// - for...of → loop tidak tereksekusi → return []
// - .map()   → langsung return []
```

### 3. Property Shorthand pada `bayar`

```javascript
// Ketika nama variabel SAMA dengan nama key objek:
const bayar = 8000;

// ❌ Redundan:
{ bayar: bayar }

// ✅ Shorthand (ES6):
{ bayar }
```

---

⬅️ [Analisis & Strategi](01-analisis-dan-strategi.md) · ➡️ [Clean Code & Naming](03-clean-code-dan-naming.md)
