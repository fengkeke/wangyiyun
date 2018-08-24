<template>

<el-container style="border:1px solid red;width:100%;height:650px">
    <el-header style="background-color:red">
            <i class="el-icon-arrow-left" style="margin-right: 262px;font-size: 40px;margin-top: 10px;color:white"></i>
            <p style="margin-top: -35px;font-size: 20px;color:white ;">手机号注册</p>
     </el-header>

     <form action="http://192.168.43.31:3003/reg" method="post">
     <el-input v-model="name" name='name' style="margin:15px 15px;width:90%;"  placeholder="+86 请输入手机号"></el-input>
     <el-input v-model="pwd" name='pwd' style="width:90%;margin:0 15px 10px 15px;"  placeholder="设置登录密码，不少于6位"></el-input>
     <!-- <el-button style="width:90%;margin:0 15px;background-color: red " type="danger" round>注册</el-button> -->
     <button @click="open" style="width:90%;margin:0 15px;background-color: red;height: 36px;border-radius: 19px ">注册</button>
     </form>
</el-container>

</template>


<script>
export default {
  data() {
    return {
      name: "",
      pwd: "",
    };
  },
  methods: {
    open() {
      this.$message("注册成功");
    }
  }
};
</script>

<style scoped>
/* a {
    height: 36px;
    border-radius: 19px;
  margin-right: 100px;
  font-size: 26px;
  color: white;
  text-align: center;
  background-color: red;
} */
</style>