<template lang="pug">
.page
  .section
    div.banner-container
      q-img.img(
        :src="imgUrl"
        spinner-color="#6D6D6D"
      )
  .section.content-padding.last-section
    .row
      .col-12.col-md-6(
        v-for="item in cardList"
        :key="item.title"
      )
        .card
          q-img.card-img(
            :src="item.img"
            spinner-color="#6D6D6D"
          )
          .row.items-center.q-mt-md
            .tag.q-mr-lg {{ item.tag }}
            .title {{ item.title }}
          
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
//- img
import banner01 from 'src/assets/fangImg/afterHour/banner01.png';
import cardImg01 from 'src/assets/fangImg/afterHour/cardImg01.png';
import cardImg02 from 'src/assets/fangImg/afterHour/cardImg02.png';
import cardImg03 from 'src/assets/fangImg/afterHour/cardImg03.png';
import cardImg04 from 'src/assets/fangImg/afterHour/cardImg04.png';
export default defineComponent({
  setup() {
    const imgUrl = ref(banner01);
    const cardList = ref([
      {
        img: cardImg01,
        title: '壓克力畫作',
        tag: 'DESIGN',
      },
      {
        img: cardImg02,
        title: '2023新年明信片',
        tag: 'DESIGN',
      },
      {
        img: cardImg03,
        title: '企業形象識別系統',
        tag: 'ILLUSTRATION',
      },
      {
        img: cardImg04,
        title: '個人形象識別LOGO設計',
        tag: 'ILLUSTRATION',
      },
    ]);
    return {
      imgUrl,
      cardList,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner-container {
  height: 822px;
  position: relative;
  margin-top: 5vw;
  margin-bottom: 200px;
  @include rwd.large {
    margin-top: 95px;
    margin-bottom: 200px;
  }
  @include rwd.medium {
    height: calc(100vw * (706 / 1920));
    margin-bottom: calc(100px + 100vw * (100 / 1920));
  }
  @include rwd.small {
    height: calc(100vw * (293 / 600));
    margin-bottom: 100px;
  }
  .img {
    width: 100%;
    position: absolute;
    @include rwd.large {
      max-width: 1440px;
      left: -100px;
    }
    @include rwd.medium {
      width: calc(100vw * (1440 / 1920));
      left: calc(100vw * (-100 / 1920));
    }
  }
}

.card {
  padding: 40px;
  @include rwd.xs {
    padding: 20px 0px;
  }
  .card-img {
    border-radius: 32px;
  }
  .tag {
    color: #5d5d5d;
    font-family: 'Noto Serif TC';
    font-size: 14px;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 100px;
    border: 1px solid #5d5d5d;
    @include rwd.medium {
      font-size: calc(10px + 100vw * (4 / 1920));
      padding: calc(2px + 100vw * (3 / 1920)) calc(7px + 100vw * (5 / 1920));
    }
    @include rwd.small {
      padding: 2px 7px;
      font-size: 10px;
    }
  }
  .title {
    width: 40%;
    color: #5d5d5d;
    font-family: 'SF Pro Display';
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @include rwd.medium {
      font-size: calc(16px + 100vw * (4 / 1920));
    }
    @include rwd.small {
      font-size: 16px;
    }
  }
}
</style>
