interface Obj6 {
    a: string;
    b: number;
    c: boolean;
}

/**
 * 同态，只会作用于Object属性，而不会引入新的属性
 */ 
// 只读
type ReadonlyObj = Readonly<Obj6>
// 可选
type PartialObj = Partial<Obj6>
// 选取
type PickObj = Pick<Obj, 'a' | 'b'>

/**
 * 非同态类型
 * */ 
// 创建新的属性,属性的类型是已知的类型
type RecordObj = Record<'x' | 'y', Obj6>