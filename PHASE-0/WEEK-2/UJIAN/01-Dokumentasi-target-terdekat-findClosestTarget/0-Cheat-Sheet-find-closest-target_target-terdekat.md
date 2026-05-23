# 🔄 Cheat Sheet — Find Closest Target (Target Terdekat)

> 📋 Ringkasan semua versi kode dari sesi mentoring untuk mecari jarak target terdekat antara `o` dan `x`. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Single Pass Simultan (1 Loop) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function targetTerdekatV2(arr) {
  let posO = -1;
  let posX = -1;
  let minDistance = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (char === 'o') {
      posO = i;

      if (posX !== -1)
        minDistance = Math.min(minDistance, Math.abs(posO - posX));
    } else if (char === 'x') {
      posX = i;

      if (posO !== -1)
        minDistance = Math.min(minDistance, Math.abs(posO - posX));
    }
  }

  return minDistance === Infinity ? 0 : minDistance;
}
```

> 🔑 **O(N) Time | O(1) Space.** Pencarian diselesaikan hanya dengan tepat satu iterasi (loop) dari depan ke belakang. Selalu memperbarui rekor jarak tiap kali menemukan `o` atau `x` baru tanpa menggunakan array tambahan.

### 2. Two-Pass Algorithm (2 Loop Terpisah)

```javascript
const findClosestDistance = (chars) => {
  const length = chars.length;

  // Cek apakah ada 'x' terlebih dahulu
  let hasX = false;

  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') {
      hasX = true;
      break;
    }
  }

  if (!hasX) return 0;

  let minDistance = length;
  let lastXPos = -1;

  // Pass 1: Sapuan Kiri ke Kanan
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') lastXPos = i;

    if (chars[i] === 'o' && lastXPos !== -1) {
      minDistance = Math.min(minDistance, i - lastXPos);
    }
  }

  // Pass 2: Sapuan Kanan ke Kiri
  lastXPos = -1;

  for (let i = length - 1; i >= 0; i--) {
    if (chars[i] === 'x') lastXPos = i;
    if (chars[i] === 'o' && lastXPos !== -1) {
      minDistance = Math.min(minDistance, lastXPos - i);
    }
  }

  return minDistance;
};
```

> 🔑 **O(N) Time | O(1) Space.** Pendekatan ini lebih intuitif bagi sebagian orang yang suka memisahkan pengecekan logika dari dua arah secara eksplisit tanpa nested loop.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Solusi Buku Catatan (Gudang Array) ⭐ `PALING INTUITIF`

```javascript
function targetTerdekatV1(arr) {
  let posO = -1;
  const arrX = [];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (char === 'o') posO = i;
    if (char === 'x') arrX.push(i);
  }

  if (arrX.length === 0) return 0;

  let minDistance = Infinity;

  for (let i = 0; i < arrX.length; i++) {
    minDistance = Math.min(minDistance, Math.abs(posO - arrX[i]));
  }

  return minDistance;
}
```

> 🔑 **O(N) Time | O(K) Space.** Sangat disarankan bagi pemula! Mengumpulkan semua posisi `x` dalam memori (array tambahan), lalu membandingkan jarak setiap `x` tersebut dengan posisi `o` satu-persatu.

### 2. Nested Loop (Brute-Force)

```javascript
const findClosestDistanceNested = (chars) => {
  const length = chars.length;
  const xPositions = [];
  const oPositions = [];

  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') xPositions.push(i);
    if (chars[i] === 'o') oPositions.push(i);
  }

  if (xPositions.length === 0) return 0;

  let minDistance = length;

  // Membandingkan SETIAP o dengan SETIAP x
  for (const xPos of xPositions) {
    for (const oPos of oPositions) {
      let distance = Math.abs(xPos - oPos);
      if (distance < minDistance) minDistance = distance;
    }
  }

  return minDistance;
};
```

> 🔑 **O(N²) Time | O(N) Space.** Solusi dasar paling klasik. Menggunakan loop berlapis untuk mengadu seluruh kombinasi index `o` dengan index `x`. Akan lambat jika ukuran datanya puluhan ribu elemen.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Pendekatan Menyebar dari Poros Tengah (Search from Center)

```javascript
function targetTerdekatV3(arr) {
  let posO = -1;
  let leftX = -1;
  let rightX = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      posO = i;
      break;
    }
  }

  for (let i = posO - 1; i >= 0; i--) {
    if (arr[i] === 'x') {
      leftX = i;
      break;
    }
  }

  for (let i = posO + 1; i < arr.length; i++) {
    if (arr[i] === 'x') {
      rightX = i;
      break;
    }
  }

  let jarakKiri = leftX !== -1 ? Math.abs(posO - leftX) : Infinity;
  let jarakKanan = rightX !== -1 ? Math.abs(posO - rightX) : Infinity;

  let minDistance = Math.min(jarakKiri, jarakKanan);
  return minDistance === Infinity ? 0 : minDistance;
}
```

> 🔑 Kode yang sangat konseptual, mencari `o` dan berhenti, lalu menengok ke sayap kiri dan sayap kanan. Cukup efisien, namun kodenya terasa kaku _(over-engineered)_ dibanding algoritma Single Pass.

---

## ⚠️ GOTCHA CEPAT

1. **Jebakan Inisialisasi Posisi (Index `0`)**
   ```javascript
   // ❌ SALAH: Di JavaScript, 0 adalah angka index yang valid
   let posO = 0;
   // ✅ BENAR: Gunakan angka mustahil seperti -1 untuk marker awal
   let posO = -1;
   ```
2. **Jebakan Salah Pengereman (`break`)**
   ```javascript
   // ❌ SALAH: Memakai 'break' saat mencari minDistance akan menghentikan evaluasi untuk karakter 'x' lain yang mungkin lebih dekat!
   if (char === 'x') { posX = i; break; }
   ```

---

## 📊 QUICK COMPARISON

| Versi Algoritma               | Time Complexity | Space Complexity | Keunggulan Utama                                          | Rekomendasi |
| :---------------------------- | :-------------: | :--------------: | :-------------------------------------------------------- | :---------: |
| **Single Pass Simultan**      |      O(N)       |       O(1)       | Paling optimal, kode bersih, dan nol pemborosan RAM       | ⭐⭐⭐⭐⭐  |
| **Two-Pass Algorithm**        |      O(N)       |       O(1)       | Terstruktur jelas, tanpa `Math.abs`                       |  ⭐⭐⭐⭐   |
| **Solusi Buku Catatan**       |      O(N)       |       O(K)       | Cara berpikir linear paling bersahabat untuk pemula       |   ⭐⭐⭐    |
| **Pendekatan Poros Tengah**   |      O(N)       |       O(1)       | Ide konseptual menarik, namun butuh 3 `for` loop terpisah |    ⭐⭐     |
| **Nested Loop (Brute-Force)** |      O(N²)      |       O(N)       | Melatih logika pencarian seluruh kombinasi index array    |     ⭐      |

_(Ket: K adalah jumlah kemunculan huruf `x`)_

---

## 🧪 TEST CASES

```javascript
// Function yang digunakan: targetTerdekatV2

console.log(targetTerdekatV2([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // Ekspektasi: 3
console.log(targetTerdekatV2(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // Ekspektasi: 4
console.log(targetTerdekatV2(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // Ekspektasi: 1
console.log(targetTerdekatV2([' ', ' ', 'o', ' '])); // Ekspektasi: 0
console.log(targetTerdekatV2([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // Ekspektasi: 2
console.log(targetTerdekatV2([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // Ekspektasi: 1
```
