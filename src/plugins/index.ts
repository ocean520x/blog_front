import { App } from 'vue';
import { runElementPlus } from './elementPlus';
import { runTailwindCSS } from './tailwindcss';
import { runPinia } from './pinia';
import { runIcon } from './icon';
import { runDayjs } from '@/plugins/dayjs';

export default function runAllPlugins(app: App) {
  runTailwindCSS();
  runElementPlus();
  runPinia(app);
  runIcon(app);
  runDayjs();
}
