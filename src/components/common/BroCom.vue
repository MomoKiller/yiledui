<template>
    <div class="content">
        <p>平级组件通信</p>
        <a @click="pushData">平级组件传值</a>
    </div>
</template>

<script>
import vm from "@/assets/broCom";

export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    pushData: function() {
        console.log('事件触发');
      vm.$emit("broData", "平级组件的内容");
    }
  }
};
</script>

<style scoped>
.content {
    margin-top: 10px;
}
p{
    margin: 0 15px;
}
a {
  display: block;
  width: calc(100% - 30px);
  height: 35px;
  line-height: 35px;
  margin: 10px auto;
  color: #ffffff;
  background-color: #ff6238;
  text-align: center;
}
</style>

