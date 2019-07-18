export const name: string;
export function getName(): string;
export class Animal {
  constructor(name: string);
  sayHi(): string;
}
export enum Directions {
  Up,
  Down,
  Left,
  Right
}
interface Options {
  data: any;
}