<template lang="pug">
.section.section04 
  .page-title-1 Timeline 時間線
  .timeLine
    table
      thead
        tr
          th(style="width: 400px;") 
            p 任務/階段
          th.row.justify-between
            p 7 月 20 日
            p 8 月 2 日
      tbody
        tr
          td 
            small Kick-Off
            p 專案啟動會議
          td
            linear(:offset="0" :parts="1" :text="'7/20 (1 天)'")
        tr
          td 
            small Milestone 1
            p PM 與專案夥伴確認專案目標內容
          td
            linear(:offset="1" :parts="2" :text="'7/21-7/22 (2 天)'")
        tr
          td 
            small Milestone 2
            p 競品分析、 網站地圖、流程圖製作、品牌視覺定調
          td
            linear(:offset="3" :parts="5" :text="'7/23-7/27 (5 天)'")
        tr
          td 
            small Milestone 3
            p Wireframe 製作
          td
            linear(:offset="5" :parts="3" :text="'7/25-7/27 (3 天)'")
        tr
          td 
            small Milestone 4
            p Design Review、設計精稿
          td
            linear(:offset="7" :parts="6" :text="'7/27-8/01 (6 天)'")
        tr
          td 
            small Milestone 5
            p Component / Variants 製作與整理、Prototype製作
          td
            linear(:offset="8" :parts="5" :text="'7/28-8/01 (5 天)'")
        tr
          td 
            small Milestone 6
            p 設計交付文件整理
          td
            linear(:offset="9" :parts="4" :text="'7/29-8/01 (4 天)'")
        tr
          td 
            small Milestone 7
            p 專案最終繳交期限
          td
            linear(:offset="13" :parts="1" :text="'8/02'")
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from 'vue';
//- Components
import linear from 'src/pages/project_open/components/linearProgress.vue';
export default defineComponent({
  components: {
    linear,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.section04 {
  .timeLine {
    padding: 20px 15px;
    background-color: #ff880615;
    border: 1px solid #ff8806;
    border-radius: 25px;
    table {
      width: 100%;
      text-align: left;
      thead tr th {
        color: #2d2d2d;
        font-weight: 700;
        font-size: 16px;
      }
      tbody tr td {
        vertical-align: top;
        small {
          color: rgba($color: #000000, $alpha: 0.5);
          font-size: 12px;
          font-weight: 700;
        }
        p {
          color: #101010;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
