<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header.headerBar
    q-toolbar.text-black.fit
      .q-ml-lg.row.items-center
        img.logo(:src="logo")
      
      q-space
      q-tabs.headerBarTabs.q-mr-xl(
        v-model="curTab"
        shrink no-caps
      )
        q-tab.tabItem(name="uiux" @click="gotoPage('uiux')") UI/UX
        q-tab.tabItem(name="visualDesign" @click="gotoPage('visualDesign')") Visual Design
        q-tab.tabItem(name="afterHour" @click="gotoPage('afterHour')") After Hour
        q-tab.tabItem(name="about" @click="gotoPage('about')") About
  q-page-container
    router-view
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import logo from 'src/assets/img/headerBarLogo.png';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const router = useRouter();
    const curTab = ref<string>('uiux');

    const gotoPage = (val: string) => {
      curTab.value = val;
      router.push({ path: '/' + val });
    };
    return {
      logo,
      curTab,
      gotoPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.headerBar {
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  //- shadow: x, y, blur, color
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  height: 65px;
  .logo {
    height: 47px;
  }
  .headerBarTabs {
    color: #515151;
    .tabItem {
      font-size: 15px;
      font-weight: 400;
    }
  }
}
</style>
