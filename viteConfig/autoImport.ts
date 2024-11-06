import { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default (plugins: Plugin[]) => {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dirs: ['src/composables/**/*', 'src/store/**/*'],
      dts: 'typeDeclaration/autoImport.d.ts',
      vueTemplate: true,
      defaultExportByFilename: true
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      extensions: ['vue', 'tsx'],
      dirs: ['src/components', 'src/layout', 'src/views'],
      //同名组件时以文件为前缀，用于区分组件
      directoryAsNamespace: true,
      dts: 'typeDeclaration/components.d.ts'
    })
  )
}
