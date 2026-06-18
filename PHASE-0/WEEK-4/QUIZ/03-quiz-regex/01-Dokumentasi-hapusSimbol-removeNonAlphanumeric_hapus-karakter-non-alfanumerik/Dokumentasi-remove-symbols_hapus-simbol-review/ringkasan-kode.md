# 📋 Ringkasan Kode — Challenge Hapus Simbol

### ✨ _Cheat sheet ringkas untuk copy-paste cepat!_

> 🎯 **Fungsi:** Menghapus semua karakter non-alphanumeric (simbol & spasi)
> dari sebuah string, hanya menyisakan huruf dan angka.

---

## 🟢 Versi 1: Iterasi Manual (`for...of` + Regex `.test()`)

```javascript
const hapusSimbol = (str) => {
  let result = '';

  for (const char of str) {
    if (/\w/.test(char)) {
      result += char;
    }
  }

  return result;
};
```

```
🧠 Mental Model  → "Kumpulkan yang valid"
📌 Cocok untuk   → Belajar logika filtering & butuh kontrol per karakter
🔑 Regex         → \w = [a-zA-Z0-9_] (Word Character)
```

---

## 🔵 Versi 2: One-Liner (`String.replace()` + Regex Negasi)

```javascript
const hapusSimbol = (str) => {
  return str.replace(/\W+/g, '');
};
```

```
🧠 Mental Model  → "Hapus yang tidak valid"
📌 Cocok untuk   → Production code & solusi cepat
🔑 Regex         → \W = [^a-zA-Z0-9_] (Non-Word Character)
```

---

## ⚡ Perbandingan Cepat

| | Versi 1 | Versi 2 |
|:--|:--------|:--------|
| **Baris** | ~7 | 1 |
| **Pendekatan** | Inklusif (kumpulkan) | Eksklusif (hapus) |
| **Regex** | `/\w/` | `/\W+/g` |

---

## ⚠️ Gotcha

- `\w` dan `\W` **menyertakan underscore** (`_`) sebagai *word character*
- Jika `_` harus ikut dihapus → ganti regex ke `/[a-zA-Z0-9]/` atau `/[^a-z0-9]/gi`

---

⬆️ [Kembali ke README](README.md)
