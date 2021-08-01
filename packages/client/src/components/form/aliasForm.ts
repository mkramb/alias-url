import { defineComponent } from 'vue';

import classes from './aliasForm.module.css';

export const AliasForm = defineComponent({
  name: 'alias-form',
  template: `
    <div class="${classes.form}">
      <div class="${classes.input}" v-bind:class="{
        '${classes.invalid}': $store.state.errors.length > 0
      }">
        <label for="url">url: </label>
        <input v-model="url" v-on:keyup.enter='onCreate' name="url" />
      </div>
      <button v-on:click='onCreate'>Add new Alias</button>
    </div>
  `,
  data: () => ({
    url: '' as string,
  }),
  methods: {
    onCreate() {
      this.$store.dispatch('newAlias', this.url);
      this.url = '';
    },
  },
});
