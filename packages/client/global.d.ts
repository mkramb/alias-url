/// <reference types="vite/client" />

import { Store } from 'vuex';
import { ApplicationState } from './src/store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<ApplicationState>;
  }
}
