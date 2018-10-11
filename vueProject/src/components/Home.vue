<template>
  <div class="home-content">
    <header class="index_header">
      <div class="hlist hairlines"
           v-for="(item,index) in listArray "
           :key="index">
        <img :src="item.image"
             alt="">
        <p>{{item.name}}</p>
      </div>
    </header>
    <aside class="left_cate"
           id="left_cate">
      <ul>
        <li v-for="(item,index) in list"
            :key="index">{{item.title}}</li>
      </ul>
      <div class="nav_cate"
           id="nav_cate"
           @click="asideDomInit()"
           @touchmove.prevent>
        <img :src="image"
             alt="菜单按钮">

      </div>
    </aside>
    <div class="content">
      <div class="item"
           v-for="(item,index) in list"
           :key="index">
        <h3 class="">{{item.title}}</h3>
        <ul class="item_list">
          <li v-for="food in item.list"
              :key="food._id"
              @click="getPcontent(food._id)">
            <div class="inner">
              <img :src="food.img_url"
                   alt="">
              <p class="title">{{food.title}}</p>
              <p class="price">¥{{food.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg"
         id="bg"
         @click.stop="asideDomInit()"
         @touchmove.prevent>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      listArray: [{
        image: require('../assets/images/rexiao.png'),
        name: '热销榜'
      }, {
        image: require('../assets/images/caidan.png'),
        name: '点过的菜'
      }, {
        image: require('../assets/images/sousuo.png'),
        name: '搜你喜欢'
      }],
      image: require('../assets/images/nav.png'),
      list: [{
        title: '主食',
        id: '1',
        list: [{
          _id: '001',
          img_url: require('../assets/images/1.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '002',
          img_url: require('../assets/images/2.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '003',
          img_url: require('../assets/images/3.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '004',
          img_url: require('../assets/images/4.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '005',
          img_url: require('../assets/images/5.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '006',
          img_url: require('../assets/images/6.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '007',
          img_url: require('../assets/images/7.jpeg'),
          title: '蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉',
          price: '23.00'
        }]
      }, {
        title: '精品小菜',
        id: '2',
        list: [{
          _id: '001',
          img_url: require('../assets/images/1.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '002',
          img_url: require('../assets/images/2.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '003',
          img_url: require('../assets/images/3.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '004',
          img_url: require('../assets/images/4.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '005',
          img_url: require('../assets/images/5.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '006',
          img_url: require('../assets/images/6.jpeg'),
          title: '蒜蓉',
          price: '23.00'
        }, {
          _id: '007',
          img_url: require('../assets/images/7.jpeg'),
          title: '蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉',
          price: '23.00'
        }]
      }, {
        title: '精品小面',
        id: '03',
        list: [{
          _id: '007',
          img_url: require('../assets/images/7.jpeg'),
          title: '蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉',
          price: '23.00'
        }]
      }, {
        title: '饮料酒水',
        id: '04',
        list: [{
          _id: '007',
          img_url: require('../assets/images/7.jpeg'),
          title: '蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉',
          price: '23.00'
        }]
      }, {
        title: '新品推荐',
        id: '05',
        list: [{
          _id: '007',
          img_url: require('../assets/images/7.jpeg'),
          title: '蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉',
          price: '23.00'
        }]
      }, {
        title: '舌尖美食',
        id: '06',
        list: [{
          _id: '007',
          img_url: require('../assets/images/7.jpeg'),
          title: '蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉蒜蓉',
          price: '23.00'
        }]
      }],
      flag: true
    }
  },
  methods: {
    asideDomInit () {
      let leftCate = document.getElementById('left_cate')
      let bg = document.getElementById('bg')
      if (this.flag) {
        this.flag = false
        leftCate.style.transform = 'translate(0,0)'
        bg.style.display = 'block'
      } else {
        this.flag = true
        leftCate.style.transform = 'translate(-100%,0)'
        bg.style.display = 'none'
      }
    },
    /* 商品点击跳转 */
    getPcontent (id) {
      console.log('我点击了跳转')
      this.$router.push({ name: 'pcontent', params: { id: id } })
    }
  },
  mounted: function () {
    document.addEventListener('touchmove', (ev) => {
      if (this.flag) { /* maskShow为蒙版的显隐状态 */
        ev.preventDefault()
      }
    }, false) /* 监听滚动 */
  }
}
</script>

<style lang="postcss" scoped>
:root {
  --text_color: #333;
  --bg_color: #eee;
  --num_-100: -100px;
  --num_-80: -80px;
  --num_10: 10px;
  --num_15: 15px;
  --num_20: 20px;
  --num_24: 24px;
  --num_36: 36px;
  --num_50: 50px;
  --num_80: 80px;
  --num_100: 100px;
  --num_800: 800px;
}
.home-content {
  padding-top: var(--num_20);
  background: var(--bg_color);
}
.index_header {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--num_20) 0;
  margin: 0 var(--num_20);
  font-size: var(--num_24);
  color: var(--text_color);
  background: #fff;
  border-radius: var(--num_10);
}
.index_header div {
  flex: 1;
}
.hairlines {
  border-right: 0.5px solid #eee;
}
.hairlines:nth-child(3) {
  border-right: none;
}
.hlist img {
  width: 23%;
  padding: var(--num_10) 0;
}
/*主题内容*/
.content {
  padding-top: var(--num_20);
}
.item h3 {
  text-align: center;
  font-size: var(--num_36);
  font-weight: var(--num_20/2 * 5);
}
.item_list {
  display: flex;
  flex-wrap: wrap;
  padding-left: var(--num_20);
}
.item_list li {
  margin: var(--num_20) var(--num_20) var(--num_20) 0;
  width: 223px;
  overflow: hidden;
  background: #fff;
  padding-bottom: var(--num_20);
  border-radius: var(--num_20/2);
  font-size: var(--num_24);
  color: var(--text_color);
}
.item_list li img {
  width: 100%;
  overflow: hidden;
}
.item_list .inner p {
  padding-top: var(--num_20);
  padding-left: var(--num_20);
}
.item_list .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*侧边栏*/
/*侧边栏*/
.left_cate {
  /*css3运动  加过渡效果*/
  transition: all 1s;
  transform: translate(-100%, 0);
  z-index: 2;
  width: 200px;
  height: 100%;
  position: fixed;
  background: var(--bg_color);
  top: 0px;
  left: 0px;
}
.left_cate ul {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: var(--bg_color);
  overflow-y: scroll;
}
.left_cate ul li {
  padding: var(--num_20);
  line-height: var(--num_100);
}
.left_cate .nav_cate {
  position: absolute;
  right: var(--num_-80);
  background: rgba(34, 20, 20, 0.6);
  top: 42%;
  width: var(--num_80);
  height: var(--num_80);
  text-align: center;
  border-radius: 0 50% 50% 0;
  z-index: 2;
}
.left_cate .nav_cate img {
  width: var(--num_50);
  height: var(--num_50);
  padding-top: var(--num_15);
}

/*透明层*/
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(132, 128, 128, 0.4);
  left: 0px;
  top: 0px;
  z-index: 1;
  display: none;
}
</style>
