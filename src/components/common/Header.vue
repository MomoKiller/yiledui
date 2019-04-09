<template>
  <!--  原始头部  -->
  <header>
    <div class="head_l">
      <a class="back_btn" @click="goBack" v-if="initTitle.showBack">
        <i></i>
      </a>
    </div>
    <a class="title">{{initTitle.name}}</a>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["initTitle"],
  data() {
    return {
      /* title默认参数
      initTitle: {
        name: "易乐兑",
        showBack: false
      }
      */
    };
  },
  methods: {
    goBack: function() {
      this.$router.back(-1);
    }
  }
};
</script>

<style>
header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  color: #333333;
}
header .head_l {
  height: 40px;
  width: 40px;
  overflow: hidden;
  float: left;
}
header a.back_btn {
  display: block;
  height: 40px;
  width: 40px;
}
header .back_btn i {
  display: block;
  width: 12px;
  height: 20px;
  background: url(../../assets/img/back_btn.png) no-repeat;
  background-size: 100% 100%;
  margin: 10px 14px;
}
header a.title {
  display: block;
  width: calc(100% - 80px);
  height: 40px;
  float: left;
}
</style>

