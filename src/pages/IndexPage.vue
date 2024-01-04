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
  .section.section03
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
        img.animation-invisible(:src="content01" style="height: 350px;")
  .section.section04 
    .page-title-1 Timeline 時間線

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
//- Image
import banner01 from 'src/assets/img/open_banner_01.png';
import content01 from 'src/assets/img/open_content_01.png';
//- Utils
import { useWindowScroll } from '@vueuse/core';
import { watch } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const { y } = useWindowScroll();
    watch(
      () => y.value,
      (val) => {
        console.log(val);
      }
    );

    return {
      y,
      banner01,
      content01,
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
    @include rwd.sm {
      width: 100%;
    }
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
    @include rwd.sm {
      display: none;
    }
  }
}
</style>
