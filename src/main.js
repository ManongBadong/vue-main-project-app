import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import router from './router.js';
import App from './app.vue';
import store from './store/index.js';

// UI
import BaseDialog from './components/ui/BaseDialog.vue';
import ButtonCard from './components/ui/ButtonCard.vue';
import SectionCard from './components/ui/SectionCard.vue';
import TheLoader from './components/ui/TheLoader.vue';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(store);
app.use(router);

app.component('base-dialog', BaseDialog);
app.component('button-card', ButtonCard);
app.component('section-card', SectionCard);
app.component('the-loader', TheLoader);

app.mount('#app');
