# 🔄 Cheat Sheet — Build Profile Map & Transform Data Format

> 📋 Ringkasan semua versi kode dari 2 challenge terkait: **`buildProfileMap`** (4 versi) & **`changeMe`** (3 versi + refactored). Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. `buildProfileMap` — forEach + for...in ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  profiles.forEach(([firstName, lastName, gender, birthYear]) => {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  })

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

> 🔑 Functional style + readable. Destructuring langsung di parameter callback, tidak butuh variabel perantara `profile`. Tidak perlu `return acc` seperti `reduce`.

---

### 2. `changeMe` — forEach + Pre-Compute + Caching ⭐ `BEST PRACTICE AKHIR`

```javascript
/**
 * Mengubah array multidimensi data orang menjadi format log objek.
 * @param {Array<Array<string|number>>} peopleData - Array kumpulan profil
 */
const changeMe = (peopleData) => {
  if (peopleData.length === 0) {
    console.log('');
    return;
  }

  const currentYear = new Date().getFullYear();

  peopleData.forEach(([firstName, lastName, gender, birthYear]) => {
    const isValidYear = birthYear && birthYear <= currentYear;
    const computedAge = isValidYear ? currentYear - birthYear : 'Invalid Birth Year';

    const person = { firstName, lastName, gender, age: computedAge };

    console.log(`${firstName} ${lastName}:`, person);
  });
};
```

> 🔑 Versi paling paripurna: caching `Date` di luar loop, logika validasi diekstrak ke `isValidYear` + `computedAge`, badan objek tetap bersih. JSDoc untuk maintainability.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. `buildProfileMap` — for...of + for...in ⭐ `PALING INTUITIF`

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  for (const profile of profiles) {
    const [firstName, lastName, gender, birthYear] = profile

    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    const fullName = `${firstName} ${lastName}`

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  }

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

> 🔑 Paling mudah dipahami dan di-debug. `for...of` untuk iterasi array, `for...in` untuk iterasi object. Mendukung `break`/`continue`.

---

### 2. `changeMe` — for...of (V1)

```javascript
const changeMe = (peopleData) => {
  if (peopleData.length === 0) {
    console.log('');
    return;
  }

  for (const profile of peopleData) {
    const [firstName, lastName, gender, birthYear] = profile;

    const person = {
      firstName,
      lastName,
      gender,
      age:
        birthYear && birthYear <= new Date().getFullYear()
          ? new Date().getFullYear() - birthYear
          : 'Invalid Birth Year',
    };

    console.log(`${firstName} ${lastName} :`, person);
  }
};
```

> 🔑 Versi pertama — imperatif, destructuring di dalam blok. Mudah dipahami step-by-step. Belum ada caching `new Date()`.

---

### 3. `changeMe` — Refactored Kode Awal (Perbaikan Bug)

```javascript
function changeMe(arr) {
  if (arr.length === 0) {
    console.log('');
    return;
  }

  const currentYear = new Date().getFullYear();

  for (const profile of arr) {
    const [firstName, lastName, gender, year] = profile;
    const fullName = `${firstName} ${lastName}`;

    const age = (year && year <= currentYear)
      ? currentYear - year
      : 'Invalid Birth Year';

    const personObj = { firstName, lastName, gender, age };
    console.log(`${fullName}:`, personObj);
  }
}
```

> 🔑 Versi refactored dari kode awal (pre-mentoring). Menghargai gaya orisinal `for...of` + `function`, tapi memperbaiki 3 bug: early return, objek murni, dan proteksi tahun masa depan.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. `buildProfileMap` — reduce

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()

  const profileMap = profiles.reduce((acc, [firstName, lastName, gender, birthYear]) => {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!acc[fullName]) {
      acc[fullName] = { firstName, lastName, gender, age }
    }

    return acc
  }, {})

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

> 🔑 Mengubah array → object dalam satu ekspresi. **Wajib** `return acc` dan initial value `{}`. Cocok untuk tim yang familiar functional programming.

---

### 2. `buildProfileMap` — Object.entries + forEach

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  for (const [firstName, lastName, gender, birthYear] of profiles) {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  }

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  Object.entries(profileMap).forEach(([fullName, data]) => {
    console.log(`${fullName}:`, data)
  })
}
```

> 🔑 Destructuring langsung di header `for...of` + output via `Object.entries`. Output bisa di-chain dengan `.map()`, `.filter()`, `.sort()`. Lebih aman dari inherited properties.

---

### 3. `changeMe` — forEach (V2)

```javascript
const changeMe = (peopleData) => {
  if (peopleData.length === 0) {
    console.log('');
    return;
  }

  peopleData.forEach(([firstName, lastName, gender, birthYear]) => {
    const person = {
      firstName,
      lastName,
      gender,
      age:
        birthYear && birthYear <= new Date().getFullYear()
          ? new Date().getFullYear() - birthYear
          : 'Invalid Birth Year',
    };

    console.log(`${firstName} ${lastName} :`, person);
  });
};
```

> 🔑 Evolusi dari V1: destructuring langsung di parameter callback. Lebih ringkas 2 baris. Belum ada caching — lihat Best Practice untuk versi final.

---

## ⚠️ GOTCHA CEPAT

### ❌ Objek Palsu vs ✅ Objek Murni

```javascript
// ❌ SALAH — typeof = "string", tidak ada pewarnaan di konsol
const output = `${fullName}: { firstName: ${firstName} }`;
console.log(output);

