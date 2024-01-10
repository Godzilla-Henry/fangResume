<template lang="pug">
.section.section10
    .page-title-1 Competitor Analysis 競品分析
    .imgContainer
      img(:src="competitor01" style="width:100%;")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import competitor01 from 'src/assets/img/open_competitor01.png';

export default defineComponent({
  setup() {
    return {
      competitor01,
    };
  },
});
</script>
