<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="param-info">
    <table
      v-for="(item, index) in paramInfo.rule.tables"
      class="info-size"
      :key="index"
    >
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez" class="param-value">
          {{ td }}
        </td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.info.set" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramInfo.image">
      <img :src="paramInfo.info.image[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.param-info {
  z-index: 10;
  padding: 20px 15px;
  border-top: 4px solid #ececec;
  border-bottom: 4px solid #ececec;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  // 当value的数据比较大的时候，会挤到key值，所以给key一个固定宽度
  width: 95px;
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>