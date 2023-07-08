function primeX(number: number): number {
   let primes: number[] = [];
   let currentNumber = 2;

   while (primes.length < number) {
      if (isPrime(currentNumber)) {
         primes.push(currentNumber);
      }
      currentNumber++;
   }

   return primes.pop() || 0;
}

function isPrime(number: number): boolean {
   if (number < 2) {
      return false;
   }

   for (let i = 2; i < number; i++) {
      if (number % i === 0) {
         return false;
      }
   }

   return true;
}


console.log(primeX(1));  // 2
console.log(primeX(5));  // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71
