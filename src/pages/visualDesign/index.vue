<template lang="pug">
.page
  .section
    div.banner-container
      q-img.img(
        :src="imgUrl"
        spinner-color="white"
      )
      .intro01(data-storke="SIGN") SIGN
      .intro02 VISUAL
      .intro03(data-storke="DESIGN") DESIGN
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
//- img
import banner from 'src/assets/fangImg/visualDesign/banner.png';
import banner01 from 'src/assets/fangImg/visualDesign/banner01.png';

export default defineComponent({
  setup() {
    const { width } = useWindowSize();

    const imgUrl = ref();
    watch(
      () => width.value,
      (val: number) => {
        console.log(val);
        if (val > 600) imgUrl.value = banner;
        else if (val <= 600) imgUrl.value = banner01;
      },
      { immediate: true }
    );
    return { imgUrl };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner-container {
  position: relative;
  .img {
    width: 100%;
    position: relative;
    margin-top: 7vw;
    @include rwd.large {
      max-width: 1440px;
      margin-top: 135px;
      border-radius: 120px;
    }
    @include rwd.medium {
      width: calc(100vw * (1440 / 1920));
    }
  }
  .intro01 {
    color: #fff;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 6px;
    position: absolute;
    top: 45px;
    left: -30px;
    z-index: 2;
    &::before {
      content: attr(data-storke);
      position: absolute;
      z-index: -1;
      -webkit-text-stroke: 2px #a3a3a3;
      text-stroke: 2px #a3a3a3;
    }
    @include rwd.large {
      font-size: 130px;
    }
    @include rwd.medium {
      top: calc(55px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(170px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
  .intro02 {
    color: #7d7d7d;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 6px;
    position: absolute;
    top: 45px;
    left: 330px;
    z-index: 2;
    @include rwd.large {
      font-size: 130px;
    }
    @include rwd.medium {
      top: calc(55px * (100vw * (1440 / 1920) / 1920px));
      left: calc(435px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(170px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
  .intro03 {
    color: #fff;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 6px;
    position: absolute;
    top: 45px;
    left: 840px;
    z-index: 2;
    &::before {
      content: attr(data-storke);
      position: absolute;
      z-index: -1;
      -webkit-text-stroke: 2px #a3a3a3;
      text-stroke: 2px #a3a3a3;
    }
    @include rwd.large {
      font-size: 130px;
    }
    @include rwd.medium {
      top: calc(55px * (100vw * (1440 / 1920) / 1920px));
      left: calc(1140px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(170px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
}
</style>
