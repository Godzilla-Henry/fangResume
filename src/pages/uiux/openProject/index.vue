<template lang="pug">
.page
  .section.content-padding.banner
    .title Open 學朋 — 共學社群線上學習平台
    .subtitle Open Co-learning Community Online Learning Platform
  .section.content-padding
    .banner-img(:style="{'background-position-y': 'calc(45% - ' + y * 0.1 + 'px' + ')'}")
  .section.content-padding.table(style="margin-top: 64px;")
    .table-label Project details
    .table-content
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
              p Brand identity 
              p Visual Design 
              p UI Design 
              p Design system 
              p Mock Up 
              p Illustration
            td(valign="top")  
              p Jing, Mou, Amy ,Mina ,Stoos, me
            td(valign="top")  
              p July 2023 - Aug 2023 (2 Weeks)
            td(valign="top") 
              p Figma 
              p Illustration 
              p Notion 
              p Discord
  .section.content-padding.table(style="margin-top: 160px; margin-bottom: 120px;")
    .intro.row.reverse
      .col-12.col-md-6.intro-img-container
        .intro-img
          q-img(:src="open01")
      .col-12.col-md-6
        .intro-card
          .subtitle Context 情境
          .title 疫情期間居隔、居家上班上課等因素，帶動線上學習產業的蓬勃發展
          .describe 《CNBC》報導：「新冠疫情在2020年4月達到高峰，超過190個國家的學校關閉，影響了90%的學習者，或者可以說將近16億的人口，對學生、家長和老師來說，這是個讓學習從線下轉到線上的轉捩點。」 近幾年知識變現產業越來越蓬勃，各家學習平台都有自己的特色以及經營方針，本團隊將會針對特定目標族群，設計出能獲得良好學習體驗的學習平台。
        .intro-card
          .subtitle What is Open 學朋 ?
          .title 這是一個專為設計師打造的共學社群線上學習平台
          .describe 學朋是一個開放的學習社群，匯聚了學校、線上課程、直播、實戰營等各種學習資源，並提供一個友善且充滿互助精神的平台，讓每個人都可以自由分享自己的想法與見解；打破以往的線上學習方式，以營隊共學的方式讓學習不再是孤獨的旅程，串連有共同目標的學伴一同學習交流、互助。
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Timeline 時間線
    .section-img  
      q-img(:src="open02")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Target Audience 目標受眾
    .card-list01 
      .card   
        .index 01
        .title 
          p 目標族群 
          p Chosen Persona
        .desc 
          p 在各個設計領域中的 Designer
          p 對於設計領域感興趣者
          p 嘗試第二專長的轉職者
          p 精進技能的專業設計師
          p 想了解最新設計趨勢的教育者
      .card   
        .index 02
        .title 
          p 行為 
          p Behaviors
        .desc 
          p 平時就會自行尋找各種學習資源 ，提升產業knowhow
          p 個人學習為主，沒有其他夥伴一起學習
          p 以輸入為主，比較少輸出練習交流的機會
          p 主動學習新技術和工具以增加競爭力
          p 想與其他教育工作者交流教學經驗
      .card   
        .index 03
        .title 
          p 需求與目標
          p Needs & Goals
        .desc 
          p 希望精進設計技能，並希望有跨領域技知識
          p 發展興趣，提升個人技能，希望找尋 Mentor 了解更多職涯規劃
          p 希望能和其他設計師共同交流
          p 提高工作效率，創造更具創意的解決方案
          p 提升教學質量，開發與更新教學課程
  .section.content-padding(style="margin-top: 120px;")
    .section-tag User Insight 使用者洞察
    .section-img  
      q-img(:src="open03")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Problem Statement 問題描述
    .section-img  
      q-img(:src="open04")
  .section(style="margin-top: 80px;")
    .short-banner   
      .title HWM (How might we)
      .subtitle 我們如何幫助使用者快速找到適合的課程，並且能夠快速瀏覽已購買的課程及上課進度？
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Project Goal 專案目標
    .goal   
      .title 我們的假設(Hypothesis)
      .desc 如果我們能夠讓首頁分類清楚、直觀，除了要讓使用者可以更容易找到合適的課程、並前往課程內容頁面、了解課程資訊並購買課程，使用者也可以一目了然地看到自己所購買的課程的學習進度。
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Principles 設計原則
    .card-list02
      .card   
        .title 
          p 活潑簡潔 
          p Lively & Simple
        .desc 
          p 對於網站的使用者介面，必須設計出易於使用又好看的界面，讓學習者容易瀏覽和搜尋符合自身需求的課程。
      .card   
        .title 
          p 易於導航 
          p Easy To Navigate
        .desc 
          p 針對網站上不同的功能區域，要有合理的資訊結構，確保學習者在網站上會找到他們需要的資訊。
      .card   
        .title 
          p 清晰明確 
          p Clear & Definite
        .desc 
          p 如課程名稱、活動優惠、有時效性講座等都要以清楚的方式呈現給學習者看，以激發學習者對課程的興趣。

  .section.content-padding(style="margin-top: 120px;")
    .section-tag Competitor Analysis 競品分析
    .section-img  
      q-img(:src="open05")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Competitive Brand Positioning 競品品牌定位
    .section-img  
      q-img(:src="open06")
    .section-img(style="margin-top: 80px;")
      q-img(:src="open07")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag 資訊架構 Information Architechure
    p 本次專案著重的頁面功能
    .section-img  
      q-img(:src="open08")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Road Map 產品路線圖
    .section-img  
      q-img(:src="open09")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Brand Identify 品牌識別
    .section-img  
      q-img(:src="open10")
  .section(style="margin-top: 120px;")
    .section-img  
      q-img(:src="open11")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Color System 色彩系統
    .section-img  
      q-img(:src="open12")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Typography 字體
    .section-img  
      q-img(:src="open13") 
    .section-img(style="margin-top: 80px;")
      q-img(:src="open14")
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Design System 設計系統
  .section
    .section-img  
      q-img(:src="open15") 
  .section.content-padding(style="margin-top: 120px;")
    .section-tag Wireframe 線框圖
  .section
    .section-img  
      q-img(:src="open16") 
  .section.content-padding(style="margin-top: 120px;")
    .section-tag UI Design 使用者介面設計
  .section.last-section
    .section-img
      q-img(:src="open17") 
    .section-img
      q-img(:src="open18") 

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import open01 from 'src/assets/fangImg/uiux/open/open_5.png';
import open02 from 'src/assets/fangImg/uiux/open/open_1.png';
import open03 from 'src/assets/fangImg/uiux/open/open_2.png';
import open04 from 'src/assets/fangImg/uiux/open/open_23.png';
import open05 from 'src/assets/fangImg/uiux/open/open_9.png';
import open06 from 'src/assets/fangImg/uiux/open/open_10.png';
import open07 from 'src/assets/fangImg/uiux/open/open_11.png';
import open08 from 'src/assets/fangImg/uiux/open/open_12.png';
import open09 from 'src/assets/fangImg/uiux/open/open_13.png';
import open10 from 'src/assets/fangImg/uiux/open/open_14.png';
import open11 from 'src/assets/fangImg/uiux/open/open_15.png';
import open12 from 'src/assets/fangImg/uiux/open/open_16.png';
import open13 from 'src/assets/fangImg/uiux/open/open_17.png';
import open14 from 'src/assets/fangImg/uiux/open/open_18.png';
import open15 from 'src/assets/fangImg/uiux/open/open_19.png';
import open16 from 'src/assets/fangImg/uiux/open/open_20.png';
import open17 from 'src/assets/fangImg/uiux/open/open_21.png';
import open18 from 'src/assets/fangImg/uiux/open/open_22.png';

