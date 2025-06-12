import PrimeVue from 'primevue/config'
import type { App } from 'vue'
import Aura from '@primeuix/themes/aura' // Import the Aura theme

export default function setupPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
}
