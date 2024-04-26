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
      q-tab.tab-title(name="Web" label="Web")
      q-tab.tab-title(name="App" label="App")
      q-tab.tab-title(name="Visual" label="Visual")

    q-tab-panels.tab-panels(v-model="tab" animated)
      q-tab-panel(name="Web")
        .row.q-col-gutter-xl.card-list
          .col-12.col-md-4.col-sm-6(
            v-for="item in webList"
            :key="item.title"
          )
            .card
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
            .card
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
            .card
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

export default defineComponent({
  setup() {
    const imgUrl = ref(banner01);
    const tab = ref('Web');
    const visualList = ref([
      {
        img: cardImg01,
        title: '台中建築線宣傳圖',
        tag: 'GRAPHIC',
        hoverText: 'Poster',
      },
      {
        img: cardImg02,
        title: '管溝3D影像海報',
        tag: 'TYPOGRAPHY',
        hoverText: 'Poster',
      },
      {
        img: cardImg03,
        title: 'GEO LOGO DESIGN',
        tag: 'GRAPHIC',
        hoverText: 'LOGO',
      },
      {
        img: cardImg04,
        title: '苗栗道路巡查服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
      },
      {
        img: cardImg05,
        title: '台中公園系統建置服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
      },
      {
        img: cardImg06,
        title: '台中公共管線服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
      },
      {
        img: cardImg07,
        title: '桃園寬頻系統服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
      },
      {
        img: cardImg08,
        title: '台中建築線系統建置服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
      },
      {
        img: cardImg09,
        title: '台中港工系統建置服務建議書',
        tag: 'TYPOGRAPHY',
        hoverText: 'RFP',
      },
    ]);
    const webList = ref([
      {
        img: cardImg10,
        title: '台中都市計畫審議服務網',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg11,
        title: '苗栗歷年掃描建檔及查詢系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg12,
        title: '公園基本資料維護系統',
        tag: 'GRAPHIC',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg13,
        title: '公園認養與承攬管理系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg14,
        title: '台中市建築線指示定案件資訊網',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg15,
        title: '苗栗縣道路養護巡查管理系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg16,
        title: '台中寬頻管道地理收費系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg17,
        title: '彰化縣鹿港鎮道路養護系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
      {
        img: cardImg18,
        title: '台中建築線指示(定)案件查詢系統',
        tag: 'WEB DESIGN',
        hoverText: 'WEB DESIGN',
      },
    ]);
    const appList = ref([
      {
        img: cardImg19,
        title: 'GEO LOGO DESIGN',
        tag: 'APP',
        hoverText: 'APP',
      },
      {
        img: cardImg20,
        title: 'GEO LOGO DESIGN',
        tag: 'APP',
        hoverText: 'APP',
      },
    ]);

    return {
      imgUrl,
      tab,
      visualList,
      webList,
      appList,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner-container {
  height: 753px;
  position: relative;
  margin-top: calc(100vw * (83 / 1440));
  @include rwd.large {
    margin-top: 83px;
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
    font-size: 20px;
    font-weight: 400;
  }
}
.tab-panels {
  margin-top: 56px;
  .card {
    @include rwd.xs {
      padding: 0px calc((100vw - 300px) * (90 / 300));
    }
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
