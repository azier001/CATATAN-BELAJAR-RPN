
## 📋 Algoritma Step-by-Step

### Langkah 1️⃣: Inisialisasi
```
Buat variabel pattern = '' (string kosong)
```
**Tujuan:** Tempat menyimpan hasil pola papan catur

---

### Langkah 2️⃣: Loop Baris (Outer Loop)
```
FOR row = 1 sampai num:
```
**Tujuan:** Iterasi setiap baris dari atas ke bawah

---

### Langkah 3️⃣: Loop Kolom (Inner Loop)
```
  FOR col = 1 sampai num:
```
**Tujuan:** Iterasi setiap kolom dari kiri ke kanan dalam 1 baris

---

### Langkah 4️⃣: Cek Posisi (Logika Inti)
```
    Hitung: (row + col) % 2
    
    JIKA hasil = 0 (genap):
      Tambahkan '#' ke pattern
    SELAIN ITU:
      Tambahkan ' ' (spasi) ke pattern
```
**Tujuan:** Tentukan karakter berdasarkan posisi

---

### Langkah 5️⃣: Akhiri Baris
```
  Tambahkan '\n' (newline) ke pattern
```
**Tujuan:** Pindah ke baris baru setelah 1 baris selesai

---

### Langkah 6️⃣: Return Hasil
```
RETURN pattern
```
**Tujuan:** Kembalikan pola lengkap

---
