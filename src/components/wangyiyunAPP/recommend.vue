<template>
<div>
        <div class="head">
            <span>更多</span>
        <span>我的音乐</span>
        <img style="width:30px;height:30px;" src="../../assets/12.png" alt="">
        </div>

<!-- 本地 -->
    <div class="wdhy">
        <div><img style="width:36px;height:36px;" src="../../assets/t_actionbar_friends_normal.png" alt="">
        <span>本地音乐</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:36px;height:36px;" src="../../assets/t_actionbar_music_normal.png" alt="">
        <span>最近播放</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:36px;height:36px;" src="../../assets/zq.png" alt="">
        <span>我的电台</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>
    <div class="wdhy">
        <div><img style="width:36px;height:36px;" src="../../assets/zs.png" alt="">
        <span>我的收藏</span></div>
        <i style="font-size:24px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
    </div>

    <!-- 创建收藏 -->
        <div class="wdhysc">
        <div><i style="font-size:21px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
        <span>我的创建的歌单</span></div>
    </div>
    <div class="wdhysc">
        <div><i style="font-size:21px;float: left;color: gray;margin-top:3px" class="el-icon-arrow-right"></i>
        <span>我的收藏的歌单</span></div>
    </div>

</div>
</template>


<script>
export default {};
</script>

<style scoped>
.head {
  width: 100%;
  height: 50px;
  background-color: #d33b32;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
}

.wdhy {
  display: flex;
  height: 46px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
}
.wdhy:hover {
  background-color: gainsboro;
}
.wdhy div {
  display: flex;
  align-content: center;
}
.wdhy div span {
  margin-top: 8px;
}

.wdhysc {
  display: flex;
  height: 29px;
  background-color: gainsboro;
  justify-content: space-between;
  line-height: 29px;
}
.wdhysc span {
  font-size: 16px;
}
</style>