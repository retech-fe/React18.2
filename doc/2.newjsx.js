const babel = require('@babel/core');
const sourceCode = `
<h1>
  hello<span style={{ color: 'red' }}>world</span>
</h1>
`;
const result = babel.transform(sourceCode, {
  plugins: [
    // React18，babel转换的会自动导入创建元素的方法并且依赖React， 不需要手动在每个react文件顶部导入依赖的React包
    ["@babel/plugin-transform-react-jsx", { runtime: 'automatic' }]
  ]
});
console.log(result.code);

// react/jsx-runtime 和 react/jsx-dev-runtime 中的函数只能由编译器转换使用。如果你需要在代码中手动创建元素，你可以继续使用 React.createElement
var { jsx } = require("react/jsx-runtime");
// var { jsxDEV } = require("react/jsx-dev-runtime");

// jsx或者jsxDEV会自动导入依赖的React
jsx("h1", {
  children: ["hello", jsx("span", {
    style: {
      color: 'red'
    },
    children: "world"
  })]
});
//React.createElement=jsx