<template lang="pug">
.page
  .section.content-padding
    .title 2023新年明信片
    .subtitle 2023 New Year Postcard
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
            td(valign="top") 30 Dec 2022 - 3 Jan 2023
            td 
              p Illustration 
              p Figma
  .section.content-padding(style="margin-top: 160px;")
    q-img.card(:src="newyear02" style="border-radius: 60px;")
    .card-list(style="margin-top: 120px;")
      q-img.card(:src="newyear03")
      q-img.card(:src="newyear04")
    q-img.card(:src="newyear05" style="margin-top: 80px;")
    q-img.card(:src="newyear06" style="margin-top: 80px; border-radius: 60px;")
    q-img.card(:src="newyear07" style="margin-top: 120px; border-radius: 60px;")
    q-img.card(:src="newyear08" style="margin-top: 80px;")
    .card-list(style="margin-top: 80px;")
      q-img.card(:src="newyear09")
      q-img.card(:src="newyear10")
  .section.content-padding.last-section(style="margin-top: 80px;")
    q-img.card(:src="newyear11")
      
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import newyear02 from 'src/assets/fangImg/afterHour/newyear/newyear_2.png';
import newyear03 from 'src/assets/fangImg/afterHour/newyear/newyear_3.png';
import newyear04 from 'src/assets/fangImg/afterHour/newyear/newyear_4.png';
import newyear05 from 'src/assets/fangImg/afterHour/newyear/newyear_5.png';
import newyear06 from 'src/assets/fangImg/afterHour/newyear/newyear_6.png';
import newyear07 from 'src/assets/fangImg/afterHour/newyear/newyear_7.png';
import newyear08 from 'src/assets/fangImg/afterHour/newyear/newyear_8.png';
import newyear09 from 'src/assets/fangImg/afterHour/newyear/newyear_9.png';
import newyear10 from 'src/assets/fangImg/afterHour/newyear/newyear_10.png';
import newyear11 from 'src/assets/fangImg/afterHour/newyear/newyear_11.png';

export default defineComponent({
  setup() {
    const { y } = useWindowScroll();

    return {
      y,
      newyear02,
      newyear03,
      newyear04,
      newyear05,
      newyear06,
      newyear07,
      newyear08,
      newyear09,
      newyear10,
      newyear11,
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
  background-image: url('src/assets/fangImg/afterHour/newyear/newyear_1.png');
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
  gap: 50px;
  .card {
    width: 574px;
    height: 693px;
    border-radius: 36px;
  }
}
.bottom-card {
  margin-top: 120px;
  border-radius: 60px;
}
.card-list-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  .card {
    width: 373px;
    height: 266px;
    border-radius: 18px;
  }
}
.d-1440-none {
  display: none;
  @include rwd.large {
    display: block;
  }
}
</style>
