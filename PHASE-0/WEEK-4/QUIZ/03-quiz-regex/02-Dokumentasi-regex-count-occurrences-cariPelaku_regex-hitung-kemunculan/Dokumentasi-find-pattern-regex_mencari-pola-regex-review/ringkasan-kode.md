# 📋 Ringkasan Kode — cariPelaku

### ✨ _Cheat sheet semua versi kode, siap copy-paste_

> 🎯 **Tujuan:** Referensi cepat tanpa perlu membaca penjelasan panjang. Buka file ini kapan saja kamu butuh kode-nya langsung.

---

## 🧪 Test Cases

```javascript
console.log(cariPelaku('mabcvabc'));    // 2
console.log(cariPelaku('abcdabdc'));    // 1
console.log(cariPelaku('bcabcac'));     // 1
console.log(cariPelaku('abcabcabc'));   // 3
console.log(cariPelaku('babcbacabc'));  // 2
```

---

## V1 — Pendekatan Bertahap

```javascript
function cariPelaku(text) {
  const matches = text.match(/abc/g);

  return matches.length;
}
```

| Kelebihan | Kekurangan |
|---|---|
| ✅ Mudah dibaca pemula | ❌ Crash jika tidak ada match (`null.length`) |

---

## V2 — One-Liner + Anti-Error ⭐ Rekomendasi

```javascript
function cariPelaku(text) {
  return (text.match(/abc/g) || []).length;
}
```

| Kelebihan | Kekurangan |
|---|---|
| ✅ Ringkas (1 baris) | — |
| ✅ Tahan banting (`null` → `[]`) | — |

---

## 🔑 Konsep Kunci

| Konsep | Sintaks | Fungsi |
|---|---|---|
| Regex literal | `/abc/g` | Mencari semua kemunculan "abc" secara global |
| `.match()` | `str.match(/regex/)` | Mengembalikan Array berisi semua match |
| Short-circuit OR | `expr \|\| []` | Penyelamat default jika hasil `null` |
| `.length` | `array.length` | Menghitung jumlah elemen Array |

---

⬆️ [README.md](README.md)
