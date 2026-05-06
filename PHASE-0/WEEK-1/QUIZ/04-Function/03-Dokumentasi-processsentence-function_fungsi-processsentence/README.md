# 💬 Fungsi `processSentence()` — Merakit Kalimat dari Multiple Parameter

> 📝 Belajar membuat fungsi yang menerima 4 parameter dan **merakit** data tersebut menjadi satu kalimat utuh menggunakan Template Literals

---

## 📋 Soal

Buatlah sebuah fungsi bernama `processSentence()`, yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut:

```
"Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
```

```javascript
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
```

---

## 💻 Kode Solusi

```javascript
const processSentence = (name, age, address, hobby) => {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
};

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
// Output: "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
```

---

## 🔍 Penjelasan

### 1. Deklarasi Fungsi dengan 4 Parameter

```javascript
const processSentence = (name, age, address, hobby) => { ... };
```

Fungsi ini menerima **4 parameter** yang masing-masing punya peran:

| Parameter | Tipe Data | Peran |
|-----------|-----------|-------|
| `name` | String | Nama orang |
| `age` | Number | Umur |
| `address` | String | Alamat lengkap |
| `hobby` | String | Hobi |

### 2. Merakit Kalimat dengan Template Literals

```javascript
return `Nama saya ${name}, umur saya ${age} tahun, ...`;
```

- Menggunakan **backtick** (`` ` ``) sebagai pembungkus string.
- Setiap variabel disisipkan menggunakan sintaks `${variabel}`.
- Jauh lebih rapi daripada concatenation dengan `+` yang bisa sangat membingungkan untuk kalimat panjang.

### 3. Alur Eksekusi

```
[Panggilan]  processSentence("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming")
                     │
                     ▼
[Parameter]  name = "Agus", age = 30, address = "Jln. Malioboro, Yogjakarta", hobby = "gaming"
                     │
                     ▼
[Proses]     Template Literals merakit semua data menjadi satu kalimat
                     │
                     ▼
[Return]     ← "Nama saya Agus, umur saya 30 tahun, ..." keluar dari fungsi
                     │
                     ▼
[Hasil]      fullSentence = "Nama saya Agus, umur saya 30 tahun, ..."
```

---

## 🧪 Contoh Output

```
Input:  name = "Agus", age = 30, address = "Jln. Malioboro, Yogjakarta", hobby = "gaming"
Output: "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
```

```
Input:  name = "Budi", age = 25, address = "Jakarta", hobby = "membaca"
Output: "Nama saya Budi, umur saya 25 tahun, alamat saya di Jakarta, dan saya punya hobby yaitu membaca!"
```

```
Input:  name = "Siti", age = 20, address = "Bandung", hobby = "memasak"
Output: "Nama saya Siti, umur saya 20 tahun, alamat saya di Bandung, dan saya punya hobby yaitu memasak!"
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Multiple Parameters** — Fungsi bisa menerima lebih dari 2 parameter, urutannya saat pemanggilan harus sesuai dengan deklarasi
- ✅ **Template Literals** — Cara modern merakit string menggunakan backtick dan `${}`, sangat cocok untuk kalimat panjang
- ✅ **String Concatenation vs Template Literals** — Template Literals lebih *readable* dan minim error dibanding `+`
- ✅ **Return Statement** — Mengembalikan hasil rakitan kalimat agar bisa disimpan ke variabel di luar fungsi

---

## 💡 Catatan Tambahan

### Implicit Return (Versi Ringkas) ✨

Karena fungsi ini hanya punya **satu baris** proses, bisa ditulis tanpa `{}` dan `return`:

```javascript
// Explicit return (versi lengkap)
const processSentence = (name, age, address, hobby) => {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
};

// Implicit return (versi ringkas — hasil sama persis)
const processSentence = (name, age, address, hobby) =>
  `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
```

### Kenapa Template Literals Lebih Baik di Sini?

Bandingkan kedua versi ini untuk kalimat panjang:

```javascript
// ❌ Concatenation — sulit dibaca, rawan typo tanda kutip
return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";

// ✅ Template Literals — bersih dan natural
return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
```

---

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
