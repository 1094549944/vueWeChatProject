<template>
  <div id="navfooter">
    <div id="footer_nav"
         class="footer_nav"
         @click="flag=!flag">
      <img :src="image" />
      <p>导航</p>
    </div>

    <div class="footer_nav_show"
         v-if="flag">

      <ul class="list">
        <li v-for="(item,index) in listArray"
            :key="index">
          <img :src="item.images" />
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navfooter',
  data () {
    return {
      flag: true,
      image: require('../assets/images/navigation.png'),
      listArray: [{
        images: require('../assets/images/menu.png'),
        name: '菜单'
      }, {
        images: require('../assets/images/cart.png'),
        name: '购物车'
      }, {
        images: require('../assets/images/order.png'),
        name: '我的订单'
      }, {
        images: require('../assets/images/wallet.png'),
        name: '结账'
      }, {
        images: require('../assets/images/close.png'),
        name: '返回'
      }]
    }
  }
}
</script>

<style scoped lang="postcss">
:root {
  --num_-100: -100px;
  --num_-80: -80px;
  --num_8: 8px;
  --num_10: 10px;
  --num_12: 12px;
  --num_15: 15px;
  --num_16: 16px;
  --num_20: 20px;
  --num_24: 24px;
  --num_36: 36px;
  --num_50: 50px;
  --num_80: 80px;
  --num_100: 100px;
  --num_110: 110px;
  --num_120: 120px;
  --num_140: 140px;
  --num_150: 150px;
  --num_180: 180px;
  --num_260: 260px;
  --num_300: 300px;
  --num_320: 320px;
  --num_360: 360px;
}
/* 导航图标 */
.footer_nav {
  height: var(--num_110);
  width: var(--num_110);
  background: #000;
  position: fixed;
  color: #fff;
  bottom: var(--num_20);
  left: var(--num_20);
  text-align: center;
  border-radius: 50%;
}
.footer_nav img {
  width: var(--num_50);
  height: var(--num_50);
  margin-top: var(--num_16);
}
.footer_nav p {
  position: relative;
  top: var(--num_8);
  font-size: var(--num_12);
}
/* 弹出层 */
.footer_nav_show {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
}
.footer_nav_show .list li {
  height: var(--num_110);
  width: var(--num_110);
  background: #000;
  position: absolute;
  color: #fff;
  left: var(--num_20);
  text-align: center;
  border-radius: 50%;
}
.footer_nav_show .list li img {
  width: var(--num_50);
  height: var(--num_50);
  margin-top: var(--num_16);
}
.footer_nav_show .list li p {
  position: relative;
  top: var(--num_8);
  font-size: var(--num_12);
}
.footer_nav_show .list li:nth-child(1) {
  bottom: var(--num_360);
  left: var(--num_20);
}
.footer_nav_show .list li:nth-child(2) {
  bottom: var(--num_300);
  left: var(--num_150);
}
.footer_nav_show .list li:nth-child(3) {
  bottom: var(--num_180);
  left: var(--num_260);
}
.footer_nav_show .list li:nth-child(4) {
  bottom: var(--num_20);
  left: var(--num_320);
}
.footer_nav_show .list li:nth-child(5) {
  bottom: var(--num_20);
  left: var(--num_20);
}
</style>
