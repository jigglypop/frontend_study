interface Person {
    name: string;
    age: number;
    language: string;
}
type T1 = Pick<Person, "name" | "language">;
// type Pick<T, K extends keyof T> = { [P in K]: T[P] };
export const createRequestActonTypes = (type : string )=>{
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`
    return [type, SUCCESS, FAILURE]
}

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActonTypes('auth/REGISTER')
console.log(REGISTER)
console.log(REGISTER_SUCCESS)
console.log(REGISTER_FAILURE)