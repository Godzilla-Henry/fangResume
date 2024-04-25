<template lang="pug">
.page
  .section
    div.banner-container
      q-img.img(
        :src="imgUrl"
        spinner-color="#6D6D6D"
      )

  .section.column.items-center
    .line-text Scroll to see recently
    .line
    q-img.read-more(
      :src="circle"
      spinner-color="#6D6D6D"
    )
  .section.column.content-padding.last-section
    .card
      q-img.thumbnail(
        :src="thumbnail01"
        spinner-color="#6D6D6D"
      )
      .window.w-postion01
        .window-title  Open Co-learning Community Online Learning Platform
        .window-subtitle July 2023
        .action 
          q-btn.q-px-xl.q-py-sm(outline rounded color="#666" label="More" )
      .small-window
        .window-title  Open Co-learning Community Online Learning Platform
        .window-subtitle July 2023
        .action 
          q-btn.q-px-xl.q-py-sm(outline rounded color="#666" label="More" )
    .card
      .window.w-postion02
        .window-title  Taichung City Building Line Information Website
        .window-subtitle Nov 2023
        .action 
          q-btn.q-px-xl.q-py-sm(outline rounded color="#666" label="More" )
      q-img.thumbnail.thumb-postion02(
        :src="thumbnail02"
        spinner-color="#6D6D6D"
      )
      .small-window
        .window-title  Taichung City Building Line Information Website
        .window-subtitle Nov 2023
        .action 
          q-btn.q-px-xl.q-py-sm(outline rounded color="#666" label="More" )
    .card
      q-img.thumbnail(
        :src="thumbnail03"
        spinner-color="#6D6D6D"
      )
      .window.w-postion01
        .window-title  Website For Road Patrol Management System
        .window-subtitle Dec 2023
        .action 
          q-btn.q-px-xl.q-py-sm(outline rounded color="#666" label="More" )
      .small-window
        .window-title  Website For Road Patrol Management System
        .window-subtitle Dec 2023
        .action 
          q-btn.q-px-xl.q-py-sm(outline rounded color="#666" label="More" )
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
//- img
import banner01 from 'src/assets/fangImg/uiux/banner01.png';
import banner02 from 'src/assets/fangImg/uiux/banner02.png';
import circle from 'src/assets/fangImg/uiux/circle.png';
import thumbnail01 from 'src/assets/fangImg/uiux/thumbnail01.png';
import thumbnail02 from 'src/assets/fangImg/uiux/thumbnail02.png';
import thumbnail03 from 'src/assets/fangImg/uiux/thumbnail03.png';

export default defineComponent({
  setup() {
    const { width } = useWindowSize();

    const imgUrl = ref();

    const reBannerSource = (val: number) => {
      if (val > 600) imgUrl.value = banner01;
      else if (val <= 600) imgUrl.value = banner02;
    };
    reBannerSource(width.value);
    watch(
      () => width.value,
      (val: number) => reBannerSource(val)
    );

    return {
      imgUrl,
      circle,
      thumbnail01,
      thumbnail02,
      thumbnail03,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.banner-container {
  height: 510px;
  position: relative;
  margin-top: calc(100vw * (83 / 1440));
  @include rwd.large {
    margin-top: 83px;
  }
  @include rwd.medium {
    height: calc(100vw * (510 / 1440));
  }
  @include rwd.small {
    height: calc(100vw * (276 / 600));
  }
  .img {
    width: 100%;
    position: absolute;
    @include rwd.large {
      width: 1347px;
      left: -27px;
    }
    @include rwd.medium {
      width: calc(100vw * (1347 / 1440));
      left: calc(100vw * (-27 / 1440));
    }
  }
}
.line-text {
  margin: 50px 0px 16px;
  color: #989898;
  font-size: 20px;
  font-weight: 400;
  @include rwd.medium {
    margin: calc(30px + 100vw * (20 / 1440)) 0px calc(10px + 100vw * (6 / 1440));
    font-size: calc(12px + 100vw * (8 / 1440));
  }
  @include rwd.small {
    margin: 30px 0px 10px;
    font-size: 12px;
  }
}
.line {
  width: 0px;
  height: 106px;
  border-left: 1px solid #989898;
  @include rwd.medium {
    height: calc(50px + 100vw * (56 / 1440));
  }
  @include rwd.small {
    height: 50px;
  }
}
.read-more {
  width: 225px;
  height: 225px;
  animation: rotate 12s linear infinite;
  margin-top: 22px;
  @include rwd.medium {
    width: calc(120px + 100vw * (105 / 1440));
    height: calc(120px + 100vw * (105 / 1440));
    margin-top: calc(10px + 100vw * (12 / 1440));
  }
  @include rwd.small {
    width: 120px;
    height: 120px;
    margin-top: 10px;
  }
}

.card {
  position: relative;
  width: 100%;
  margin-top: 120px;
  @include rwd.medium {
    margin-top: calc(60px + 100vw * (60 / 1440));
  }
  @include rwd.small {
    margin-top: 60px;
  }
  .thumbnail {
    width: 67.5%;
    border-radius: 60px;
    border: 1px solid #7a7a7a;
    @include rwd.sm {
      width: 100%;
    }
    @include rwd.xs {
      width: 100%;
    }
  }
  .window {
    width: calc(32.5% + 80px);
    position: absolute;
    border-radius: 16px;
    border: 1px solid #666;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(44.5px);
    padding: 24px;
    @include rwd.medium {
      padding: calc(12px + 100vw * (12 / 1440));
    }
    @include rwd.sm {
      display: none;
    }
    @include rwd.xs {
      display: none;
    }
    .window-title {
      color: #666;
      font-size: 28px;
      font-weight: 400;
      @include rwd.medium {
        font-size: calc(16px + 100vw * (12 / 1440));
      }
      @include rwd.small {
        font-size: 16px;
      }
    }
    .window-subtitle {
      text-align: right;
      line-height: 10px;
      color: #666;
      font-size: 16px;
      font-weight: 400;
      @include rwd.medium {
        font-size: calc(12px + 100vw * (4 / 1440));
      }
      @include rwd.small {
        font-size: 12px;
      }
    }
    .action {
      margin-top: 42px;
      text-align: right;
      @include rwd.medium {
        margin-top: calc(22px + 100vw * (20 / 1440));
      }
      @include rwd.small {
        margin-top: 22px;
      }
    }
  }
  .w-postion01 {
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
  }
  .w-postion02 {
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    z-index: 10;
  }
  .thumb-postion02 {
    margin-left: 30%;
    @include rwd.sm {
      margin: 0px;
    }
    @include rwd.xs {
      margin: 0px;
    }
  }
  .small-window {
    display: none;
    width: 100%;
    border-radius: 16px;
    border: 1px solid #666;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(44.5px);
    padding: 24px;
    margin-top: 30px;
    @include rwd.sm {
      display: block;
    }
    @include rwd.xs {
      display: block;
    }
    .window-title {
      color: #666;
      font-size: calc(16px + 100vw * (12 / 1440));
      font-weight: 400;
      @include rwd.xs {
        font-size: 16px;
      }
    }
    .window-subtitle {
      text-align: right;
      line-height: 10px;
      color: #666;
      font-size: calc(12px + 100vw * (4 / 1440));
      font-weight: 400;
      @include rwd.xs {
        font-size: 12px;
      }
    }
    .action {
      margin-top: calc(22px + 100vw * (20 / 1440));
      text-align: right;
      @include rwd.small {
        margin-top: 22px;
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
