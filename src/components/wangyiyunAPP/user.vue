<template>
<div>
    <div class="head">
        <span>账号</span>
        <img style="width:39px;height:39px;margin-right:20px;" src="../../assets/12.png" alt="">
    </div>

<div class="zhut">
    <div class="user">
        <div class="usertoux">
            <div class="toux"><img style="width:86px;border-radius:50%;margin:9px" src="../../assets/fff.jpg" alt=""></div>
            <div><h2>xxxxxx</h2><img style="width:50px;height:26px;border-radius:14px" src="../../assets/fff.jpg" alt=""></div>
        </div>
        <img style="width:45px;height: 25px;margin-right: 16px;margin-top: 60px;border-radius:25%" src="../../assets/fff.jpg" alt="">
    </div>
    <div class="dongt">
        <div>动态
            <p>1</p>
        </div>
        <div>关注
            <p>2</p>
        </div>
        <div>粉丝
            <p>0</p>
        </div>
        <div>我的资料</div>
    </div>
    <!-- 我的消息 -->
    <div class="wdxx">
        <div><img style="width:30px;height:25px;" src="../../assets/a73.png" alt="">
        <span>我的消息</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <!-- 会员 -->
    <div class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/aka.png" alt="">
        <span>会员中心</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/ak8.png" alt="">
        <span>商场</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/ajx.png" alt="">
        <span>在线听歌免流量</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>

<!-- 设置 -->
    <div style="margin-top:20px" class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/a60.png" alt="">
        <span>设置</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/a60.png" alt="">
        <span>扫一扫</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/ak7.png" alt="">
        <span>个性皮肤</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
        <div class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/aju.png" alt="">
        <span>夜间模式</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:30px;height:25px;" src="../../assets/ajo.png" alt="">
        <span>定时关闭</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
        <span>退出</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>

</div>


</div>
</template>


<script>
export default {};
</script>

<style scoped>
.head{
    width: 100%;
    height: 60px;
    background-color: #d33b32;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}
.head span{
    margin-left: 8.5rem;
    font-size: 20px;
}
.zhut{
    width: 100%;
    height: 600px;
    background-color: ghostwhite;
}

.user{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid gainsboro;
    display: flex;
    background-color: white;
    justify-content: space-between;
}
.usertoux{
    display: flex;
}
.dongt{
    display: flex;
    background-color: white;
    justify-content: space-around;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 8px;
}
.dongt div{
    width: 76px;
    height: 37px;
    margin-top: 10px;
}
.dongt div p{
    margin: 0;
}
.wdxx{
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gainsboro;
    border-top:1px solid gainsboro;
    height: 40px;
    margin: 10px 0 10px 0;
}
.wdxx:hover{
    background-color: gainsboro;
}
.wdxx div{
    display: flex;
    align-items: center;
}
.wdxx div span{
    margin-left:6px
}
.wdhy{
    display: flex;
    height: 36px;
    background-color: white;
    justify-content: space-between;
    border-bottom: 1px solid gainsboro;
    line-height: 36px;
}
.wdhy:hover{
    background-color: gainsboro;
}
.wdhy div{
    display: flex;
    align-items: center;
}
.wdhy div span{
    margin-left:6px
}


</style>