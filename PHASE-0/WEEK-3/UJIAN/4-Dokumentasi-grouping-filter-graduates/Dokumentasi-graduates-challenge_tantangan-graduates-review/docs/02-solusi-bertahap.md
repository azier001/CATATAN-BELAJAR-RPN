# 🛠️ Solusi Bertahap — Versi 1 (`for...of`)

### ✨ _Membangun kode selangkah demi selangkah, sambil menghindari dua jebakan klasik_

> 🎯 **Tujuan:** Menerjemahkan blueprint dari fase analisis menjadi kode nyata
> secara bertahap (step-by-step), serta mengenali dua jebakan logika fatal
> yang sering menjatuhkan developer.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧱 | [Step 1 — Kerangka & Grouping](#step-1) | Destructuring + pembuatan map kelas |
| 🎯 | [Step 2 — Filtering & Push](#step-2) | Menambahkan kondisi lulus + push data |
| ⚠️ | [Dua Jebakan Fatal](#jebakan) | Gotcha yang wajib dihindari |
| ✅ | [Kode Final V1](#kode-final) | Solusi lengkap versi `for...of` |

---

<a name="step-1"></a>

## 🧱 Step 1 — Kerangka Dasar & Pembuatan Map

Langkah pertama: buat loop untuk mengiterasi setiap murid, lalu fokus **hanya**
pada pembuatan map kelas. Belum ada filtering di tahap ini.

```javascript
const graduates = (students) => {
  const result = {};

  for (const { name, score, class: className } of students) {
    // 1. Grouping First: Siapkan map kelasnya jika belum ada
    if (!result[className]) {
      result[className] = [];
    }
  }

  return result;
};
```

> [!NOTE]
> Perhatikan penggunaan **destructuring dengan alias** di parameter loop:
> `class: className`. Ini karena `class` adalah reserved keyword JavaScript.
> Detail lengkap ada di [Kamus Variabel](01-analisis-pola.md#kamus-variabel).

Jika dijalankan dengan data contoh, output di tahap ini:
```javascript
{ foxes: [], wolves: [], bears: [] }
// ✅ Semua kelas sudah terdaftar — meskipun belum ada murid di dalamnya
```

---

<a name="step-2"></a>

## 🎯 Step 2 — Filtering & Push Data

Setelah map kelas sudah pasti tercipta, **baru** kita tambahkan logika
penyaringan sebagai blok `if` yang **terpisah dan sejajar**:

```javascript
const graduates = (students) => {
  const result = {};

  for (const { name, score, class: className } of students) {
    if (!result[className]) {
      result[className] = [];
    }

    // 2. BARU ditambahkan: Jika murid lulus, masukkan datanya
    if (score > 75) {
      result[className].push({ name, score });
    }
  }

  return result;
};
```

> [!IMPORTANT]
> Blok `if (score > 75)` berada **di luar** dan **sejajar** dengan blok
> `if (!result[className])` — bukan di dalamnya. Ini adalah kunci utama
> agar setiap murid lulus selalu bisa masuk, terlepas kapan map-nya dibuat.

---

<a name="jebakan"></a>

## ⚠️ Dua Jebakan Fatal (Gotchas)

### Jebakan 1 — "Filtering First" (Kelas Hilang)

Meletakkan pembuatan map **di dalam** kondisi lulus:

```javascript
// ❌ SALAH: Kelas yang isinya murid gagal semua tidak akan pernah dibuat!
if (score > 75) {
  if (!result[className]) {
    result[className] = [];
  }
}
```

**Kenapa fatal?** Jika seluruh murid kelas `bears` mendapat nilai ≤ 75,
blok `if (score > 75)` tidak pernah dimasuki → `result["bears"]` tidak
pernah tercipta → output kehilangan properti `bears: []`.

> [!CAUTION]
> Ini melanggar syarat soal: *"kelas tanpa murid lulus harus tetap muncul
> sebagai array kosong"*. Solusi akan **gagal di test case edge**.

---

### Jebakan 2 — Push Tersembunyi (Kasus "Murid Kedua Hilang")

Meletakkan `.push()` **di dalam** blok inisialisasi map:

```javascript
// ❌ SALAH: Push HANYA tereksekusi saat map baru dibuat
if (!result[className]) {
  result[className] = [];
  result[className].push({ name, score });
}
```

**Kenapa fatal?** Simulasi konkret dengan kelas `foxes`:

| Murid | `!result["foxes"]`? | Apa yang terjadi |
| :--- | :--- | :--- |
| Dimitri (foxes, 90) | `true` → masuk blok | Map dibuat + Dimitri di-push ✅ |
| Sergei (foxes, 74) | `false` → **lewati** blok | Sergei **tidak pernah dicek** nilainya ❌ |
| Anastasia (foxes, 88) | `false` → **lewati** blok | Anastasia **terabaikan** meski lulus! ❌ |

> [!WARNING]
> Murid pertama berhasil masuk karena map baru dibuat. Tapi semua murid
> berikutnya **di kelas yang sama** akan terabaikan — blok `if` tidak
> dimasuki lagi karena map sudah ada.

---

<a name="kode-final"></a>

## ✅ Kode Final — Versi 1 (`for...of`)

Solusi yang benar memisahkan **dua fase** secara tegas:

```javascript
function graduates(students) {
  const result = {};

  for (const { name, score, class: className } of students) {
    // Fase 1: Inisialisasi wadah (SELALU, tanpa syarat nilai)
    if (!result[className]) {
      result[className] = [];
    }

    // Fase 2: Masukkan data (HANYA jika lulus)
    if (score > 75) {
      result[className].push({ name, score });
    }
  }

  return result;
}
```

```
🎯 Gaya       → Imperatif (for...of loop)
📌 Kelebihan  → Mudah dibaca, alur eksplisit, ramah pemula
🔐 Prinsip    → Pembuatan wadah dan pengisian data = 2 blok if TERPISAH
```

> [!TIP]
> Versi ini sempurna untuk **memahami logika dasar**. Untuk versi yang lebih
> ringkas dan deklaratif menggunakan `reduce`, lihat
> [03 — Evolusi Solusi](03-evolusi-solusi.md).

---

⬅️ [01 — Analisis Pola](01-analisis-pola.md) · ➡️ [03 — Evolusi Solusi](03-evolusi-solusi.md)
