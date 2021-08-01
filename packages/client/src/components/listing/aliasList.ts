import { defineComponent } from 'vue';

import { AliasListItem } from './aliasListItem';

export const AliasList = defineComponent({
  name: 'alias-list',
  components: {
    'alias-list-item': AliasListItem,
  },
  template: `
    <div v-for="item in $store.state.aliases" :key="item.alias">
      <alias-list-item v-bind:data="item" />
    </div>
    <div v-if='$store.state.aliases.length === 0'>
      No urls available. Why not create one?
    </div>
  `,
  async created() {
    this.$store.dispatch('loadAliases');
  },
});
