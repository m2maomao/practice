declare function myLib(a:string):string;
declare function myLib(a:number):number;

interface myLib {
  name:string;
  length:number;
  extra?:string[]
}

declare namespace myLib {
  let timeout: number;
  const version: string;

  class Cat {
    constructor(n:number);
    readonly age: number;
    purr():void
  }

  interface CatSettings {
    weight: number;
    name: string;
    tailLength?:number;
  }

  type VetID = string | number;
  function checkCat(c:Cat,s?:VetID);
}