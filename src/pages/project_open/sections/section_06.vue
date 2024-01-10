<template lang="pug">
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
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import user01 from 'src/assets/img/open_user01.png';
import user02 from 'src/assets/img/open_user02.png';

export default defineComponent({
  setup() {
    return {
      user01,
      user02,
    };
  },
});
</script>

<style lang="scss" scoped>
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
      border-style: solid;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      &::before {
        content: '';
        border-style: solid;
        position: absolute;
        bottom: -8px;
        z-index: -10;
      }
      &.right {
        left: 9px;
        border-width: 10px 10px 10px 0px;
        border-color: transparent #d9d9d9 transparent transparent;
        &::before {
          left: 2px;
          border-width: 8px 8px 8px 0px;
          border-color: transparent #ececec transparent transparent;
        }
      }
      &.left {
        left: calc(100% - 1px);
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent #d9d9d9;
        &::before {
          left: -10px;
          border-width: 8px 0 8px 8px;
          border-color: transparent transparent transparent #ececec;
        }
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
</style>
