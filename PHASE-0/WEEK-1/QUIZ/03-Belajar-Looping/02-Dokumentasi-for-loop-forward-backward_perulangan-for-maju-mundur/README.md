# 🔄 For Loop: Menghitung Maju & Mundur

> 📝 Membuat dua perulangan `for` — satu menghitung maju (increment) dan satu menghitung mundur (decrement) — lengkap dengan pesan di setiap iterasi.

---

## 📋 Soal

Buat looping menggunakan syntax `for` yang:
1. **LOOPING PERTAMA** — menghitung maju dari 1 sampai 20, setiap baris menampilkan pesan `"I love coding"`.
2. **LOOPING KEDUA** — menghitung mundur dari 20 sampai 1, setiap baris menampilkan pesan `"I will become fullstack developer"`.
3. Tampilkan judul `'LOOPING PERTAMA'` dan `'LOOPING KEDUA'` sebagai pemisah.

---

## 💻 Kode Solusi

```javascript
console.log('LOOPING PERTAMA');

for (let i = 1; i <= 20; i++) {
  console.log(`${i} - I love coding`);
}

console.log('---------------');

console.log('LOOPING KEDUA');

for (let i = 20; i >= 1; i--) {
  console.log(`${i} - I will become fullstack developer`);
}
```

---

## 🔍 Penjelasan

### 3 Komponen `for` Loop dalam Satu Baris

Berbeda dengan `while` yang menyebar 3 komponen di tempat berbeda, `for` menggabungkan semuanya:

```javascript
for ([Titik Awal]; [Kondisi Berhenti]; [Langkah]) {
  // Kode yang diulang
}
```

| Komponen | Fungsi | Analogi |
|----------|--------|---------|
| **Titik Awal (Start)** | Dari angka berapa mulai? | Posisi awal berdiri |
| **Kondisi Berhenti (Stop)** | Sampai kapan boleh lanjut? | Garis finish |
| **Langkah (Step)** | Bertambah atau berkurang? | Langkah kaki |

### Looping Pertama (Maju)

1. **Start:** `let i = 1` — mulai dari angka 1.
2. **Stop:** `i <= 20` — berjalan selama `i` masih ≤ 20.
3. **Step:** `i++` — setiap iterasi, `i` bertambah 1.
4. **Output:** Template literal `` `${i} - I love coding` `` menggabungkan angka dan teks.

```
[Start: i=1] → [Cek: 1 <= 20? Ya!] → [Cetak "1 - I love coding"] → [i++ → i jadi 2]
      ↑                                                                ↓
      └──────────────────── [Kembali Cek] ←────────────────────────────┘
... (sampai i=21, Cek: 21 <= 20? Tidak! -> BERHENTI)
```

### Looping Kedua (Mundur)

1. **Start:** `let i = 20` — mulai dari angka 20.
2. **Stop:** `i >= 1` — berjalan selama `i` masih ≥ 1.
3. **Step:** `i--` — setiap iterasi, `i` berkurang 1.
4. **Output:** Template literal `` `${i} - I will become fullstack developer` `` menggabungkan angka dan teks.

```
[Start: i=20] → [Cek: 20 >= 1? Ya!] → [Cetak "20 - I will become..."] → [i-- → i jadi 19]
      ↑                                                                    ↓
      └──────────────────── [Kembali Cek] ←────────────────────────────────┘
... (sampai i=0, Cek: 0 >= 1? Tidak! -> BERHENTI)
```

---

## 🔀 Perbandingan: `while` vs `for` (Challenge yang Sama)

```javascript
// ═══ VERSI WHILE ═══          // ═══ VERSI FOR ═══
let i = 1;                      // (tidak perlu deklarasi terpisah)
while (i <= 20) {               for (let i = 1; i <= 20; i++) {
  console.log(i);                 console.log(i);
  i++;                          // (tidak perlu increment manual)
}                               }
```

| Aspek | `while` | `for` |
|-------|---------|-------|
| Deklarasi variabel | Terpisah di luar | Gabung di header |
| Increment/Decrement | Manual di dalam body | Otomatis di header |
| Jumlah baris | Lebih panjang | Lebih ringkas |
| Risiko lupa increment | ⚠️ Lebih tinggi | ✅ Lebih aman |

**Insight:** Untuk kasus **iterasi pasti** (tahu berapa kali loop), `for` lebih cocok karena semua kontrol ada di satu baris — lebih rapi dan aman dari infinite loop.

---

## 🧪 Contoh Output

```
LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
---------------
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer
```

---

## 📚 Konsep yang Dipelajari

- ✅ **`for` loop** — perulangan dengan 3 komponen (inisialisasi, kondisi, update) dalam satu baris
- ✅ **Increment (`i++`)** — menambah nilai variabel sebesar 1 untuk menghitung maju
- ✅ **Decrement (`i--`)** — mengurangi nilai variabel sebesar 1 untuk menghitung mundur
- ✅ **Template Literals** — menggunakan backtick (`` ` ``) dan `${}` untuk string interpolation
- ✅ **Block scoping** — variabel `let i` di dalam `for` hanya hidup di dalam loop tersebut, sehingga bisa dipakai ulang di loop kedua tanpa konflik

---

## 💡 Catatan Tambahan

- **`for` vs `while` — Prinsip yang sama:** Keduanya butuh 3 komponen (Start, Stop, Step). `for` hanya mengemasnya jadi satu baris — lebih ringkas untuk kasus iterasi pasti.
- **Scope variabel:** Di `for`, variabel `i` otomatis ter-*scope* di dalam loop. Di `while`, kamu harus buat variabel baru (`num2`) atau reset manual agar tidak bentrok.
- **Reuse nama variabel:** Karena scoping, kedua `for` loop bisa pakai nama `i` tanpa masalah — mereka hidup di "ruang" yang berbeda.

> 📎 Lihat juga: Challenge sebelumnya — [While Loop: Maju & Mundur](../01-Dokumentasi-while-loop-forward-backward_perulangan-while-maju-mundur/) untuk perbandingan pendekatan
