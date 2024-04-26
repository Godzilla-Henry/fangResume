<template lang="pug">
.page
  .section
    div.banner-container
      q-img.img(
        :src="imgUrl"
        spinner-color="#6D6D6D"
      )
  .section.content-padding.last-section
    .row.q-col-gutter-xl.card-list
      .col-12.col-md-6(
        v-for="item in cardList"
        :key="item.title"
      )
        .card
          .card-img-frame
            q-img.card-img(
              :src="item.img"
              spinner-color="#6D6D6D"
            )
            .card-hover-info
                span {{ item.tag}}
          .row.items-center.q-mt-md.describe
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
  height: 825px;
  position: relative;
  margin-top: calc(100vw * (83 / 1440));
  @include rwd.large {
    margin-top: 83px;
  }
  @include rwd.medium {
    height: calc(100vw * (825 / 1440));
  }
  @include rwd.small {
    height: calc(100vw * (341 / 600));
  }
  .img {
    width: 100%;
    position: absolute;
    @include rwd.large {
      width: 1440px;
      left: -120px;
    }
    @include rwd.medium {
      width: calc(100vw * (1440 / 1440));
      left: calc(100vw * (-120 / 1440));
    }
  }
}

.card-list {
  margin-top: 120px;
  @include rwd.sm {
    margin-top: 60px;
    padding: 0px calc((100vw - 600px) * (90 / 424));
  }
  @include rwd.xs {
    margin-top: 30px;
    padding: 0px calc((100vw - 300px) * (90 / 300));
  }
  .card {
    .card-img-frame {
      position: relative;
      border-radius: 32px;
      overflow: hidden;
      &:hover .card-img {
        transform: scale(1.1, 1.1);
      }
      &:hover .card-hover-info {
        opacity: 1;
        transition: opacity 0.7s;
      }
      .card-img {
        transition: all 0.7s ease-out;
      }
      .card-hover-info {
        width: 100%;
        height: 100%;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        background-color: rgba(75, 77, 83, 0.7);
        color: #f6f6f6;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px; /* 116.667% */
      }
    }
    .describe {
      margin-top: 12px;
      .tag {
        color: #5d5d5d;
        font-family: 'Noto Serif TC';
        font-size: 10px;
        font-weight: 700;
        padding: 5px 12px;
        border-radius: 100px;
        border: 1px solid #5d5d5d;
        @include rwd.medium {
          padding: calc(2px + 100vw * (3 / 1440)) calc(7px + 100vw * (5 / 1440));
        }
        @include rwd.small {
          padding: 2px 7px;
        }
      }
      .title {
        width: calc(100% - 150px);
        color: #5d5d5d;
        font-family: 'SF Pro Display';
        font-size: 16px;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
