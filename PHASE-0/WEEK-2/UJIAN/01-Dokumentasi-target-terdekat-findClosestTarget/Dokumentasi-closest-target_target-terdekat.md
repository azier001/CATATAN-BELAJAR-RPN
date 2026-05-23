# 📓 Catatan Harian Debugging: Misteri Jarak `'o'` dan `'x'` (`targetTerdekat`)

### ✨ _Sebuah perjalanan epik dari kode yang buntu menuju solusi 1-loop kelas profesional_

> 🎯 **Tujuan:** Dokumentasi pamungkas bergaya naratif ini merekam jejak komprehensif perjalanan kita. Dilengkapi dengan visualisasi memori, bedah kinerja matematis ekstrem, penjelasan sintaksis baris-per-baris, hingga ringkasan kode bersih (_copy-paste ready_), dokumentasi ini dirancang menjadi "buku sakti" algoritma JavaScript pemula.

---

### 📑 Daftar Isi

| No  | Bab                                                        | Deskripsi                                             |
| --- | ---------------------------------------------------------- | ----------------------------------------------------- |
| 📖  | <a href="#prolog">Prolog: Misi & Tantangan</a>             | Memahami deskripsi masalah utama                      |
| 💥  | <a href="#bab1">Bab 1: Eksperimen Awal yang Buntu</a>      | Membedah "Stuck Code" (jebakan break & index 0)       |
| 🔍  | <a href="#bab2">Bab 2: Analisis Pola Manual</a>            | Mencari rumus jarak mutlak di atas kertas             |
| 🛠️  | <a href="#bab3">Bab 3: Solusi "Buku Catatan" (Versi 1)</a> | Pendekatan intuitif menggunakan tambahan memori Array |
| ♻️  | <a href="#bab4">Bab 4: Kebangkitan Kode Lama (Versi 3)</a> | Memperbaiki logika pencarian menyebar dari tengah     |
| ⚡  | <a href="#bab5">Bab 5: Puncak Evolusi (Versi 2)</a>        | Teknik 1 Loop Simultan tanpa alokasi memori array     |
| 🧮  | <a href="#bab6">Bab 6: Bedah Matematis (Big-O)</a>         | Simulasi O(N) vs O(2N) pada array 1 Juta data         |
| 📖  | <a href="#bab7">Bab 7: Bedah Baris-per-Baris</a>           | Penjelasan sintaksis anatomi kode Versi 2             |
| 🧹  | <a href="#bab8">Bab 8: Clean Code & Penamaan</a>           | Standar konvensi variabel _software engineering_      |
| ✅  | <a href="#epilog">Epilog: Verifikasi Akhir</a>             | Pembuktian akhir mengeksekusi test cases bawaan       |

---

<a name="prolog"></a>

## 📖 Prolog: Misi & Tantangan

Kita mendapat misi dari mentor untuk membangun sebuah function JavaScript bernama `targetTerdekat(arr)`. Function ini menerima sebuah array berisi rangkaian karakter. Di dalamnya hanya akan ada satu huruf `'o'`, diselingi spasi kosong `' '`, dan beberapa huruf `'x'` (atau bisa juga tidak ada `'x'` sama sekali).

Tugas utamanya terkesan sepele: **Temukan jarak langkah terdekat antara letak `'o'` dan letak salah satu `'x'`.** Jika fungsi memindai array sampai habis dan tidak menemukan `'x'` satupun, kita diwajibkan mengembalikan nilai `0`.

Namun, dalam praktiknya, menerjemahkan bahasa intuisi manusia ke dalam bahasa logika mesin menyimpan ratusan jalan berlubang.

---

<a name="bab1"></a>

## 💥 Bab 1: Eksperimen Awal yang Buntu (Stuck Code)

Sebelum kita berdiskusi lebih lanjut, terdapat sebuah draf kode awal yang coba kita kerjakan secara mandiri. Idenya cukup berani: "Cari letak `'o'`, lalu cari letak `'x'` dari sayap kiri, dan cari letak `'x'` dari sayap kanan. Terakhir, bandingkan jarak keduanya!".

Berikut adalah draf kode orisinil yang kita susun:

