<template lang="pug">
.section.section11
    .page-title-1 Competitive Brand Positioning 競品品牌定位
    .imgContainer
      img(:src="competitor02" style="width:100%; margin-top: 80px; margin-bottom: 160px;")
      img(:src="competitor03" style="width:100%;")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import competitor02 from 'src/assets/img/open_competitor02.png';
import competitor03 from 'src/assets/img/open_competitor03.png';

export default defineComponent({
  setup() {
    return {
      competitor02,
      competitor03,
    };
  },
});
</script>
