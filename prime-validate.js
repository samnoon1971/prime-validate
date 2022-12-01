
function prime_validate(n) {
   for(let d=2; d * d <= n; d++) {
       if(n % d === 0) return false;
   }
   return true;
}

module.exports = prime_validate
