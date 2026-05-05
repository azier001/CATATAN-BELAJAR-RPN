# 🔄 While Loop: Menghitung Maju & Mundur

> 📝 Membuat dua perulangan `while` — satu menghitung maju (increment) dan satu menghitung mundur (decrement) — lengkap dengan pesan di setiap iterasi.

---

## 📋 Soal

Buat looping menggunakan syntax `while` yang:
1. **LOOPING PERTAMA** — menghitung maju dari 1 sampai 10, setiap baris menampilkan pesan `"I love coding"`.
2. **LOOPING KEDUA** — menghitung mundur dari 20 sampai 2 (lompat 2), setiap baris menampilkan pesan `"I will become fullstack developer"`.
3. Tampilkan judul `'LOOPING PERTAMA'` dan `'LOOPING KEDUA'` sebagai pemisah.

---

## 💻 Kode Solusi

```javascript
let num = 1;

console.log('LOOPING PERTAMA');
while (num <= 10) {
  console.log(`${num} - I love coding`);
  num++;
}

console.log('---------------');

let number = 20;

console.log('LOOPING KEDUA');
while (number > 0) {
  console.log(`${number} - I will become fullstack developer`);
  number -= 2;
}
```

---

## 🔍 Penjelasan

### 3 Komponen Wajib Setiap Loop

Sebelum menulis kode, pahami dulu bahwa setiap perulangan **wajib** memiliki 3 komponen agar tidak terjebak *infinite loop*:

| Komponen | Fungsi | Analogi |
|----------|--------|---------|
| **Titik Awal (Start)** | Dari angka berapa mulai? | Posisi awal berdiri |
| **Kondisi Berhenti (Stop)** | Sampai kapan boleh lanjut? | Garis finish |
| **Langkah (Step)** | Bertambah atau berkurang? | Langkah kaki |

### Looping Pertama (Maju)

1. **Start:** `let num = 1` — mulai dari angka 1.
2. **Stop:** `num <= 10` — berjalan selama `num` masih ≤ 10.
3. **Step:** `num++` — setiap iterasi, `num` bertambah 1.
4. **Output:** Template literal `` `${num} - I love coding` `` menggabungkan angka dan teks.

```
[Start: num=1] → [Cek: 1 <= 10? Ya!] → [Cetak 1] → [num jadi 2]
      ↑                                               ↓
      └─────────────────── [Kembali Cek] <────────────┘
... (sampai num=11, Cek: 11 <= 10? Tidak! -> BERHENTI)
```

### Looping Kedua (Mundur)

1. **Start:** `let number = 20` — mulai dari angka 20.
2. **Stop:** `number > 0` — berjalan selama `number` masih > 0.
3. **Step:** `number -= 2` — setiap iterasi, `number` berkurang 2.
4. **Output:** Lompat 2-per-2 menghasilkan: 20, 18, 16, ... , 4, 2.

```
[Start: number=20] → [Cek: 20 > 0? Ya!] → [Cetak 20] → [number jadi 18]
      ↑                                                   ↓
      └─────────────────── [Kembali Cek] <────────────────┘
... (sampai number=0, Cek: 0 > 0? Tidak! -> BERHENTI)
```

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
---------------
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
```

---

## 📚 Konsep yang Dipelajari

- ✅ **`while` loop** — perulangan yang berjalan selama kondisi bernilai `true`
- ✅ **Increment (`++`)** — menambah nilai variabel sebesar 1 untuk menghitung maju
- ✅ **Decrement (`-= 2`)** — mengurangi nilai variabel sebesar 2 untuk menghitung mundur lompat 2
- ✅ **Template Literals** — menggunakan backtick (`` ` ``) dan `${}` untuk menggabungkan variabel ke dalam string
- ✅ **Shorthand operator** — `number -= 2` adalah bentuk ringkas dari `number = number - 2`

---

## 💡 Catatan Tambahan

- **Shorthand assignment operators:** Selain `-=`, ada juga `+=`, `*=`, `/=`, dan `%=` yang bekerja dengan prinsip yang sama.
- **Infinite loop warning:** Jika lupa menambahkan `num++` atau `number -= 2`, program akan berjalan tanpa henti dan bisa membuat browser atau terminal *crash*.
- **Template Literals vs Concatenation:** `` `${num} - I love coding` `` jauh lebih rapi dibanding `num + " - I love coding"` — terutama saat string-nya makin kompleks.

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
