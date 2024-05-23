<template lang="pug">
.dialog(v-if="isOpen")
  .dialog-overlay(@click.prevent="handleOpen()")
  .dialog-content
    q-btn.close-btn(unelevated round @click.prevent="handleOpen()")
      q-icon(name="fas fa-close")
    .row.fit
      .col-12.playing-container
        .img-playing
          q-img(
            :src="imgPlaying" fit="contain"
            style="width: 100%; height: 100%;"
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

      .col-12.img-list
        .img(
          v-for="(img, index) in imgList" :key="index"
          :class="{'active': img == imgPlaying}"
          @click="changeToIndex(index)"
        )
          q-img(
            :src="img"
            style="width: 80px; height: 80px;"
          )
        

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
  props: ['isOpen', 'subImg'],
  setup(props, { emit }) {
    const { width } = useWindowSize();
    const isOpen = ref<boolean>(props.isOpen);
    //- 照片列表
    const imgList = ref([]) as any;
    //- 正在播放的照片
    const imgPlaying = ref();
    //- 監聽
    watchEffect(() => {
      isOpen.value = props.isOpen;
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
  .dialog-content {
    position: absolute;
    width: 100%;
    padding: 74px calc(32px + 100vw * (153 / 1440));
    border-radius: 12px;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    @include rwd.large {
      width: 1036px;
      padding: 74px 185px;
    }
    @include rwd.small {
      padding: 74px 32px;
    }
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
    .playing-container {
      width: 100%;
      height: 70%;
      padding: 54px 0 117px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .img-playing {
        width: 666px;
        height: 500px;
      }
      .right {
        position: absolute;
        right: -102px;
        color: #949494;
        @include rwd.small {
          right: 10px;
          color: black;
        }
      }
      .left {
        position: absolute;
        left: -102px;
        color: #949494;
        @include rwd.small {
          left: 10px;
          color: black;
        }
      }
    }
    .img-list {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      @include rwd.small {
        display: none;
      }
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
