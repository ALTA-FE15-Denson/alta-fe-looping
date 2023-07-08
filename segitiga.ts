function isPrimes(number: number): boolean {
   if (number < 2) {
      return false;
   }

   for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
         return false;
      }
   }

   return true;
}

function getNextPrime(number: number): number {
   let nextNumber = number + 1;
   while (!isPrimes(nextNumber)) {
      nextNumber++;
   }
   return nextNumber;
}

function primaSegiEmpat(wide: number, high: number, start: number): void {
   let totalPrimes = 0;
   let currentNumber = isPrimes(start) ? start : getNextPrime(start - 1);

   for (let i = 0; i < high; i++) {
      let row = '';
      for (let j = 0; j < wide; j++) {
         currentNumber = getNextPrime(currentNumber);
         totalPrimes += currentNumber;
         row += currentNumber + ' ';
      }
      console.log(row);
   }

   console.log('Total bilangan prima:', totalPrimes);
}

primaSegiEmpat(2, 3, 13)
/*
17 19
23 29
31 37
156
*/
primaSegiEmpat(5, 2, 13)
/*
2 3 5 7 11
13 17 19 23 29
129
*/
