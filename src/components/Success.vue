<template>
    <div class="content">
        <com-header :initTitle="initTitle"></com-header>
        <div class="main">
            <!--  主要内容  -->
            <div class="main_wrap">
                <div class="info_wrap">
                    <i class="success"></i>
                    <p class="title">兑换成功</p>
                    <p class="desc">系统正在为您进行兑换，请耐心等待结果</p>
                </div>
                <div class="order_wrap">
                    <img src="../assets/img/product_1.png" />
                    <div class="wrap">
                        <p class="title">100元全国三网话费</p>
                        <p class="order">订单号：2019020231</p>
                        <p class="time">订单生成时间：2019-02-24 08:39</p>
                    </div>
                </div>
            </div>
            <!--  按钮  -->
            <div class="btn_wrap">
                <a class="query_btn" @click="goOrderDetail()">查询订单</a>
                <a class="exchange_btn">确认兑换</a>
            </div>
        </div>
    </div>
</template>

<script>
import ComHeader from "@/components/common/Header.vue"

export default {
  name: "Success",
  components: { ComHeader },
  data() {
    return {
        initTitle: {
            name: '兑换成功',
            showBack: true
        }
    };
  },
  mounted() {},
  methods: {
    // 已用组件方法替代
    goBack: function() {
      this.$router.back(-1);
    },
    // 订单详情
    goOrderDetail: function(code){
        this.$router.push();
    }
  }
};
</script>

<style scoped>
@import url(../assets/css/Success.css);
</style>

