# Ringkasan Algoritma Pola X (Zero-Based)

1. Pola dibentuk sebagai persegi berukuran `num × num` dengan **indeks dimulai dari 0 sampai** `num - 1`.

2. Lakukan perulangan baris (row) dari 0 hingga `num - 1`.

3. Di setiap baris, lakukan perulangan kolom (col) dari 0 hingga `num - 1`.

4. Pada setiap posisi `(row, col)`:
   - Cetak `*` jika:
     - Berada **di diagonal utama** → `row = col`, **atau**
     - berada **di diagonal terbalik** → `row + col = num - 1`
   - Selain itu, cetak spasi.

5. Setelah satu baris selesai, lanjutkan ke baris berikutnya.

6. Hasil akhirnya membentuk pola huruf **X**.

## Catatan kunci untuk diingat saat ujian

- **Zero-based index** → baris & kolom selalu mulai dari **0**
- Nilai maksimum indeks = `num - 1`
- Titik tengah X selalu berada pada posisi:
  - `(row + col) = num - 1`
