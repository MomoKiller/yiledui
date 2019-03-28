<template>
    <div class="content">
        <!--  导航标题  -->
        <mt-header title="全部订单">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <!--  navbar  -->
        <div class="tab_wrap">
            <div class="li" :class="{active: tabIndex == 1}" @click="tabSwitch(1)">
                <a>兑换</a>
            </div>
            <div class="li" :class="{active: tabIndex == 2}" @click="tabSwitch(2)">
                <a>抽奖</a>
            </div>
            <div class="li" :class="{active: tabIndex == 3}" @click="tabSwitch(3)">
                <a>竞猜</a>
            </div>
        </div>
        <!--  title  -->
        <div class="title_wrap">
            <a class="title">全部订单</a>
            <a class="more">
                <i></i>
            </a>
        </div>
        <!--  list  -->
        <div class="list_wrap">
            <ul :class="{active: tabIndex == 1}">
                <li>
                    <p class="date_wrap">
                        <a class="time">2018-02-12 12:30</a>
                        <a class="status">充值中</a>
                    </p>
                    <div class="contant">
                        <img class="telbill" src="../assets/img/product_1.png" />
                        <div class="wrap">
                            <p class="name">200元全国三网话费</p>
                            <p class="order">订单号：201902224083921</p>
                        </div>
                    </div>
                    <div class="price_wrap">
                        <a class="price">共计
                            <span>￥298.88</span>
                        </a>
                        <div class="btn_wrap">
                            <a class="btn">查看订单</a>
                            <a class="btn red">提取卡密</a>
                        </div>
                    </div>
                </li>
                <li>
                    <p class="date_wrap">
                        <a class="time">2018-02-12 12:30</a>
                        <a class="status red">充值中</a>
                    </p>
                    <div class="contant">
                        <img class="telbill" src="../assets/img/product_1.png" />
                        <div class="wrap">
                            <p class="name">200元全国三网话费</p>
                            <p class="order">订单号：201902224083921</p>
                        </div>
                    </div>
                    <div class="price_wrap">
                        <a class="price">共计
                            <span>￥298.88</span>
                        </a>
                        <div class="btn_wrap">
                            <a class="btn">查看订单</a>
                            <a class="btn red">提取卡密</a>
                        </div>
                    </div>
                </li>
            </ul>
            <ul :class="{active: tabIndex == 2}">
                <li class="no_data">暂无数据</li>
            </ul>
            <ul :class="{active: tabIndex == 3}">
                <li class="no_data">暂无数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Allorder",
  data() {
    return {
      tabIndex: 1           // tab索引
    };
  },
  methods: {
    // 切换tab
    tabSwitch: function(tabIndex){
        if(this.tabIndex != tabIndex)
        this.tabIndex = tabIndex;
    }
  }
};
</script>

<style scoped>
@import url(../assets/css/Allorder.css);
</style>


