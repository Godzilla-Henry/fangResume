<template lang="pug">
.page
  .section
    div.banner-container
      q-img.img(
        :src="imgUrl"
        spinner-color="#6D6D6D"
      )
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
//- img
import banner01 from 'src/assets/fangImg/uiux/banner01.png';
import banner02 from 'src/assets/fangImg/uiux/banner02.png';

export default defineComponent({
  setup() {
    const { width } = useWindowSize();

    const imgUrl = ref();

    const reBannerSource = (val: number) => {
      if (val > 600) imgUrl.value = banner01;
      else if (val <= 600) imgUrl.value = banner02;
    };
    reBannerSource(width.value);
    watch(
      () => width.value,
      (val: number) => reBannerSource(val)
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
}
</style>
