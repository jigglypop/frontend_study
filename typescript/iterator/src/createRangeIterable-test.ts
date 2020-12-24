import { createRangeIterable } from './createRangeIterable'
const iterator = createRangeIterable(1,3+1)
while (true){
    const {value, done} = iterator.next()
    console.log(value, done)
    if(done) break
}