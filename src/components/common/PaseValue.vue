<template>
    <div class="detail_wrap">
        <button v-on:click="paseValue">这是个按钮</button>
    </div>
</template>

<script>
export default {
    name: "PaseValue",
    data() {
        return {

        }
    },
    methods: {
        paseValue: function(){
            this.$emit("listenChild", "子组件传递过来的信息");
        }
    }
}
</script>

<style scoped>
.detail_wrap {
    height: 180px;
    width: 100%;
    background-color: #ffffff;
    margin-top: 10px;
}
.detail_wrap button{
    height: 40px;
    line-height: 40px;
    width: calc(100% - 32px);
    font-size: 16px;
    color: #ffffff;
    background-color: #ff6238;
    margin: 100px 15px 0;
    border: none;
    border-radius: 4px;
}
</style>

