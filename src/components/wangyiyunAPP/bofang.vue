<template>
<el-container>
  <el-header style="background-color:red;height:45px">
       <div style="width:100%;height:46px;line-height: 2.875rem;display:flex;justify-content: space-between">
          <router-link to='./Gedan'><i style="font-size:46px;float: left;color: white" class="el-icon-arrow-left"></i></router-link>
         <div style="font-size:15px;color: white"><p style="margin-top:-10px;padding:0;font-size:20px">小哥</p>
         <p style="margin-top:-43px;padding:0;font-size:13px">小朋友</p></div>
         <span><img style="width:30px;margin:10px 10px 0 0;float: right" src="../../assets/aka.png" alt=""></span>
      </div>
  </el-header>

<div style="background-color:gray;width:100%;height:446px">
          <div class="jjyy" style="width:200px;height:200px;margin-top:70px;margin-left:75px">
          <img style="width:200px;height:200px;margin-bottom:-52px" src="../../assets/ace.png" alt="">
          <img style="width:133px;height:133px;margin-top:-121px;border-radius:50%" src="../../assets/歌单图片.png" alt="">
      </div>
<!-- 评论 -->
       <div style="width:100%;height:37px;display: flex;justify-content: space-around;border-bottom:1px red gray;margin:136px 0;">
                <div>音乐</div>
                <div>视屏</div>
                <div>电台</div>
                <div>电台</div>
            </div>
</div>


  <el-footer style="background-color:green;height:123px">
      <el-progress :percentage="100"></el-progress>
      <div style="width:100%;height:37px;display: flex;justify-content: space-around;">
                <div>音乐</div>
                <div>视屏</div>
                <div>电台</div>
                <div>电台</div>
                <div>音乐</div>
            </div>
  </el-footer>
</el-container>
</template>


<script>
export default {};
</script>

<style scoped>
/* .jjyy{
    background-image:url('../../assets/ace.png');
} */
</style>