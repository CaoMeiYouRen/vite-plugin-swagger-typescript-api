<h1 align="center">vite-plugin-swagger-typescript-api </h1>
<p>
  <a href="https://www.npmjs.com/package/vite-plugin-swagger-typescript-api" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/vite-plugin-swagger-typescript-api.svg">
  </a>
  <a href="https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api/actions?query=workflow%3ARelease" target="_blank">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/CaoMeiYouRen/vite-plugin-swagger-typescript-api/release.yml?branch=master">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D12-blue.svg" />
  <a href="https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


> 基于 swagger-typescript-api 的 vite 插件，自动化生成 API 接口

### 🏠 [主页](https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api#readme)

[https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api#readme](https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api#readme)


### ✨ [Demo](https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api#readme)

[https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api#readme](https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api#readme)


## 依赖要求


- node >=12
- swagger-typescript-api >= 9
- vite >=2 

## 安装

```sh
# 本插件依赖 swagger-typescript-api、vite ，故需要先安装
npm i -D swagger-typescript-api vite

npm i -D vite-plugin-swagger-typescript-api
```

## 使用

```ts
// 在 vite.config.ts 文件中添加如下配置
import { defineConfig } from 'vite'
import { vitePluginSwaggerTypescriptApi } from 'vite-plugin-swagger-typescript-api'


// vite 相关配置请参考 https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vitePluginSwaggerTypescriptApi({ // swagger-typescript-api 的配置，具体可参考 https://github.com/acacode/swagger-typescript-api
            name: 'myApi.ts', //要生成的文件名称
            output: path.resolve('./src/apis'), // 生成的文件所在的文件夹，注意要使用 path.resolve 解析出绝对路径，否则路径可能会有错误
            input: path.resolve('./swagger.json'), // 从本地文件载入，路径问题同 output
            url: "http://api.com/swagger.json", // 如果从远程接口载入
            httpClientType: 'axios', // or "fetch" 生成的接口类型
        })
    ]
})
```

在执行 `vite` 命令后可在 `src\apis\myApi.ts` 路径看到生成的文件，每次启动开发环境时会去生成 api 文件，生产环境（编译时）不会调用。

## 开发

```sh
npm run dev
```

## 编译

```sh
npm run build
```

## Lint

```sh
npm run lint
```

## Commit

```sh
npm run commit
```


## 作者


👤 **CaoMeiYouRen**

* Website: [https://blog.cmyr.ltd/](https://blog.cmyr.ltd/)
* GitHub: [@CaoMeiYouRen](https://github.com/CaoMeiYouRen)


## 🤝贡献

欢迎 贡献、提问或提出新功能！<br />如有问题请查看 [issues page](https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api/issues). <br/>贡献或提出新功能可以查看[contributing guide](https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api/blob/master/CONTRIBUTING.md).

## 💰支持

如果觉得这个项目有用的话请给一颗⭐️，非常感谢

## 📝 License

Copyright © 2022 [CaoMeiYouRen](https://github.com/CaoMeiYouRen).<br />
This project is [MIT](https://github.com/CaoMeiYouRen/vite-plugin-swagger-typescript-api/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [cmyr-template-cli](https://github.com/CaoMeiYouRen/cmyr-template-cli)_
