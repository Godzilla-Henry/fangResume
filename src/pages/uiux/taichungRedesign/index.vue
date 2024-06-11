<template lang="pug">
.page
  .section.content-padding.banner
    .title 台中建築線指定案件資訊網 — Redesign
    .subtitle Taichung City Building Line Information Website — Redesign
  .section.content-padding
    .banner-img(:style="{'background-position-y': 'calc(45% - ' + y * 0.1 + 'px' + ')'}")
  .section.content-padding.table(style="margin-top: 64px;")
    .table-label Project details
    .table-content.desktop
      table
        thead
          tr 
            th My Roles
            th Team
            th Duration
            th Tool
        tbody
          tr 
            td(valign="top") 
              p Responsive Web Design 
              p UI Design 
              p Code
            td(valign="top")  me
            td(valign="top")  
              p Design：Oct 2023 - Nov 2023 (20days) 
              p Code：Jan 2024 - Feb 2024 (30days)
            td(valign="top") 
              p Figma 
              p Illustration 
              p HTML, CSS, jQuery UI
    .table-content.mobile
      table
        thead
          tr 
            th My Roles
            th Team
        tbody
          tr 
            td(valign="top") 
              p Responsive Web Design 
              p UI Design 
              p Code
            td(valign="top")  me
      table
        thead
          tr 
            th Duration
            th Tool
        tbody
          tr 
            td(valign="top")  
              p Design：Oct 2023 - Nov 2023 (20days) 
              p Code：Jan 2024 - Feb 2024 (30days)
            td(valign="top") 
              p Figma 
              p Illustration 
              p HTML, CSS, jQuery UI
  .section.content-padding.table(style="margin-top: 160px; margin-bottom: 120px;")
    .intro.row.reverse
      .col-12.col-md-6.intro-img-container
        .intro-img
          q-img(:src="redesign01")
      .col-12.col-md-6
        .intro-card
          .subtitle What is 臺中市建築線指定案件資訊網 ?
          .title 提供民眾線上查詢建築線相關業務的平台
          .describe 臺中市建築線指定案件資訊網為提供民眾申辦案件查詢、歷史案件查詢、免指建築線範圍查詢、公文檔案下載，便利民眾案件進度查詢與追蹤，幫助業務調閱分析與查詢建照相關資料。
        .intro-card
          .subtitle Impact 影響
          .title 網站介面更新及系統功能優化
          .describe 提升網站頁面可視化、直覺化及圖像化之調整，於網站首頁採用全幅背景 (Full width Background) 設計主視覺Banner ，有效傳達網站特色及豐富版面，在訊息專區以卡片的方式呈現，除了縮短頁面篇幅外，更以手風琴摺疊的效果整理數量繁雜的訊息公告；在下載專區則是以2D向量圖示豐富純文字的標題，藉此優化閱讀視覺的舒適性。
  .section.content-padding
    .page-img01
      q-img(:src="redesign02")
    .split-img(style="margin-top: 120px; margin-bottom: 120px;")
      .page-img02
        q-img(:src="redesign03")
      .page-img03
        q-img(:src="redesign04")
  .section(style="margin-top: 120px; margin-bottom: 120px;") 
    .page-img04
      q-img(:src="redesign05")
  .section(style="margin-bottom: 120px;") 
    .page-img05
      q-img(:src="redesign06")
  .section.last-section(style="padding: 120px; background: #4B4D53;")
    .page-img06
      q-img(:src="redesign07")

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import redesign01 from 'src/assets/fangImg/uiux/reDesign/reDesign_3.png';
import redesign02 from 'src/assets/fangImg/uiux/reDesign/reDesign_4.png';
import redesign03 from 'src/assets/fangImg/uiux/reDesign/reDesign_5.png';
import redesign04 from 'src/assets/fangImg/uiux/reDesign/reDesign_6.png';
import redesign05 from 'src/assets/fangImg/uiux/reDesign/reDesign_7.png';
import redesign06 from 'src/assets/fangImg/uiux/reDesign/reDesign_8.png';
import redesign07 from 'src/assets/fangImg/uiux/reDesign/reDesign_9.png';

export default defineComponent({
  setup() {
    const { y } = useWindowScroll();
    return {
      y,
      redesign01,
      redesign02,
      redesign03,
      redesign04,
      redesign05,
      redesign06,
      redesign07,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner {
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
}
.banner-img {
  width: 100%;
  height: calc(100vw * (630 / 1440));
  border-radius: 60px;
  @include rwd.large {
    height: 630px;
  }
  //- background
  background-image: url('src/assets/fangImg/uiux/reDesign/reDesign_1.png');
  background-position: center center; /* x,y */
  background-repeat: repeat;
  background-size: 100% auto;
  transition: background-position 0.5s ease-in-out;
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
    &.desktop {
      display: none;
      @include rwd.large {
        display: block;
      }
    }
    &.mobile {
      display: block;
      @include rwd.large {
        display: none;
      }
    }
    table {
      border-collapse: collapse;
      width: 100%;
      th,
      td {
        width: 240px;
        text-align: left;
      }
      th {
        color: #928670;
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
.intro {
  .intro-card {
    .subtitle {
      color: #928670;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
      margin-bottom: 8px;
    }
    .title {
      color: #101828;
      font-size: 24px;
      font-weight: 400;
      line-height: 150%; /* 36px */
      margin-bottom: 16px;
    }
    .describe {
      color: #515151;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px; /* 175% */
      margin-bottom: 24px;
    }
  }
  .intro-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    @include rwd.md {
      justify-content: end;
    }
    @include rwd.large {
      justify-content: end;
    }
    .intro-img {
      width: 407px;
      height: 323px;
    }
  }
}
.split-img {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  .page-img02 {
    width: 100%;
    @include rwd.large {
      width: 687px;
      height: 522px;
    }
  }
  .page-img03 {
    width: 100%;
    @include rwd.large {
      width: 425px;
      height: 522px;
    }
  }
}
</style>
