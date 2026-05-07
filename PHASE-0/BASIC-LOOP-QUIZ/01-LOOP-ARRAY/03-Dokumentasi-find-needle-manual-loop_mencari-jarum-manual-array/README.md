# 🪡 Find Needle (Mencari Jarum di Tumpukan Jerami)

### ✨ _Menyisir array satu per satu sampai menemukan yang dicari_

> 🎯 **Tujuan:** Memahami logika **Sequential Search** (pencarian berurutan) di dalam Array menggunakan loop manual, serta menerapkan teknik **Early Return** untuk menghentikan fungsi begitu target ditemukan.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | <a href="#latar-belakang">Latar Belakang & Analogi</a> | Konsep "Buka Kotak Satu-Satu" |
| 📝 | <a href="#soal">Instruksi Soal</a> | Tantangan yang harus dipecahkan |
| 🔑 | <a href="#konsep">Konsep Penting</a> | Early Return vs Break & Return |
| 💻 | <a href="#kode-solusi">Kode Solusi & Eksekusi</a> | Implementasi kode dan *tracing* manual |
| 🎓 | <a href="#kode-mentor">Kode Versi Mentor</a> | Versi minimalis & robust dengan Guard Clause |
| ⚖️ | <a href="#perbandingan">Perbandingan Versi</a> | Break & Return vs Direct Return |
| ✅ | <a href="#verifikasi">Verifikasi Output</a> | Test case untuk menguji fungsi |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang & Analogi

Challenge ini melatih kita tentang **Sequential Search** — pencarian berurutan. Bayangkan kamu punya **deretan kotak tertutup** dan kamu harus membuka satu per satu sampai menemukan kotak bertuliskan `'needle'`.

> [!TIP]
> 💡 **Analogi "Buka Kotak Satu-Satu"**
>
> | | Skenario | Logika Kita |
> |---|---|---|
> | 📦 | Kamu punya 10 kotak tertutup berisi macam-macam | Array `haystack` berisi data campur-campur. |
> | 👆 | Kamu buka dari kotak pertama, satu per satu | Loop `for` menjelajahi array dari index `0`. |
> | 🎯 | Begitu ketemu kotak bertulisan "needle"... | `if (haystack[i] === 'needle')` → **langsung berhenti!** |
> | 🛑 | ...kamu STOP dan teriak "Ketemu di kotak ke-X!" | `return` langsung menghentikan fungsi dan loop. |

### 💡 Jadi, Apa Solusinya?
Kita butuh sebuah loop untuk menyisir array, sebuah kondisi `if` untuk mengecek setiap elemen, dan `return` langsung di dalam loop begitu target ditemukan.

---

<a name="soal"></a>
## 📝 Instruksi Soal

Buatlah sebuah fungsi bernama `findNeedle` yang menerima satu parameter berupa array (`haystack`).

**Syarat Wajib:**
1. Wajib menggunakan iterasi/loop.
2. Dilarang menggunakan *built-in function* atau *array methods* (seperti `.indexOf()`, `.find()`, `.findIndex()`, dll).
3. Cari string `'needle'` di dalam array, lalu kembalikan pesan `"found the needle at position [index]"`.

> 📎 **Sumber soal:** [Codewars — A Needle in the Haystack](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c)

---

<a name="konsep"></a>
## 🔑 Konsep Penting — Early Return Pattern

Bagian paling menarik dari soal ini bukan "bagaimana mencari"-nya, tapi **"kapan harus berhenti"**. Ada dua pendekatan:

### 1️⃣ Break & Return — _"Simpan dulu, laporan nanti"_ 📦

```
🎯 Cara Kerja  → Simpan posisi ke variabel, break dari loop, return setelah loop
📌 Kelebihan   → Variabel `position` bisa dipakai untuk logika tambahan sebelum return
🔐 Analogi     → Catat nomor kotak di kertas, keluar dari gudang, lalu lapor ke bos.
```

### 2️⃣ Direct Return — _"Teriak langsung dari gudang!"_ 📢

```
🎯 Cara Kerja  → Langsung return di dalam if, tanpa variabel tambahan
📌 Kelebihan   → Lebih ringkas, tidak perlu variabel perantara, tidak perlu break
🔐 Analogi     → Begitu ketemu, langsung teriak dari dalam gudang: "KETEMU DI SINI!"
```

> [!IMPORTANT]
> 🔔 **Kenapa Direct Return lebih disukai?**
> Begitu perintah `return` dieksekusi di dalam loop, **seluruh fungsi langsung selesai**. Loop otomatis berhenti, tidak perlu `break` lagi. Ini membuat kode lebih bersih dan efisien — teknik ini disebut **Early Return Pattern**.

---

<a name="kode-solusi"></a>
## 💻 Kode Solusi & Eksekusi

Berikut adalah implementasi kode *clean* menggunakan **Early Return Pattern**:

```javascript
const findNeedle = (haystack) => {
  for (let i = 0; i < haystack.length; i++) {
    const current = haystack[i];

    if (current === 'needle') {
      return `found the needle at position ${i}`;
    }
  }
};
```

### 🔍 Tracing Eksekusi (Visualisasi Alur)

Bagaimana komputer memproses input `['hay', 'junk', 'needle', 'moreJunk']`?

