//在React进行DOM DIFF的时候会计算要执行的操作
//位运算增加删除操作应该容易些,不然就得写if else

const Placement = 0b001; //1
const Update = 0b010; //2

let flags = 0b00;
// 按位或:一个或两个操作数对应的二进制位为 1 时，该位的结果值为 1
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
//增加操作
flags |= Placement;
//更新操作
flags |= Update;
console.log(flags.toString(2));
console.log(flags);

// 按位非（~）相当于取反码
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
//0b011 & 0b110 => 0b010
flags = flags & ~Placement;

console.log(flags.toString(2));
console.log(flags);

//判断是否包含
console.log((flags & Placement) === Placement);
console.log((flags & Update) === Update);
//判断不包含
console.log((flags & Placement) === 0);
console.log((flags & Update) === 0);
