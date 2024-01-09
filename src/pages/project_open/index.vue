<template lang="pug">
q-page.page
  .section.section01
    h3 Open 學朋 — 共學社群線上學習平台
    h5 Open Co-learning Community Online Learning Platform
  .banner01(:class="{'custom-parallax': y>175}")
  .section.section02
    .row
      .title Project details
      table 
        thead
          tr
            th My Roles
            th Team
            th Duration
            th Tool
        tbody
          tr
            td
              pre.
                Brand identity
                Visual Design 
                UI Design 
                Design system 
                Mock Up 
                Illustration
            td.
                Jing, Mou, Amy ,Mina ,Stoos, me
            td.
                July 2023 - Aug 2023 (2 Weeks)
            td
              pre.
                Figma 
                Illustration 
                Notion 
                Discord
  .section.section03(ref="section03")
    .relative-position
      .text 
        .contnet01
          .page-title-1 Context 情境
          h6 疫情期間居隔、居家上班上課等因素，帶動線上學習產業的蓬勃發展
          p
            |《CNBC》報導：「新冠疫情在2020年4月達到高峰，超過190個國家的學校關閉，影響了90%的學習者，或者可以說將近16億的人口，對學生、家長和老師來說，這是個讓學習從線下轉到線上的轉捩點。」近幾年知識變現產業越來越蓬勃，各家學習平台都有自己的特色以及經營方針，本團隊將會針對特定目標族群，設計出能獲得良好學習體驗的學習平台。
        .contnet02
          .page-title-1 What is Open 學朋 ?
          h6 這是一個專為設計師打造的共學社群線上學習平台
          p
            |學朋是一個開放的學習社群，匯聚了學校、線上課程、直播、實戰營等各種學習資源，並提供一個友善且充滿互助精神的平台，讓每個人都可以自由分享自己的想法與見解；打破以往的線上學習方式，以營隊共學的方式讓學習不再是孤獨的旅程，串連有共同目標的學伴一同學習交流、互助。
      .img 
        img(:src="content01" style="height: 350px;")
  .section.section04 
    .page-title-1 Timeline 時間線
    .timeLine
      table
        thead
          tr
            th(style="width: 400px;") 
              p 任務/階段
            th.row.justify-between
              p 7 月 20 日
              p 8 月 2 日
        tbody
          tr
            td 
              small Kick-Off
              p 專案啟動會議
            td
              linear(:offset="0" :parts="1" :text="'7/20 (1 天)'")
          tr
            td 
              small Milestone 1
              p PM 與專案夥伴確認專案目標內容
            td
              linear(:offset="1" :parts="2" :text="'7/21-7/22 (2 天)'")
          tr
            td 
              small Milestone 2
              p 競品分析、 網站地圖、流程圖製作、品牌視覺定調
            td
              linear(:offset="3" :parts="5" :text="'7/23-7/27 (5 天)'")
          tr
            td 
              small Milestone 3
              p Wireframe 製作
            td
              linear(:offset="5" :parts="3" :text="'7/25-7/27 (3 天)'")
          tr
            td 
              small Milestone 4
              p Design Review、設計精稿
            td
              linear(:offset="7" :parts="6" :text="'7/27-8/01 (6 天)'")
          tr
            td 
              small Milestone 5
              p Component / Variants 製作與整理、Prototype製作
            td
              linear(:offset="8" :parts="5" :text="'7/28-8/01 (5 天)'")
          tr
            td 
              small Milestone 6
              p 設計交付文件整理
            td
              linear(:offset="9" :parts="4" :text="'7/29-8/01 (4 天)'")
          tr
            td 
              small Milestone 7
              p 專案最終繳交期限
            td
              linear(:offset="13" :parts="1" :text="'8/02'")
  .section.section05
    .page-title-1 Target Audience 目標受眾
    .card-container.row.items-center.justify-center
      .card(style="margin-right: 25px;")
        .card-number 01
        .card-title 
          |目標族群 
          br 
          |Chosen Persona
        .card-text 在各個設計領域中的 Designer
      .card(style="margin-right: 25px;")
        .card-number 02
        .card-title 
          |行為 
          br 
          |Behaviors
        .card-text 
          |平時就會自行尋找各種學習資源 (不只有設計相關)
          |個人學習為主，沒有其他夥伴一起學習
          |以輸入為主，比較少輸出練習交流的機會
      .card
        .card-number 03
        .card-title 
          |需求與目標
          br 
          |Needs & Goals
        .card-text 
          |希望精進設計技能，並希望有跨領域技能知識
          |希望能和其他設計師共同交流
          |希望找尋 Mentor 、了解更多職涯規劃
  .section.section06  
    .page-title-1 User Insight 使用者洞察
    .column
      .row
        .user-image 
          img(:src="user01" style="width: 320px;")
        .textbox
          .tri.right
          .rect 
            |身為一個 junior 設計師，我期望能在
            strong 「平台首頁」瀏覽最新與熱門課程及其他活動
            |，讓我可以
            strong 進一步了解感興趣的課程
      .row
        .textbox
          .tri.left
          .rect 
            |身為一個 junior 設計師，我期望能在
            strong 「課程資訊頁面」瀏覽課程簡介影片、老師簡介、課綱、學員評價等內容
            |，讓我可以
            strong 判斷這堂課程適不適合我。
        .user-image 
          img(:src="user02" style="width: 186px;")
  .section.section07 
    .page-title-1 Problem Statement 問題描述
    .row.items-center(style="height: 390px;") 
      .left.row.items-center 
        img(:src="icon01" style="width:120px; height:120px;")
        .content
          p(style="margin-bottom: 16px;") 1.使用者在平台上看到玲琅滿目的課程不知道要從何找到符合自己需求的課程。
          p(style="margin-bottom: 16px;") 2.使用者想要有mentor或是學習夥伴能和自己共同學習分享經驗知識。
          p 3.使用者想要上課時，需要耗費許多時間找到自己購買的課程以及學習進度。
      .right
        .memo  
          .row.items-center 
            img(:src="icon02" style="width:70px; height:70px;")
            .title 重點整理
          ul 
            li 使用者希望使用介面可以直觀地探索課程
            li 使用者希望在平台首頁上就能一目了然地看到自己所購買的課程及學習進度
            li 使用者希望能有學伴或是mentor共同學習分享經驗知識
  .question
    .title HWM (How might we)
    .subtitle 我們如何幫助使用者快速找到適合的課程，並且能夠快速瀏覽已購買的課程及上課進度？
  .section.section08
    .page-title-1 Project Goal 專案目標
    .title 我們的假設(Hypothesis)
    .desc 如果我們能夠讓首頁分類清楚、直觀，除了要讓使用者可以更容易找到合適的課程、並前往課程內容頁面、了解課程資訊並購買課程，使用者也可以一目了然地看到自己所購買的課程的學習進度。
  .section.section09
    .page-title-1 Principles 設計原則
    .row.items-center.justify-center
      .card(style="margin-right: 25px;")
        .title 
          |活潑簡潔 
          br
          |Lively & Simple
        .desc.
          對於網站的使用者介面，必須設計出易於使用又好看的界面，讓學習者容易瀏覽和搜尋符合自身需求的課程。
      .card(style="margin-right: 25px;")
        .title 
          |易於導航 
          br
          |Easy To Navigate
        .desc.
          針對網站上不同的功能區域，要有合理的資訊結構，確保學習者在網站上會找到他們需要的資訊。
      .card
        .title 
          |清晰明確 
          br
          |Clear & Definite
        .desc.
          如課程名稱、活動優惠、有時效性講座等都要以清楚的方式呈現給學習者看，以激發學習者對課程的興趣。
  .section.section10
    .page-title-1 Competitor Analysis 競品分析
    .imgContainer
      img(:src="competitor01" style="width:100%;")
  .section.section11
    .page-title-1 Competitive Brand Positioning 競品品牌定位
    .imgContainer
      img(:src="competitor02" style="width:100%; margin-top: 80px; margin-bottom: 160px;")
      img(:src="competitor03" style="width:100%;")
  .section12
    .section
      .section-title 📍品牌定位
      .card-container.row.items-center.justify-center
        .card.column.items-center.justify-start(style="margin-right:25px;")
          .title 願景與使命
          .desc 提供專業實戰課程，
            strong 串連有共同目標的學伴一起學習交流、互助
            |，成為學習或職涯上的朋友！
          .footer.q-mt-auto 串聯共同目標的學伴，提供專業實戰課程
        .card.column.items-center.justify-start(style="margin-right:25px;")
          .title 定位
          .desc 強調平台的主要
            strong 特色在於共學(Collaborative Learning)
            |，成為學習者能夠共同學習、分享知識、建立職涯夥伴的社群型線上學習平台。
          .footer.q-mt-auto 以共學社群為核心，打造互助合作的線上學習平台
        .card.column.items-center.justify-start(style="margin-right:25px;")
          .title 標語
          .desc 營隊夥伴共同學習，一起展開職涯、改變生活 ！
          .footer.q-mt-auto 啟發職涯發展，改變生活
        .card.column.items-center.justify-start
          .title 帶給使用者感受
          .desc 平台注重提供
            strong 陪伴、親近的學習環境
            |，並致力於幫助就業和激發創新思維，為使用者帶來獨特的學習體驗。
          .footer.q-mt-auto 陪伴、親近、幫助就業、創新
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from 'vue';
//- Image
import banner01 from 'src/assets/img/open_banner_01.png';
import content01 from 'src/assets/img/open_content_01.png';
import user01 from 'src/assets/img/open_user01.png';
import user02 from 'src/assets/img/open_user02.png';
import icon01 from 'src/assets/img/open_icon01.png';
import icon02 from 'src/assets/img/open_icon02.png';
import competitor01 from 'src/assets/img/open_competitor01.png';
import competitor02 from 'src/assets/img/open_competitor02.png';
import competitor03 from 'src/assets/img/open_competitor03.png';
//- Utils
import { useWindowScroll, useElementBounding } from '@vueuse/core';
//- Components
import linear from './components/linearProgress.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    linear,
  },
  setup() {
    const { y } = useWindowScroll();

    return {
      y,
      banner01,
      content01,
      user01,
      user02,
      icon01,
      icon02,
      competitor01,
      competitor02,
      competitor03,
    };
  },
});
</script>