```javascript
function targetTerdekatDraft(arr) {
  let counter = 0;
  let xPosition = 0; // ⚠️ Pintu gerbang bug logika
  let oPosition = 0; // ⚠️ Pintu gerbang bug logika

  // [LOOP 1] Sapuan mencari karakter dari KIRI
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (char === 'o') {
      oPosition = i;
    } else if (char === 'x') {
      xPosition = i;
      break; // ⚠️ Menghentikan laju program prematur
    }
  }

  const diff = Math.abs(oPosition - xPosition);

  // [LOOP 2] Sapuan mencari karakter dari KANAN (berjalan mundur)
  for (let i = arr.length - 1; i >= 0; i--) {
    const char = arr[i];

    if (char === 'x') {
      xPosition = i;
    } else if (char === 'x') {
      // ⚠️ Kondisi kembar yang sia-sia
      xPosition = i;
      break;
    }
  }
}
```

> [!WARNING]
> 🐛 **Bencana Terjadi:** Kode ini memberikan _output_ angka yang kacau balau! Pada beberapa uji coba, ia mengembalikan 0 meski jarak terbentang nyata, dan di uji coba lain menghasilkan jarak yang sangat ngawur.

### 🔍 Investigasi Kegagalan (Bedah Otopsi Bug)

Ada 3 penyakit logika (_logical bugs_) utama yang menjangkiti draf kode ini:

1. **Ilusi Index `0` (Zero Initialization)**
   Mendeklarasikan `let oPosition = 0;` adalah dosa awal pemrograman array. Di JavaScript, index array dimulai dari `0`. Jika input berupa `[' ', 'o', 'x']`, maka index 0 adalah letak karakter spasi. Mesin akan berhalusinasi mengira posisi `'o'` berada di index `0` sejak kode dijalankan!

2. **Rem Darurat (`break`) yang Mematikan**
   Pada _Loop 1_, saat pertama kali program melihat muka huruf `'x'`, ia akan memanggil fungsi `break`. Bayangkan struktur inputnya `['x', ' ', 'o']`. Di index 0 ia bertemu `'x'`, lalu _keluar selamanya_ dari portal loop. Sang karakter `'o'` di index 2 tidak akan pernah tersapa, karena program sudah pensiun dini.

3. **Logika _Else If_ Kembar**
   Perhatikan di _Loop 2_, blok kondisional `if (char === 'x')` berdampingan dengan `else if (char === 'x')`. Secara cara kerja _compiler_, `else if` tidak akan pernah dieksekusi selama syaratnya 100% sama dengan _if_ pertama. Percabangan ini menjadi kode mati (_dead code_).

Dari trauma kegagalan ini, satu kebenaran terungkap: **Mencari jarak terpendek dari dua sisi ujung array adalah teknik yang tidak valid dan sangat rawan _bug_.**

---

<a name="bab2"></a>

## 🔍 Bab 2: Analisis Pola Secara Manual (Di Atas Kertas)

Karena alur mesin terlalu kusut untuk diluruskan, kita sepakat melepas _keyboard_, menutup editor, dan membayangkan data di atas kertas layaknya manusia normal.

**Studi Kasus Visual:** `arr = ['x', ' ', 'o', ' ', ' ', 'x']`

Apa _sih_ yang dilakukan otak kita saat menebak jarak?

1. Mata bergerak cepat (_scanning_): "Terdapat `'o'` di kursi no. **2**".
2. "Ada toko `'x'` pertama di kursi no. **0**".
3. "Ada toko `'x'` kedua di kursi no. **5**".
4. Otak menghitung selisih kursi toko 1: `|2 - 0| = 2 langkah`.
5. Menghitung selisih kursi toko 2: `|2 - 5| = 3 langkah`.
6. Otak mengambil konklusi: "Tentu saja toko pertama lebih dekat (2 langkah)".

> [!TIP]
> 💡 **Pencerahan Intuitif (Aha Moment!):**
> Otak kita memproses masalah algoritma menjadi 3 tahap sekuensial: (1) Menginventarisasi semua posisi ke memori ingatan sementara, (2) Mengurangkannya menjadi nilai absolut _(distance)_, dan (3) Mengkomparasi mana angka terkecilnya.

Satu rumus tunggal yang akan kita bawa selamanya: `Jarak = Math.abs(Posisi O - Posisi X)`.

---

<a name="bab3"></a>

