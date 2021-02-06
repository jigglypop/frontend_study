// const callMap = fn => b => b.map(fn)
const callMap = <T, U>( fn: (T) => U ) => <T extends { map( fn ) }>( b: T ) => b.map( fn )
console.log(callMap( a => a + 1 )([1, 2]))
// console.log(callMap( a => a + 1 )(1))
