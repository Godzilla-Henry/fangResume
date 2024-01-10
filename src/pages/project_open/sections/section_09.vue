<template lang="pug">
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
  
</template>

<style lang="scss" scoped>
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
</style>