## 🛠️ Bab 3: Kelahiran Versi 1 — Solusi "Buku Catatan"

Berlandaskan pencerahan di Bab 2, kita merangkai barisan kode baru tahap demi tahap. Lahirlah **Versi 1** dengan mental model: **"Pendekatan Buku Catatan"**.

### 🖼️ Visualisasi Simulasi Meja Kerja Komputer

```text
[ TAHAP 1: MENGUMPULKAN INVENTARIS ]
Array : ['x', ' ', 'o', ' ', ' ', 'x']
Index :   0    1    2    3    4    5

📝 Variabel posO         : [ 2 ]
📝 Buku Array arrX       : [ 0, 5 ]

[ TAHAP 2: KALKULASI DI MEJA KERJA ]
Loop membaca isi arrX, hitung jarak absolutnya ke posO (2):
- Evaluasi item [0] ➡️ |2 - 0| = 2  (Papan Rekor Terkecil = 2)
- Evaluasi item [5] ➡️ |2 - 5| = 3  (Kalah! Rekor tetap bertahan di 2)
```

### 💻 Eksekusi Kode Bertahap

**1. Menyiapkan Memori Catatan**
Kita menggunakan angka mustahil `-1` sebagai simbol "belum ada titik koordinat yang disentuh". Untuk kumpulan karakter `'x'`, kita merakit buku memori buatan berupa array `arrX`.

```javascript
function targetTerdekatV1(arr) {
  let posO = -1;
  const arrX = []; // Gudang koordinat 'x'
```

**2. Pendataan Lapangan**
Kita melempar mesin _looping_ untuk mengangkut informasi posisi koordinat dari index 0 hingga panjang akhir array.

```javascript
for (let i = 0; i < arr.length; i++) {
  const char = arr[i];
  if (char === 'o') posO = i;
  if (char === 'x') arrX.push(i); // Simpan posisinya ke gudang!
}
```

**3. Evaluasi Kondisi Hampa**
Apabila gudang `arrX` tidak berpenghuni (`length === 0`), patuhi instruksi: Kembalikan `0`.

```javascript
if (arrX.length === 0) return 0;
```

**4. Pertarungan Mencari Kandidat Terkecil**
Kita buka gembok gudang `arrX`, me-_looping_ isinya satu persatu. Jarak baru dikalkulasi dan ditandingkan dengan batas rekor jarak terkecil (`minDistance`) menggunakan arena `Math.min()`. Inisialisasi rekor wajib ditugaskan kepada `Infinity`.

```javascript
  let minDistance = Infinity; // Nilai batas atas tak terhingga
  for (let i = 0; i < arrX.length; i++) {
    minDistance = Math.min(minDistance, Math.abs(posO - arrX[i]));
  }
  return minDistance;
}
```

### 📋 Ringkasan Kode Bersih Versi 1 (Copy-Paste Ready)

> _Gunakan kode di bawah ini jika kamu ingin menyalinnya langsung ke proyekmu tanpa komentar instruksional._

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

---

<a name="bab4"></a>

## ♻️ Bab 4: Kebangkitan Kode Lama (Versi 3)

Sebelum menciptakan solusi _Ultimate_, jiwa peretas (_hacker_) kita iseng menoleh mundur ke puing-puing Draf Kode yang hancur di Bab 1. Idenya menggunakan rem tangan darurat (`break`) sungguh revolusioner dalam hal penghematan _processing power_. Sayang sasarannya keliru.

Maka kita _reparasi_ kodenya menjadi **Versi 3**.

**Mental Model Reparasi:** Jangan memulainya dari ujung! Temukan dulu letak tepatnya si huruf `'o'`, jadikan ia "Titik Pusat". Berdirilah di atas `'o'`, lemparkan pandangan menelusuri lorong array ke kiri. Menolehlah ke belakang, telusuri ke arah kanan. Target pertama yang menampakkan diri, panggil instruksi `break` seketika itu juga!

