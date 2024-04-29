<template lang="pug">
.dialog(v-if="isOpen")
  .dialog-overlay(@click.prevent="handleOpen()")
  .dialog-content
    q-btn.close-btn(unelevated round color="grey-9" size="md" @click.prevent="handleOpen()")
      q-icon(name="fas fa-close" color="white")
    .row.fit
      .col-12.playing-container
        .img-playing
          q-img(
            :src="imgPlaying"
            style="width: 100%; height: 100%;"
          )
        .right 
          q-btn(
            icon="chevron_right" 
            outline round
            size="md"
            @click="change(1)"
            style="color: #949494;"
          )
        .left
          q-btn(
            icon="chevron_left" 
            outline round
            size="md"
            @click="change(-1)"
            style="color: #949494;"
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
import { I } from 'app/dist/spa/assets/index.35c76f32';
import { defineComponent, ref, watchEffect } from 'vue';
import subImg11_1 from 'src/assets/fangImg/visualDesign/subImg11_1.png';
import subImg11_2 from 'src/assets/fangImg/visualDesign/subImg11_2.png';
import subImg11_3 from 'src/assets/fangImg/visualDesign/subImg11_3.png';

export default defineComponent({
  props: ['isOpen'],
  setup(props, { emit }) {
    const isOpen = ref<boolean>(props.isOpen);
    //- 監聽
    watchEffect(() => (isOpen.value = props.isOpen));
    const handleOpen = () => {
      emit('handleOpen', false);
    };

    //- 照片列表
    const imgList = ref([subImg11_1, subImg11_2, subImg11_3]) as any;

    //- 正在播放的照片
    const imgPlaying = ref(imgList.value[0]);

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
    width: 72%;
    padding: 74px 185px;
    border-radius: 12px;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    @include rwd.large {
      width: 1036px;
    }
    .close-btn {
      position: absolute;
      top: 0px;
      right: -50px;
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
      }
      .left {
        position: absolute;
        left: -102px;
      }
    }
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
