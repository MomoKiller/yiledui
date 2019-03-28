<template>
    <div class="content">
        <mt-header title="订单确认">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <!--  手机号  -->
        <div class="number_wrap">
            <p class="title">手机号码</p>
            <input type="text" class="phone" placeholder="请输入手机号"/>
        </div>
        <!--  兑换内容  -->
        <div class="exchange_wrap">
            <div class="title">兑换内容</div>
            <div class="contant">
                <img class="telbill" src="../assets/img/product_1.png"/>
                <div class="wrap">
                    <p class="name">
                        <a>200元全国三网话费</a>
                        <i class="tag"></i>
                    </p>
                    <p class="price">市场价：<span>￥100</span></p>
                </div>
            </div>
            <div class="point_wrap">本次兑换将扣除积分：<span>2000分</span></div>
        </div>
        <!--  按钮  -->
        <div class="btn_wrap">
            <a class="confirm">确认兑换</a>
        </div>
    </div>
</template>

<script>
export default {
  name: "ConfirmOrder",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url(../assets/css/ConfirmOrder.css);
</style>

