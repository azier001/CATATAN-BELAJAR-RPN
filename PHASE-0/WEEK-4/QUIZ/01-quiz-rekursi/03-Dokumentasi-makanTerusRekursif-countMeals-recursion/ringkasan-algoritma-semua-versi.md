# 📋 Ringkasan Algoritma Semua Versi — `makanTerusRekursif`

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Recursion%20|%20Tail%20Recursion-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Daftar Isi

- [V1 — Rekursif Langsung](#v1)
- [V2 — Tail Recursion Default Parameter](#v2)
- [V3 — Tail Recursion Helper Function](#v3)
- [V4 — Rekursif Variable Update](#v4)
- [Perbandingan Semua Versi](#perbandingan)
- [Kapan Pakai Versi Mana?](#kapan)

---

<a name="v1"></a>
## 🔁 V1 — Rekursif Langsung

```js
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  return 1 + makanTerusRekursif(waktu - 15)
}
```

**Cara kerja:**
1. Jika `waktu <= 0` → kembalikan `0` (base case)
2. Kembalikan `1` + hasil rekursif dengan waktu dikurangi 15
3. Nilai terkumpul saat proses **unwinding** (naik kembali)

---

<a name="v2"></a>
## 🔁 V2 — Tail Recursion Default Parameter

```js
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu <= 0) return count
  return makanTerusRekursif(waktu - 15, count + 1)
}
```

**Cara kerja:**
1. `count` dimulai dari `0` secara default
2. Jika `waktu <= 0` → kembalikan `count` yang sudah terakumulasi (base case)
3. Panggil rekursif dengan waktu dikurangi 15 dan `count` ditambah 1
4. Nilai terkumpul **saat turun** — tidak ada unwinding

---

<a name="v3"></a>
## 🔁 V3 — Tail Recursion Helper Function

```js
function makanTerusRekursif(waktu) {
  function helper(sisaWaktu, count) {
    if (sisaWaktu <= 0) return count
    return helper(sisaWaktu - 15, count + 1)
  }
  return helper(waktu, 0)
}
```

**Cara kerja:**
1. Fungsi utama memanggil `helper(waktu, 0)`
2. `helper` melakukan rekursif dengan membawa `count`
3. Jika `sisaWaktu <= 0` → kembalikan `count` (base case)
4. `count` tidak bisa diisi dari luar — **lebih aman dari V2**

---

<a name="v4"></a>
## 🔁 V4 — Rekursif Variable Update

```js
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  waktu -= 15
  return 1 + makanTerusRekursif(waktu)
}
```

**Cara kerja:**
1. Jika `waktu <= 0` → kembalikan `0` (base case)
2. Kurangi `waktu` sebesar 15 **sebelum** rekursif dipanggil
3. Kembalikan `1` + hasil rekursif dengan `waktu` yang sudah diupdate
4. Nilai terkumpul saat proses **unwinding** — sama seperti V1

---

<a name="perbandingan"></a>
## 📊 Perbandingan Semua Versi

| | V1 | V2 | V3 | V4 |
|--|--|--|--|--|
| Jenis rekursif | Biasa | Tail | Tail | Biasa |
| Ada unwinding? | ✅ Ya | ❌ Tidak | ❌ Tidak | ✅ Ya |
| Parameter tambahan? | ❌ Tidak | ✅ `count` | ✅ `count` di helper | ❌ Tidak |
| `count` aman dari luar? | — | ❌ Tidak | ✅ Ya | — |
| Pengurangan waktu | Di parameter | Di parameter | Di parameter | Sebelum rekursif |
| Panjang kode | ⭐ Paling ringkas | Ringkas | Paling panjang | Sedang |
| Kemudahan debug | Sedang | Sedang | Sedang | ⭐ Paling mudah |

---

<a name="kapan"></a>
## 🎯 Kapan Pakai Versi Mana?

| Situasi | Rekomendasi |
|---------|------------|
| Ingin kode paling ringkas dan mudah dibaca | **V1** |
| Ingin tail recursion yang simpel | **V2** |
| Kode akan dibagikan ke orang lain / dipakai di banyak tempat | **V3** |
| Ingin eksplisit saat debugging | **V4** |

> 💡 **Untuk belajar:** Mulai dari V1 — paling mudah dipahami. Setelah paham, coba V2 untuk mengenal konsep tail recursion.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📖 [← Part 9 — Test Cases](./docs/09-test-cases_kasus-pengujian.md)**
