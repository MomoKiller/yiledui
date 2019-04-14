<template>
    <div class="detail_wrap">
        <button v-on:click="paseValue">子组件向父组件传值</button>
        <a>从平级组件获取的值： {{broData}}</a>
    </div>
</template>

<script>
import vm from "@/assets/broCom";

export default {
  name: "ChildCom",
  data() {
    return {
      broData: ""
    };
  },
  mounted() {
    let that = this;
    vm.$on("broData", function(data) {
      console.log(data);
      that.broData = data;
    });
  },
  methods: {
    paseValue: function() {
      this.$emit("listenChild", "子组件传递过来的信息");
    }
  }
};
</script>

<style scoped>
.detail_wrap {
  height: 180px;
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
}
.detail_wrap button {
  height: 40px;
  line-height: 40px;
  width: calc(100% - 32px);
  font-size: 16px;
  color: #ffffff;
  background-color: #ff6238;
  margin: 50px 15px 0;
  border: none;
  border-radius: 4px;
}
.detail_wrap a {
  display: block;
  width: calc(100% - 30px);
  height: 35px;
  line-height: 35px;
  margin: 10px auto;
}
</style>

