<template lang="pug">
.section.section03(ref="el")
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
  
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
//- Utils
import { useIntersectionObserver } from '@vueuse/core';
//- Image
import content01 from 'src/assets/img/open_content_01.png';

export default defineComponent({
  setup() {
    const el = ref();
    onMounted(() => {
      //- 是否出現在可視區
      const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }], observerElement) => {
          console.log(isIntersecting);
        }
      );
    });
    return {
      el,
      content01,
    };
  },
});
</script>

<style lang="scss" scoped>
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
</style>
