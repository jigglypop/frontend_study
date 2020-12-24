import {RangeIterable} from './RangeIterable'
const iterable = new RangeIterable(1,4)
for (let value of iterable){
    console.log(value)
}