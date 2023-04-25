import { createApp } from "vue"
import PrimeVue from "primevue/config"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import { createI18n } from "vue-i18n"

import PrimeVueConifg from "./utils/PrimeVueConifg"
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "/node_modules/primeflex/primeflex.css"

import "./assets/style/main.scss"

import messages from "./i18n/messages"
const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  messages,
})

const app = createApp(App)

PrimeVueConifg.init(app)

app.use(router)
app.use(PrimeVue)
app.use(i18n)

app.mount("#app")
