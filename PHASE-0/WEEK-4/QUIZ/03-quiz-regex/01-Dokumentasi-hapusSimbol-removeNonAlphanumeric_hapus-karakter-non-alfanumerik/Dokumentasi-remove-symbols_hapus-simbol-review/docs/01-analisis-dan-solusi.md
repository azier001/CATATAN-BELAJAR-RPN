# 🔍 Analisis Pola & Solusi Bertahap

### ✨ _Dari analisis pola hingga kode pertama yang berjalan — langkah demi langkah!_

> 🎯 **Tujuan:** Memahami bagaimana logika filtering ditemukan dari tabel analisis,
> lalu membangun solusi pertama secara bertahap menggunakan `for...of` dan Regex `.test()`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Visualisasi & Analisis Pola](#visualisasi-analisis) | Menemukan aturan dari test cases |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + tabel penamaan |
| 🧱 | [Pendekatan Bertahap](#pendekatan-bertahap) | Membangun solusi step-by-step |
| 🧮 | [Algoritma Tahan Lupa](#algoritma-tahan-lupa) | Penjelasan "Kenapa" di setiap langkah |
| ⚠️ | [Gotcha & Jebakan](#gotcha) | Peringatan penting tentang `\w` |

---

<a name="visualisasi-analisis"></a>

## 🔍 Visualisasi & Analisis Pola

Sebelum menulis kode, kita membedah test cases untuk menemukan **aturan logika** yang tersembunyi.

### Tabel Breakdown Karakter

Contoh analisis pada input `'devel0p3r s3j@@ati'`:

| Karakter | `d` | `e` | `v` | `e` | `l` | `0` | `p` | `3` | `r` | ` ` | `s` | `3` | `j` | `@` | `@` | `a` | `t` | `i` |
|----------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Tipe | Huruf | Huruf | Huruf | Huruf | Huruf | Angka | Huruf | Angka | Huruf | Spasi | Huruf | Angka | Huruf | Simbol | Simbol | Huruf | Huruf | Huruf |
| Status | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ |

**Hasil:** `'devel0p3rs3jati'` — spasi dan `@@` hilang, sisanya tetap.

### Pola yang Ditemukan

| Kategori | Karakter yang Termasuk | Status |
|:---------|:-----------------------|:-------|
| ✅ **TETAP** | Huruf (`a-z`, `A-Z`) dan Angka (`0-9`) | Dipertahankan |
| ❌ **HILANG** | Simbol (`@`, `#`, `!`, `~`, `%`, `$`, `+`, `-`, `*`, `=`, dll) dan Spasi | Dihapus |

> [!TIP]
> **Kesimpulan aturan:** Fungsi ini adalah **filter alphanumeric** — hanya karakter
> yang termasuk huruf atau angka yang boleh lolos.

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

Sebelum menulis kode lengkap, kita siapkan **peta mental** berupa kerangka kosong dan panduan penamaan.

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---------------|:---------------|:-------------------|:-------|
| Parameter input | `str` | `s`, `x`, `input` | Singkatan standar untuk *string* |
| Penampung akhir | `result` | `hasil`, `h`, `res` | Konsisten berbahasa Inggris dengan `str` |
| Karakter per iterasi | `char` | `c`, `x`, `el` | Deskriptif — langsung paham ini satu karakter |

### Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Filter satu per satu)

const hapusSimbol = (str) => {

  let result = '';                       // [PENAMPUNG] → string bersih

  for (const char of str) {              // [ITERASI] → baca tiap karakter
    if (/* cek apakah alphanumeric */) { //   [FILTER] → validasi karakter
      result += char;                    //   [KUMPULKAN] → tambah ke penampung
    }
  }

  return result;                         // [OUTPUT] → kembalikan hasil
};
```

> [!NOTE]
> Blueprint ini menggunakan *mental model* **"Kumpulkan yang valid"** —
> kita menelusuri setiap karakter satu per satu, lalu hanya mengambil
> yang lolos filter.

---

<a name="pendekatan-bertahap"></a>

## 🧱 Pendekatan Bertahap (Step-by-Step)

Kode dibangun secara bertahap — **bukan langsung full code**.

### Step 1 — Siapkan Iterasi Dasar

Pertama, kita harus bisa "melihat" setiap karakter satu per satu. Pilihan terbaik: `for...of` karena langsung mengekstrak nilai tanpa perlu urus *index*.

```javascript
const hapusSimbol = (str) => {

  for (const char of str) {
    console.log(char); // Cek apakah kita bisa akses tiap karakter
  }

};
```

### Step 2 — Tambahkan Filter Regex

Sekarang kita punya akses ke setiap `char`. Saatnya memvalidasi apakah karakter tersebut huruf/angka menggunakan Regex `\w` dan method `.test()`:

```javascript
const hapusSimbol = (str) => {

  for (const char of str) {
    if (/\w/.test(char)) {
      console.log(char, '→ VALID'); // Hanya karakter yang lolos filter
    }
  }

};
```

### Step 3 — Kumpulkan & Return

Terakhir, ganti `console.log` dengan mekanisme pengumpulan ke variabel `result`:

```javascript
const hapusSimbol = (str) => {
  let result = '';

  for (const char of str) {
    if (/\w/.test(char)) {
      result += char;
    }
  }

  return result;
};
```

> [!IMPORTANT]
> Perhatikan alur bertahap ini: **iterasi dulu → filter → kumpulkan**.
> Jangan langsung lompat ke kode final — membangun step-by-step melatih
> kemampuan *problem decomposition* yang sangat penting.

---

<a name="algoritma-tahan-lupa"></a>

## 🧮 Algoritma Tahan Lupa

Setiap langkah dijelaskan dengan **"Kenapa"** dan **contoh angka konkret**.

1. **Siapkan Penampung `[VARIABEL]`** — Buat `let result = ''`
   - *Kenapa string kosong?* Karena kita akan menambahkan karakter satu per satu dengan operator `+=`. Jika diinisialisasi dengan `undefined` atau tanpa nilai, operasi concatenation akan menghasilkan `"undefined..."` di awal string.

2. **Telusuri Karakter `[FOR...OF LOOP]`** — Iterasi `char` dari `str`
   - *Kenapa `for...of`?* Karena kita butuh **nilai** karakternya langsung (bukan index-nya). Contoh: pada `'ma@#k!an~'`, iterasi pertama langsung mendapat `char = 'm'`, bukan `index = 0`.

3. **Filter Alphanumeric `[IF + REGEX]`** — Cek `/\w/.test(char)`
   - *Kenapa `.test()` bukan `.match()`?* Karena `.test()` mengembalikan `boolean` (`true`/`false`) yang cocok untuk kondisi `if`. Contoh: `/\w/.test('@')` → `false`, `/\w/.test('m')` → `true`.

4. **Kumpulkan `[STRING CONCATENATION]`** — `result += char`
   - *Kenapa `+=`?* Karena kita membangun string baru karakter per karakter. Contoh: setelah memproses `'ma@#k'`, nilai `result` berubah bertahap: `'m'` → `'ma'` → `'mak'`.

---

<a name="gotcha"></a>

## ⚠️ Gotcha & Jebakan

> [!WARNING]
> **Regex `\w` menyertakan underscore!**
> Pattern `\w` ekuivalen dengan `[a-zA-Z0-9_]` — artinya karakter `_` (underscore)
> **TIDAK akan dihapus** dan dianggap valid.
>
> Jika requirement mengharuskan underscore juga dihapus, gunakan regex yang
> lebih ketat: `/[a-zA-Z0-9]/` atau `/[a-z0-9]/i`.
>
> Pada challenge ini tidak ada test case dengan underscore, jadi `\w` aman digunakan.

> [!CAUTION]
> **Jangan lupa inisialisasi `result` sebagai string kosong!**
> Jika kamu menulis `let result;` tanpa `= ''`, maka `result += char` akan
> menghasilkan `"undefinedm"`, `"undefinedma"`, dst — karena `undefined + 'm'`
> di JavaScript menghasilkan string `"undefinedm"`.

---

⬅️ [Kembali ke README](../README.md) · ➡️ [Evolusi & Clean Code](02-evolusi-dan-clean-code.md)
