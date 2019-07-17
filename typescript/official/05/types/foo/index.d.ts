// types/foo/index.d.ts

declare namespace foo {
    const name: string;
    function getName(): string;
    class Animal {
        constructor(name: string);
        sayHi(): string;
    }
    enum Directions {
        Up,
        Down,
        Left,
        Right
    }
    interface Options {
        data: any;
    }
}


export { foo };