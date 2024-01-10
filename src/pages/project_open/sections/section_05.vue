<template lang="pug">
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
</template>

<style lang="scss" scoped>
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
</style>
