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
    <div class="content">
      <div class="item"
           v-for="(item,index) in list"
           :key="index">
        <h3 class="">{{item.title}}</h3>
        <ul class="item_list">
          <li v-for="food in item.list"
              :key="food._id">
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
      }]
    }
  }
}
</script>

<style lang="postcss" scoped>
:root {
  --text_color: #333;
  --bg_color: #eee;
  --num_20: 20px;
  --num_24: 24px;
  --num_36: 36px;
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
  border-radius: var(--num_20/2);
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
  padding: var(--num_20/2) 0;
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
  padding-bottom: --num_20;
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
</style>