```javascript
function targetTerdekatV3(arr) {
  let posO = -1;
  let leftX = -1;
  let rightX = -1;

  // 1. Fase Pencarian "Titik Pusat" (o)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      posO = i;
      break; // Rem mendadak! 'o' toh hanya satu.
    }
  }

  // 2. Fase Pencarian Sayap Kiri (Hitung mundur dari posO)
  for (let i = posO - 1; i >= 0; i--) {
    if (arr[i] === 'x') {
      leftX = i;
      break; // Ketemu 'x' terdekat? Rem mendadak!
    }
  }

  // 3. Fase Pencarian Sayap Kanan (Hitung maju dari posO)
  for (let i = posO + 1; i < arr.length; i++) {
    if (arr[i] === 'x') {
      rightX = i;
      break; // Rem mendadak!
    }
  }

  // 4. Hitung Jarak Tempur
  let jarakKiri = leftX !== -1 ? Math.abs(posO - leftX) : Infinity;
  let jarakKanan = rightX !== -1 ? Math.abs(posO - rightX) : Infinity;

  // 5. Bandingkan Siapa Terkecil
  let minDistance = Math.min(jarakKiri, jarakKanan);
  return minDistance === Infinity ? 0 : minDistance;
}
```

> [!NOTE]
> 💡 **Penebusan Sang Pemula!**
> Modifikasi teknik "menyebar dari pusat" ini sukses membuktikan intuisi draf awal kita benar secara konseptual. Ini adalah kode dengan tingkat kecerdasan logis (_logical ingenuity_) yang mengagumkan!

### 📋 Ringkasan Kode Bersih Versi 3 (Copy-Paste Ready)

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

---

<a name="bab5"></a>

## ⚡ Bab 5: Puncak Evolusi — 1 Loop Simultan (Versi 2)

Sebuah rintangan terakhir menguji kejeniusan kita: **"Bisakah tantangan ini dilibas HANYA DALAM TEPAT SATU PUTARAN MURNI? Tanpa array tambahan, tanpa menghitung mundur?"**

### 🖼️ Visualisasi Timeline (Kamera 1 Arah)

```text
[ SAPUAN TUNGGAL: 1 LOOP MENGALIR ]
Data Array : ['x', ' ', 'o', ' ', ' ', 'x']

▶️ Menit 0 (Berpapasan dengan 'x')
   └─ Ingatan otak: posX adalah 0.
      (Pernah melihat 'o'? Belum. Lanjutkan jalan.)

▶️ Menit 1 (Berpapasan dengan spasi kosong) ➡️ Abaikan total

▶️ Menit 2 (Berpapasan dengan huruf 'o')
   └─ Ingatan otak: posO adalah 2.
      (Pernah melihat 'x'? YA, di index 0!)
      🧮 Otak memproses kilat: |2 - 0| = 2. (Rekor terpecahkan! Angka = 2)

▶️ Menit 3 & 4 (Berpapasan dengan spasi kosong) ➡️ Abaikan

▶️ Menit 5 (Berpapasan dengan huruf 'x')
   └─ Ingatan otak diperbarui: posX sekarang 5.
      (Pernah melihat 'o' terakhir? YA, posO tetap 2)
      🧮 Otak memproses lagi: |2 - 5| = 3. (Gagal mengalahkan Rekor 2)
```

### 💻 Eksekusi Kode Bertahap

```javascript
function targetTerdekatV2(arr) {
  let posO = -1;
  let posX = -1;
  let minDistance = Infinity; // Papan rekor saat ini

  // Membuka portal loop penyapuan tunggal
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    // Detik di mana kita menapaki huruf 'o'
    if (char === 'o') {
      posO = i;
      if (posX !== -1) {
        minDistance = Math.min(minDistance, Math.abs(posO - posX));
      }
    }
    // Detik di mana kita menapaki huruf 'x'
    else if (char === 'x') {
      posX = i;
      if (posO !== -1) {
        minDistance = Math.min(minDistance, Math.abs(posO - posX));
      }
    }
  }

  return minDistance === Infinity ? 0 : minDistance;
}
```

Versi 2 meraih gelar Juara Bertahan. Ia mengubah masalah dua dimensi menjadi garis waktu _linear_, menelan memori mendekati nol, dan menyajikan algoritma O(N) yang estetis.

### 📋 Ringkasan Kode Bersih Versi 2 (Copy-Paste Ready)

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

---

<a name="bab6"></a>

## 🧮 Bab 6: Bedah Matematis Kinerja (_Big-O Notation_)

