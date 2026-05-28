# 🔄 Fase 3: Evolusi Solusi — Loop vs RegEx

### ✨ _Mengubah 9 baris kode menjadi 1 baris dengan kekuatan Regular Expression_

> 🎯 **Tujuan:** Mengeksplorasi pendekatan alternatif menggunakan RegEx, memahami perbedaan mental model antara kedua versi, dan tahu kapan menggunakan yang mana.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Penemuan Pola RegEx](#penemuan) | Dari logika loop ke pattern matching |
| ⚠️ | [Gotcha: Jebakan Spasi](#gotcha) | Error yang benar-benar terjadi |
| ⚖️ | [Perbandingan Versi](#perbandingan) | Loop vs RegEx — kapan pakai yang mana? |

---

<a name="penemuan"></a>

## 🔍 Penemuan Pola RegEx

Setelah solusi loop berhasil, muncul pertanyaan: *"Bisa nggak kita bikin lebih ringkas?"*

Jawabannya: **bisa banget** — dengan RegEx (Regular Expression).

### Konsep Dasar yang Dipakai

```
🎯 Titik (.)   →  Wildcard, cocok dengan karakter apa saja (huruf, angka, spasi)
📌 Pipe (|)    →  Operator OR, cocokkan pola A atau pola B
🔐 .test(str)  →  Method bawaan RegEx, return true/false
```

### Proses Menerjemahkan Logika

Logika challenge kita sebenarnya sederhana: cari `'a'` diikuti 3 karakter bebas lalu `'b'` — atau sebaliknya.

| Logika | Kode Loop | Pola RegEx |
|--------|-----------|------------|
| `'a'` lalu 3 karakter lalu `'b'` | `str[i] === 'a' && str[i+4] === 'b'` | `a...b` |
| `'b'` lalu 3 karakter lalu `'a'` | `str[i] === 'b' && str[i+4] === 'a'` | `b...a` |
| Salah satu benar | `\|\|` (OR) | `\|` (pipe) |

Hasilnya:

```javascript
const checkAB = (text) => {
  return /a...b|b...a/.test(text);
};
```

> [!NOTE]
> 💡 **Kenapa `.test()` bukan `.match()`?** Method `.test()` hanya mengembalikan `true`/`false` — persis yang kita butuhkan. Sedangkan `.match()` mengembalikan array hasil pencocokan, yang berlebihan untuk kasus ini.

---

<a name="gotcha"></a>

## ⚠️ Gotcha: Jebakan Spasi di RegEx

> [!WARNING]
> 🐛 **Error ini benar-benar terjadi** saat proses penulisan kode alternatif!

```javascript
// ❌ KODE AWAL (SALAH)
return /a...b | b...a/.test(text);
```

### 🔍 Penyebab

Di JavaScript biasa, spasi di sekitar operator `||` **diabaikan** — itu hanya soal gaya penulisan. Tapi di dalam RegEx, **setiap karakter dianggap literal**, termasuk spasi!

Kode di atas sebenarnya mencari:

```
Pola 1: a...b⎵    ← huruf 'a', 3 karakter bebas, huruf 'b', lalu SPASI
Pola 2: ⎵b...a    ← SPASI, lalu huruf 'b', 3 karakter bebas, huruf 'a'
```

### ✅ Solusi

Hapus semua spasi di sekitar `|`:

```javascript
// ✅ KODE YANG BENAR
return /a...b|b...a/.test(text);
```

> [!CAUTION]
> 🔴 **Aturan Emas RegEx:** Jangan pernah menambahkan spasi "kosmetik" di dalam pola RegEx kecuali kamu memang ingin mencocokkan karakter spasi. Ini berlaku untuk semua bahasa pemrograman, bukan hanya JavaScript.

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan: Loop vs RegEx

| Aspek | Versi 1: Loop 🔵 | Versi 2: RegEx 🟣 |
|-------|:----------------:|:-----------------:|
| Jumlah baris | ~9 baris | 1 baris |
| Readability | ✅ Sangat jelas, step-by-step | ⚠️ Perlu paham sintaks RegEx |
| Performa | ✅ Setara | ✅ Setara |
| Kemudahan debug | ✅ Bisa pasang breakpoint per baris | ❌ Sulit — pola RegEx = black box |
| Cocok untuk | 👶 Junior / tim campuran | 🧑‍💻 Senior / codebase matang |
| Fleksibilitas | ✅ Mudah dimodifikasi logikanya | ⚠️ Perlu belajar sintaks baru |

### 🏆 Kapan Pakai Yang Mana?

> [!TIP]
> 💡 **Gunakan Loop** jika:
> - Kode akan dibaca oleh tim dengan level pengalaman bervariasi
> - Kamu perlu memodifikasi logika pengecekan di masa depan
> - Proses debugging dan testing jadi prioritas

> [!TIP]
> 💡 **Gunakan RegEx** jika:
> - Tim sudah familiar dengan pattern matching
> - Kecepatan penulisan kode jadi prioritas
> - Challenge-nya cocok diterjemahkan ke pola teks (seperti `checkAB` ini)

---

| ⬅️ Sebelumnya | 📖 Daftar Isi | Selanjutnya ➡️ |
|:--------------|:-------------:|---------------:|
| [02-solusi-bertahap.md](./02-solusi-bertahap.md) | [README.md](../README.md) | [04-clean-code.md](./04-clean-code.md) |
