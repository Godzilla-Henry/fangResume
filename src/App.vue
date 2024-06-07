<template lang="pug">
router-view
slider
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import slider from 'src/pages/visualDesign/components/slider.vue';

export default defineComponent({
  name: 'App',
  components: {
    slider,
  },
});
</script>
