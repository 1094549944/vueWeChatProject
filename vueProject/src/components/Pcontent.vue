<template>
  <div id="pcontent">

    <router-link to="/home">

      <div class="back">返回</div>

    </router-link>

    <div class="p_content">
      <div class="p_info">
        <img :src="list.img_url" />
        <h2>{{list.title}}</h2>
        <p class="price">{{list.price}}/份</p>
      </div>
      <div class="p_detial">
        <h3>
          商品详情
        </h3>
        <div class="p_content"
             v-html='list.content'>

        </div>
      </div>
    </div>

    <footer class="pfooter">
      <div class="cart">
        <strong>数量:</strong>
        <div class="cart_num">
          <div class="input_left"
               @click="decNum()">-</div>
          <div class="input_center">
            <input type="text"
                   readonly="readonly"
                   v-model='num'
                   name="num"
                   id="num" />
          </div>
          <div class="input_right"
               @click="incNum()">+</div>
        </div>

      </div>

      <button class="addcart"
              @click="addCart()">
        加入购物车

      </button>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'Pcontent',
  data () {
    return {
      list: {
        img_url: require('../assets/images/product.jpg'),
        title: '小炒',
        price: '￥20.00',
        content: `<img :src="../assets/images/product.jpg"/>
					<br />
					<p>
						韩国辣酱海鲜炒面,青椒炒牛肉,芦笋腰果炒虾仁,家常料理简单又好吃的辣炒起司年糕鸡排
					</p>
					
					<br />
					<p>
						韩国辣酱海鲜炒面,青椒炒牛肉,芦笋腰果炒虾仁,『家常料理』简单又好吃的辣炒起司年糕鸡排
					</p>`
      },
      num: 1
    }
  },
  methods: {
    requestData () { },
    decNum () { },
    incNum () { },
    addCart () { }
  }
}
</script>

<style scoped lang="postcss">
:root {
  --text_color: #333;
  --text_colorRed: #f00;
  --num_-100: -100px;
  --num_-80: -80px;
  --num_4: 4px;
  --num_8: 8px;
  --num_10: 10px;
  --num_12: 12px;
  --num_15: 15px;
  --num_16: 16px;
  --num_20: 20px;
  --num_24: 24px;
  --num_30: 30px;
  --num_32: 32px;
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
  --num_800: 800px;
}
.back {
  height: var(--num_100);
  line-height: var(--num_100);
  width: var(--num_100);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: var(--num_20);
  left: var(--num_20);
  color: #fff;
  text-align: center;
}
.back::before {
  content: '';
  display: block;

  width: var(--num_20);
  height: var(--num_20);

  border-left: var(--num_4) solid #fff;
  border-bottom: var(--num_4) solid #fff;

  float: left;

  position: relative;

  top: var(--num_36);

  left: var(--num_12);

  transform: rotate(45deg);
}
/* 商品显示 */
.p_content .p_info img {
  width: 100%;
}
.p_content .p_info h2 {
  padding: var(--num_10);
}
.p_content .p_info .price {
  padding: var(--num_10);
  color: var(--text_colorRed);
}
.p_detial {
  background: #fff;

  margin-top: 1rem;
}
.p_detial h3 {
  padding: var(--num_10);
}
.p_detial .p_content {
  padding: var(--num_10);
}
.p_detial .p_content img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
.p_detial .p_content * {
  line-height: 1.5;
  color: var(--text_color);
}
/* 底部 */
.pfooter {
  position: fixed;
  bottom: 0px;
  background: var(--text_colorRed);
  height: var(--num_100);
  line-height: var(--num_100);
  background: #fff;
  left: 0px;
  width: 100%;
  border-top: 1px solid #eee;
}
.pfooter .cart {
  float: left;
  display: flex;
}
.pfooter .cart strong {
  flex: 1;
  font-size: var(--num_14);
  padding: 0rem var(--num_20);
}
.pfooter .cart .cart_num {
  width: var(--num_360);
  display: flex;
  margin-top: var(--num_10);
}

.pfooter .cart .cart_num .input_left,
.input_right {
  flex: 1;
  width: var(--num_360);
  height: var(--num_80);
  line-height: var(--num_80);
  text-align: center;
  color: var(--text_colorRed);
  border: 1px solid #eee;
  font-size: var(--num_50);
}
.input_center {
  flex: 1;
}
.input_center input {
  width: var(--num_200);
  text-align: center;
  width: 100%;
  height: var(--num_80);
  border: none;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  float: left;
}
.addcart {
  float: right;
  background: var(--text_colorRed);
  color: #fff;
  height: var(--num_80);
  border: none;
  padding: 0 var(--num_20);
  border-radius: var(--num_10);
  margin-top: var(--num_10);
  margin-right: var(--num_10);
}
.addcart a {
  color: #fff;
}
</style>
