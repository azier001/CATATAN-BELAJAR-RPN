# 📋 Ringkasan Semua Versi — Shopping Time

### ✨ _Cheat sheet full code semua versi — siap copy-paste_

> 🎯 **Tujuan:** Referensi cepat untuk melihat dan membandingkan kode lengkap dari setiap versi tanpa harus membaca penjelasan panjang.

---

### 📑 Daftar Versi

| Versi | Pendekatan | Jump |
|:-----:|------------|------|
| **V1** | Array of Objects + Mutasi Objek `result` | [Lihat ⬇️](#v1) |
| **V2** | Plain Object (Dictionary) + `for...in` | [Lihat ⬇️](#v2) |
| **V3** | Array of Objects + ES6 Shorthand & Destructuring | [Lihat ⬇️](#v3) |
| **V4** | Kode Mandiri (Functional Return) — setelah refactoring | [Lihat ⬇️](#v4) |

> [!TIP]
> Penjelasan detail, alasan di balik setiap keputusan, dan perbandingan arsitektur ada di [docs/01](docs/01-analisis-dan-solusi-bertahap.md) dan [docs/02](docs/02-evolusi-dan-clean-code.md).

---

<a name="v1"></a>
## V1 — Array of Objects + Mutasi Objek

```javascript
const shoppingTime = (memberId, money) => {
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  const products = [
    { productName: 'Sepatu Stacattu', price: 1500000 },
    { productName: 'Baju Zoro', price: 500000 },
    { productName: 'Baju H&N', price: 250000 },
    { productName: 'Sweater Uniklooh', price: 175000 },
    { productName: 'Casing Handphone', price: 50000 },
  ];

  const listPurchased = [];

  const result = {
    memberId,
    money,
    listPurchased,
    changeMoney: money,
  };

  for (const product of products) {
    if (result.changeMoney >= product.price) {
      result.listPurchased.push(product.productName);
      result.changeMoney -= product.price;
    }
  }

  return result;
};
```

---

<a name="v2"></a>
## V2 — Plain Object (Dictionary) + `for...in`

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000,
  };

  const result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: money,
  };

  for (const key in products) {
    if (result.changeMoney >= products[key]) {
      result.listPurchased.push(key);
      result.changeMoney -= products[key];
    }
  }

  return result;
}
```

---

<a name="v3"></a>
## V3 — Clean ES6 (Shorthand + Destructuring)

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 }
  ];

  const result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: money
  };

  for (const { name, price } of products) {
    if (result.changeMoney >= price) {
      result.listPurchased.push(name);
      result.changeMoney -= price;
    }
  }

  return result;
}
```

---

<a name="v4"></a>
## V4 — Functional Return (Kode Mandiri Refactored)

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 },
  ];

  const listPurchased = [];
  let changeMoney = money;

  for (const { name, price } of products) {
    if (price <= changeMoney) {
      listPurchased.push(name);
      changeMoney -= price;
    }
  }

  return { memberId, money, listPurchased, changeMoney };
}
```

---

⬆️ [Kembali ke README](README.md)