// ✅ BENAR — typeof = "object", bisa di-inspect di DevTools
const person = { firstName, lastName };
console.log(`${fullName}:`, person);   // ← pisah dengan KOMA, bukan template literal
```

### ❌ Template Literal Object vs ✅ Koma di console.log

```javascript
// ❌ SALAH — [object Object]
console.log(`${fullName}: ${profileMap[fullName]}`);

// ✅ BENAR — object tercetak dengan benar
console.log(`${fullName}:`, profileMap[fullName]);
```

### ❌ Validasi Tahun Lemah vs ✅ Proteksi Masa Depan

```javascript
// ❌ LEMAH — birthYear = 2080 → umur = -54 😱
const age = birthYear ? currentYear - birthYear : 'Invalid';

// ✅ KUAT — proteksi tahun masa depan
const age = (birthYear && birthYear <= currentYear)
  ? currentYear - birthYear
  : 'Invalid Birth Year';
```

### ❌ Lupa return acc di reduce

```javascript
// ❌ SALAH — acc jadi undefined di iterasi berikutnya!
profiles.reduce((acc, [...]) => {
  acc[fullName] = { ... }
}, {})

// ✅ BENAR
profiles.reduce((acc, [...]) => {
  acc[fullName] = { ... }
  return acc          // ← WAJIB!
}, {})
```

### ❌ profileMap di dalam loop vs ✅ di luar loop

```javascript
// ❌ SALAH — di-reset setiap iterasi!
for (const profile of profiles) {
  const profileMap = {}
}

// ✅ BENAR — deklarasi di luar loop
const profileMap = {}
for (const profile of profiles) { ... }
```

### ❌ new Date() di dalam loop vs ✅ Cache di luar

```javascript
// ❌ Boros — membuat Date baru setiap iterasi
peopleData.forEach(([..., birthYear]) => {
  const age = new Date().getFullYear() - birthYear;
});

// ✅ Efisien — cache sekali di luar loop
const currentYear = new Date().getFullYear();
peopleData.forEach(([..., birthYear]) => {
  const age = currentYear - birthYear;
});
```

---

## 📊 QUICK COMPARISON

### Challenge: `buildProfileMap`

| Versi | Loop Build | Loop Output | Break? | Return acc? | Highlight |
|-------|:----------:|:-----------:|:------:|:-----------:|-----------|
| 🔄 **Kode Utama** | `for...of` | `for...in` | ✅ | ❌ | Paling intuitif |
| 🔀 **reduce** | `reduce` | `for...in` | ❌ | ✅ Wajib | Array → Object |
| 🔁 **forEach** ⭐ | `forEach` | `for...in` | ❌ | ❌ | Functional + readable |
| 🔑 **Object.entries** | `for...of` | `Object.entries` | ✅ | ❌ | Output chainable |

### Challenge: `changeMe` (transformDataFormat)

| Versi | Loop | Caching | Validasi Tahun | Pre-compute | Highlight |
|-------|:----:|:-------:|:--------------:|:-----------:|-----------|
| 🔵 **V1 for...of** | `for...of` | ❌ | ✅ `<= currentYear` | ❌ Inline | Fundamental |
| 🟢 **V2 forEach** | `forEach` | ❌ | ✅ `<= currentYear` | ❌ Inline | Lebih ringkas |
| 🏆 **Best Practice** ⭐ | `forEach` | ✅ | ✅ `isValidYear` | ✅ `computedAge` | Production ready |
| 🟡 **Refactored Awal** | `for...of` | ✅ | ✅ `<= currentYear` | ❌ Inline | Perbaikan bug |

---

## 🧪 TEST CASES

### Test `buildProfileMap`

```javascript
// ✅ Test 1: Input normal — ada birthYear dan tidak ada birthYear
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
])

// ✅ Test 2: Input kosong
buildProfileMap([])

// ✅ Test 3: Input duplikat — data pertama dipertahankan
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Christ', 'Evans', 'Male', 1982]
])

// ✅ Test 4: Multiple profiles dengan duplikat di tengah
buildProfileMap([
  ['Tony', 'Stark', 'Male', 1970],
  ['Natasha', 'Romanoff', 'Female', 1984],
  ['Tony', 'Stark', 'Male', 1970]
])
```

### Test `changeMe`

```javascript
// ✅ Test 1: Input normal
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
])

// ✅ Test 2: Input kosong
changeMe([])

// ✅ Test 3: Semua punya birthYear
changeMe([
  ['Tony', 'Stark', 'Male', 1970],
  ['Natasha', 'Romanoff', 'Female', 1984]
])
```
