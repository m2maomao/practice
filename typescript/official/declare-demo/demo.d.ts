declare const name = "Michael911";
declare function getName(): string;
declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
declare let Directions: {
    Up: number;
    Down: number;
    Left: number;
    Right: number;
};
declare let Options: {
    data: any;
};
declare let foo: {
    name: string;
    bar: {
        baz: (n: string) => string;
    };
};
export { name, getName, Animal, Directions, Options, foo };
