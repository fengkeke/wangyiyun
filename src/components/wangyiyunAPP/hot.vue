<template>
<div>
     <div class="block">
                  <el-carousel trigger="click" height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                    </el-carousel-item>
                  </el-carousel>
                </div>

            <!-- 选项 -->
        <div class="option">
          <div>
            <img style="width:50px" src="../../assets/t_recommend_icn_fm.png" alt="">
            <p style="margin:0;font-size:15px">私人FM</p>
            </div>
          <div>
            <img style="width:50px" src="../../assets/t_recommend_icn_daily.png" alt="">
            <p style="margin:0;font-size:15px">每日推荐</p>
            </div>
          <div>
            <img style="width:50px" src="../../assets/t_recommend_icn_playlist.png" alt="">
            <p style="margin:0;font-size:15px">歌单</p>
            </div>
          <div>
            <img style="width:50px" src="../../assets/t_recommend_icn_rank.png" alt="">
            <p style="margin:0;font-size:15px">排行榜</p>
            </div>
        </div>
            <!-- 歌单导航 -->
            <div style="width: 99%;height: 30px;display:flex;align-items:center;">
               <div style="width:3px;height: 15px;display:flex;align-items:center;background-color:red"></div>
               <span style="margin-left:8px">推荐歌单</span>
               <i class="el-icon-arrow-right"></i>
            </div>
            <!-- 歌单 -->
            <div style="width: 99%;display:flex;align-items:center;">
               <div>
                 <ul style="display:flex;align-items:center;flex-wrap: wrap;padding: 0;">

                   <li v-for="item in this.list" :key="item.id" style="width:32%;height:176px;overflow: hidden" @click='dianji1(item)'>
                     <img style="width:100%;height:100px" :src="IP+/images/+item.picture" alt="">
                     <p style="font-size:13px">{{item.song_name}}</p>
                    </li>


                 </ul>
               </div>
            </div>
</div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      IP: "http://127.0.0.1:3003"
    };
  },
  methods: {
    dianji1(item) {
      this.$router.push("/Gedan" + "?" + item._id);
    }
  },
  created() {
    console.log(this);

    axios.post("http://192.168.43.31:3003/song").then(msg => {
      msg.data.map(item => {
        return this.list.push(item);
      });
    });
  }
};
</script>

<style scoped>
/* 轮播 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-image: url("../../assets/lbt1.jpg");
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url("../../assets/lbt2.jpg");
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n + 2) {
  background-image: url("../../assets/lbt3.jpg");
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n + 3) {
  background-image: url("../../assets/lbt4.jpg");
  background-size: 100% 100%;
}
/* 内容 */
.option {
  width: 99%;
  height: 86px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
}
label {
  margin-left: 12px;
  margin-top: 5px;
  border-radius: 21px;
}
.option > div {
  margin-left: 21px;
}

li {
  list-style: none;
  margin-left: 4px;
}
ul > li > p {
  margin: 5px 0;
}
</style>