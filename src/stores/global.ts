import { defineStore } from 'pinia';

/** Config State */
interface IConfigState {
  scrolling: boolean;
}

export default defineStore('global', {
  state: (): IConfigState => ({
    scrolling: false,
  }),
  getters: {
    getScrolling: (state): boolean => state.scrolling,
  },
  actions: {
    act_setScrolling(val: boolean) {
      this.scrolling = val;
    },
  },
});
