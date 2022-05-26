import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

createInertiaApp({
  resolve: name => require(`./views/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      vuetify,
      render: h => h(App, props),
    }).$mount(el)
  },
})
