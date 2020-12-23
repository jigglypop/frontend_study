interface Person {
    name: string;
    age: number;
}
type T2 = Record<'p1' | 'p2', Person>;
// type Record<K extends string, T> = { [P in K] : T};
// type t1 = { p1: Person; p2: Person; }