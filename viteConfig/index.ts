import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import autoImport from './autoImport';
export default function runViteAllPlugins() {
  const plugins: Plugin[] = [vue()];
  autoImport(plugins)
  return plugins
}