export default defineComponent({
  setup() {
    const { y } = useWindowScroll();
    return {
      y,
      open01,
      open02,
      open03,
      open04,
      open05,
      open06,
      open07,
      open08,
      open09,
      open10,
      open11,
      open12,
      open13,
      open14,
      open15,
      open16,
      open17,
      open18,
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
  background-image: url('src/assets/fangImg/uiux/open/open_3.png');
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
    table {
      border-collapse: collapse;
      width: 100%;
      th,
      td {
        width: 240px;
        text-align: left;
      }
      th {
        color: #e87c05;
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
      color: #e87c05;
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
.section-tag {
  color: #e87c05;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  margin-bottom: 16px;
}
.card-list01 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 27px;
  .card {
    width: 382px;
    padding: 27.698px;
    border-radius: 16.619px;
    border: 0.692px solid #c8c9c9;
    .index {
      color: #101828;
      font-size: 38.777px;
      font-weight: 700;
      line-height: 140%; /* 54.287px */
      margin-bottom: 16px;
    }
    .title {
      color: #101828;
      font-size: 22.158px;
      font-weight: 700;
      line-height: 140%; /* 31.021px */
      p {
        margin: 0;
      }
      margin-bottom: 16px;
    }
    .desc {
      color: #475467;
      font-size: 16.619px;
      font-weight: 400;
      line-height: 160%; /* 26.59px */
    }
  }
}
.short-banner {
  display: flex;
  width: 100%;
  height: 262px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  .title {
    color: #101010;
    font-size: 32px;
    font-weight: 700;
    line-height: 140%; /* 44.8px */
    margin-bottom: 24px;
  }
  .subtitle {
    color: #475467;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 38.4px */
  }
}
.goal {
  width: 60%;
  .title {
    color: #101828;
    font-size: 24px;
    font-weight: 400;
    line-height: 150%; /* 36px */
    margin-bottom: 16px;
  }
  .subtitle {
    color: #515151;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
}
.card-list02 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 27px;
  .card {
    width: 382px;
    height: 381px;
    padding: 53px;
    border-radius: 16.667px;
    border: 0.833px solid #98a2b3;
    .title {
      color: #000;
      font-size: 22px;
      font-weight: 700;
      line-height: 140%; /* 30.8px */
      margin-bottom: 33px;
      p {
        margin: 0;
      }
    }
    .desc {
      color: #515151;
      font-size: 16px;
      font-weight: 400;
      line-height: 175%; /* 28px */
    }
  }
}
</style>
