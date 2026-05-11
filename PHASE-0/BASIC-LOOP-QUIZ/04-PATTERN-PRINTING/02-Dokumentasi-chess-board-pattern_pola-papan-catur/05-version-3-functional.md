# ⚗️ Versi 3 — Functional (Array.from + Method Chaining)

### ✨ _Tanpa loop manual: membangun papan catur menggunakan Array.from dan method chaining._

> 🎯 **Tujuan:** Memahami pendekatan fungsional (functional programming) untuk membangun papan catur — tanpa satu pun kata kunci `for` — menggunakan `Array.from()`, arrow function, dan method chaining (`.join()`).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🧩 | [Konsep Inti: Array.from](#konsep) | Memahami "generator array" di JavaScript |
| 🥪 | [Mental Model: Array Sandwich](#sandwich) | Visualisasi layer-by-layer |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace "perakitan" untuk `num = 3` |
| ⚠️ | [Gotchas](#gotchas) | Jebakan khusus pendekatan fungsional |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Functional — `Array.from` + Method Chaining |
| 🔢 **Jumlah Loop** | 0 (tidak ada `for` loop eksplisit) |
| 🧠 **Konsep Utama** | Array sebagai generator + transformasi berantai |
| 📖 **Readability** | ⭐⭐ (butuh pemahaman functional JS) |
| ⚡ **Kompleksitas** | O(n²) — sama dengan versi lain |
| 🎯 **Cocok Untuk** | React.js, functional programming, kode modern |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 3 saat kamu bekerja di ekosistem yang menyukai **gaya deklaratif** — misalnya React.js atau lingkungan functional programming. Keunggulannya: tidak ada variabel sementara, tidak ada *side effect*, dan kode mengalir seperti kalimat: *"Buat array baris → untuk tiap baris buat array kolom → gabungkan."*

---

<a name="konsep"></a>
## 🧩 Konsep Inti: `Array.from()` sebagai Generator

`Array.from()` adalah cara untuk **menciptakan array baru** dari sesuatu yang "iterable" atau dari sebuah panjang yang ditentukan.

### Cara Paling Dasar

```javascript
Array.from({ length: 3 });
// → [ undefined, undefined, undefined ]
```

Ini menciptakan array kosong dengan 3 slot.

### Dengan Fungsi Mapping (Parameter Kedua)

```javascript
Array.from({ length: 3 }, (_, index) => index * 2);
// → [ 0, 2, 4 ]
```

Parameter kedua adalah **fungsi map** yang langsung mengisi setiap slot saat array dibuat.

> [!NOTE]
> 💡 **Kenapa ada `_` (garis bawah)?**
> Parameter pertama dari fungsi mapping menerima **nilai elemen saat ini** — tapi karena slotnya kosong (`undefined`), kita tidak butuh nilainya. Di dunia programming, parameter yang **sengaja tidak dipakai** diberi nama `_` sebagai konvensi "abaikan saja".
>
> Jadi `(_, index)` artinya: *"Saya tidak peduli dengan nilai elemennya, yang saya butuhkan hanya indeksnya."*

---

<a name="sandwich"></a>
## 🥪 Mental Model: The Array Sandwich

Cara terbaik memahami versi ini adalah membayangkan proses **perakitan berlapis** — seperti membuat sandwich dari dalam ke luar.

```
return Array.from(              ← [LAYER 5] Buat N slot untuk baris
  { length: num }, (_, row) =>

  Array.from(                   ← [LAYER 4] Di setiap baris, buat N slot kolom
    { length: num }, (_, col) =>

    (row + col) % 2 === 0       ← [LAYER 3] Isi tiap slot: '#' atau ' '
      ? '#'
      : ' '

  ).join('')                    ← [LAYER 2] Gabungkan kolom → 1 string baris

).join('\n');                   ← [LAYER 1] Gabungkan baris → 1 string papan
```

**Alur perakitannya dari dalam ke luar:**

```
[1] Isi sel        →  '#' atau ' '
[2] Rakit baris    →  ['#',' ','#'].join('')  →  "# #"
[3] Kumpulkan baris→  ["# #", " # ", "# #"]
[4] Rakit papan    →  ["# #"," # ","# #"].join('\n')  →  "# #\n # \n# #"
[5] Return         →  "# #\n # \n# #"
```

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Parameter tidak terpakai | `_` | `item`, `val`, `el` | Konvensi universal: menandakan parameter **sengaja diabaikan** |
| Indeks baris (outer `Array.from`) | `row` | `i`, `x`, `r` | Mewakili nomor baris yang sedang diproses |
| Indeks kolom (inner `Array.from`) | `col` | `j`, `y`, `c` | Mewakili nomor kolom, konsisten dengan Versi 1 & 2 |

> [!NOTE]
> 📌 **Tidak ada `pattern` di Versi 3!**
> Versi ini tidak membutuhkan variabel penampung sementara karena seluruh transformasi terjadi secara **inline** melalui method chaining. Hasilnya langsung di-`return`.

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Array Pipeline — Buat → Isi → Gabungkan)

const papanCatur = (num) => {
  return Array.from(                    // [GENERATOR BARIS] — buat N slot baris
    { length: num }, (_, row) =>

    Array.from(                         //   [GENERATOR KOLOM] — di setiap baris, buat N slot kolom
      { length: num }, (_, col) =>
      // [LOGIKA INTI] — cek ganjil/genap, hasilkan '#' atau ' '

    ).join('')                          //   [JOIN KOLOM] — gabungkan karakter → string baris

  ).join('\n');                         // [JOIN BARIS] — gabungkan baris → string papan
};
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
const papanCatur = (num) => {
  return Array.from({ length: num }, (_, row) =>
    Array.from({ length: num }, (_, col) =>
      (row + col) % 2 === 0 ? '#' : ' '
    ).join('')
  ).join('\n');
};

// Uji coba
console.log(papanCatur(5));
/*
# # #
 # # 
# # #
 # # 
# # #
*/
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Baris per Baris)

### 1️⃣ Generator Baris — Lapisan Luar `[GENERATOR BARIS]`

```javascript
Array.from({ length: num }, (_, row) => ...)
```

Membuat array dengan `num` slot. Setiap slot diisi oleh nilai yang dikembalikan fungsi mapping. Parameter `_` adalah nilai elemen (diabaikan karena `undefined`), sedangkan `row` adalah indeks slot yang mewakili baris ke-berapa.

> *(Kenapa menggunakan `Array.from({ length: num })` dan bukan literal array `[]`? Karena kita tidak punya nilai awal untuk diisi — kita hanya butuh **`num` buah slot kosong** sebagai "cetakan" yang akan langsung diisi oleh fungsi mapping. Contoh num=3: `Array.from({ length: 3 })` menghasilkan 3 slot — masing-masing akan menjadi satu baris teks.)*

---

### 2️⃣ Generator Kolom — Lapisan Dalam `[GENERATOR KOLOM]`

```javascript
Array.from({ length: num }, (_, col) => ...)
```

Di dalam setiap slot baris, kita buat **array lagi** dengan `num` slot. Variabel `col` adalah indeks kolom.

> *(Kenapa ada `Array.from` di dalam `Array.from`? Karena setiap baris bukan berisi angka — melainkan berisi **rangkaian karakter** sebanyak `num` buah. Kita butuh array dalam (kolom) untuk menampung karakter-karakter itu sebelum digabungkan. Ini adalah padanan dari **nested loop** di Versi 1, hanya ditulis secara deklaratif. Contoh num=3, row=0: inner `Array.from` menghasilkan `['#', ' ', '#']`.)*

---

### 3️⃣ Logika Ganjil-Genap `[PENGISI SEL]`

```javascript
(row + col) % 2 === 0 ? '#' : ' '
```

Rumus inti yang sama persis dengan Versi 1 dan Versi 2 — hanya **wadahnya** yang berbeda.

> *(Kenapa rumusnya sama tapi tanpa `pattern +=`? Karena di sini, setiap karakter adalah **nilai kembalian** dari fungsi mapping — `Array.from` yang mengumpulkannya secara otomatis ke dalam array. Tidak perlu penampung manual. Contoh num=3, row=0, col=1: `(0+1)%2=1` → ganjil → `' '` langsung menjadi elemen ke-1 dari array kolom.)*

---

### 4️⃣ Gabungkan Karakter → String Baris `[JOIN KOLOM]`

```javascript
.join('')
```

Setelah array kolom terisi, `.join('')` menggabungkannya menjadi satu string tanpa pemisah.

> *(Kenapa argumennya `''` (string kosong) dan bukan `', '` atau lainnya? Karena kita ingin karakter-karakter pagar dan spasi **berjejer rapat** tanpa ada karakter pemisah di antara mereka — persis seperti tampilan satu baris papan catur. Contoh num=3, row=0: `['#', ' ', '#'].join('')` → `"# #"`.)*

---

### 5️⃣ Gabungkan Baris → String Papan `[JOIN BARIS]`

```javascript
.join('\n')
```

Setelah semua baris terkumpul dalam array luar, `.join('\n')` menggabungkan semuanya dengan karakter newline.

> *(Kenapa `.join('\n')` dan bukan `+= '\n'` seperti Versi 1 & 2? Karena `.join()` menyisipkan pemisah **di antara** elemen — tidak di akhir. Artinya tidak ada *trailing newline* (`\n`) di baris paling bawah. Ini sedikit berbeda dengan Versi 1 & 2! Contoh: `["# #", " # ", "# #"].join('\n')` → `"# #\n # \n# #"` — perhatikan tidak ada `\n` di akhir.)*

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 3`)

### Tahap A — Membuat Setiap Baris

**Untuk `row = 0`:**
```
col=0: (0+0)%2=0 ✅ → '#'
col=1: (0+1)%2=1    → ' '
col=2: (0+2)%2=0 ✅ → '#'

Array kolom: ['#', ' ', '#']
Setelah .join(''): "# #"
```

**Untuk `row = 1`:**
```
col=0: (1+0)%2=1    → ' '
col=1: (1+1)%2=0 ✅ → '#'
col=2: (1+2)%2=1    → ' '

Array kolom: [' ', '#', ' ']
Setelah .join(''): " # "
```

**Untuk `row = 2`:**
```
col=0: (2+0)%2=0 ✅ → '#'
col=1: (2+1)%2=1    → ' '
col=2: (2+2)%2=0 ✅ → '#'

Array kolom: ['#', ' ', '#']
Setelah .join(''): "# #"
```

### Tahap B — Merakit Papan

```
Array baris: ["# #", " # ", "# #"]
Setelah .join('\n'):

"# #"
" # "
"# #"
```

> [!IMPORTANT]
> 🔑 **Perbedaan Kunci dengan Versi 1 & 2:**
>
> | Aspek | Versi 1 & 2 | Versi 3 |
> |-------|-------------|---------|
> | Cara membangun | Imperatiaf (`for` loop + `+=`) | Deklaratif (`Array.from` + `join`) |
> | Variabel sementara | `let pattern = ''` diperlukan | Tidak ada variabel sementara |
> | Newline | Ditambahkan manual `+= '\n'` | Otomatis oleh `.join('\n')` |
> | `\n` di akhir | Ada (trailing newline) | Tidak ada |
> | Gaya coding | Imperatif | Fungsional |

<a name="gotchas"></a>
## ⚠️ Gotchas — Jebakan Khusus Pendekatan Fungsional

> ⚠️ **Jebakan #1: Tertukar posisi `.join('')` dan `.join('\n')`**
>
> `.join('')` harus ada di ujung **inner** `Array.from` (menggabungkan kolom), dan `.join('\n')` ada di ujung **outer** `Array.from` (menggabungkan baris). Menukarnya akan menghasilkan output yang salah total.
> ```javascript
> // ❌ SALAH — join dibalik
> Array.from(..., (_, row) =>
>   Array.from(..., (_, col) => ...).join('\n')  // ← ini seharusnya .join('')!
> ).join('');                                      // ← ini seharusnya .join('\n')!
> ```

---

> ⚠️ **Jebakan #2: Output Versi 3 tidak punya *trailing newline***
>
> Versi 1 dan 2 menghasilkan string yang **diakhiri** dengan `\n`, sedangkan Versi 3 tidak. Jika test case mengharapkan trailing newline, Versi 3 akan gagal.
> ```
> Versi 1 & 2: "# #\n # \n# #\n"  ← ada '\n' di akhir
> Versi 3:     "# #\n # \n# #"    ← tidak ada '\n' di akhir
> ```
> Solusi jika dibutuhkan: tambahkan `+ '\n'` di akhir `.join('\n')`.

---

> ⚠️ **Jebakan #3: Lupa bahwa `_` bukan nilai kosong**
>
> `_` adalah nama variabel yang valid — ia menyimpan nilai `undefined` (isi slot yang kosong). Ia BUKAN simbol ajaib JavaScript, melainkan **konvensi komunitas** yang berarti "parameter ini sengaja tidak dipakai". Jika kamu mau menggunakannya, kamu bisa ganti `_` dengan nama apapun — hanya saja konvensi `_` membuat pembaca tahu kamu memang berniat tidak memakainya.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [04 — Version 2: Single Loop](./04-version-2-single-loop.md) | [README](./README.md) | [06 — Challenge Insight](./06-challenge-insight.md) |