Pada array pendek, perbedaan kinerja O(N) vs O(2N) nyaris fiktif. Semuanya selesai dalam `0.001` milidetik. Namun di perusahaan teknologi, kita harus membedah skalabilitas matematis yang membuktikan kenapa **Versi 2 (1 Loop)** melibas **Versi 1 (Buku Catatan)**.

### 🌐 Simulasi Ekstrem: Dataset 1 Juta Karakter

Bayangkan sebuah fungsi mengolah array sepanjang **1.000.000 elemen**.
Ada 1 huruf `'o'` di index 0. Sisanya 999.999 huruf `'x'` berjejer memanjang hingga ke ujung akhir.

**Analisis Kekalahan Telak Versi 1 (Buku Catatan — O(2N))**

1. **Sapuan Pertama (`for` mencari):** Komputer memutar mesin CPU meraba elemen tepat 1.000.000 kali putaran. Tiap huruf `'x'` ditangkap, lalu dipaksa masuk ke dalam kotak array `arrX`.
2. **Pembengkakan Memori:** Karena ada nyaris satu juta data `'x'`, program dipaksa merakit gudang raksasa `arrX` berisi 999.999 angka. Ini memakan **Megabytes (MB)** kapasitas RAM!
3. **Sapuan Kedua (`for` kalkulasi):** Komputer dipekerjakan paksa mengurai ulang 999.999 perulangan hanya untuk membongkar rekor jarak.
4. **Total Pukulan Kinerja:** 1.000.000 iterasi + alokasi RAM bengkak + 999.999 iterasi = **Hampir 2 Juta Operasi!**

**Analisis Kedigdayaan Versi 2 (1 Loop Simultan — O(N))**

1. **Sapuan Tunggal Mutlak:** Komputer membuka portal persis 1.000.000 iterasi. Ketika indeks menangkap `'o'` (index 0), otak mencatat `posO = 0`. Saat ribuan `'x'` melintas, algoritma dengan kilat menyabet pengurangan absolut secara langsung! Tiada pengumpulan data di memori terpisah.
2. **Beban Memori Siluman:** Komputer hanya membutuhkan 3 penampung variabel sederhana (`posO`, `posX`, `minDistance`). Memori tambahan? Nol!
3. **Total Pukulan Kinerja:** Mutlak dan persis **1.000.000 Operasi Bersih!**

> [!TIP]
> 🏆 **Kesimpulan Kinerja:** Algoritma Versi 2 menyelamatkan nyaris 1.000.000 rotasi CPU percuma dan memberantas kebocoran memori (_memory leak_).

---

<a name="bab7"></a>

## 📖 Bab 7: Bedah Sintaksis Kode Baris-per-Baris (Versi 2)

Bagi pemula, berikut adalah autopsi sintaks secara gamblang untuk Versi 2:

| Nomor & Baris Kode                                                            | Makna Translasi Sintaks ke Bahasa Manusia                                                                                                                                              |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `function targetTerdekatV2(arr) {`                                            | Deklarasi fungsi bernomor sasis `V2`, yang menerima parameter data `arr`.                                                                                                              |
| &nbsp;&nbsp;`let posO = -1;`                                                  | Memesan kotak variabel `posO` bernilai mutlak awal `-1`.                                                                                                                               |
| &nbsp;&nbsp;`let posX = -1;`                                                  | Memesan kotak memori `posX` khusus untuk titik koordinat sang "toko".                                                                                                                  |
| &nbsp;&nbsp;`let minDistance = Infinity;`                                     | Menyiapkan papan rekor `minDistance`. Nilainya `Infinity` agar angka rekor apapun yang datang pasti diakui "lebih kecil".                                                              |
| &nbsp;&nbsp;`for (let i = 0; i < arr.length; i++) {`                          | Mesin _Iterator_ dihidupkan. Gigi `i` diset 0, batasnya sebatas panjang array `arr.length`, dan perintahkan gigi maju satu ketukan `i++`.                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;`const char = arr[i];`                                | Pengekstrakan benda (elemen array) di index ke-`i` dan diikat dengan `const char`.                                                                                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;`if (char === 'o') {`                                 | Cabang komando utama: Apakah engkau huruf `o`?                                                                                                                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`posO = i;`                               | Jawaban _Ya_. Lacak dan catat lokasi `i` saat ini ke memori `posO`.                                                                                                                    |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`if (posX !== -1) {`                      | Logika penyarangan _(Nested Condition)_. Pernahkah menemukan `posX` sebelumnya? (`!== -1` artinya pernah).                                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`minDistance = Math.min(...)` | Mengadu papan rekor lama melawan skor jarak baru.                                                                                                                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`...Math.abs(posO - posX);`   | Jarak antar koordinat disucikan dengan absolut `Math.abs()` sehingga selalu bernilai positif.                                                                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;} `else if (char === 'x') {`                          | Jika benda bukan `'o'`, tanya lagi: Apakah engkau huruf `x`? Komando `else` menghemat proses komputasi.                                                                                |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`posX = i;`                               | Jawaban _Ya_. Pahat lokasi baru di kotak `posX`.                                                                                                                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`if (posO !== -1) {`                      | (Nested Condition) Mengecek _flashback_ penemuan letak `'o'`.                                                                                                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`minDistance = ...`           | _Sintaks identik dengan kalkulasi rekor `Math.min()` di atas._                                                                                                                         |
| &nbsp;&nbsp;`}`                                                               | Menutup gerbang mesin _looping_ `for`.                                                                                                                                                 |
| &nbsp;&nbsp;`return minDistance === Infinity ? 0 : ...`                       | **Ternary Operator:** Mengkonfrontasi sisa nilai papan rekor. _"Apakah skormu masih tidak terhingga?"_ Jika `true`, tamat. Kembalikan angka `0`. Jika `false`, kembalikan rekor jarak. |
| `}`                                                                           | Braket pamungkas penutup fungsi `targetTerdekatV2`.                                                                                                                                    |

