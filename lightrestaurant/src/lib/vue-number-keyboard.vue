<template>
    <div v-if="isShow">
        <table border="1" cellpadding="20">
            <tr v-for="(items,index) in data" :key="index">
                <th v-for="(item,indexs) in items" :key="indexs" :rowspan="item == '确认'? 2:''" @click="edit(item)">{{item}}</th>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  name: 'vue-number-keyboard',
  data() {
    return {
      data: [
        [100, 1, 2, 3, '回撤'],
        [50, 4, 5, 6, '清除'],
        [20, 7, 8, 9, '确认'],
        [10, 0, '00', '.']
      ]
    };
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    edit(val) {
      let str = this.content;
      if (val === '回撤') {
        str = str.slice(0, str.length - 1);
      } else if (val === '清除') {
        str = '';
      } else if (val === '确认') {
        str = this.content;
      } else {
        str = str + val;
      }
      this.$emit('changeContent', str);
    }
  }
};
</script>
<style lang="less">
table {
  background: white;
  line-height: 25px;
  text-align: center;
  border-color: #ccc;
  border-collapse: collapse;
  color: #454545;
  th {
    font-weight: 300;
    font-size: 18px;
    width: 45px;
    cursor: pointer;
  }
}
</style>
