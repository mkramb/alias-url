import { createStore } from 'vuex';
import { AliasItems, getAliases, createAlias } from '../services';

export type ApplicationState = {
  aliases: AliasItems;
  errors: string[];
};

export const store = createStore<ApplicationState>({
  state() {
    return {
      aliases: [],
      errors: [],
    };
  },
  mutations: {
    updateAliases(state, aliases) {
      state.aliases = aliases;
    },

    setError(state, errors = []) {
      state.errors = errors;
    },
  },
  actions: {
    async loadAliases(context) {
      context.commit('updateAliases', await getAliases());
    },
    async newAlias(context, url) {
      try {
        await createAlias(url);
        context.commit('setError');
        context.dispatch('loadAliases');
      } catch (error) {
        context.commit('setError', error);
      }
    },
  },
});
