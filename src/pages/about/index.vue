<template lang="pug">
.page
  .upper
    .row.items-end.banner-container
      .right
        .row.justify-center
          q-img.img(
            :src="imgUrl"
            spinner-color="#6D6D6D"
          )
      .left
        .content
          .h-line
          .tag 關於我
          .title Hi, 我是 Fang
          .subtitle 2+年設計經歷，負責超過12+個專案，包含前後台民眾網站3+、RWD設計網站7+、APP3+、6+位工程師與PM相互協作過專案，持續在產品使用上優化與創新，致力於提供使用者最佳的使用體驗。
          p 過去接觸視覺設計、網頁及手機APP設計、響應式(RWD)網站設計、政府網站設計等多重項目，能獨立從規劃流程、設計草稿到最後精稿的產出，具備設計介面的互動能力，以及0-1建置設計系統。在職場過程中，我深知學習經驗和反饋的重要性，從最初的平面設計、UI/UX再到前端語法切版，每個階段都必須持續學習並不斷精進自己的技能，才能在科技產業中與時俱進。
          p 為提升自身實力，透過自學及side project的方式培養獨立思辨，在職同時，加入UI實戰營課程，以直播互動課程、作業及小組專題，不斷吸收業界新知與實戰技能，持續學習並接受挑戰。我期待將各種知識與經驗相互融合，實現並創造更有影響力的作品，為社會注入更多正面與美好的力量。
          p 在興趣方面，我喜歡文創手作、旅行，並對觀察生活細節充滿好奇心，享受從不同領域的新知中獲取靈感，期待以此為催化劑，帶來更多積極而有益的改變。
          .email
            .left
              q-icon.q-mr-sm(name="far fa-envelope" color="#585858") 
              span.q-mr-lg xlingfun@gmail.com
              svg(xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none")
                path(d="M18.07 0.824158H13V2.23416H18.09L18.07 0.824158ZM17 10.5242C16.6154 10.779 16.1612 10.9083 15.7 10.8942C15.3947 10.926 15.0862 10.8945 14.7937 10.8015C14.5011 10.7086 14.2309 10.5563 14 10.3542C13.573 9.87004 13.3507 9.23901 13.38 8.59416H20C20.0477 7.92271 19.9904 7.24792 19.83 6.59416C19.6749 5.97218 19.4034 5.38519 19.03 4.86416C18.6541 4.35876 18.1686 3.94508 17.61 3.65416C16.9884 3.3477 16.3029 3.19345 15.61 3.20416C14.9583 3.19939 14.3123 3.32519 13.71 3.57416C13.1585 3.80665 12.6588 4.14659 12.24 4.57416C11.8224 5.01027 11.499 5.52767 11.29 6.09416C11.0657 6.70571 10.9539 7.3528 10.96 8.00416C10.9497 8.66476 11.0581 9.32185 11.28 9.94416C11.4685 10.5077 11.7677 11.0279 12.16 11.4742C12.5659 11.9123 13.0648 12.254 13.62 12.4742C14.2391 12.71 14.8976 12.8254 15.56 12.8142C16.4894 12.8431 17.407 12.5998 18.2 12.1142C19.0009 11.545 19.5775 10.7137 19.83 9.76416H17.62C17.5017 10.0783 17.284 10.3452 17 10.5242ZM13.57 6.40416C13.6478 6.15484 13.777 5.92459 13.9493 5.72824C14.1215 5.5319 14.3329 5.37381 14.57 5.26416C14.884 5.12284 15.2258 5.05447 15.57 5.06416C15.8186 5.04292 16.0689 5.07572 16.3036 5.1603C16.5384 5.24488 16.7521 5.37924 16.93 5.55416C17.2698 5.97009 17.4878 6.47195 17.56 7.00416H13.41C13.4262 6.80094 13.463 6.5999 13.52 6.40416H13.57ZM8.28 5.92416C8.78896 5.71222 9.23121 5.36671 9.56 4.92416C9.86222 4.45416 10.0124 3.90249 9.99 3.34416C10.0096 2.835 9.91031 2.32827 9.7 1.86416C9.52331 1.46207 9.23968 1.11618 8.88 0.864158C8.49865 0.602131 8.06561 0.424821 7.61 0.344158C7.07082 0.231071 6.52087 0.177418 5.97 0.184158H0V12.7642H6.1C6.65669 12.7646 7.21116 12.694 7.75 12.5542C8.26075 12.422 8.74462 12.2021 9.18 11.9042C9.60174 11.6119 9.94515 11.2204 10.18 10.7642C10.4399 10.2539 10.5672 9.6865 10.55 9.11416C10.5689 8.4049 10.37 7.70687 9.98 7.11416C9.56059 6.51808 8.93852 6.09508 8.23 5.92416H8.28ZM2.77 2.33416H5.36C5.59795 2.33386 5.83548 2.35394 6.07 2.39416C6.28595 2.42616 6.49334 2.50096 6.68 2.61416C6.86035 2.71617 7.00648 2.86926 7.1 3.05416C7.21582 3.27588 7.27102 3.52425 7.26 3.77416C7.27863 3.9894 7.24572 4.20598 7.16399 4.40596C7.08225 4.60595 6.95405 4.78358 6.79 4.92416C6.43212 5.17019 6.00388 5.29305 5.57 5.27416H2.77V2.33416ZM7.61 9.77416C7.50726 9.97796 7.35189 10.1506 7.16 10.2742C6.9603 10.3984 6.74027 10.4864 6.51 10.5342C6.25406 10.5914 5.99224 10.6183 5.73 10.6142H2.73V7.16416H5.73C6.24482 7.14161 6.75322 7.28537 7.18 7.57416C7.37281 7.74719 7.52217 7.96319 7.61599 8.20467C7.7098 8.44616 7.74543 8.70634 7.72 8.96416C7.74704 9.23904 7.70936 9.51644 7.61 9.77416Z" fill="#585858")
            .right
              .resume
                a(href="https://drive.google.com/file/d/17ZPPhCHX5X-Y2bsg01KZSodt55sH6ARI/view?usp=drive_link" target="_blank") Resume
    .banner-divider
      q-img.img(
        :src="line"
        spinner-color="#6D6D6D"
      )
  .section.column.items-center
    q-img.read-more(
      :src="circle"
      spinner-color="#6D6D6D"
    )
    .line
    .line-text.row.items-center
      q-img.dot(
        :src="dot"
        spinner-color="#6D6D6D"
      )
      .dot-text SKILL
  .section.column.items-center.content-padding
    .text-center.work-title HOW DO I WORK
    .row.q-col-gutter-xl.card-list
      .col-12.col-lg-3.col-md-6.row.justify-center(
        v-for="item in cardList" :key="item.index"
      )
        .card.column.items-center
          q-img.card-img(
            :src="item.img"
            spinner-color="#6D6D6D"
          )
          .index {{ item.index }}
          .card-title {{ item.title }}
          .card-text {{ item.text }}
  .section.content-padding
    .row.list
      .col-12.col-md-3
        .list-tag EXPERIENCE
      .col-12.col-md-9
        .list-content
          .row.items-center.justify-between
            .list-title UI 設計師
            .time 2022/07-2024/06
          .list-subtitle Geointelligence System,inc. 坤眾科技
          .top
            li 一人設計， UI / UX 設計 & 迭代、功能設計，建立Design System 提升開發過程的一致性、易維護性與製程效率。
            li 網頁 HTML + CSS 切版、製作響應式網站(Responsive Web Design) ，與前端工程師溝通功能實作。
            li 依照不同階段需求提供Mockup、Prototype之展示視覺稿件
            li 視覺設計、平面文宣、簡報製作、服務建議書製作、系統教育訓練推播圖文
            li 政府內部管理系統設計：建築線案件查詢系統、地理圖資查詢系統、巡查管理系統、寬頻管道功能維護系統...等10多個系統。
          .bottom 
            li.case
              q-icon.q-mr-sm(name="fas fa-suitcase")  
              |專案內容
            li 
              span.q-mr-sm 台中公園基本資料 
              a(href="https://tcpark.taichung.gov.tw/ParkMain/Home/loginpage" target="_blank") 
                q-icon(name="far fa-clone") 
          
            li 台中公園認養與承攬系統
            li 
              span.q-mr-sm 中科3D系統
              a(href="https://dig.ctsp.gov.tw/ctsp3D/Account/Login?ReturnUrl=%2Fctsp3d%2Fctsp3d.html" target="_blank") 
                q-icon(name="far fa-clone") 
            li 
              span.q-mr-sm 台中好好行
              a(href="https://plan.construction.taichung.gov.tw/TCPatrol/" target="_blank") 
                q-icon(name="far fa-clone") 
            li
              span.q-mr-sm 台中寬頻管道系統
              a(href="https://tcroad.taichung.gov.tw/TCBBeamDN6/Account/LoginMaintain" target="_blank") 
                q-icon(name="far fa-clone") 
            li 苗栗歷年重劃清冊掃瞄建檔與查詢系統
            li 台中建築線 Web、App
            li 苗栗道路巡查系統 Web、App
            li 台中港工作業管理系統 Web、App
            li 台中都市計畫、國土計畫、區域計畫系統
            li 台中土地容積移轉申請案系統
            li 鹿港道路養護繪製平台系統
        .list-content
          .row.items-center.justify-between
            .list-title Freelancer
            .time 2022/04-2022/07
          .top
            li 品牌製作物設計：包括平面設計、社群文宣、LOGO設計。
            li 橫向發展接觸UI/UX 相關領域，Hahow課程：產品設計實戰：用Figma打造絕佳UI/UX
        .list-content
          .row.items-center.justify-between
            .list-title 門市業務人員
            .time 2020/10-2021/10
          .list-subtitle Home Making Creative Printing Co., Ltd.
          .top
            li 門市：負責門市客戶接待、印刷諮詢服務及訂單處理、協助客戶下單
            li 客服：顧客服務與顧客關係維護，解決顧客問題、LINE客服
            li 業務：協助收款、查貨、估價以及報價、問題檔案處理
            li 出貨：列單出貨包裝服務
        .list-content
          .row.items-center.justify-between
            .list-title 其他經驗
            .time 2018-2020
          .top
            li 2020 代理品牌電商平台行銷
            li 2018-2019 男用服飾電商實習
    .row.list
      .col-12.col-md-3
        .list-tag EDUCATION
      .col-12.col-md-9
        .list-content
          .row.items-center.justify-between
            .list-title 國立高雄科技大學 (NKUST)
            .time 2016/09-2019/06
          .list-subtitle 供應鏈管理系
        .list-content
          .row.items-center.justify-between
            .list-title 職業訓練局 (政府教學機構)
            .time 2021/12-2022/03
          .list-subtitle 多媒體設計
        .list-content
          .row.items-center.justify-between
            .list-title AAPD 第一屆UI 設計線上實戰營
            .time 06/29-08/09  2023
          .list-subtitle AAPD
    .row.list 
      .col-12.col-md-3
        .list-tag CERTIFICATION
      .col-12.col-md-9
        .list-content
          .row.items-center.justify-between
            .list-title AAPD 第一屆UI 設計線上實戰營
            .time 2023
          .list-subtitle AAPD

        .list-content
          .row.items-center.justify-between
            .list-title 產品設計實戰：用Figma打造絕佳UI/UX
            .time 2022
          .list-subtitle HaHow
    .row.list 
      .col-12.col-md-3
        .list-tag TOOLS
      .col-12.col-md-9
        .list-content
          .row.items-center.justify-between
            .list-title 工具
          .top
            li Interface Design：Figma
            li Web Development：HTML5、CSS3、JavaScript
            li Adobe：Photoshop、Illustrator、XD
            li Microsoft Office：Word、PowerPoint、Excel
  .section.last-section.content-padding.about-bottom
    q-img(
      :src="bottom"
      spinner-color="#6D6D6D"
      style="width: 100%;"
    )

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
//- img
import banner01 from 'src/assets/fangImg/aboutMe/banner01.png';
import line from 'src/assets/fangImg/aboutMe/line.png';
import circle from 'src/assets/fangImg/aboutMe/circle.png';
import dot from 'src/assets/fangImg/aboutMe/dot.png';
import cardimg01 from 'src/assets/fangImg/aboutMe/cardImg01.png';
import cardimg02 from 'src/assets/fangImg/aboutMe/cardImg02.png';
import cardimg03 from 'src/assets/fangImg/aboutMe/cardImg03.png';
import cardimg04 from 'src/assets/fangImg/aboutMe/cardImg04.png';
import bottom from 'src/assets/fangImg/aboutMe/bottom.png';
import behance_logo from 'src/assets/fangImg/aboutMe/behance_logo.png';

export default defineComponent({
  setup() {
    const imgUrl = ref(banner01);
    const cardList = ref([
      {
        img: cardimg01,
        index: '01',
        title: '理解需求與目標',
        text: '理解使用者需求，釐清整體脈絡與方向，有效定義目標。',
      },
      {
        img: cardimg02,
        index: '02',
        title: '規劃與建立原型',
        text: '確認完需求後將研究和分析轉化為可視化的設計，創建草稿和低保真原型進行初步評估和反饋。',
      },
      {
        img: cardimg03,
        index: '03',
        title: '設計與執行',
        text: '執行視覺與互動設計，定義風格、建立設計系統，創建高保真原型與設計交互元素，以提高用戶體驗並開發網頁切版。',
      },
      {
        img: cardimg04,
        index: '04',
        title: '優化與迭代',
        text: '收集用戶反饋並進行優化。確保設計符合用戶需求，並持續提高用戶體驗的質量，將開發的測試結果進行調整與迭代。',
      },
    ]);

    return {
      imgUrl,
      line,
      circle,
      dot,
      cardList,
      bottom,
      behance_logo,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.upper {
  position: relative;
}
.banner-container {
  position: relative;
  z-index: 2;
  flex-direction: row;
  justify-content: center;
  margin-top: calc(100vw * (80 / 1440));
  @include rwd.large {
    flex-direction: row-reverse;
    margin-top: 80px;
  }
  .left {
    width: 836px;
    .content {
      padding: 0px 100px 0px 120px;
      @include rwd.medium {
        padding: 0px calc(30px + 100vw * (90 / 1440));
      }
      @include rwd.small {
        padding: 0px 30px;
      }
      .h-line {
        width: 40px;
        border-top: 1px solid #b1b1b1;
        margin-bottom: 30px;
      }
      .tag {
        color: #585858;
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 10px;
      }
      .title {
        color: #4c4c4c;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 40px;
      }
      .subtitle {
        color: #1b1b1b;
        font-size: 16px;
        font-weight: 400;
        padding: 10px 0px;
        border-bottom: 1px solid #1b1b1b;
      }
      p {
        color: #585858;
        font-size: 16px;
        font-weight: 400;
        margin-top: 16px;
      }
      .email {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 48px;
        color: #585858;
        font-size: 16px;
        font-weight: 500;
        .left {
          width: 250px;
          display: flex;
          align-items: center;
        }
        .right {
          width: 100px;
          height: 36px;
          .resume {
            width: 100px;
            border-radius: 50px;
            border: 1px solid #d2d2d2;
            padding: 4px 20px;
            &:hover {
              color: #000;
              cursor: pointer;
            }
            a {
              color: #585858;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .right {
    width: 604px;
    height: 678px;
    .img {
      position: relative;
      z-index: 10;
    }
  }
}
.banner-divider {
  z-index: 1;
  width: 100%;
  position: absolute;
  bottom: -40px;
}
.read-more {
  width: 225px;
  height: 225px;
  margin: 120px 0px 16px;
  animation: rotate 12s linear infinite;
  @include rwd.medium {
    width: calc(120px + 100vw * (105 / 1440));
    height: calc(120px + 100vw * (105 / 1440));
    margin: calc(30px + 100vw * (90 / 1440)) 0px calc(10px + 100vw * (6 / 1440))
      0px;
  }
  @include rwd.small {
    width: 120px;
    height: 120px;
    margin: 30px 0px 10px;
  }
}
.line {
  width: 0px;
  height: 100px;
  border-left: 1px solid #989898;
  @include rwd.medium {
    height: calc(50px + 100vw * (50 / 1440));
  }
  @include rwd.small {
    height: 50px;
  }
}
.line-text {
  margin-top: 16px;
  .dot {
    width: 12px;
    height: 10.6px;
    margin-right: 6px;
  }
  .dot-text {
    color: #535353;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.299px;
    text-transform: uppercase;
  }
}
.work-title {
  color: #535353;
  font-size: 35px;
  font-weight: 400;
  line-height: 70.2px; /* 200% */
  letter-spacing: 3.51px;
  margin: 8px 0 64px 0;
}
.card-list {
  margin-bottom: 59px;
  .card {
    width: 198px;
    .card-img {
      border-radius: 50%;
      width: 198px;
    }
    .index {
      color: #535353;
      font-size: 36.07px;
      font-weight: 600;
      line-height: 60.75px; /* 168.421% */
      letter-spacing: 0.81px;
      border-bottom: 2px solid #535353;
      margin: 23px 0;
    }
    .card-title {
      color: #535353;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px; /* 168.75% */
    }
    .card-text {
      color: #535353;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px; /* 128.571% */
      letter-spacing: 0.81px;
      margin-top: 10px;
    }
  }
}

.list {
  margin-top: 120px;
  .list-tag {
    color: #2d2d2d;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 36.964px; /* 231.028% */
    letter-spacing: 2.72px;
  }
  .list-content {
    border-top: 0.5px solid #c0c1bc;
    padding: 16px 10px 10px 10px;
    .list-title {
      color: #3b3b3f;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%; /* 35.2px */
    }
    .time {
      color: #3b3b3f;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 22.4px */
    }
    .list-subtitle {
      color: #3b3b3f;
      font-size: 16px;
      font-weight: 400;
      line-height: 160%; /* 25.6px */
      margin: 10px 0;
    }
    li {
      color: #3b3b3f;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 200%; /* 25.6px */
      a {
        text-decoration: none;
      }
      a:link {
        color: #4473cd;
      }
      a:visited {
        color: rgba(64, 72, 86, 0.1);
      }
      &.case {
        list-style: none;
      }
    }
    .bottom {
      margin-top: 10px;
    }
  }
}
.about-bottom {
  margin-top: 400px;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
