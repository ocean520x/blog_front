import { App } from "vue";
import { runElementPlus } from "./elementPlus";
import { runTailwindCSS } from "./tailwindcss";
import { runPinia } from "./pinia";

export default function runAllPlugins(app: App) {
  runTailwindCSS()
  runElementPlus()
  runPinia(app)
}
