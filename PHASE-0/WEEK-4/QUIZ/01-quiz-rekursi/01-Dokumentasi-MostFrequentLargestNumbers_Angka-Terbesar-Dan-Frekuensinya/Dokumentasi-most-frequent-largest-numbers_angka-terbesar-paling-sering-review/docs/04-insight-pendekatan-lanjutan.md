# 💡 Insight: Pendekatan Lanjutan (V3–V6)

### ✨ _Empat cara alternatif yang dipakai Software Engineer di dunia nyata_

> 🎯 **Tujuan:** Memperluas wawasan dengan 4 pendekatan berbeda yang bisa dipakai jika **tidak ada batasan soal** — berguna untuk technical interview dan pengembangan proyek nyata.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧹 | [V3 — Clean Declarative](#v3-clean-declarative) | `Math.max` + `.filter()` tanpa sort |
| 🏎️ | [V4 — Single Pass](#v4-single-pass) | Satu kali loop, efisiensi maksimal |
| 📊 | [V5 — Object Mapping](#v5-object-mapping) | Frequency counter pattern |
| 🔧 | [V6 — HOF + Reduce](#v6-hof-reduce) | `.reduce()` sebagai pisau serbaguna |
| ⚖️ | [Perbandingan Semua Versi](#perbandingan-semua-versi) | Tabel ringkas V3–V6 |

> [!NOTE]
> Semua pendekatan di file ini **tidak memisahkan** logika ke dua fungsi (`sorting` & `getTotal`). Ini adalah solusi "bebas aturan" yang mengasumsikan kita bisa menulis fungsi sendiri dari nol.

---

<a name="v3-clean-declarative"></a>
## 🧹 V3 — The Clean & Declarative Way

**Favorit Frontend Developer** — memprioritaskan keterbacaan dan menghindari mutasi data.

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return '';

  const highestNumber = Math.max(...arrNumber);

  const counter = arrNumber.filter((number) => number === highestNumber).length;

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

```
Kenapa Math.max, bukan .sort()?
→ Math.max langsung mencari nilai terbesar tanpa mengubah urutan array
→ Array asli tetap utuh (tidak dimutasi)
→ Spread operator (...) "membongkar" array menjadi argumen terpisah

Contoh: Math.max(...[2, 8, 4]) → Math.max(2, 8, 4) → 8
```

> [!TIP]
> Pendekatan ini adalah **upgrade langsung** dari V2. Satu-satunya perubahan: mengganti `sort + index[0]` dengan `Math.max()` sehingga array asli tidak termutasi.

---

<a name="v4-single-pass"></a>
## 🏎️ V4 — The Algorithmic Champion (Single Pass)

**Efisiensi maksimal** — hanya butuh satu kali putaran loop untuk menemukan angka terbesar **sekaligus** menghitung kemunculannya.

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return '';

  let highestNumber = -Infinity;
  let counter = 0;

  for (const number of arrNumber) {
    if (number > highestNumber) {
      highestNumber = number;
      counter = 1;
    } else if (number === highestNumber) {
      counter++;
    }
  }

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

```
Kenapa -Infinity?
→ Nilai awal yang pasti lebih kecil dari angka apapun
→ Memastikan angka pertama di array selalu menang di perbandingan pertama

Kenapa counter = 1 (bukan counter++)?
→ Saat menemukan angka BARU yang lebih besar, counter di-RESET ke 1
→ Karena angka baru ini sudah muncul 1 kali (yaitu sekarang)

Trace [2, 8, 4, 6, 8, 5, 8, 4]:
  2 > -Infinity  → highest=2, counter=1
  8 > 2          → highest=8, counter=1 (reset!)
  4 < 8          → skip
  6 < 8          → skip
  8 === 8        → counter=2
  5 < 8          → skip
  8 === 8        → counter=3
  4 < 8          → skip
  → Hasil: highest=8, counter=3 ✅
```

> [!IMPORTANT]
> Pendekatan ini sering ditanyakan di **technical interview** perusahaan teknologi besar karena menunjukkan pemahaman tentang *Time Complexity* `O(N)` dan *Space Complexity* `O(1)` — yang paling optimal.

---

<a name="v5-object-mapping"></a>
## 📊 V5 — Object Mapping (Frequency Counter)

Menggunakan Object sebagai "buku sensus" untuk mencatat kemunculan **setiap** angka. Sangat cocok jika sistem membutuhkan data frekuensi lengkap.

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return '';

  const frequencyMap = {};

  for (const number of arrNumber) {
    if (frequencyMap[number] === undefined) {
      frequencyMap[number] = 1;
    } else {
      frequencyMap[number]++;
    }
  }

  const keys = Object.keys(frequencyMap);
  const highestNumber = Math.max(...keys);
  const counter = frequencyMap[highestNumber];

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

```
Visualisasi frequencyMap untuk [2, 8, 4, 6, 8, 5, 8, 4]:

  { 2: 1, 8: 3, 4: 2, 6: 1, 5: 1 }
    ↑       ↑
    key   value (jumlah kemunculan)

Lalu: Math.max(...Object.keys(frequencyMap)) → 8
      frequencyMap[8] → 3
```

> [!NOTE]
> Pattern **Frequency Counter** ini sangat berguna di banyak challenge lain, misalnya: mencari karakter paling sering muncul, mendeteksi anagram, atau menghitung voting.

---

<a name="v6-hof-reduce"></a>
## 🔧 V6 — HOF + Reduce (Enterprise Level)

Bentuk *ultimate* dari V5 — menggunakan `.reduce()` sebagai "pisau lipat serbaguna" untuk mengubah Array menjadi Object dalam satu langkah.

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return '';

  const frequencyMap = arrNumber.reduce((acc, number) => {
    // Trik Short-Circuit: (acc[number] || 0) + 1
    acc[number] = (acc[number] || 0) + 1;
    return acc;
  }, {});

  const highestNumber = Math.max(...Object.keys(frequencyMap));
  const counter = frequencyMap[highestNumber];

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

```
Kenapa (acc[number] || 0) + 1?
→ Jika acc[number] belum ada (undefined), maka undefined || 0 = 0
→ Lalu 0 + 1 = 1 (kemunculan pertama)
→ Jika acc[number] sudah 2, maka 2 || 0 = 2, lalu 2 + 1 = 3
→ Trik ini menggantikan if/else dari V5 menjadi satu baris!
```

> [!TIP]
> Trik `(value || 0) + 1` disebut **Short-Circuit Evaluation** — ciri khas penulisan kode tingkat lanjut. Sering ditemui di codebase *enterprise-level* dan library open-source populer.

---

<a name="perbandingan-semua-versi"></a>
## ⚖️ Perbandingan V3–V6

| Aspek | V3 Clean | V4 Single Pass | V5 Object Map | V6 Reduce |
|-------|----------|---------------|---------------|-----------|
| **Paradigma** | Declarative | Imperative | Imperative | Declarative |
| **Time** | O(N) | O(N) | O(N) | O(N) |
| **Space** | O(N) | O(1) ⭐ | O(N) | O(N) |
| **Mutasi Array** | ❌ Tidak | ❌ Tidak | ❌ Tidak | ❌ Tidak |
| **Readability** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Best For** | Kode sehari-hari | Interview & big data | Data frekuensi lengkap | Enterprise codebase |

> [!TIP]
> Tidak ada pendekatan yang "paling benar". Pilihan tergantung konteks: **V3** untuk kode cepat & bersih, **V4** untuk performa, **V5–V6** untuk kebutuhan data frekuensi yang lebih kompleks.

---

⬅️ [03-evolusi-dan-clean-code.md](03-evolusi-dan-clean-code.md) · ⬆️ [Kembali ke README](../README.md)
