<template>
  <div>
    <div class="start_content">
      <header class="start_header">
        <img :src="caidanImg">用餐人数
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
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      caidanImg: require('../assets/images/canju.png'),
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
.start_content .start_header {
  height: 79px;
  line-height: 79px;
  background: #000;
  color: #fff;
  width: 225px;
  margin: 140px auto 0rem auto;
  border-radius: 10px;
  text-align: center;
}
.start_content .start_header img {
  height: 60px;
  line-height: 60px;
  position: relative;
}
.start_content .notice {
  color: red;
  text-align: center;
  margin: 40px 0;
}
.start_content .user_list {
  display: flex;
  flex-wrap: wrap;
}
.start_content .user_list li {
  width: 25%;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.start_content .user_list li span {
  display: block;
  width: 100%;
  padding: 25px 0;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.start {
  position: fixed;
  bottom: 250px;
  left: 50%;
  margin-left: -70px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: red;
  color: #fff;
}
.start span {
  display: block;
  width: 70px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  top: 40px;
  line-height: 30px;
}
</style>
