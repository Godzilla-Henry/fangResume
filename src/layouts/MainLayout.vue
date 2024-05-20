<template lang="pug">
q-layout(view="lHh Lpr lff")
  q-header.headerBar
    q-toolbar.fit.text-black.page
      .fit.section.content-padding
        .fit.row.items-center.justify-between
          img.logo(:src="logo")
          q-tabs.headerBarTabs(
            v-model="curTab"
            shrink no-caps
          )
            q-tab.tabItem(name="uiux" @click="gotoPage('uiux')") UI/UX
            q-tab.tabItem(name="visualDesign" @click="gotoPage('visualDesign')") Work
            q-tab.tabItem(name="afterHour" @click="gotoPage('afterHour')") After Hour
            q-tab.tabItem(name="about" @click="gotoPage('about')") About
          q-btn.headerMobileMenu(icon="fa fa-bars" flat @click="openMenu = !openMenu")
  q-page-container
    .wrapper(:class="{'active': openMenu}")
      .wrapper_header.row.items-center.justify-between
        img(:src="logo" height="47px")
        q-btn(icon="fa fa-xmark" flat @click="openMenu = !openMenu")
      .wrapper_content
        .menu_item(@click="gotoPage('uiux')") UI/UX
        .menu_item(@click="gotoPage('visualDesign')") Work
        .menu_item(@click="gotoPage('afterHour')") After Hour
        .menu_item(@click="gotoPage('about')") About

    router-view
  .page
    .section.footerBar.content-padding
      .fit
        .footer-line
        .footer-title Thanks for stopping by !
        .copy-right.text-center   
          .copy-right-title Design - Fang｜Build - Henry
          .copy-right-subtitle  © 2024 
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import logo from 'src/assets/img/headerBarLogo.png';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const curTab = ref('uiux') as any;
    const openMenu = ref<boolean>(false);

    const gotoPage = (val: string) => {
      curTab.value = val;
      openMenu.value = false;
      router.push({ path: '/' + val });
    };
    console.log(route.name);

    onMounted(() => {
      curTab.value = route.name;
    });
    return {
      logo,
      curTab,
      openMenu,
      gotoPage,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.headerBar {
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  //- shadow: x, y, blur, color
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  height: 81px;
  .logo {
    height: 47px;
  }
  .headerBarTabs {
    color: #515151;
    .tabItem {
      color: #515151;
      font-size: 16px;
      font-weight: 400;
    }
    @include rwd.small {
      display: none;
    }
  }
  .headerMobileMenu {
    display: none;
    @include rwd.small {
      display: block;
    }
  }
}
.footerBar {
  background-color: transparent;
  .footer-line {
    width: 100%;
    height: 0px;
    border-top: 1px solid #a1a1a1;
  }
  .footer-title {
    color: #3c3c3c;
    font-family: 'Yeseva One';
    font-size: 26px;
    font-weight: 800;
    margin: 20px 0 30px 0;
  }
  .copy-right {
    width: 100%;
    color: #323232;
    font-family: 'Yeseva One';
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}
.wrapper {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: -100%;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  transition: all 0.6s ease-in-out;
  &.active {
    right: 0;
    .wrapper_header {
      opacity: 1;
      transform: none;
      transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1);
      transition-delay: 0.6s;
      transform: translateX(0px);
    }
    .wrapper_content {
      .menu_item {
        opacity: 1;
        transform: none;
        transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1);
        transition-delay: 0.6s;
        transform: translateX(0px);
      }
    }
  }
  .wrapper_header {
    height: 72px;
    padding: 0px 30px;
    opacity: 0;
    transition: all 0.6s ease;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100%);
  }
  .wrapper_content {
    height: calc(100% - 72px);
    width: 100%;
    display: flex;
    gap: 70px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .menu_item {
      font-size: 32px;
      font-weight: 300;
      padding: 5px;
      opacity: 0;
      transition: all 0.6s ease;
      transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translateX(1000%);

      &:hover {
        border-bottom: 2px solid #515151;
      }
    }
  }
}
</style>
