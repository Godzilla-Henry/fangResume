<template lang="pug">
.page
  .section.content-padding
    .title 個人形象識別LOGO設計
    .subtitle logo identity design
  .section.content-padding
    .banner(:style="{'background-position-y': 'calc(50% - ' + y * 0.2 + 'px' + ')'}")
  .section.content-padding.table(style="margin-top: 64px;")
    .table-label Project details
    .table-content
      table
        thead
          tr 
            th Duration 
            th Tool 
        tbody
          tr 
            td(valign="top") 30 Dec 2022 (1 mouth)
            td 
              p Illustration 
              p Figma
  .section.content-padding.last-section(style="margin-top: 160px;")
    .card-list
      q-img.card(:src="logo01")
      q-img.card(:src="logo02")
      
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import logo01 from 'src/assets/fangImg/afterHour/logo/logo_1.png';
import logo02 from 'src/assets/fangImg/afterHour/logo/logo_2.png';

export default defineComponent({
  setup() {
    const { y } = useWindowScroll();

    return {
      y,
      logo01,
      logo02,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.title {
  color: #414141;
  font-size: 48px;
  font-weight: 700;
  line-height: 150%; /* 72px */
  margin: 80px 0 8px;
}
.subtitle {
  color: #232323;
  font-size: 28px;
  font-weight: 500;
  margin: 8px 0 64px;
}
.banner {
  width: 100%;
  height: calc(100vw * (630 / 1440));
  border-radius: 60px;
  @include rwd.large {
    height: 630px;
  }
  //- background
  background-image: url('src/assets/fangImg/afterHour/logo/logo_3.png');
  background-position: center center; /* x,y */
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.table {
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  .table-label {
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
  .table-content {
    table {
      border-collapse: collapse;
      width: 500px;
      th,
      td {
        width: 240px;
        text-align: left;
      }
      th {
        color: #000;
        font-size: 18px;
        font-weight: 700;
        border-bottom: 1px solid #000000;
        padding-bottom: 16px;
      }
      td {
        color: #262626;
        font-size: 16px;
        font-weight: 400;
        padding-top: 24px;
      }
    }
  }
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  .card {
    width: 585px;
    height: 493px;
    border-radius: 45px;
  }
}
</style>
