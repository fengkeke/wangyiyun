<template>
<el-container style="border:1px solid red;width:100%;height:650px">
    <el-main style="width:101%">
        <router-view></router-view>
    </el-main>

  <!-- 底部 -->
  <el-footer style="background-color:#352919">
        <div style="width:100%;height:37px;display: flex;justify-content: space-around;margin:19px 0;font-size: 19px;">
          <div><router-link to='/Home/d6/c1'>发现音乐</router-link></div>
          <div><router-link to='/Home/d2'>我的音乐</router-link></div>
          <div><router-link to='/Home/d3'>朋友</router-link></div>
          <div><router-link to='/Home/d4'>账号</router-link></div>
        </div>
  </el-footer>
</el-container>

</template>


<script>
export default {};
</script>


<style scoped>
a {
  text-decoration: none;
}

ul {
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
  margin-top: -10px;
}
</style>