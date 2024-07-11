import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {VueQueryPlugin, VueQueryPluginOptions} from '@tanstack/vue-query';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  },
};

app.use(pinia);
app.use(VueQueryPlugin, vueQueryPluginOptions);
app.mount('#app');