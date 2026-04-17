# 📋 Ringkasan Algoritma Semua Versi / Algorithm Summary All Versions

![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)
![Versions](https://img.shields.io/badge/Versions-6-blue?style=for-the-badge)

---

## 🧭 Quick Jump

| V1 | V2 | V3 | V4 | V5 | V6 |
|:--:|:--:|:--:|:--:|:--:|:--:|
| [Jump](#versi-1--rekursif--string) | [Jump](#versi-2--rekursif--matematik) | [Jump](#versi-3--while-dalam-while) | [Jump](#versi-4--tail-recursion--accumulator) | [Jump](#versi-5--rekursif--for-loop-) | [Jump](#versi-6--for-dalam-while) |

---

## Versi 1 — Rekursif + String

```js
function kaliTerusRekursif(angka) {
  const digits = String(angka);

  if (digits.length === 1) return Number(digits);

  const result = Number(digits[0]) * kaliTerusRekursif(Number(digits.slice(1)));

  return kaliTerusRekursif(result);
}
```

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Rekursif + string |
| Base case | `digits.length === 1` |
| Pemisahan digit | `digits[0]` dan `slice(1)` |
| Rekursif | Dua kali per babak |

---

## Versi 2 — Rekursif + Matematik

```js
const kaliTerusRekursif = (angka) => {
  if (angka < 10) return angka;

  const result = (angka % 10) * kaliTerusRekursif(Math.floor(angka / 10));

  return kaliTerusRekursif(result);
};
```

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Rekursif + matematik |
| Base case | `angka < 10` |
| Pemisahan digit | `% 10` dan `Math.floor(/ 10)` |
| Rekursif | Dua kali per babak |

---

## Versi 3 — While dalam While

```js
const kaliTerusRekursif = (angka) => {
  while (angka >= 10) {
    let total = 1;

    while (angka >= 10) {
      total *= angka % 10;
      angka = Math.floor(angka / 10);
    }

    angka = total * angka;
  }

  return angka;
};
```

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Iteratif — nested while |
| Base case | Kondisi while `angka >= 10` |
| Pemisahan digit | `% 10` dan `Math.floor(/ 10)` |
| Update angka | `total * angka` — digit terakhir belum terproses |

---

## Versi 4 — Tail Recursion + Accumulator

```js
const kaliTerusRekursif = (angka, total = 1) => {
  if (angka < 10) return angka * total;

  const result = kaliTerusRekursif(
    Math.floor(angka / 10),
    total * (angka % 10),
  );
  
  return kaliTerusRekursif(result);
};
```

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Tail recursion + accumulator |
| Base case | `angka < 10` → `return angka * total` |
| Pemisahan digit | `% 10` dan `Math.floor(/ 10)` |
| Accumulator | `total` — dibawa turun antar pemanggilan |

---

## Versi 5 — Rekursif + For Loop ⭐

```js
function kaliTerusRekursif(angka) {
  if (angka < 10) return angka;
  
  let str = angka.toString();
  let hasil = 1;

  for (let i = 0; i < str.length; i++) {
    hasil *= Number(str[i]);
  }

  return kaliTerusRekursif(hasil);
}
```

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Rekursif + for loop |
| Base case | `angka < 10` |
| Pemisahan digit | `toString()` + iterasi for loop |
| Rekursif | Satu kali per babak |

---

## Versi 6 — For dalam While

```js
function kaliTerusRekursif(angka) {
  while (angka >= 10) {
    let str = angka.toString();
    let hasil = 1;

    for (let i = 0; i < str.length; i++) {
      hasil *= Number(str[i]);
    }

    angka = hasil;
  }
  
  return angka;
}
```

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Iteratif — for dalam while |
| Base case | Kondisi while `angka >= 10` |
| Pemisahan digit | `toString()` + iterasi for loop |
| Update angka | `angka = hasil` — semua digit sudah terproses |

---

## 📊 Perbandingan Cepat

| Versi | Rekursif | Loop | String | Matematik |
|-------|:--------:|:----:|:------:|:---------:|
| 1 | ✅ | ❌ | ✅ | ❌ |
| 2 | ✅ | ❌ | ❌ | ✅ |
| 3 | ❌ | ✅ | ❌ | ✅ |
| 4 | ✅ | ❌ | ❌ | ✅ |
| 5 | ✅ | ✅ | ✅ | ❌ |
| 6 | ❌ | ✅ | ✅ | ❌ |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📖 [← Kembali ke Part 9 — Edge Cases](./docs/09-edge-cases_kasus-tepi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>