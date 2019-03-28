<template>
    <div class="content">
        <mt-header title="兑换成功">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!--  主要内容  -->
        <div class="main_wrap">
            <div class="info_wrap">
                <i class="success"></i>
                <p class="title">兑换成功</p>
                <p class="desc">系统正在为您进行兑换，请耐心等待结果</p>
            </div>
            <div class="order_wrap">
                <img src="../assets/img/product_1.png"/>
                <div class="wrap">
                    <p class="title">100元全国三网话费</p>
                    <p class="order">订单号：2019020231</p>
                    <p class="time">订单生成时间：2019-02-24 08:39</p>
                </div>
            </div>
        </div>
        <!--  按钮  -->
        <div class="btn_wrap">
            <a class="query_btn">查询订单</a>
            <a class="exchange_btn">确认兑换</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Success',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@import url(../assets/css/Success.css);
</style>

