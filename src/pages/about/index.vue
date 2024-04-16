<template lang="pug">
.page
  .section
    .row.reverse.banner-container
      .col-12.col-lg-5
        div.img-container
          q-img.img(
            :src="imgUrl"
            spinner-color="#6D6D6D"
          )
      .col-12.col-lg-7
        .content
          .line
          .tag 關於我
          .title Hi, 我是 Fang
          .subtitle 一年多以上介面設計經歷，與PM及前端技術相互協作，持續在產品使用上優化與創新。
          p 過去接觸視覺設計、網頁及手機APP設計、響應式(RWD)網站設計、政府網站設計等多重項目，能獨立從規劃流程、設計草稿到最後精稿的產出，具備設計介面的互動能力，以及0-1建置設計系統。在職場過程中，我深知學習經驗和反饋的重要性，從最初的平面設計、UI/UX再到前端語法切版，每個階段都必須持續學習並不斷精進自己的技能，才能在科技產業中與時俱進。
          p 為提升自身實力，透過自學及side project的方式培養獨立思辨，在職同時，加入UI實戰營課程，以直播互動課程、作業及小組專題，不斷吸收業界新知與實戰技能，持續學習並接受挑戰。我期待將各種知識與經驗相互融合，實現並創造更有影響力的作品，為社會注入更多正面與美好的力量。
          p 在興趣方面，我喜歡文創手作、旅行，並對觀察生活細節充滿好奇心，享受從不同領域的新知中獲取靈感，期待以此為催化劑，帶來更多積極而有益的改變。
          p.text-right
            q-icon.q-mx-sm(name="far fa-envelope" color="#585858") 
            | xlingfun@gmail.com
  .banner-divider
    q-img.img(
      :src="line"
      spinner-color="#6D6D6D"
    )
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
//- img
import banner01 from 'src/assets/fangImg/aboutMe/banner01.png';
import line from 'src/assets/fangImg/aboutMe/line.png';

export default defineComponent({
  setup() {
    const imgUrl = ref(banner01);

    return {
      imgUrl,
      line,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner-container {
  position: relative;
  .content {
    padding: 0px 120px;
    .line {
      width: 40px;
      border-top: 1px solid #b1b1b1;
      margin-top: 7vw;
      margin-bottom: 20px;
      @include rwd.large {
        margin-top: 135px;
      }
    }
    .tag {
      color: #585858;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .title {
      color: #4c4c4c;
      font-size: 38px;
      font-weight: 600;
      margin-bottom: 32px;
    }
    .subtitle {
      color: #1b1b1b;
      font-size: 20px;
      font-weight: 300;
      padding: 10px 0px;
      border-bottom: 1px solid #1b1b1b;
    }
    p {
      color: #585858;
      font-size: 20px;
      font-weight: 300;
      margin-top: 16px;
    }
    @include rwd.medium {
      padding: 0px calc(150px * (100vw * (1440 / 1920) / 1920px));
    }
    @include rwd.small {
      padding: 0px 30px;
    }
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      max-width: 500px;
      position: relative;
      margin-top: 7vw;
      @include rwd.large {
        margin-top: 135px;
      }
      @include rwd.medium {
        width: calc(100vw * (1440 / 1920));
      }
    }
  }
}
.banner-divider {
  width: 100%;
  position: absolute;
  top: 460px;
  z-index: -1;
}
</style>
