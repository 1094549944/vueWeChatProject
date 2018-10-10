<template>
  <div>
    <div class="start_content">
      <header class="start_header">
        <img :src="caidanImg">
      </header>
      <div class="notice">{{msg}}</div>
      <div class="content">
        <ul class="user_list">
          <li v-for="item in personArr"
              :key="item"><span>{{item}}人</span></li>
        </ul>
      </div>
    </div>
    <div id="start"
         class="start">
      <span>开始点菜</span>
    </div>
    <div class="test">fdafs</div>
    <div w-188-246> fdsjaklf</div>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      caidanImg: require('../assets/images/caidan.png'),
      msg: '请选择正确的用餐人数，小二马上给您送餐具',
      personArr: []
    }
  },
  methods: {
    getPersonNum: function (num) {
      for (let i = 1; i <= num; i++) {
        this.personArr.push(i)
      }
      console.log(this.personArr)
    }
  },
  created () {
    this.getPersonNum(12)
  }
}
</script>

<style scoped lang="postcss">
.test {
  border: 0.5px solid black;
  border-bottom-width: 4px;
  font-size: 14px;
  line-height: 40px;
  position: relative;
}
[w-188-246] {
  width: 188px;
  background: red;
}
</style>
