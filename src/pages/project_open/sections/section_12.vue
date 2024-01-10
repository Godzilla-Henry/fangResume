<template lang="pug">
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

<style lang="scss" scoped>
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
        width: 100%;
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
