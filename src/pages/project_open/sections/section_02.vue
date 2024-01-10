<template lang="pug">
.section.section02
  .row
    .title Project details
    table 
      thead
        tr
          th My Roles
          th Team
          th Duration
          th Tool
      tbody
        tr
          td
            pre.
              Brand identity
              Visual Design 
              UI Design 
              Design system 
              Mock Up 
              Illustration
          td.
              Jing, Mou, Amy ,Mina ,Stoos, me
          td.
              July 2023 - Aug 2023 (2 Weeks)
          td
            pre.
              Figma 
              Illustration 
              Notion 
              Discord
</template>

<style lang="scss" scoped>
.section02 {
  padding: 40px auto;
  .title {
    padding: 10px 0px;
    width: 170px;
    font-size: 20px;
    font-weight: 700;
  }
  table {
    width: calc(100% - 170px);
    border-collapse: collapse;
    pre {
      margin: 0px;
    }
    th,
    td {
      text-align: left;
      vertical-align: top;
      padding: 10px 0px;
      padding-left: 25px;
    }
    thead tr {
      border-bottom: 1px solid #535353;
    }
    thead tr th {
      color: #e87c05;
      font-size: 16px;
      font-weight: 700;
    }
    tbody tr td {
      color: #262626;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
