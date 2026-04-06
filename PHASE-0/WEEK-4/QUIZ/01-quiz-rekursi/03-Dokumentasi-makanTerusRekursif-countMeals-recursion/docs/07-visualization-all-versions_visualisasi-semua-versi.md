# 🎞️ Visualization All Versions — Visualisasi Semua Versi

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Recursion%20|%20Tail%20Recursion-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 Semua visualisasi menggunakan contoh `makanTerusRekursif(45)` → hasil: `3`

---

## 📚 Daftar Isi

- [V1 — Rekursif Langsung](#v1)
- [V2 — Tail Recursion Default Parameter](#v2)
- [V3 — Tail Recursion Helper Function](#v3)
- [V4 — Rekursif Variable Update](#v4)
- [Ringkasan Perbandingan](#ringkasan)

---

<a name="v1"></a>
## 🔁 V1 — Rekursif Langsung

```js
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  return 1 + makanTerusRekursif(waktu - 15)
}
```

### 🎞️ Simulasi

```
makanTerusRekursif(45)
  → 1 + makanTerusRekursif(45 - 15)
         → 1 + makanTerusRekursif(30 - 15)
                → 1 + makanTerusRekursif(15 - 15)
                       → 0  ✅ BASE CASE!
```

### ⏪ Unwinding

```
makanTerusRekursif(0)   → 0
makanTerusRekursif(15)  → 1 + 0  = 1
makanTerusRekursif(30)  → 1 + 1  = 2
makanTerusRekursif(45)  → 1 + 2  = 3 🎉
```

> 🧠 Pengurangan terjadi **langsung di parameter**. Setiap langkah punya "hutang `1 +`" yang baru dibayar saat unwinding.

---

<a name="v2"></a>
## 🔁 V2 — Tail Recursion Default Parameter

```js
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu <= 0) return count
  return makanTerusRekursif(waktu - 15, count + 1)
}
```

### 🎞️ Simulasi

```
makanTerusRekursif(45)          ← count = 0 (default)
  → makanTerusRekursif(30, 1)   ← count + 1 = 1
         → makanTerusRekursif(15, 2)  ← count + 1 = 2
                → makanTerusRekursif(0, 3)   ← count + 1 = 3
                       → 3  ✅ BASE CASE! return count
```

### ⏪ Unwinding

```
makanTerusRekursif(0,  3) → 3  ✅ langsung return count!
makanTerusRekursif(15, 2) → 3
makanTerusRekursif(30, 1) → 3
makanTerusRekursif(45, 0) → 3 🎉
```

> 🧠 `count` dibawa sebagai **default parameter**. Tidak ada hutang — nilai langsung return saat base case tercapai.

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

### 🎞️ Simulasi

```
makanTerusRekursif(45)
  └─ helper(45, 0)
       → helper(30, 1)  ← count + 1 = 1
              → helper(15, 2)  ← count + 1 = 2
                     → helper(0, 3)  ← count + 1 = 3
                            → 3  ✅ BASE CASE! return count
```

### ⏪ Unwinding

```
helper(0,  3) → 3  ✅ langsung return count!
helper(15, 2) → 3
helper(30, 1) → 3
helper(45, 0) → 3
makanTerusRekursif(45) → 3 🎉
```

> 🧠 `count` disembunyikan di dalam `helper`. Pengguna hanya memanggil `makanTerusRekursif(45)` tanpa tahu soal `count` — lebih aman dari V2.

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

### 🎞️ Simulasi

```
makanTerusRekursif(45)
  waktu = 45 - 15 = 30 → 1 + makanTerusRekursif(30)
  waktu = 30 - 15 = 15 → 1 + makanTerusRekursif(15)
  waktu = 15 - 15 = 0  → 1 + makanTerusRekursif(0)
                               → 0  ✅ BASE CASE!
```

### ⏪ Unwinding

```
makanTerusRekursif(0)  → 0
makanTerusRekursif(15) → 1 + 0  = 1  (waktu sudah dikurangi jadi 0)
makanTerusRekursif(30) → 1 + 1  = 2  (waktu sudah dikurangi jadi 15)
makanTerusRekursif(45) → 1 + 2  = 3 🎉
```

> 🧠 Pengurangan terjadi **sebelum** rekursif dipanggil via `waktu -= 15`. Lebih eksplisit dari V1, tapi hasil dan pola unwinding-nya sama persis.

---

<a name="ringkasan"></a>
## 📊 Ringkasan Perbandingan

| | V1 | V2 | V3 | V4 |
|--|--|--|--|--|
| Jenis rekursif | Biasa | Tail | Tail | Biasa |
| Ada unwinding? | ✅ Ya | ❌ Tidak | ❌ Tidak | ✅ Ya |
| Parameter tambahan? | ❌ Tidak | ✅ `count` | ✅ `count` di helper | ❌ Tidak |
| `count` aman dari luar? | — | ❌ Tidak | ✅ Ya | — |
| Pengurangan waktu | Di parameter | Di parameter | Di parameter | Sebelum rekursif |
| Hasil | 3 | 3 | 3 | 3 |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 6 — V4 Rekursif Variable Update](./06-v4-recursion-variable-update_update-variabel.md)**
- **📖 [Lanjut ke Part 8 — Jebakan Base Case →](./08-base-case-pitfall_jebakan-base-case.md)**
