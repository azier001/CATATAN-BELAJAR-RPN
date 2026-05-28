# 🛠️ Fase 2: Solusi Pertama — Pendekatan Bertahap

### ✨ _Menerjemahkan rumus "selisih 4" menjadi kode JavaScript, langkah demi langkah_

> 🎯 **Tujuan:** Membangun solusi pertama yang **bekerja** secara bertahap — dari kerangka kosong hingga kode lengkap yang lolos semua test case.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧠 | [Algoritma Step-by-Step](#algoritma) | Urutan berpikir dengan penjelasan "Kenapa" |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + tabel peran variabel |
| 👣 | [Bangun Kode Bertahap](#bertahap) | Step 1 → Step 2 → Step 3 |
| 💡 | [Key Takeaways](#takeaways) | Insight penting dari solusi ini |

---

<a name="algoritma"></a>

## 🧠 Algoritma Step-by-Step (Tahan Lupa)

Sebelum menulis kode, kita susun dulu **urutan berpikir** yang jelas. Setiap langkah menjawab **"Kenapa?"** dan menyertakan **contoh angka konkret**.

---

**1. Siapkan Kanvas `[DEKLARASI FUNCTION]`**

Buat function `checkAB` yang menerima satu parameter string.
*(Kenapa: Kita butuh wadah untuk menampung seluruh logika pengecekan).*

---

**2. Telusuri Setiap Karakter `[FOR LOOP]`** (Iterasi `i` dari `0` sampai `limit`):

- **Batas Loop**: Iterasi sampai `str.length - 4`, **bukan** `str.length`.
  *(Kenapa: Kita selalu mengecek 4 posisi ke depan (`i + 4`). Jika sisa string kurang dari 4 karakter, mustahil ada pasangan valid. Contoh: string `"barbarian"` panjang 9, maka loop berhenti di indeks `9 - 4 = 5`, yaitu karakter `'r'`).*

---

**3. Cek Pasangan Valid `[IF CONDITION]`** (Di dalam loop):

- **Skenario 1**: `str[i] === 'a'` DAN `str[i + 4] === 'b'`
  *(Contoh: indeks 0 = `'b'`? Bukan `'a'`, skip. Indeks 1 = `'a'`? Ya! Cek indeks 5 = `'r'`? Bukan `'b'`, gagal).*

- **Skenario 2**: `str[i] === 'b'` DAN `str[i + 4] === 'a'`
  *(Contoh: indeks 3 = `'b'`? Ya! Cek indeks 7 = `'a'`? Ya! → return true 🎉).*

- Kedua skenario digabungkan dengan **OR** (`||`) — jika salah satu terpenuhi, langsung `return true`.

---

**4. Tidak Ditemukan `[DEFAULT RETURN]`**:

- Jika loop selesai tanpa pernah menemukan pasangan, kembalikan `false`.
  *(Kenapa: Artinya seluruh string sudah dicek dan tidak ada satupun pasangan `a-b` dengan jarak 3).*

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Parameter input | `text` atau `word` | `str`, `x`, `data` | `str` = nama tipe data, bukan deskripsi isi |
| Batas iterasi | `limit` | ditulis inline | Simpan ke variabel agar tidak dihitung ulang tiap iterasi |
| Penanda indeks | `i` | `idx`, `index` | Standar universal untuk loop sederhana |

### Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: loop linear + pengecekan jarak)

const checkAB = (text) => {
  const limit = ???;                         // [BATAS] → sampai mana loop berjalan

  for (let i = 0; i < limit; i++) {          // [LOOP] → telusuri karakter satu per satu
    if (
      (??? && ???) ||                        //   [SKENARIO 1] → a...b
      (??? && ???)                           //   [SKENARIO 2] → b...a
    ) {
      return true;                           //   [KETEMU] → langsung berhenti
    }
  }

  return false;                              // [DEFAULT] → tidak ditemukan
};
```

---

<a name="bertahap"></a>

## 👣 Bangun Kode Bertahap

### Step 1 — Kerangka Loop Dasar

> 🎯 Fokus: Buat loop yang bisa mengakses setiap karakter berdasarkan indeks.

```javascript
const checkAB = (str) => {
  for (let i = 0; i < str.length; i++) {
    // cek karakter satu per satu...
  }
};
```

*Belum ada logika apapun — hanya memastikan loop berjalan dari awal sampai akhir string.*

---

### Step 2 — Tambahkan Kondisi Pengecekan

> 🎯 Fokus: Terapkan rumus `selisih indeks = 4` ke dalam `if` statement.

```javascript
const checkAB = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === 'a' && str[i + 4] === 'b') ||
      (str[i] === 'b' && str[i + 4] === 'a')
    ) {
      return true;
    }
  }
};
```

*Sudah bisa mendeteksi pasangan valid! Tapi masih ada 2 masalah: tidak ada `return false`, dan loop berjalan lebih panjang dari yang diperlukan.*

---

### Step 3 — Default Return + Optimasi Batas Loop

> 🎯 Fokus: Tambahkan `return false` dan optimalkan batas loop.

```javascript
const checkAB = (str) => {
  for (let i = 0; i < str.length - 4; i++) {  // ← optimasi batas!
    if (
      (str[i] === 'a' && str[i + 4] === 'b') ||
      (str[i] === 'b' && str[i + 4] === 'a')
    ) {
      return true;
    }
  }
  return false;  // ← default: tidak ditemukan
};
```

> [!NOTE]
> 💡 **Kenapa `str.length - 4`?** Jika `i` sudah di posisi `str.length - 3` atau lebih, maka `i + 4` akan melampaui batas string. Hasilnya `undefined`, yang pasti bukan `'a'` atau `'b'`. Dengan membatasi loop, kita menghemat iterasi yang sia-sia.

---

<a name="takeaways"></a>

## 💡 Key Takeaways

> [!TIP]
> 🏆 **Optimasi `str.length - 4` (Brilliant Move!)**
>
> Ini adalah teknik yang sering dipakai di challenge berbasis *index manipulation*. Setiap kali kamu mengecek `i + N` ke depan, batasi loop sampai `str.length - N` agar tidak membaca indeks di luar jangkauan.

> [!TIP]
> 🏆 **Early Return = Performa Maksimal**
>
> Pattern `return true` di dalam loop membuat program **berhenti seketika** begitu satu pasangan valid ditemukan. Tidak perlu mengecek sisa karakter yang tersisa — sangat efisien!

---

| ⬅️ Sebelumnya | 📖 Daftar Isi | Selanjutnya ➡️ |
|:--------------|:-------------:|---------------:|
| [01-analisis-pola.md](./01-analisis-pola.md) | [README.md](../README.md) | [03-evolusi-solusi.md](./03-evolusi-solusi.md) |
