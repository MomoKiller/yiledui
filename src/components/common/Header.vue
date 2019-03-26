<template>
    <!--  原始头部  -->
    <header>
        <a class="back_btn">
            <i></i>
        </a>
        <a class="title">兑换成功</a>
    </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
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
header a.back_btn{
    display: block;
    height: 40px;
    width: 40px;
    float: left;
}
header .back_btn i{
    display: block;
    width: 12px;
    height: 20px;
    background: url(../../assets/img/back_btn.png) no-repeat;
    background-size: 100% 100%;
    margin: 10px 14px;
}
header a.title{
    display: block;
    width: calc(100% - 80px);
    height: 40px;
    float: left;
}
</style>

