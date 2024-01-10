<template lang="pug">
.section.section08
    .page-title-1 Project Goal 專案目標
    .title 我們的假設(Hypothesis)
    .desc 如果我們能夠讓首頁分類清楚、直觀，除了要讓使用者可以更容易找到合適的課程、並前往課程內容頁面、了解課程資訊並購買課程，使用者也可以一目了然地看到自己所購買的課程的學習進度。
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
</style>
