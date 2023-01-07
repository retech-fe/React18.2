//树的遍历有深度和广度遍历
let root = {
  name: 'A1',
  children: [
    {
      name: 'B',
      children: [{ name: 'B1' }, { name: 'B2' }],
    },
    {
      name: 'C',
      children: [{ name: 'C1' }, { name: 'C2' }],
    },
  ],
};

// 深度遍历
function dfs(node) {
  console.log(node.name);
  node.children?.forEach(dfs);
}
dfs(root);

// 广度遍历

function bfs(node) {
  const stack = [];
  stack.push(node);
  let current;
  while ((current = stack.shift())) {
    console.log(current.name);
    current.children?.forEach((child) => {
      stack.push(child);
    });
  }
}
bfs(root);
