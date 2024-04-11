<template lang="pug">
.page
  .section
    div.banner-container
      q-img.img(
        :src="imgUrl"
        spinner-color="white"
      )
        .intro.bg-transparent Hi , I'm Fang,
      .intro01 I enjoys designing 
      .intro02 and creating a simple
      .intro03 ideas for humans
      .intro04 , friendly interface.
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
//- img
import introduce01 from 'src/assets/fangImg/uiux/introduce01.png';
import introduce02 from 'src/assets/fangImg/uiux/introduce02.png';
import introduce03 from 'src/assets/fangImg/uiux/introduce03.png';

export default defineComponent({
  setup() {
    const { width } = useWindowSize();

    const imgUrl = ref();
    watch(
      () => width.value,
      (val: number) => {
        if (val > 1920) imgUrl.value = introduce01;
        else if (val > 600 && val <= 1920) imgUrl.value = introduce02;
        else if (val <= 600) imgUrl.value = introduce03;
      },
      { immediate: true }
    );

    return {
      imgUrl,
    };
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
    }
    @include rwd.medium {
      width: calc(100vw * (1440 / 1920));
    }
  }
  .intro {
    color: #f9f9f9;
    font-weight: 700;
    position: absolute;
    top: 80px;
    left: 220px;
    @include rwd.large {
      font-size: 50px;
    }
    @include rwd.medium {
      top: calc(100px * (100vw * (1440 / 1920) / 1920px));
      left: calc(230px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(70px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
  .intro01 {
    color: #fff;
    font-weight: 500;
    position: absolute;
    bottom: 200px;
    left: 1120px;
    @include rwd.large {
      font-size: 35px;
    }
    @include rwd.medium {
      bottom: calc(290px * (100vw * (1440 / 1920) / 1920px));
      left: calc(1510px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(45px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
  .intro02 {
    color: #fff;
    font-weight: 500;
    position: absolute;
    bottom: 130px;
    left: 1030px;
    @include rwd.large {
      font-size: 35px;
    }
    @include rwd.medium {
      bottom: calc(190px * (100vw * (1440 / 1920) / 1920px));
      left: calc(1390px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(45px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
  .intro03 {
    color: #989898;
    font-weight: 400;
    position: absolute;
    bottom: 200px;
    left: 1425px;
    @include rwd.large {
      font-size: 35px;
    }
    @include rwd.medium {
      bottom: calc(290px * (100vw * (1440 / 1920) / 1920px));
      left: calc(1900px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(45px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
  .intro04 {
    color: #989898;
    font-weight: 400;
    position: absolute;
    bottom: 130px;
    left: 1380px;
    @include rwd.large {
      font-size: 35px;
    }
    @include rwd.medium {
      bottom: calc(190px * (100vw * (1440 / 1920) / 1920px));
      left: calc(1842px * (100vw * (1440 / 1920) / 1920px));
      font-size: calc(45px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      display: none;
    }
  }
}
</style>
