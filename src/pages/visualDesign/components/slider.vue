<template lang="pug">
.dialog(v-if="isOpen")
  .dialog-overlay
  .dialog-content
    q-btn.close-btn(unelevated round @click.prevent="close")
      q-icon(name="fas fa-close")
    .row.justify-center.items-center.fit
      .playing-container
        .img-playing
          q-img(
            :src="imgPlaying"
            fit="contain"
            style="height: 100%;"
            :ratio="1"
          )
        .right 
          q-btn(
            icon="chevron_right" 
            round :outline="width > 600"
            size="md"
            @click="change(1)"
            v-if="imgList.length >= 2"
          )
        .left
          q-btn(
            icon="chevron_left" 
            round :outline="width > 600"
            size="md"
            @click="change(-1)"
            v-if="imgList.length >= 2"
          )

      .img-list(v-if="height > 800")
        .img(
          v-for="(img, index) in imgList" :key="index"
          :class="{'active': img == imgPlaying}"
          @click="changeToIndex(index)"
        )
          q-img(
            :src="img"
            fit="contain"
            :ratio="1"
          )
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import eventBus from 'src/Utils/useEventBus';

export default defineComponent({
  props: ['isOpen', 'subImg'],
  setup(props, { emit }) {
    const { width, height } = useWindowSize();
    const isOpen = ref<boolean>(false);
    //- 照片列表
    const imgList = ref([]) as any;
    //- 正在播放的照片
    const imgPlaying = ref();
    const nextIndex = ref(0);
    //- 更換
    const change = (action: any) => {
      let findIndex = imgList.value.findIndex(
        (item: string) => item == imgPlaying.value
      );
      nextIndex.value = findIndex + action;
      if (nextIndex.value < 0) nextIndex.value = imgList.value.length - 1;
      if (nextIndex.value >= imgList.value.length) nextIndex.value = 0;
      console.log('next', nextIndex.value);
      imgPlaying.value = imgList.value[nextIndex.value];
    };

    //- 指定Index
    const changeToIndex = (index: number) => {
      imgPlaying.value = imgList.value[index];
    };

    //- 關閉
    const close = () => {
      isOpen.value = false;
      document.body.style.overflow = 'auto';
    };

    onMounted(() => {
      eventBus.on('openSlider', (data) => {
        isOpen.value = true;
        console.log(data);
        imgList.value = data;
        imgPlaying.value = imgList.value[0];
      });
    });

    return {
      isOpen,
      imgList,
      imgPlaying,
      width,
      height,
      change,
      changeToIndex,
      close,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/assets/css/rwd.scss' as rwd;
.dialog {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .dialog-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  //- 彈窗主體
  .dialog-content {
    width: 80vw;
    height: 90vh;
    position: absolute;
    border-radius: 12px;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 74px calc(32px + 100vw * (153 / 1440));
    background-color: #fff;
    .close-btn {
      position: absolute;
      color: rgba(0, 0, 0, 0.6);
      top: 24px;
      right: 20px;
      font-size: 22px;
      @include rwd.large {
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        top: 0px;
        right: -55px;
        font-size: 16px;
      }
    }
    //- 正在播放
    .playing-container {
      width: 100%;
      height: 100%;
      max-height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .img-playing {
        width: 100%;
        max-width: 666px;
        height: 100%;
        max-height: 500px;
      }
      .right {
        position: absolute;
        right: -102px;
        color: #949494;
        @include rwd.medium {
          right: -70px;
          color: #949494;
        }
        @include rwd.small {
          right: 10px;
          color: #949494;
        }
      }
      .left {
        position: absolute;
        left: -102px;
        color: #949494;
        @include rwd.medium {
          left: -70px;
          color: #949494;
        }
        @include rwd.small {
          left: 10px;
          color: #949494;
        }
      }
    }
    //- 播放列表
    .img-list {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .img {
        position: relative;
        width: 80px;
        height: 80px;
        &:hover {
          cursor: pointer;
          &::before {
            display: none;
          }
        }

        &::before {
          content: ' ';
          position: absolute;
          width: 80px;
          height: 80px;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 10;
        }
        &.active::before {
          display: none;
        }
      }
    }
  }
}
</style>
