export const sum = (...numbers:number[]):number => numbers.reduce((result:number, sum:number)=>result + sum, 0)
console.log(sum(1,2,3))
