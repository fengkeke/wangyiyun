<template>

<el-container style="border:1px solid red;width:100%;height:650px">
    <el-header style="background-color:red">
            <i class="el-icon-arrow-left" style="margin-right: 262px;font-size: 40px;margin-top: 10px;color:white"></i>
            <p style="margin-top: -35px;font-size: 20px;color:white ;">手机号登录</p>
     </el-header>
     <el-input v-model="name" style="margin:15px 15px;width:90%;"  placeholder="用户"></el-input>
     <el-input v-model="pwd" style="width:90%;margin:0 15px 10px 15px;"  placeholder="密码"></el-input>
     <el-button @click='clicklogin' style="width:90%;margin:0 15px;background-color: red " type="danger" round>登录</el-button>
      <router-link to='./reg'>注册账号</router-link>
</el-container>

</template>


<script>
import axios from "axios";
// let IP=""

export default {
  data() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {
    clicklogin() {
      console.log(666);

      axios
        .post("http://192.168.43.31:3003/login", { name: this.name, pwd: this.pwd })
        .then(msg => {
          if (msg.data === "ok") {
            this.$router.push("/Home/d6/c1");
          }
        });
    }
  }
};
</script>

<style scoped>
a {
  margin-top: 10px;
}
</style>