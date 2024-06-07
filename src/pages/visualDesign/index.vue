<template lang="pug">
.page
  .section
    div.banner-container
      q-img.img(
        :src="imgUrl"
        spinner-color="#6D6D6D"
      )
  .section.content-padding.last-section
    q-tabs.tabs(v-model="tab")
      q-tab.tab-title(name="Web") Web
      q-tab.tab-title(name="App") App
      q-tab.tab-title(name="Visual") Visual

    q-tab-panels.tab-panels(v-model="tab" animated)
      q-tab-panel(name="Web")
        .row.q-col-gutter-xl.card-list
          .col-12.col-md-4.col-sm-6(
            v-for="item in webList"
            :key="item.title"
          )
            .card(@click="openDialog(item)")
              .card-img-frame
                q-img.card-img(
                  :src="item.img"
                  spinner-color="#6D6D6D"
                )
                .card-hover-info
                  span {{ item.hoverText }}
              .row.items-center.describe
                .tag.q-mr-lg {{ item.tag }}
                .title {{ item.title }}
      q-tab-panel(name="App")
        .row.q-col-gutter-xl.card-list
          .col-12.col-md-4.col-sm-6(
            v-for="item in appList"
            :key="item.title"
          )
            .card(@click="openDialog(item)")
              .card-img-frame
                q-img.card-img(
                  :src="item.img"
                  spinner-color="#6D6D6D"
                )
                .card-hover-info
                  span {{ item.hoverText }}
              .row.items-center.describe
                .tag.q-mr-lg {{ item.tag }}
                .title {{ item.title }}
      q-tab-panel(name="Visual")
        .row.q-col-gutter-xl.card-list
          .col-12.col-md-4.col-sm-6(
            v-for="item in visualList"
            :key="item.title"
          )
            .card(@click="openDialog(item)")
              .card-img-frame
                q-img.card-img(
                  :src="item.img"
                  spinner-color="#6D6D6D"
                )
                .card-hover-info
                  span {{ item.hoverText }}
              .row.items-center.describe
                .tag.q-mr-lg {{ item.tag }}
                .title {{ item.title }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
//- component
import slider from './components/slider.vue';
//- img
import banner01 from 'src/assets/fangImg/visualDesign/banner01.png';
//- Web
import cardImg01 from 'src/assets/fangImg/visualDesign/cardImg01.png';
import cardImg02 from 'src/assets/fangImg/visualDesign/cardImg02.png';
import cardImg03 from 'src/assets/fangImg/visualDesign/cardImg03.png';
import cardImg04 from 'src/assets/fangImg/visualDesign/cardImg04.png';
import cardImg05 from 'src/assets/fangImg/visualDesign/cardImg05.png';
import cardImg06 from 'src/assets/fangImg/visualDesign/cardImg06.png';
import cardImg07 from 'src/assets/fangImg/visualDesign/cardImg07.png';
import cardImg08 from 'src/assets/fangImg/visualDesign/cardImg08.png';
import cardImg09 from 'src/assets/fangImg/visualDesign/cardImg09.png';
//- App
import cardImg10 from 'src/assets/fangImg/visualDesign/cardImg10.png';
import cardImg11 from 'src/assets/fangImg/visualDesign/cardImg11.png';
import cardImg12 from 'src/assets/fangImg/visualDesign/cardImg12.png';
import cardImg13 from 'src/assets/fangImg/visualDesign/cardImg13.png';
import cardImg14 from 'src/assets/fangImg/visualDesign/cardImg14.png';
import cardImg15 from 'src/assets/fangImg/visualDesign/cardImg15.png';
import cardImg16 from 'src/assets/fangImg/visualDesign/cardImg16.png';
import cardImg17 from 'src/assets/fangImg/visualDesign/cardImg17.png';
import cardImg18 from 'src/assets/fangImg/visualDesign/cardImg18.png';
//- visual
import cardImg19 from 'src/assets/fangImg/visualDesign/cardImg19.png';
import cardImg20 from 'src/assets/fangImg/visualDesign/cardImg20.png';
//- Sub Img
import subImg01_1 from 'src/assets/fangImg/visualDesign/subImg/subImg01_1.png';
import subImg01_2 from 'src/assets/fangImg/visualDesign/subImg/subImg01_2.png';
import subImg02_1 from 'src/assets/fangImg/visualDesign/subImg/subImg02_1.png';
import subImg02_2 from 'src/assets/fangImg/visualDesign/subImg/subImg02_2.png';
import subImg03_1 from 'src/assets/fangImg/visualDesign/subImg/subImg03_1.png';
import subImg03_2 from 'src/assets/fangImg/visualDesign/subImg/subImg03_2.png';
import subImg03_3 from 'src/assets/fangImg/visualDesign/subImg/subImg03_3.png';
import subImg04_1 from 'src/assets/fangImg/visualDesign/subImg/subImg04_1.png';
import subImg05_1 from 'src/assets/fangImg/visualDesign/subImg/subImg05_1.png';
import subImg06_1 from 'src/assets/fangImg/visualDesign/subImg/subImg06_1.png';
import subImg07_1 from 'src/assets/fangImg/visualDesign/subImg/subImg07_1.png';
import subImg08_1 from 'src/assets/fangImg/visualDesign/subImg/subImg08_1.png';
import subImg09_1 from 'src/assets/fangImg/visualDesign/subImg/subImg09_1.png';
import subImg10_1 from 'src/assets/fangImg/visualDesign/subImg/subImg10_1.png';
import subImg10_2 from 'src/assets/fangImg/visualDesign/subImg/subImg10_2.png';
import subImg11_1 from 'src/assets/fangImg/visualDesign/subImg/subImg11_1.png';
import subImg11_2 from 'src/assets/fangImg/visualDesign/subImg/subImg11_2.png';
import subImg11_3 from 'src/assets/fangImg/visualDesign/subImg/subImg11_3.png';
import subImg12_1 from 'src/assets/fangImg/visualDesign/subImg/subImg12_1.png';
import subImg12_2 from 'src/assets/fangImg/visualDesign/subImg/subImg12_2.png';
import subImg13_1 from 'src/assets/fangImg/visualDesign/subImg/subImg13_1.png';
import subImg14_1 from 'src/assets/fangImg/visualDesign/subImg/subImg14_1.png';
import subImg14_2 from 'src/assets/fangImg/visualDesign/subImg/subImg14_2.png';
import subImg15_1 from 'src/assets/fangImg/visualDesign/subImg/subImg15_1.png';
import subImg16_1 from 'src/assets/fangImg/visualDesign/subImg/subImg16_1.png';
import subImg16_2 from 'src/assets/fangImg/visualDesign/subImg/subImg16_2.png';
import subImg17_1 from 'src/assets/fangImg/visualDesign/subImg/subImg17_1.png';
import subImg18_1 from 'src/assets/fangImg/visualDesign/subImg/subImg18_1.png';
import subImg19_1 from 'src/assets/fangImg/visualDesign/subImg/subImg19_1.png';
import subImg19_2 from 'src/assets/fangImg/visualDesign/subImg/subImg19_2.png';
import subImg20_1 from 'src/assets/fangImg/visualDesign/subImg/subImg20_1.png';
import subImg20_2 from 'src/assets/fangImg/visualDesign/subImg/subImg20_2.png';
import eventBus from 'src/Utils/useEventBus';

export default defineComponent({
  components: {
    slider,
  },
  setup() {
    const imgUrl = ref(banner01);
    const tab = ref('Web');
    const visualList = ref([
      {
        img: cardImg01,
        title: '台中建築線宣傳圖',
        tag: 'GRAPHIC',
        hoverText: 'Poster',
        subImg: [subImg01_1, subImg01_2],
      },
      {
        img: cardImg02,
        title: '管溝3D影像海報',
        tag: 'TYPOGRAPHY',
        hoverText: 'Poster',
        subImg: [subImg02_1, subImg02_2],
      },
      {
        img: cardImg03,
        title: 'GEO LOGO DESIGN',
        tag: 'GRAPHIC',
        hoverText: 'LOGO',
        subImg: [subImg03_1, subImg03_2, subImg03_3],
      },
      {
        img: cardImg04,
        title: '苗栗道路巡查服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
        subImg: [subImg04_1],
      },
      {
        img: cardImg05,
        title: '台中公園系統建置服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
        subImg: [subImg05_1],
      },
      {
        img: cardImg06,
        title: '台中公共管線服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
        subImg: [subImg06_1],
      },
      {
        img: cardImg07,
        title: '桃園寬頻系統服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
        subImg: [subImg07_1],
      },
      {
        img: cardImg08,
        title: '台中建築線系統建置服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
        subImg: [subImg08_1],
      },
      {
        img: cardImg09,
        title: '台中港工系統建置服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
        subImg: [subImg09_1],
      },
    ]);
    const webList = ref([
      {
        img: cardImg10,
        title: '台中都市計畫審議服務網',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg10_1, subImg10_2],
      },
      {
        img: cardImg11,
        title: '苗栗歷年掃描建檔及查詢系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg11_1, subImg11_2, subImg11_3],
      },
      {
        img: cardImg12,
        title: '公園基本資料維護系統',
        tag: 'GRAPHIC',
        hoverText: 'WEB DESIGN',
        subImg: [subImg12_1, subImg12_2],
      },
      {
        img: cardImg13,
        title: '公園認養與承攬管理系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg13_1],
      },
      {
        img: cardImg14,
        title: '台中市建築線指示定案件資訊網',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg14_1, subImg14_2],
      },
      {
        img: cardImg15,
        title: '苗栗縣道路養護巡查管理系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg15_1],
      },
      {
        img: cardImg16,
        title: '台中寬頻管道地理收費系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg16_1, subImg16_2],
      },
      {
        img: cardImg17,
        title: '彰化縣鹿港鎮道路養護系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg17_1],
      },
      {
        img: cardImg18,
        title: '台中建築線指示(定)案件查詢系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
        subImg: [subImg18_1],
      },
    ]);
    const appList = ref([
      {
        img: cardImg19,
        title: 'GEO LOGO DESIGN',
        tag: 'APP',
        hoverText: 'APP',
        subImg: [subImg19_1, subImg19_2],
      },
      {
        img: cardImg20,
        title: 'GEO LOGO DESIGN',
        tag: 'APP',
        hoverText: 'APP',
        subImg: [subImg20_1, subImg20_2],
      },
    ]);

    //- Cur Picture
    const curPicture = ref([]) as any;
    const openDialog = (item: any) => {
      eventBus.emit('openSlider', item.subImg);
      document.body.style.overflow = 'hidden';
    };

    return {
      imgUrl,
      tab,
      visualList,
      webList,
      appList,
      curPicture,
      openDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner-container {
  height: 753px;
  position: relative;
  margin-top: calc(100vw * (80 / 1440));
  @include rwd.large {
    margin-top: 80px;
  }
  @include rwd.medium {
    height: calc(100vw * (753 / 1440));
  }
  @include rwd.small {
    height: calc(100vw * (293 / 600));
  }
  .img {
    width: 100%;
    position: absolute;
    @include rwd.large {
      width: 1536px;
      left: -216px;
    }
    @include rwd.medium {
      width: calc(100vw * (1536 / 1440));
      left: calc(100vw * (-216 / 1440));
    }
  }
}
.tabs {
  margin-top: 80px;
  .tab-title {
    color: #515151;
    font-size: 16px !important;
    font-weight: 400;
    padding: 0;
    margin: 0 20px;
  }
}
.tab-panels {
  margin-top: 40px;
  .card {
    @include rwd.xs {
      padding: 0px calc((100vw - 300px) * (90 / 300));
    }
    .card-img-frame {
      position: relative;
      border-radius: 32px;
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
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