| Iterasi | `i` | `current` | Kondisi (`=== 'needle'`) | Aksi |
| :--- | :--- | :--- | :--- | :--- |
| ke-1 | `0` | `'hay'` | ❌ Bukan | Lanjut... |
| ke-2 | `1` | `'junk'` | ❌ Bukan | Lanjut... |
| ke-3 | `2` | `'needle'` | ✅ **Ketemu!** | 🎯 `return` → STOP |
| ke-4 | `3` | `'moreJunk'` | — | ⛔ Tidak pernah dicek! |

> [!TIP]
> 🏆 **Hasil Akhir:** Fungsi langsung mengembalikan `"found the needle at position 2"` dan **index ke-3 tidak pernah diproses** — itulah kekuatan Early Return!

---

<a name="kode-mentor"></a>
## 🎓 Kode Versi Mentor (Minimalis & Robust)

Berikut versi alternatif yang lebih **defensif** — menambahkan "jaring pengaman" jika `'needle'` ternyata tidak ada di array.

```javascript
function findNeedle(haystack) {
  // 1. Loop standar untuk akses index
  for (let i = 0; i < haystack.length; i++) {
    // 2. Langsung cek tanpa variabel bantuan (lebih ringkas)
    if (haystack[i] === 'needle') {
      return `found the needle at position ${i}`;
    }
  }

  // 3. Jaring pengaman (Guard Clause)
  // Jika loop selesai tanpa menemukan needle
  return 'needle not found in the haystack';
}
```

### 🔍 Apa yang Berbeda?

> [!NOTE]
> 💡 **2 Perbedaan Utama dari Versi Murid:**
>
> | No | Perbedaan | Penjelasan |
> |:---|:----------|:-----------|
> | 1️⃣ | **Tanpa variabel `current`** | Langsung pakai `haystack[i]` di dalam `if`. Untuk fungsi sederhana, ini membuat kode lebih ringkas. |
> | 2️⃣ | **Default Return** di luar loop | Jika `'needle'` tidak ditemukan, fungsi versi murid mengembalikan `undefined`. Versi ini memberikan pesan yang jelas: `'needle not found in the haystack'`. |

---

<a name="perbandingan"></a>
## ⚖️ Mengapa Direct Return dan Bukan Break & Return?

Dalam sesi diskusi, kita membandingkan dua pendekatan: **Break & Return** (versi pertama) vs **Direct Return** (versi final).

**Versi Break & Return (Percobaan Pertama):**
```javascript
function findNeedle(haystack) {
  let position = 0;

  for (let i = 0; i < haystack.length; i++) {
    const current = haystack[i];
    if (current === 'needle') {
      position = i;
      break;
    }
  }

  return `found the needle at position ${position}`;
}
```

**Perbandingan:**

| Aspek | Break & Return 🔴 | Direct Return 🟢 |
|-------|:----------|:----------|
| **Variabel tambahan** | 🔴 Butuh `let position = 0` | 🟢 Tidak perlu |
| **Keyword tambahan** | 🔴 Butuh `break` | 🟢 Tidak perlu |
| **Jumlah baris** | 🔴 Lebih panjang | 🟢 Lebih ringkas |
| **Keterbacaan** | 🔴 Alur lebih panjang | 🟢 Langsung *to-the-point* |
| **Hasil akhir** | ✅ Sama | ✅ Sama |

> [!TIP]
> 🏆 **Kesimpulan:** Direct Return lebih disukai karena **mengurangi kompleksitas** — tidak perlu variabel perantara dan keyword `break`. Kodenya lebih pendek, lebih bersih, dan langsung komunikatif.

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Uji Kode

Jalankan serangkaian *test cases* berikut untuk memvalidasi fungsi:

### 1️⃣ Uji Array Campuran (Mixed Types)
```javascript
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
console.log(findNeedle(haystack_1));
// Output: found the needle at position 3  ← ✅
```

### 2️⃣ Uji Array String
```javascript
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
console.log(findNeedle(haystack_2));
// Output: found the needle at position 5  ← ✅
```

### 3️⃣ Uji Array Panjang (Banyak Elemen)
```javascript
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
console.log(findNeedle(haystack_3));
// Output: found the needle at position 30  ← ✅
```

### 4️⃣ Uji Array String Pendek
```javascript
let haystack_4 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
console.log(findNeedle(haystack_4));
// Output: found the needle at position 5  ← ✅
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Manual Iteration** — Menggunakan `for` loop untuk menyisir array satu per satu tanpa built-in methods
- ✅ **Accessing Values** — Mengambil isi array berdasarkan index (`haystack[i]`)
- ✅ **Strict Equality** — Membandingkan nilai dengan `===` untuk pencocokan tepat
- ✅ **Early Return Pattern** — `return` di dalam loop menghentikan seluruh fungsi seketika, tanpa perlu `break`
- ✅ **Template Literals** — Menggabungkan string dan variabel dengan backticks (`` ` ``) dan `${}`

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **7 Mei 2026** berdasarkan sesi mentoring JavaScript membahas "Sequential Search & Early Return Pattern". Kompleksitas algoritma ini adalah **O(n)** pada kasus terburuk (*needle* di akhir array), namun bisa selesai lebih cepat berkat Early Return jika *needle* ditemukan di tengah jalan.
