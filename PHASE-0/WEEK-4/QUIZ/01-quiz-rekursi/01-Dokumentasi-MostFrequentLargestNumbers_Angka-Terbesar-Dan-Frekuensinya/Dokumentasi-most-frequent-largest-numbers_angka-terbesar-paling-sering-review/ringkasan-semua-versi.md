# 📋 Ringkasan Semua Versi Kode

### ✨ _Cheat sheet 6 versi solusi — siap copy-paste_

> 🎯 **Tujuan:** Referensi cepat untuk melihat dan membandingkan semua versi kode tanpa harus membuka file detail satu per satu.

---

### 📑 Daftar Isi

| No | Versi | Pendekatan | Kategori |
|----|-------|-----------|----------|
| 1️⃣ | [V1 — for...of](#v1) | Imperative loop | ✅ Sesuai aturan soal |
| 2️⃣ | [V2 — .filter()](#v2) | Declarative filter | ✅ Sesuai aturan soal |
| 3️⃣ | [V3 — Math.max + filter](#v3) | Clean declarative | 🔓 Bebas aturan |
| 4️⃣ | [V4 — Single Pass](#v4) | Algorithmic champion | 🔓 Bebas aturan |
| 5️⃣ | [V5 — Object Mapping](#v5) | Frequency counter | 🔓 Bebas aturan |
| 6️⃣ | [V6 — .reduce()](#v6) | HOF enterprise | 🔓 Bebas aturan |
| ⚖️ | [Tabel Perbandingan](#perbandingan) | Semua versi | — |

---

<a name="v1"></a>
## 1️⃣ V1 — Imperative (`for...of`)

> **Kategori:** ✅ Sesuai aturan soal | **Detail:** [02-solusi-bertahap.md](docs/02-solusi-bertahap.md)

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a);
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) return '';

  const highestNumber = arrNumber[0];
  let counter = 0;

  for (const number of arrNumber) {
    if (number === highestNumber) counter++;
  }

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

---

<a name="v2"></a>
## 2️⃣ V2 — Declarative (`.filter()`) ⭐ Rekomendasi

> **Kategori:** ✅ Sesuai aturan soal | **Detail:** [03-evolusi-dan-clean-code.md](docs/03-evolusi-dan-clean-code.md)

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a);
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) return '';

  const highestNumber = arrNumber[0];
  const counter = arrNumber.filter((number) => number === highestNumber).length;

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

---

<a name="v3"></a>
## 3️⃣ V3 — Clean Declarative (`Math.max`)

> **Kategori:** 🔓 Bebas aturan | **Detail:** [04-insight-pendekatan-lanjutan.md](docs/04-insight-pendekatan-lanjutan.md)

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return '';

  const highestNumber = Math.max(...arrNumber);
  const counter = arrNumber.filter((number) => number === highestNumber).length;

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

---

<a name="v4"></a>
## 4️⃣ V4 — Single Pass (`O(N)` + `O(1)`) 🏎️ Paling Efisien

> **Kategori:** 🔓 Bebas aturan | **Detail:** [04-insight-pendekatan-lanjutan.md](docs/04-insight-pendekatan-lanjutan.md)

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

---

<a name="v5"></a>
## 5️⃣ V5 — Object Mapping (Frequency Counter)

> **Kategori:** 🔓 Bebas aturan | **Detail:** [04-insight-pendekatan-lanjutan.md](docs/04-insight-pendekatan-lanjutan.md)

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

---

<a name="v6"></a>
## 6️⃣ V6 — HOF + Reduce (Enterprise)

> **Kategori:** 🔓 Bebas aturan | **Detail:** [04-insight-pendekatan-lanjutan.md](docs/04-insight-pendekatan-lanjutan.md)

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return '';

  const frequencyMap = arrNumber.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1;
    return acc;
  }, {});

  const highestNumber = Math.max(...Object.keys(frequencyMap));
  const counter = frequencyMap[highestNumber];

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

---

<a name="perbandingan"></a>
## ⚖️ Tabel Perbandingan Semua Versi

| Aspek | V1 | V2 ⭐ | V3 | V4 🏎️ | V5 | V6 |
|-------|:--:|:----:|:--:|:-----:|:--:|:--:|
| **Paradigma** | Imperative | Declarative | Declarative | Imperative | Imperative | Declarative |
| **Sesuai Soal** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Time** | O(N log N) | O(N log N) | O(N) | O(N) ⭐ | O(N) | O(N) |
| **Space** | O(1) | O(N) | O(N) | O(1) ⭐ | O(N) | O(N) |
| **Mutasi Array** | ⚠️ Ya | ⚠️ Ya | ❌ Tidak | ❌ Tidak | ❌ Tidak | ❌ Tidak |
| **Readability** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Best For** | Pemula | Kode harian | Kode bersih | Interview | Frekuensi lengkap | Enterprise |

> [!TIP]
> **Rekomendasi cepat:**
> - Mau jawab soal? → **V2**
> - Mau kode paling bersih? → **V3**
> - Mau paling efisien? → **V4**
> - Mau data frekuensi lengkap? → **V5 / V6**

---

⬆️ [Kembali ke README](README.md)
