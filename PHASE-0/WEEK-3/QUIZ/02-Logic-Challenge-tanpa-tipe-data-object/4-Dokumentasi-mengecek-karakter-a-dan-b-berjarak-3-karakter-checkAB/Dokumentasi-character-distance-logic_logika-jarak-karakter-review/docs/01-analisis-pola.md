# 🔍 Fase 1: Analisis Logika & Penemuan Pola

### ✨ _Membongkar rahasia "jarak 3 karakter" menjadi rumus matematika sederhana_

> 🎯 **Tujuan:** Menemukan pola indeks dari string dan merumuskan aturan main sebelum menulis satu baris kode pun.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧩 | [Memahami Tantangan](#tantangan) | Apa itu jarak 3 karakter? |
| 🗺️ | [Visualisasi Pemetaan](#pemetaan) | Breakdown string `"barbarian"` |
| 📐 | [Penemuan Rumus](#rumus) | Mengubah visualisasi jadi logika koding |

---

<a name="tantangan"></a>

## 🧩 Memahami Tantangan

Kunci dari challenge `checkAB` adalah kalimat ini: **"memiliki jarak 3 karakter lain"**. 

Secara harfiah, ini berarti di antara karakter `'a'` dan `'b'` (atau sebaliknya), harus ada **tepat 3 slot karakter** (bisa huruf, angka, atau spasi).

> [!TIP]
> 💡 **Analogi Jarak Tempat Duduk**
> 
> Bayangkan `'a'` duduk di kursi nomor 0. Agar ada 3 kursi kosong di antaranya, `'b'` harus duduk di kursi nomor berapa?
> | Kursi 0 | Kursi 1 | Kursi 2 | Kursi 3 | Kursi 4 |
> |---|---|---|---|---|
> | 👦 `'a'` | 🪑 kosong | 🪑 kosong | 🪑 kosong | 👧 `'b'` |
>
> Jawabannya: `'b'` harus ada di kursi nomor **4**!

---

<a name="pemetaan"></a>

## 🗺️ Visualisasi Pemetaan (Bedah Kasus `"barbarian"`)

Mari kita uji pemahaman kita dengan membedah string `"barbarian"`. Kita akan memetakan setiap indeksnya satu per satu.

```text
String:   b   a   r   b   a   r   i   a   n
Indeks:   0   1   2   3   4   5   6   7   8
```

Sekarang kita cari posisi semua karakter `'a'` dan `'b'`:
- 📍 **Posisi `'a'`**: Indeks `1`, `4`, dan `7`
- 📍 **Posisi `'b'`**: Indeks `0` dan `3`

Mari kita hitung jarak indeks untuk melihat mana yang membentuk pasangan valid:

| Karakter Awal | Indeks | Cek +4 Kedepan | Valid? | Selisih Indeks |
|---------------|--------|----------------|--------|----------------|
| `b` (pertama) | `0`    | Indeks `4` adalah `'a'` | ✅ Ya | `4 - 0 = 4` |
| `a` (pertama) | `1`    | Indeks `5` adalah `'r'` | ❌ Tidak | - |
| `r` (pertama) | `2`    | Bukan `a` atau `b`, Skip | ❌ Tidak | - |
| `b` (kedua)   | `3`    | Indeks `7` adalah `'a'` | ✅ Ya | `7 - 3 = 4` |

> [!IMPORTANT]
> 🔔 Dalam contoh `"barbarian"`, terdapat pasangan `b` di indeks `3` dan `a` di indeks `7` yang dipisahkan oleh karakter `r`, `i`, `a`. Meskipun ada `'a'` lain di tengahnya, pasangan ujung-ke-ujungnya tetap valid karena selisih indeksnya adalah 4.

---

<a name="rumus"></a>

## 📐 Penemuan Rumus Inti

Dari tabel analisis di atas, kita bisa menarik sebuah benang merah.

Jika kita sedang berada di sebuah karakter `'a'` pada indeks `i`, maka satu-satunya tempat yang sah untuk karakter `'b'` pasangannya adalah di indeks `i + 4` (atau `i - 4` jika kita melihat mundur).

> [!TIP]
> 🏆 **Kesimpulan Logika (Mental Model):**
> 
> ```
> Jarak "3 karakter di antara" = Selisih indeks persis 4
> ```
> 
> **Rumus Koding:**
> Jika `str[i] === 'a'`, maka cek apakah `str[i + 4] === 'b'`
> Jika `str[i] === 'b'`, maka cek apakah `str[i + 4] === 'a'`

---

| ⬅️ Sebelumnya | 📖 Daftar Isi | Selanjutnya ➡️ |
|:--------------|:-------------:|---------------:|
| — | [README.md](../README.md) | [02-solusi-bertahap.md](./02-solusi-bertahap.md) |

