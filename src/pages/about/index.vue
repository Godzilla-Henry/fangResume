<template lang="pug">
.page
  .section
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
          .subtitle 一年多以上介面設計經歷，與PM及前端技術相互協作，持續在產品使用上優化與創新。
          p 過去接觸視覺設計、網頁及手機APP設計、響應式(RWD)網站設計、政府網站設計等多重項目，能獨立從規劃流程、設計草稿到最後精稿的產出，具備設計介面的互動能力，以及0-1建置設計系統。在職場過程中，我深知學習經驗和反饋的重要性，從最初的平面設計、UI/UX再到前端語法切版，每個階段都必須持續學習並不斷精進自己的技能，才能在科技產業中與時俱進。
          p 為提升自身實力，透過自學及side project的方式培養獨立思辨，在職同時，加入UI實戰營課程，以直播互動課程、作業及小組專題，不斷吸收業界新知與實戰技能，持續學習並接受挑戰。我期待將各種知識與經驗相互融合，實現並創造更有影響力的作品，為社會注入更多正面與美好的力量。
          p 在興趣方面，我喜歡文創手作、旅行，並對觀察生活細節充滿好奇心，享受從不同領域的新知中獲取靈感，期待以此為催化劑，帶來更多積極而有益的改變。
          .email.text-right
            q-icon.q-mx-sm(name="far fa-envelope" color="#585858") 
            | xlingfun@gmail.com
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
    .line-text.row
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
            li 專案內容
            li 台中公園基本資料（https://tcpark.taichung.gov.tw/ParkMain/Home/loginpage）
            li 台中公園認養與承攬系統（）
            li 中科3D系統（https://dig.ctsp.gov.tw/ctsp3D/Account/Login?ReturnUrl=%2Fctsp3d%2Fctsp3d.html）
            li 台中好好行 (https://plan.construction.taichung.gov.tw/TCPatrol/)
            li 台中寬頻管道系統（https://tcroad.taichung.gov.tw/TCBBeamDN6/Account/LoginMaintain）
            li 苗栗歷年重劃清冊掃瞄建檔與查詢系統（）
            li 台中建築線 Web、App（）
            li 苗栗道路巡查系統 Web、App（）
            li 台中港工作業管理系統 Web、App（）
            li 台中都市計畫、國土計畫、區域計畫系統（）
            li 台中土地容積移轉申請案系統（）
            li 鹿港道路養護繪製平台系統（）
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
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner-container {
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: calc(100vw * (83 / 1440));
  @include rwd.large {
    flex-direction: row-reverse;
    margin-top: 83px;
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
        font-weight: 300;
        padding: 10px 0px;
        border-bottom: 1px solid #1b1b1b;
      }
      p {
        color: #585858;
        font-size: 16px;
        font-weight: 300;
        margin-top: 16px;
      }
      .email {
        margin-top: 48px;
        color: #585858;
        font-family: 'SF Pro Text';
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .right {
    width: 604px;
    height: 678px;
  }
}
.banner-divider {
  width: 100%;
  max-width: 1440px;
  position: absolute;
  top: 450px;
  z-index: 1;
}
.read-more {
  width: 225px;
  height: 225px;
  margin: 130px 0px 52px;
  animation: rotate 12s linear infinite;
  @include rwd.medium {
    width: calc(120px + 100vw * (105 / 1440));
    height: calc(120px + 100vw * (105 / 1440));
    margin: calc(50px + 100vw * (100 / 1440)) 0px
      calc(30px + 100vw * (22 / 1440)) 0px;
  }
  @include rwd.small {
    width: 120px;
    height: 120px;
    margin: 50px 0px 30px;
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
  margin: 8px 0 60px 0;
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
      font-weight: 300;
      line-height: 18px; /* 128.571% */
      letter-spacing: 0.81px;
      margin-top: 10px;
    }
  }
}

.list {
  margin-top: 123px;
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
    }
    .bottom {
      margin-top: 32px;
    }
  }
}
.about-bottom {
  margin-top: 418px;
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
