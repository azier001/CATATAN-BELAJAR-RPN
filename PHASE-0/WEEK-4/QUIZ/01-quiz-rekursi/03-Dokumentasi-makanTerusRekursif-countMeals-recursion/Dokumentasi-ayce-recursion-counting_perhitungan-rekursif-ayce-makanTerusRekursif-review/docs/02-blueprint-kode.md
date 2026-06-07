# 🗺️ Blueprint & Naming: Makan Terus Rekursif

### ✨ _Kerangka kode kosong + kamus variabel + algoritma tahan lupa_

> 🎯 **Tujuan:** Memahami struktur fungsi rekursif sebelum menulis kode, dengan penjelasan "kenapa" di setiap langkah + contoh angka konkret agar tidak lupa logic-nya besok

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧠 | [Mental Model Rekursif](#mental-model-rekursif) | Analogi dunia nyata |
| 📋 | [Kamus Variabel](#kamus-variabel) | Naming convention ❌ vs ✅ |
| 🏗️ | [Kerangka Kode](#kerangka-kode) | Blueprint fungsi kosong |
| 📖 | [Algoritma Tahan Lupa](#algoritma-tahan-lupa) | Step-by-step dengan "kenapa" |
| 🎯 | [Kesimpulan](#kesimpulan) | Key takeaways |

---

<a name="mental-model-rekursif"></a>
## 🧠 Mental Model Rekursif

Sebelum menulis kode, penting untuk memiliki **mental model** yang jelas tentang bagaimana rekursif bekerja.

### Analogi: Sistem Delegasi Pekerjaan

```
🎯 Mental Model → Boss yang mendelegasikan pekerjaan ke asisten
📌 Cara Kerja   → Boss menghitung 1, lalu minta asisten hitung sisanya
🔐 Base Case    → Ketika tidak ada pekerjaan lagi, asisten lapor "0"
```

**Ilustrasi:**

```
Boss: "Hitung pesanan untuk waktu 45 menit"
  ↓
Boss menghitung: 1 pesanan (45 - 15 = 30 tersisa)
Boss delegasi ke Asisten A: "Hitung sisanya untuk 30 menit"
  ↓
Asisten A menghitung: 1 pesanan (30 - 15 = 15 tersisa)
Asisten A delegasi ke Asisten B: "Hitung sisanya untuk 15 menit"
  ↓
Asisten B menghitung: 1 pesanan (15 - 15 = 0 tersisa)
Asisten B delegasi ke Asisten C: "Hitung sisanya untuk 0 menit"
  ↓
Asisten C: "Waktu habis! Hasilnya 0"
  ↓
Asisten B lapor ke A: "1 + 0 = 1"
  ↓
Asisten A lapor ke Boss: "1 + 1 = 2"
  ↓
Boss dapat hasil final: "1 + 2 = 3 pesanan"
```

> [!NOTE]
> Setiap "level" dalam rekursif adalah seorang pekerja yang:
> 1. Menghitung kontribusinya (1 pesanan)
> 2. Mendelegasikan sisanya ke level berikutnya
> 3. Menunggu laporan balik
> 4. Menambahkan hasil

---

<a name="kamus-variabel"></a>
## 📋 Kamus Variabel

Naming convention yang baik membuat kode **self-documenting** (mudah dipahami tanpa komentar berlebihan).

### Tabel Penamaan Parameter

| Lokasi/Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|--------------|----------------|-----------|--------|
| Parameter fungsi | `waktu` | `t`, `time`, `x`, `n` | Deskriptif, sesuai domain bisnis (restoran AYCE) |
| Konstanta durasi | `15` (magic number OK untuk soal ini) | `DURATION_PER_ORDER` | Untuk challenge sederhana, literal number lebih ringkas |

> [!TIP]
> **Kapan pakai konstanta?**
> - ✅ Jika nilai digunakan di **banyak tempat** → `const DURATION = 15`
> - ❌ Jika nilai hanya muncul **1 kali** → langsung tulis `15`

### Tabel Penamaan Versi Alternatif

Untuk versi kode yang lebih advanced, kita akan menambahkan parameter:

| Versi | Parameter Tambahan | Nama | Alasan |
|-------|-------------------|------|--------|
| V1-V2 (Basic) | - | `waktu` | Cukup 1 parameter |
| V3 (TCO) | Akumulator | `pesanan` | Menyimpan total pesanan yang sudah dihitung |

---

<a name="kerangka-kode"></a>
## 🏗️ Kerangka Kode

Ini adalah **blueprint** (kerangka kosong) yang akan kita isi di tahap implementasi nanti.

### Struktur Fungsi Rekursif (Template)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Boss delegasi ke Asisten)
const makanTerusRekursif = (waktu) => {
  // [BAGIAN 1] BASE CASE → Syarat berhenti
  // Kapan: Ketika waktu habis (≤ 0)
  // Return: 0 (tidak ada pesanan lagi)
  
  // [BAGIAN 2] RECURSIVE CASE → Pemanggilan ulang
  // Hitung: 1 pesanan untuk iterasi sekarang
  // Delegasi: Panggil fungsi lagi dengan waktu dikurangi 15
  // Return: 1 + hasil dari pemanggilan berikutnya
};
```

### Mapping ke Komponen Rekursif

```javascript
const makanTerusRekursif = (waktu) => {
  // ┌─────────────────────────────────────┐
  // │ [1] BASE CASE                       │
  // │ → Stopping condition                │
  // │ → Return fixed value (0)            │
  // └─────────────────────────────────────┘
  
  // ┌─────────────────────────────────────┐
  // │ [2] RECURSIVE CASE                  │
  // │ → Compute current contribution (1)  │
  // │ → Recursive call with reduced param │
  // │ → Accumulate results (1 + ...)      │
  // └─────────────────────────────────────┘
};
```

> [!IMPORTANT]
> **Urutan penulisan WAJIB:**
> 1. Tulis **base case** dulu (penahan)
> 2. Baru tulis **recursive case**
> 
> Menulis recursive case tanpa base case = infinite loop!

---

<a name="algoritma-tahan-lupa"></a>
## 📖 Algoritma Tahan Lupa

Algoritma ditulis dalam format **3 elemen**: Label Peran + Penjelasan Kenapa + Contoh Konkret.

### Langkah 1: Pengecekan Base Case (Penahan)

**🔐 Label Peran:** Guard yang mencegah infinite loop

**💡 Kenapa?**  
Rekursif harus punya titik berhenti. Tanpa base case, fungsi akan memanggil dirinya sendiri tanpa henti sampai program crash (`Maximum call stack size exceeded`).

**📊 Contoh Konkret:**
```javascript
// Input: waktu = 0
if (waktu <= 0) {
  return 0; // Tidak ada pesanan lagi
}
// Output: 0
```

**📊 Contoh Konkret 2:**
```javascript
// Input: waktu = -5 (dari 10 - 15)
if (waktu <= 0) {
  return 0; // Tidak ada pesanan lagi
}
// Output: 0
```

---

### Langkah 2: Hitung Kontribusi Saat Ini

**🔐 Label Peran:** Counter untuk pesanan di iterasi sekarang

**💡 Kenapa?**  
Setiap kali fungsi berjalan dengan `waktu > 0`, artinya customer berhasil memesan 1 kali. Ini adalah **kontribusi** dari level rekursif saat ini.

**📊 Contoh Konkret:**
```javascript
// Input: waktu = 45
// Kontribusi level ini: +1 pesanan
// (Customer berhasil memesan karena waktu masih ada)
```

---

### Langkah 3: Kurangi Waktu

**🔐 Label Peran:** Reducer yang membawa parameter lebih dekat ke base case

**💡 Kenapa?**  
Setiap rekursif harus mengubah parameter agar semakin mendekati base case. Jika tidak dikurangi, parameter akan selalu sama → infinite loop.

**📊 Contoh Konkret:**
```javascript
// Input: waktu = 45
// Proses: 45 - 15
// Waktu baru untuk level berikutnya: 30
```

---

### Langkah 4: Delegasi ke Level Berikutnya

**🔐 Label Peran:** Delegator yang melempar pekerjaan ke rekursif berikutnya

**💡 Kenapa?**  
Rekursif bekerja dengan cara "pecah masalah besar jadi kecil". Level sekarang hitung 1 pesanan, lalu lempar sisanya ke level berikutnya.

**📊 Contoh Konkret:**
```javascript
// Level 1: waktu = 45
makanTerusRekursif(30) // Lempar ke level 2
  ↓
// Level 2: waktu = 30
makanTerusRekursif(15) // Lempar ke level 3
  ↓
// Level 3: waktu = 15
makanTerusRekursif(0) // Lempar ke level 4
  ↓
// Level 4: waktu = 0 → BASE CASE, return 0
```

---

### Langkah 5: Akumulasi Hasil

**🔐 Label Peran:** Accumulator yang menjumlahkan semua kontribusi

**💡 Kenapa?**  
Hasil akhir adalah penjumlahan kontribusi dari semua level. Level sekarang (1) + hasil dari level berikutnya (X).

**📊 Contoh Konkret:**
```javascript
// Level 4: return 0 (base case)
// Level 3: return 1 + 0 = 1
// Level 2: return 1 + 1 = 2
// Level 1: return 1 + 2 = 3 ← Hasil akhir
```

**Visualisasi:**
```
makanTerusRekursif(45)
│
├─ [Level 1] Hitung: 1
│  └─ Delegasi: makanTerusRekursif(30)
│     │
│     ├─ [Level 2] Hitung: 1
│     │  └─ Delegasi: makanTerusRekursif(15)
│     │     │
│     │     ├─ [Level 3] Hitung: 1
│     │     │  └─ Delegasi: makanTerusRekursif(0)
│     │     │     │
│     │     │     └─ [Level 4] Base case: 0
│     │     │     
│     │     └─ Akumulasi: 1 + 0 = 1
│     │
│     └─ Akumulasi: 1 + 1 = 2
│
└─ Akumulasi: 1 + 2 = 3 ✅
```

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan

### Key Takeaways

| Aspek | Insight |
|-------|---------|
| **Mental Model** | Rekursif = Boss delegasi ke Asisten, tunggu laporan balik |
| **Naming** | Gunakan nama deskriptif sesuai domain bisnis (`waktu` bukan `t`) |
| **Struktur** | 2 bagian wajib: Base Case (penahan) + Recursive Case (delegasi) |
| **Urutan Penulisan** | Tulis base case dulu, baru recursive case |
| **Algoritma Tahan Lupa** | Setiap langkah punya: Label + Kenapa + Contoh konkret |

### Checklist Sebelum Coding

```
✅ Apakah saya sudah tahu kapan fungsi harus berhenti? (Base case)
✅ Apakah saya tahu kontribusi level sekarang? (1 pesanan)
✅ Apakah parameter berubah setiap rekursif? (waktu - 15)
✅ Apakah saya tahu cara akumulasi hasil? (1 + hasil_berikutnya)
```

> [!TIP]
> **Next Step:** Sekarang blueprint sudah jelas, saatnya menulis kode sebenarnya! Lanjut ke **[Implementasi Bertahap](./03-implementasi-bertahap.md)** untuk step-by-step coding.

---

### 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ Analisis Pola](./01-analisis-pola.md) | Kembali ke tabel breakdown |
| [➡️ Implementasi Bertahap](./03-implementasi-bertahap.md) | Lanjut: Step-by-step coding |
| [📦 Lihat Semua Versi Kode](./code-versions.md) | Skip ke perbandingan lengkap |

---

📅 **Terakhir diupdate:** 7 Juni 2026
