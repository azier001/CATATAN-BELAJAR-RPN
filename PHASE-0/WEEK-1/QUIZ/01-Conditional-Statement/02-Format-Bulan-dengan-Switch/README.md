# 📅 Format Bulan dengan Switch

> 📝 Mengonversi angka bulan menjadi nama bulan Indonesia menggunakan `switch-case`

---

## 📋 Soal

Diberikan tiga variabel: `tanggal`, `bulan` (angka 1-12), dan `tahun`. Ubah angka bulan menjadi nama bulan Indonesia, lalu tampilkan dalam format `"tanggal NamaBulan tahun"`.

**Contoh:** `hari = 21`, `bulan = 1`, `tahun = 1945` → Output: `"21 Januari 1945"`

**Syarat:** Gunakan `switch-case`.

---

## 💻 Kode Solusi

```javascript
let tanggal = 12;
let bulan = 2;
let tahun = 2001;

let namaBulan;

switch (bulan) {
  case 1:
    namaBulan = 'Januari';
    break;

  case 2:
    namaBulan = 'Februari';
    break;

  case 3:
    namaBulan = 'Maret';
    break;

  case 4:
    namaBulan = 'April';
    break;

  case 5:
    namaBulan = 'Mei';
    break;

  case 6:
    namaBulan = 'Juni';
    break;

  case 7:
    namaBulan = 'Juli';
    break;

  case 8:
    namaBulan = 'Agustus';
    break;

  case 9:
    namaBulan = 'September';
    break;

  case 10:
    namaBulan = 'Oktober';
    break;

  case 11:
    namaBulan = 'November';
    break;

  case 12:
    namaBulan = 'Desember';
    break;

  default:
    console.log('Bulan tidak valid');
}

if (namaBulan) {
  console.log(`${tanggal} ${namaBulan} ${tahun}`);
}
```

---

## 🔍 Penjelasan

1. Deklarasikan `let namaBulan;` sebagai **variabel terpisah** — supaya nilai asli `bulan` (angka) tetap terjaga
2. `switch (bulan)` mengecek nilai angka bulan terhadap setiap `case`
3. Setiap `case` meng-assign nama bulan ke `namaBulan`, lalu `break` untuk keluar dari switch
4. `default` menangani input di luar 1-12 (validasi)
5. `if (namaBulan)` memastikan output hanya dicetak jika bulan valid — mencegah `"12 undefined 2001"`

---

## 🧪 Contoh Output

```
Input:  tanggal = 12, bulan = 2, tahun = 2001
Output: "12 Februari 2001"

Input:  tanggal = 21, bulan = 1, tahun = 1945
Output: "21 Januari 1945"

Input:  tanggal = 12, bulan = 13, tahun = 2001
Output: "Bulan tidak valid"
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Switch-case** — struktur kontrol untuk banyak kondisi berdasarkan satu nilai
- ✅ **`break` statement** — wajib di setiap case untuk menghindari fall-through (kode "bocor" ke case di bawahnya)
- ✅ **`default` case** — jaring pengaman untuk input yang tidak valid
- ✅ **Variabel terpisah (best practice)** — gunakan variabel baru (`namaBulan`) agar data asli tidak ditimpa
- ✅ **Strict equality (`===`)** — switch mengecek nilai DAN tipe data; `"1"` (string) ≠ `1` (number)
- ✅ **Validasi sebelum output** — cek `if (namaBulan)` sebelum mencetak hasil

---

## 💡 Catatan Tambahan

- **Fall-through trap**: Jika lupa `break` di `case 1`, maka saat `bulan = 1`, kode akan lanjut mengeksekusi `case 2` juga — sehingga `namaBulan` berubah menjadi `"Februari"` padahal inputnya 1
- **Tipe data penting**: `let bulan = "1"` (string) akan langsung masuk `default` karena switch menggunakan `===`, bukan `==`
- **Evolusi kode**: Di versi awal, variabel `bulan` langsung di-overwrite (`bulan = 'Januari'`). Ini tidak salah, tapi kurang ideal karena angka aslinya hilang

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
