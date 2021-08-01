import { defineComponent } from 'vue';

import { getRedirectUrl } from '../../services';
import classes from './aliasListItem.module.css';

export const AliasListItem = defineComponent({
  name: 'alias-list-item',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div class="${classes.aliasListItem}">
      <a v-bind:href="aliasUrl" target="_blank">{{ data.alias }}</a>
      <p>{{ data.original_url }}</p>
    </div>
  `,
  data: () => ({
    aliasUrl: '' as string,
  }),
  async created() {
    const path = getRedirectUrl();
    this.aliasUrl = `${path}/${this.$props.data.alias}`;
  },
});
