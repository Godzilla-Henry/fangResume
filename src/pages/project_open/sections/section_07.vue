<template lang="pug">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import icon01 from 'src/assets/img/open_icon01.png';
import icon02 from 'src/assets/img/open_icon02.png';

export default defineComponent({
  setup() {
    return {
      icon01,
      icon02,
    };
  },
});
</script>

<style lang="scss" scoped>
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
</style>
