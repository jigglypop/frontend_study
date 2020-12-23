interface Person {
    name: string;
    age: number;
    language: string;
}
type T1 = Pick<Person, "name" | "language">;
// type Pick<T, K extends keyof T> = { [P in K]: T[P] };
