<template lang="pug">
.linearProgress.row.items-center
  .linear.row.items-center.justify-center(:style="[styleCalc(), offsetCalc()]" ref="el") 
    .text(:class="{'outside': isOutside}") {{ text }}
</template>

<script lang="ts">
import { ref, toRefs, onMounted, watch } from 'vue';
import { defineComponent } from 'vue';
//- Utils
import { useElementSize } from '@vueuse/core';

export default defineComponent({
  props: ['offset', 'parts', 'text'],
  setup(props) {
    const { offset, parts, text } = toRefs(props);

    const styleCalc = () => {
      return `width: calc((100% - 120px) / 14 * ${parts.value})`;
    };
    const offsetCalc = () => {
      return `margin-left: calc((100% - 120px) / 14 * ${offset.value})`;
    };

    const el = ref(null);
    const isOutside = ref<boolean>(false);
    onMounted(() => {
      const { width } = useElementSize(el);
      watch(
        () => width.value,
        (val) => {
          console.log(val);
          val > 110 ? (isOutside.value = false) : (isOutside.value = true);
        }
      );
    });

    return {
      el,
      text,
      isOutside,
      styleCalc,
      offsetCalc,
    };
  },
});
</script>

<style lang="scss" scoped>
.linearProgress {
  padding-top: 5px;
  .linear {
    position: relative;
    height: 35px;
    background-color: #ff8806;
    border-radius: 22px;
    margin-right: 7px;
    .text {
      color: white;
      font-weight: 700;
      min-width: 110px;
    }
  }
}

.outside {
  color: #101010 !important;
  position: absolute;
  top: 50%;
  left: calc(100% + 10px);
  transform: translateY(-50%);
}
</style>
