<template lang="pug">
q-page.page
  section_01    
  .banner01(:class="{'custom-parallax': y>175}")
  section_02
  section_03
  section_04
  section_05
  section_06
  section_07
  section_08
  .question
    .title HWM (How might we)
    .subtitle 我們如何幫助使用者快速找到適合的課程，並且能夠快速瀏覽已購買的課程及上課進度？
  section_09
  section_10
  section_11
  section_12
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from 'vue';
//- Image
import banner01 from 'src/assets/img/open_banner_01.png';
//- Utils
import { useWindowScroll } from '@vueuse/core';
//- Sections
import section_01 from './sections/section_01.vue';
import section_02 from './sections/section_02.vue';
import section_03 from './sections/section_03.vue';
import section_04 from './sections/section_04.vue';
import section_05 from './sections/section_05.vue';
import section_06 from './sections/section_06.vue';
import section_07 from './sections/section_07.vue';
import section_08 from './sections/section_08.vue';
import section_09 from './sections/section_09.vue';
import section_10 from './sections/section_10.vue';
import section_11 from './sections/section_11.vue';
import section_12 from './sections/section_12.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    section_01,
    section_02,
    section_03,
    section_04,
    section_05,
    section_06,
    section_07,
    section_08,
    section_09,
    section_10,
    section_11,
    section_12,
  },
  setup() {
    const { y } = useWindowScroll();

    return {
      y,
      banner01,
    };
  },
});
</script>

<style lang="scss" scoped>
// $
@use 'src/assets/css/rwd.scss' as rwd;
.banner01 {
  background-image: url('src/assets/img/open_banner_01.png');
  /* Full height */
  height: calc(100vw * (790 / 1440));
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
}
.custom-parallax {
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center 65px;
}
.question {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 262px;
  background: #f9f9f9;
  .title {
    color: #101010;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .subtitle {
    color: #475467;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
