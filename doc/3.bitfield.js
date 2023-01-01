// 在React进行DOM DIFF的时候会计算要执行的操作
// 位运算增加删除操作应该容易些,不然就得写if else

// 定义常量
const Placement = 0b001; //1
const Update = 0b010; //2

// 定义操作
let flags = 0b00;
// 按位或: 两个操作数对应的每一个比特位都为 0 时，结果为 0，否则为 1
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR

// 增加操作
// 测试增加操作时注释掉下面更新操作的代码
flags |= Placement;
// 更新操作
// 测试更新操作时注释掉上面增加操作的代码
flags |= Update;
console.log(flags.toString(2));
console.log(flags);

// 删除操作
// 按位非（~）相当于取反码
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// 按位与（&）两个操作数对应的每一个比特位都为 1 时，结果为 1，否则为 0
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
// 0b011 & 0b110 => 0b010
// 测试时注释掉上面增加操作&更新操作的代码
// 下面代码表示不是新增操作，位运算方便计算
flags = flags & ~Placement;
console.log(flags.toString(2));
console.log(flags);

/**
 *
 *  为了方便比较, 以下演示代码中的注释, 都写成了 8 位二进制数(上文已经说明, 事实上在 js 中, 位运算最终的结果都是 Int32).
 *
 *  枚举属性:
 *  通过位移的方式, 定义一些枚举常量
 *  const A = 1 << 0; // 0b00000001
 *  const B = 1 << 1; // 0b00000010
 *  const C = 1 << 2; // 0b00000100
 *
 *  位掩码:
 *  通过位移定义的一组枚举常量, 可以利用位掩码的特性, 快速操作这些枚举产量(增加, 删除, 比较).
 *  属性增加|
 *  ABC = A | B | C
 *
 *  属性删除& ~
 *  AB = ABC & ~C
 *
 *  属性比较
 *  AB 当中包含 B: AB & B === B
 *  AB 当中不包含 C: AB & C === 0
 *  A 和 B 相等: A === B
 *
 *  增加属性
 *  const ABC = A | B | C; // 0b00000111
 *  删除属性
 *  const AB = ABC & ~C; // 0b00000011
 *
 *  属性比较
 *  1. AB当中包含B
 *  console.log((AB & B) === B); // true
 *  2. AB当中不包含C
 *  console.log((AB & C) === 0); // true
 *  3. A和B相等
 *  console.log(A === B); // false
 */
// 判断是否包含
console.log((flags & Placement) === Placement);
console.log((flags & Update) === Update);

//判断不包含，说明该操作最后一位不是1
console.log((flags & Placement) === 0);
console.log((flags & Update) === 0);