<style lang="scss" scoped>
// $
@use 'src/assets/css/rwd.scss' as rwd;
.section01 {
  h3 {
    font-size: 36px;
    font-weight: 700;
    color: #414141;
    margin: 10px;
    margin-top: 25px;
  }
  h5 {
    font-size: 22px;
    font-weight: 500;
    color: #232323;
    margin: 10px;
    margin-bottom: 10px;
  }
}
.banner01 {
  background-image: url('src/assets/img/open_banner_01.png');
  /* Full height */
  height: calc(100vw * (790 / 1440));
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
}
.custom-parallax {
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center 65px;
}
.section02 {
  padding: 40px auto;
  .title {
    padding: 10px 0px;
    width: 170px;
    font-size: 20px;
    font-weight: 700;
  }
  table {
    width: calc(100% - 170px);
    border-collapse: collapse;
    pre {
      margin: 0px;
    }
    th,
    td {
      text-align: left;
      vertical-align: top;
      padding: 10px 0px;
      padding-left: 25px;
    }
    thead tr {
      border-bottom: 1px solid #535353;
    }
    thead tr th {
      color: #e87c05;
      font-size: 16px;
      font-weight: 700;
    }
    tbody tr td {
      color: #262626;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
.section03 {
  .text {
    width: 66%;
    h6 {
      margin: 5px 0px 10px;
      color: #101828;
      font-weight: 400;
      font-size: 20px;
    }
    p {
      color: #515151;
      font-weight: 400;
      font-size: 16px;
    }
  }
  .img {
    position: absolute;
    top: -60px;
    right: -10px;
  }
}
.section04 {
  .timeLine {
    padding: 20px 15px;
    background-color: #ff880615;
    border: 1px solid #ff8806;
    border-radius: 25px;
    table {
      width: 100%;
      text-align: left;
      thead tr th {
        color: #2d2d2d;
        font-weight: 700;
        font-size: 16px;
      }
      tbody tr td {
        vertical-align: top;
        small {
          color: rgba($color: #000000, $alpha: 0.5);
          font-size: 12px;
          font-weight: 700;
        }
        p {
          color: #101010;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}
.section05 {
  .card-container {
    .card {
      width: calc((100% - 50px) / 3);
      height: 380px;
      padding: 23px;
      background: #fff;
      border: 0.692px solid #c8c9c9;
      border-radius: 16.619px;
      .card-number {
        color: #101828;
        font-size: 38px;
        font-style: normal;
        font-weight: 700;
      }
      .card-title {
        color: var(--Text-Primary, #101828);
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .card-text {
        color: var(--Text-Secondary, #475467);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
}
.section06 {
  .page-title-1 {
    margin-bottom: 80px;
  }
  .textbox {
    position: relative;
    width: calc(100% - 320px);
    .tri {
      width: 0;
      height: 0;
      border: 10px solid;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &.right {
        border-color: transparent #d9d9d9 transparent transparent;
      }
      &.left {
        border-color: transparent transparent transparent #d9d9d9;
        right: -20px;
      }
    }
    .rect {
      background-color: rgba($color: #d9d9d9, $alpha: 0.5);
      border: 1px solid #d9d9d9;
      border-radius: 16px;
      padding: 16px 32px;
      color: #101828;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 18px;
      strong {
        color: #101828;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
      }
    }
  }
}
.section07 {
  .left {
    .content {
      margin-left: 32px;
      p {
        color: #475467;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        margin: 0px;
      }
    }
  }
  .right {
    .memo {
      width: 350px;
      height: 390px;
      background: #fef7e4;
      border-radius: 24px;
      margin-left: 20px;
      padding: 16px;
      .title {
        color: #000;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
      }
      ul li {
        color: rgba(0, 0, 0, 0.64);
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 16px;
      }
    }
  }
}
.question {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 262px;
  background: #f9f9f9;
  .title {
    color: #101010;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .subtitle {
    color: #475467;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  }
}
.section08 {
  .title {
    color: #101828;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .desc {
    color: #515151;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
}
.section09 {
  .card {
    width: calc((100% - 50px) / 3);
    height: 381px;
    padding: 53px;
    border-radius: 16px;
    border: 1px solid #98a2b3;
    .title {
      color: v#000;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 35px;
    }
    .desc {
      color: #515151;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
}
.section12 {
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
  background: url('src/assets/img/open_banner02.png');
  height: calc(100vw * (590 / 1440));
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
  .section-title {
    color: #515151;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .card-container {
    .card {
      width: calc((100% - 75px) / 4);
      height: 372px;
      padding: 16px;
      border-radius: 16px;
      background: #fff;
      box-shadow: 0px 4px 12px -2px rgba(24, 39, 75, 0.08),
        0px 3px 6px -3px rgba(24, 39, 75, 0.12);
      .title {
        margin: 16px 0px;
        text-align: center;
        color: #515151;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
      }
      .desc {
        margin: 16px 0px;
        color: #6e6e6e;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        strong {
          color: #ff8806;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
        }
      }
      .footer {
        height: 42px;
        border-top: 1px solid #bcbcbc;
        padding-top: 8px;
        text-align: center;
        color: #515151;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
      }
    }
  }
}
</style>
