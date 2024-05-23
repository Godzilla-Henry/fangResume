<template lang="pug">
.page
  .section.content-padding
    .title 壓克力畫作
    .subtitle acrylic paintings
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
            td 30 Dec 2022 (4hr)
            td acrylic paint
  .section.content-padding(style="margin-top: 160px;")
    .card-list
      q-img.card(:src="acrylic01")
      q-img.card(:src="acrylic02")
      q-img.card(:src="acrylic03")
  .section.content-padding.last-section(style="margin-top: 120px;")
    .card-list-2  
      q-img.card(:src="acrylic05")
      q-img.card(:src="acrylic06")

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import acrylic01 from 'src/assets/fangImg/afterHour/acrylic/acrylic_1.png';
import acrylic02 from 'src/assets/fangImg/afterHour/acrylic/acrylic_2.png';
import acrylic03 from 'src/assets/fangImg/afterHour/acrylic/acrylic_3.png';
import acrylic05 from 'src/assets/fangImg/afterHour/acrylic/acrylic_5.png';
import acrylic06 from 'src/assets/fangImg/afterHour/acrylic/acrylic_6.png';

export default defineComponent({
  setup() {
    const { y } = useWindowScroll();

    return {
      y,
      acrylic01,
      acrylic02,
      acrylic03,
      acrylic05,
      acrylic06,
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
  background-image: url('src/assets/fangImg/afterHour/acrylic/acrylic_4.png');
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
  gap: 21px;
  .card {
    width: 385px;
    height: 540px;
    border-radius: 60px;
  }
}
.card-list-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  .card {
    width: 588px;
    height: 493px;
    border-radius: 45px;
  }
}
</style>
