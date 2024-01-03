<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header.headerBar
    q-toolbar.bg-white.text-black
      q-avatar.q-ml-lg
        img(src="src/assets/img/headerBarLogo.png")
      
      q-space
      q-tabs.headerBarTabs.q-mr-lg(shrink no-caps)
        q-tab.tabItem(name="uiux") UI/UX
        q-tab.tabItem(name="visualDesign") Visual Design
        q-tab.tabItem(name="afterHour") After Hour
        q-tab.tabItem(name="about") About
  q-page-container
    router-view
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.headerBar {
  //- shadow: x, y, blur, color
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  .headerBarTabs {
    color: #515151;
    .tabItem {
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
