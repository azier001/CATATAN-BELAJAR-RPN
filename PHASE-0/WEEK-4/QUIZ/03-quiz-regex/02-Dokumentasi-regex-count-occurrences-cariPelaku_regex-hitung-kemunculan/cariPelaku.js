/*
Diberikan sebuah function cariPelaku(kalimat) 
yang menerima satu parameter berupa string. 
Function akan me-return jumlah berapa kali ditemukan kata "abc" 
secara berturut-turut di dalam kalimat tersebut. 
Gunakan regex untuk melatih kemampuan regex.
*/

// versi satu
// function cariPelaku(str) {
//   const regex = /abc/g;
//   const matches = str.match(regex);

//   if (matches) {
//     return matches.length;
//   } else {
//     return 0;
//   }
// }

// versi dua
function cariPelaku(str) {
  const regex = /abc/g;
  const matches = str.match(regex);

  return matches ? matches.length : 0;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
