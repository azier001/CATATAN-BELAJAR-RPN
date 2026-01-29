---

<a name="algoritma-penyelesaian"></a>
## 📋 Algoritma Penyelesaian

Berikut adalah langkah-langkah detail untuk menyelesaikan challenge ini:

### 🔢 Step-by-Step:

1. **Siapkan variabel `output`** untuk menyimpan pola persegi.
   - Variabel ini bertipe string kosong `''`
   - Nantinya akan diisi dengan karakter `*` atau spasi

2. **Lakukan perulangan baris** dari `1` sampai `size`.
   - Ini adalah **outer loop**
   - Setiap iterasi = 1 baris dalam pola

3. **Di dalamnya, lakukan perulangan kolom** dari `1` sampai `size`.
   - Ini adalah **inner loop** (nested loop)
   - Setiap iterasi = 1 kolom/karakter dalam baris

4. **Tentukan apakah posisi saat ini berada di:**
   - **Baris atas** → `row === 1`
   - **Baris bawah** → `row === size`
   - **Kolom kiri** → `col === 1`
   - **Kolom kanan** → `col === size`

5. **Jika posisi berada di salah satu sisi tersebut** (border):
   - Tambahkan `*` ke variabel `output`
   - **Jika tidak** (bagian dalam):
   - Tambahkan spasi ke variabel `output`

6. **Setelah satu baris selesai**, tambahkan karakter **newline** (`\n`).
   - Ini membuat baris berikutnya turun ke bawah

7. **Kembalikan nilai `output`** sebagai hasil akhir pola.

---
