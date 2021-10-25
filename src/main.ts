import { createApp } from 'vue';
import App from './App.vue';

// primevue components
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

// stylesheets
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)

app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);

app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Toast', Toast);

app.mount('#app');