---

<a name="bab8"></a>

## 🧹 Bab 8: Standarisasi Clean Code & Penamaan (_Naming Convention_)

Kita mendisiplinkan beberapa konvensi penamaan leksikal variabel yang paten:

| Evaluasi Variabel | Kelas Kelayakan      | Analisis Argumen dan Perdebatan                                                                                                                  |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `posO` dan `posX` | ✅ Brilian           | Membaca `if (o === 2)` membuat bingung, apakah karakter `o` atau lokasinya yang ada di urutan ke-2? Awalan `pos` menyelamatkan hari.             |
| `minDistance`     | ✅ Sangat Deskriptif | Menggunakan kata semacam `hasil` (atau `res`) tidak menggambarkan _state_ apa pun selain kemalasan deklaratif. Tulis nama sesuai tugas pastinya. |
| `i`               | ✅ Standar Industri  | Memakai variabel 1 aksara dibenarkan HANYA jika ia bernama `i`, `j`, atau `k` dan dikurung sebagai roda gigi _index iterator_ dalam `for`.       |

---

<a name="epilog"></a>

## ✅ Epilog: Verifikasi Test Cases Puncak

Tiba detik-detik pelampiasan eksekusi nyata lewat tes komparasi _Edge-Cases_ pada panggung mesin Node.js:

```javascript
console.log(targetTerdekatV2([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // Ekspektasi: 3
console.log(targetTerdekatV2(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // Ekspektasi: 4
console.log(targetTerdekatV2(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // Ekspektasi: 1
console.log(targetTerdekatV2([' ', ' ', 'o', ' '])); // Ekspektasi: 0
console.log(targetTerdekatV2([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // Ekspektasi: 2
console.log(targetTerdekatV2([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // Ekspektasi: 1
```

Terminal memproyeksikan tinta digital membuktikan segalanya:

```bash
3  ← ✅ Misi tercapai dengan nilai lurus!
4  ← ✅ Sinkronisasi komputasi konsisten!
1  ← ✅ Akurasi jarak mutlak teruji!
0  ← ✅ Proteksi kondisi hampa berhasil!
2  ← ✅ Terukur dan Sempurna!
1  ← ✅ Kasus ekstrem lolos!
```

> 📝 **Catatan Akhir Penulis Diary:**
> _Walkthrough Naratif Final_ ini memuat ringkasan _clean code_ pasca-sesi pemrograman pada **23 Mei 2026**. Rekaman diary setebal ini bertujuan mengajari satu filosofi: _Penguasaan logika sejati lahir dari mendengarkan kode yang gagal, meraba alur secara manual, dan mengevolusi kode bertahap secara metodis._ Selamat menyelami indahnya algoritma!
