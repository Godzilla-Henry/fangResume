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
      .col-12.col-lg-4.col-md-6(
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
import banner01 from 'src/assets/fangImg/visualDesign/banner01.png';
import cardImg01 from 'src/assets/fangImg/visualDesign/cardImg01.png';
import cardImg02 from 'src/assets/fangImg/visualDesign/cardImg02.png';
import cardImg03 from 'src/assets/fangImg/visualDesign/cardImg03.png';
import cardImg04 from 'src/assets/fangImg/visualDesign/cardImg04.png';
import cardImg05 from 'src/assets/fangImg/visualDesign/cardImg05.png';
import cardImg06 from 'src/assets/fangImg/visualDesign/cardImg06.png';
import cardImg07 from 'src/assets/fangImg/visualDesign/cardImg07.png';
import cardImg08 from 'src/assets/fangImg/visualDesign/cardImg08.png';
import cardImg09 from 'src/assets/fangImg/visualDesign/cardImg09.png';

export default defineComponent({
  setup() {
    const imgUrl = ref(banner01);
    const cardList = ref([
      {
        img: cardImg01,
        title: '台中建築線宣傳圖',
        tag: 'GRAPHIC',
      },
      {
        img: cardImg02,
        title: '管溝3D影像海報',
        tag: 'TYPOGRAPHY',
      },
      {
        img: cardImg03,
        title: 'GEO LOGO DESIGN',
        tag: 'GRAPHIC',
      },
      {
        img: cardImg04,
        title: '苗栗道路巡查服務建議書',
        tag: 'TYPOGRAPHY',
      },
      {
        img: cardImg05,
        title: '台中公園系統建置服務建議書',
        tag: 'TYPOGRAPHY',
      },
      {
        img: cardImg06,
        title: '台中公共管線服務建議書',
        tag: 'TYPOGRAPHY',
      },
      {
        img: cardImg07,
        title: '桃園寬頻系統服務建議書',
        tag: 'TYPOGRAPHY',
      },
      {
        img: cardImg08,
        title: '台中建築線系統建置服務建議書',
        tag: 'TYPOGRAPHY',
      },
      {
        img: cardImg09,
        title: '台中港工系統建置服務建議書',
        tag: 'TYPOGRAPHY',
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
  height: 706px;
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
      left: -210px;
    }
    @include rwd.medium {
      width: calc(100vw * (1440 / 1920));
      left: calc(100vw * (-210 / 1920));
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
