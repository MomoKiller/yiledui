<template>
  <div class="content">
    <com-header :initTitle="initTitle"></com-header>
    <div class="main">
      <div class="message_wrap">
        路由传递的值： {{orderId}}
      </div>
      <div class="message_wrap">
        子组件的值： {{childMsg}}
      </div>
      <!--  子组件传值  -->
      <child-com v-on:listenChild="getChildEven"></child-com>
      <bro-com></bro-com>
    </div>
  </div>
</template>

<script>
import ComHeader from "@/components/common/Header.vue";
import ChildCom from "@/components/common/ChildCom.vue";
import BroCom from "@/components/common/BroCom.vue"

export default {
  name: "OrderDetail",
  components: { ComHeader, ChildCom, BroCom },
  data() {
    return {
      initTitle: {
        name: "订单详情-子组件向父组件传参",
        showBack: true
      },
      childMsg: "", // 子组件返回值
      orderId: ""   // 路由传递参数
    };
  },
  mounted() {
    this.orderId = this.$route.params.order;
  },
  methods: {
    getChildEven: function(data) {
      this.childMsg = data;
    }
  }
};
</script>

<style scoped>
.message_wrap {
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
  line-height: 40px;
  text-indent: 15px;
}
</style>

