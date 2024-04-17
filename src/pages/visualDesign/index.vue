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
import { defineComponent, ref } from 'vue';
//- img
import banner01 from 'src/assets/fangImg/visualDesign/banner01.png';

export default defineComponent({
  setup() {
    const imgUrl = ref(banner01);

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
    position: absolute;
    margin-top: 7vw;
    @include rwd.large {
      max-width: 1440px;
      left: -210px;
      margin-top: 135px;
    }
    @include rwd.medium {
      width: calc(100vw * (1440 / 1920));
      left: calc(100vw * (-210 / 1920));
    }
  }
}
</style>
