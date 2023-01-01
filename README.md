# 手撕react18.2源码

## 1.搭建开发环境

```shell
mkdir react-v18.2
cd react-v18.2
pnpm init -y

```

## 1.2 安装

新建`.npmrc`文件指定`npm`为`taobao`源

```shell
registry=https://registry.npmmirror.com
```

安装vite和react的vite插件

```shell
npm install vite @vitejs/plugin-react --save-dev
```


## 1.3 启动

新建html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```js
{
  "scripts": {
    "dev": "vite"
  }
}
```
启动命令

```shell
npm run dev
```
