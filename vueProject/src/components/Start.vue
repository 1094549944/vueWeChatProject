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
    }
  },
  created () {
    this.getPersonNum(12)
  }
}
</script>

<style scoped lang="postcss">
@import '../assets/styles/common';
.start_content {
  & .start_header {
    height: var(--num_80);
    line-height: var(--num_80);
    background: var(--bg_color0);
    color: #fff;
    width: var(--num_260);
    margin: var(--num_140) auto var(--num_60);
    border-radius: var(--num_10);
    text-align: center;
    & img {
      height: var(--num_60);
      line-height: var(--num_60);
      position: relative;
    }
  }
  & .notice {
    color: red;
    text-align: center;
    margin: var(--num_40) 0;
  }
  & .user_list {
    display: flex;
    flex-wrap: wrap;
    & li {
      width: 25%;
      padding: var(--num_20);
      box-sizing: border-box;
      overflow: hidden;
    }
    & span {
      display: block;
      width: 100%;
      padding: var(--num_20) 0;
      text-align: center;
      background: #fff;
      border-radius: var(--num_10);
      border: 1px solid #ccc;
    }
  }
}

.start {
  position: fixed;
  bottom: var(--num_260);
  left: 50%;
  margin-left: var(--num_-80);
  width: var(--num_140);
  height: var(--num_140);
  border-radius: 50%;
  background: red;
  color: #fff;
  & span {
    display: block;
    width: var(--num_60);
    margin: 0 auto;
    position: relative;
    text-align: center;
    top: var(--num_40);
    line-height: var(--num_40);
  }
}
</style>
