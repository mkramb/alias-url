import { createApp } from 'vue';

import Container from './components/container';
import { store } from './store';
import './app.css';

createApp(Container).use(store).mount('#app');
