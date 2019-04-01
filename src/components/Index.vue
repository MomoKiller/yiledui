<template>
    <div class="content">
        <!--  头部导航  -->
        <header>易乐兑</header>
        <div class="main">
            <!--  图片轮播  -->
            <div class="swipe_wrap">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="imgUrl in swipImgData" :key="imgUrl">
                        <img :src="imgUrl" />
                    </mt-swipe-item>
                </mt-swipe>
                <!-- <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="../assets/img/swip_1.png" /></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/img/swip_1.png" /></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/img/swip_1.png" /></mt-swipe-item>
                </mt-swipe> -->
            </div>
            <!--  主入口  -->
            <div class="entrance_warp">
                <div class="list ac_point">
                    <i></i>
                    <a>我的积分</a>
                    <span>200</span>
                </div>
                <div class="list order">
                    <i></i>
                    <a @click="toOrder">我的订单</a>
                </div>
            </div>
            <!--  TAB切换  -->
            <div class="tab_wrap">
                <div class="list exchange">
                    <i></i>
                    <a>兑换</a>
                </div>
                <div class="list draw">
                    <i></i>
                    <a>抽奖</a>
                </div>
                <div class="list guess">
                    <i></i>
                    <a>竞猜</a>
                </div>
                <div class="list acpoint">
                    <i></i>
                    <a>玩转积分</a>
                </div>
            </div>
            <!--  推荐位  -->
            <div class="feature_wrap">
                <div class="title">兑换推荐
                    <i></i>
                </div>
                <div class="list_outwrap">
                    <div class="list_wrap">
                        <ul class="pro_list">
                            <li>
                                <p class="price">100元</p>
                                <p class="desc">全国三网话费</p>
                                <a class="btn">去兑换</a>
                            </li>
                            <li>
                                <p class="price">100元</p>
                                <p class="desc">全国三网话费</p>
                                <a class="btn">去兑换</a>
                            </li>
                            <li>
                                <p class="price">100元</p>
                                <p class="desc">全国三网话费</p>
                                <a class="btn">去兑换</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--  产品位  -->
            <div class="nav_wrap">
                <div class="inner_wrap">
                    <div class="nav">
                        <div class="list" :class="{active: proIndex == 1}" @click="proSwitch(1)">全部</div>
                        <div class="list" :class="{active: proIndex == 2}" @click="proSwitch(2)">话费流量</div>
                        <div class="list" :class="{active: proIndex == 3}" @click="proSwitch(3)">视频会员</div>
                        <div class="list" :class="{active: proIndex == 4}" @click="proSwitch(4)">加油卡</div>
                        <div class="list" :class="{active: proIndex == 5}" @click="proSwitch(5)">商超卡</div>
                    </div>
                </div>
            </div>
            <!--  对应商品信息  -->
            <div class="product_wrap">
                <!--  全部  -->
                <ul class="product_list" :class="{active: proIndex == 1}">
                    <li class="no_data">1暂无数据</li>
                </ul>
                <!--  话费流量  -->
                <ul class="flow_list" :class="{active: proIndex == 2}">
                    <li class="no_data">2暂无数据</li>
                </ul>
                <!--  视频会员  -->
                <ul class="video_list" :class="{active: proIndex == 3}">
                    <li class="no_data">3暂无数据</li>
                </ul>
                <!--  加油卡  -->
                <ul class="oilcard_list" :class="{active: proIndex == 4}">
                    <li class="no_data">4暂无数据</li>
                </ul>
                <!--  商超卡  -->
                <ul class="shopcard_list" :class="{active: proIndex == 5}">
                    <li class="no_data">5暂无数据</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { GetApi } from "../assets/common/js/common.js";

export default {
  name: "Index",
  data() {
    return {
      swipImgData: [
        require("../assets/img/swip_1.png"),
        require("../assets/img/swip_1.png"),
        require("../assets/img/swip_1.png")
      ],
      proIndex: 1 // 产品位索引
    };
  },
  mounted() {
    // 初始化
    this.getListData();
  },
  methods: {
    // 查看全部订单
    toOrder: function() {
      this.$router.push("/allorder");
    },
    // 切换产品
    proSwitch: function(proIndex) {
      if (this.proIndex != proIndex) this.proIndex = proIndex;
    },
    // 获取数据
    getListData: function() {}
  }
};
</script>

<style scoped>
@import url(../assets/css/Index.css);
</style>
