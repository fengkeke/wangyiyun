<template>
<div>
        <el-header style="background-color:#d33b32">
          <img style="width:12%;margin-top:15px;float: left;" src="../../assets/identify_widget_icn_new.png" alt="">
            <el-input
                    style="margin-top:10px;width:70%;height:20px;border-radius:20px;border-radius: 21px;"
                    placeholder="搜索音乐、视屏、歌词、电台">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <img style="width:12%;margin-top:14px;float: right;" src="../../assets/12.png" alt="">
        </el-header>
        <!-- 选项 -->

        <!-- 主体 -->
                <div style="width:100%;height:37px;display: flex;justify-content: space-around;border-bottom:1px solid gray;margin:10px 0;">
                    <div class="yin" style="width:59px;height:30px;font-size: 20px;padding-bottom:6px">
                      <router-link to='/Home/d6/c1'>音乐</router-link>
                    </div>
                    <div class="yin" style="width:59px;height:30px;font-size: 20px;padding-bottom:6px">
                      <router-link to='/Home/d6/c2'>视屏</router-link>
                    </div>
                    <div class="yin" style="width:59px;height:30px;font-size: 20px;padding-bottom:6px">
                      <router-link to='/Home/d6/c3'>电台</router-link>
                    </div>
                </div>

             <router-view></router-view>
</div>
</template>


<script>

</script>

<style scoped>
a{
  text-decoration: none;
}

.yin:hover {
  border-bottom: 2px solid red;
}


</style>