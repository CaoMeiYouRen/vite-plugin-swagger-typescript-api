import { PluginOption } from 'vite'
import { generateApi, GenerateApiParams } from 'swagger-typescript-api'

export type GenerateApiOption = Omit<GenerateApiParams, 'url' | 'spec'> | Omit<GenerateApiParams, 'input' | 'spec'> | Omit<GenerateApiParams, 'input' | 'url'>

function vitePluginSwaggerTypescriptApi(option: GenerateApiOption): PluginOption {
    if (!option) {
        return false
    }
    return {
        name: 'vite-plugin-swagger-typescript-api',
        enforce: 'pre', // 前置调用
        apply: 'serve', // 仅在开发环境调用
        buildStart() {
            generateApi(option as GenerateApiParams)
                .catch((error) => {
                    console.error(error)
                })
        },
    }
}

export { vitePluginSwaggerTypescriptApi }
export default vitePluginSwaggerTypescriptApi
