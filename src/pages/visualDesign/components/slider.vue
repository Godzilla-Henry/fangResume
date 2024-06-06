<template lang="pug">
.dialog(v-if="isOpen")
  .dialog-overlay(@click.prevent="handleOpen()")
  .dialog-content
    q-btn.close-btn(unelevated round @click.prevent="handleOpen()")
      q-icon(name="fas fa-close")
    .row.justify-center.items-center.fit
      .playing-container
        .img-playing
          q-img(
            :src="imgPlaying"
            fit="contain"
            :ratio="1"
          )
        .right 
          q-btn(
            icon="chevron_right" 
            round :outline="width > 600"
            size="md"
            @click="change(1)"
          )
        .left
          q-btn(
            icon="chevron_left" 
            round :outline="width > 600"
            size="md"
            @click="change(-1)"
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
import { defineComponent, ref, watchEffect } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useGlobal } from 'src/stores';

export default defineComponent({
  props: ['isOpen', 'subImg'],
  setup(props, { emit }) {
    const { width, height } = useWindowSize();
    const globalStore = useGlobal();
    const isOpen = ref<boolean>(props.isOpen);
    //- 照片列表
    const imgList = ref([]) as any;
    //- 正在播放的照片
    const imgPlaying = ref();
    //- 監聽
    watchEffect(() => {
      if (!globalStore.getScrolling) isOpen.value = props.isOpen;
      imgList.value = props.subImg;

      imgPlaying.value = imgList.value[0];
    });
    const handleOpen = () => {
      emit('handleOpen', false);
    };
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

    return {
      isOpen,
      imgList,
      imgPlaying,
      width,
      height,
      handleOpen,
      change,
      changeToIndex,
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
    position: absolute;
    width: 80vw;
    height: 90vh;
    padding: 74px calc(32px + 100vw * (153 / 1440));
    border-radius: 12px;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .img-playing {
        width: 100%;
        max-width: 600px;
      }
      .right {
        position: absolute;
        right: -102px;
        color: #949494;
        @include rwd.medium {
          right: -70px;
          color: black;
        }
        @include rwd.small {
          right: 10px;
          color: black;
        }
      }
      .left {
        position: absolute;
        left: -102px;
        color: #949494;
        @include rwd.medium {
          left: -70px;
          color: black;
        }
        @include rwd.small {
          left: 10px;
          color: black;
        }
      }
    }
    //- 播放列表
    .img-list {
      width: 100%;
      height: 30%;
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
