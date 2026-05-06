# 📣 Fungsi `shoutOut()` — Mengembalikan Nilai dari Function

> 📝 Belajar membuat fungsi sederhana yang mengembalikan sebuah string menggunakan Arrow Function

---

## 📋 Soal

Buatlah sebuah fungsi bernama `shoutOut()`, yang **mengembalikan** nilai berupa `"Halo Function!"`, yang kemudian akan ditampilkan di console.

---

## 💻 Kode Solusi

```javascript
const shoutOut = () => {
  return 'Halo Function!';
};

console.log(shoutOut());
```

**Versi singkat (Implicit Return):**

```javascript
const shoutOut = () => 'Halo Function!';

console.log(shoutOut());
```

> 💡 Pada Arrow Function, jika isi fungsi **hanya satu baris `return`**, kita bisa menghilangkan `{}` dan kata `return`. Ini disebut *Implicit Return*.

---

## 🔍 Penjelasan

### Alur Eksekusi

```
[Panggil shoutOut()] ──▶ [Masuk ke fungsi] ──▶ [return "Halo Function!"] ──▶ [Nilai keluar ke console.log] ──▶ Tampil di layar!
```

### Step-by-step

1. **Deklarasi fungsi** — `const shoutOut = () => { ... }` membuat fungsi bernama `shoutOut` tanpa parameter (kurung kosong `()`)
2. **Return value** — `return 'Halo Function!'` mengembalikan string keluar dari fungsi
3. **Pemanggilan** — `shoutOut()` menjalankan fungsi dan menghasilkan `"Halo Function!"`
4. **Tampilkan** — `console.log()` menerima hasil return dan menampilkannya di console

---

## 🧪 Contoh Output

```
Halo Function!
```

---

## 📚 Konsep yang Dipelajari

### 1. `return` vs `console.log()` 🍰

| Aspek | `return` | `console.log()` |
|-------|----------|-----------------|
| **Analogi** | Koki restoran — menyerahkan kue ke tanganmu | Koki YouTube — pamer kue di kamera |
| **Fungsi** | Mengeluarkan nilai dari fungsi | Hanya menampilkan di console |
| **Nilai bisa diolah?** | ✅ Ya — bisa disimpan ke variabel | ❌ Tidak — nilainya `undefined` |

```javascript
// return → nilai bisa ditangkap
const kokiRestoran = () => { return "Kue Coklat"; }
let hasil = kokiRestoran(); // hasil = "Kue Coklat" ✅

// console.log → hanya tampil, tidak bisa ditangkap
const kokiYoutuber = () => { console.log("Kue Coklat"); }
let hasil2 = kokiYoutuber(); // hasil2 = undefined ❌
```

**Intinya:** Kalau datanya mau diolah lagi, **wajib pakai `return`**. Kalau cuma mau ngintip nilai (debugging), pakai `console.log`.

---

### 2. Parameter vs Argumen 🫙

| Istilah | Penjelasan | Analogi |
|---------|-----------|---------|
| **Parameter** | Label/nama tempat kosong saat **membuat** fungsi | Tulisan "Masukkan [buah]" di buku panduan blender |
| **Argumen** | Nilai sungguhan saat **memanggil** fungsi | Buah asli (Apel 🍎) yang dimasukkan ke blender |

```javascript
// 'buah' = PARAMETER (label kosong)
const blender = (buah) => {
  return "Jus " + buah;
}

// "Apel" = ARGUMEN (nilai sungguhan)
console.log(blender("Apel")); // Output: Jus Apel
```

> 💡 Fungsi `shoutOut()` tidak memiliki parameter karena tidak membutuhkan input dari luar.

---

### 3. Function Declaration vs Arrow Function ✍️

| Aspek | Function Declaration | Arrow Function |
|-------|---------------------|---------------|
| **Sintaks** | `function nama() {}` | `const nama = () => {}` |
| **Hoisting** | ✅ Bisa dipanggil sebelum dideklarasikan | ❌ Harus dideklarasikan dulu |
| **Gaya** | Klasik / Tradisional | Modern (ES6+) |

```javascript
// Function Declaration — bisa dipanggil di atas
function sapa(nama) {
  return "Halo " + nama;
}

// Arrow Function — harus ditulis dulu, baru dipanggil
const sapa = (nama) => {
  return "Halo " + nama;
}
```

---

## 💡 Catatan Tambahan

- ⚠️ `shoutOut()` (dengan kurung) → **memanggil** fungsi dan menjalankan kodenya
- ⚠️ `shoutOut` (tanpa kurung) → hanya **referensi** ke fungsi, tidak dijalankan
- 🔤 Perhatikan ejaan! `"Halo"` (satu L) bukan `"Hallo"` (dua L) — perbedaan satu huruf bisa mengubah output

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
