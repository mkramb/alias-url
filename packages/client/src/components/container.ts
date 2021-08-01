import { defineComponent } from 'vue';

import { AliasList } from './listing';
import { AliasForm } from './form';
import classes from './container.module.css';

export default defineComponent({
  name: 'container',
  components: {
    'alias-list': AliasList,
    'alias-form': AliasForm,
  },
  template: `
    <div class="${classes.container}">
      <h1>URL shortening</h1>
      <alias-form />
      <alias-list />
    </div>
  `,
});
