<template>
<el-container>
  <el-header style="background-color:gray;height:276px">
      <!-- 返回标题 -->
      <div style="width:100%;height:46px;line-height: 2.875rem;">
          <router-link to='./Home/d6/c1'><i style="font-size:46px;float: left;color: white" class="el-icon-arrow-left"></i></router-link>
         
         <span style="font-size:20px;color: white">歌单</span>
         <span><img style="width:30px;margin:10px 10px 0 0;float: right" src="../../assets/aka.png" alt=""></span>
         <span><img style="width:30px;margin:10px 10px 0 0;float: right" src="../../assets/aka.png" alt=""></span>
      </div>

      <!-- 图片标题 -->
      

          <div v-for="item in this.arr" :key="item.id">
                <div style="display:flex;">
                    <!-- 歌单图片 -->
                    <div class="left" style="margin-top:37px">
                    <img style="width:100px;height:120px" :src="IP+/images/+item.picture" alt="">
                    </div>
                    <!-- 歌单信息 -->
                <div class="right" style="margin-left:20px;margin-top:16px;">
                    <div class="right" style="margin-left:20px;margin-top:16px;">
                        <h4>{{item.song_name}}</h4>
                        <div style="display:flex;">
                        <img style="width:40px;height:40px;border-radius:50%" src="../../assets/ddd.jpg" alt="">
                        <span style="padding-top:10px">{{item.user}}</span>
                        </div>
                    </div>           
                </div>
          </div>
          </div>

      <!-- 标签写死 -->
      <div style="width:100%;height:60px;margin-top:-7px">
          <ul style="display:flex;justify-content: space-around;padding: 0;">
              <li><img style="margin:0;width:33px" src="../../assets/afz.png" alt=""><p style="margin:0;font-size:14px">666</p></li>
              <li><img style="margin:0;width:33px" src="../../assets/aai.png" alt=""><p style="margin:0;font-size:14px">666</p></li>
              <li><img style="margin:0;width:33px" src="../../assets/aau.png" alt=""><p style="margin:0;font-size:14px">666</p></li>
              <li><img style="margin:0;width:33px" src="../../assets/px.png" alt=""><p style="margin:0;font-size:14px">666</p></li>
          </ul>
      </div>





      </el-header>

  <el-main>
      <!-- 标题 -->
      <div style="width:100%;height:32px;margin-top:-7px;border-bottom:1px solid gainsboro">
          <span style="float: left;line-height:2rem;"><img style="width:26px;float:left;margin-right:8px" src="../../assets/a3d.png" alt="">播放全部（共54首）</span>
          <span style="float: right;line-height:2rem;"><img style="width:30px;float: left" src="../../assets/aka.png" alt="">多选</span>
      </div>

<!-- 歌曲列表 -->
<div v-for="item in this.song" :key="item.id">
      <ol style="padding: 0;border-bottom:1px solid grey">
          <li @click='djbf'>
               <div v-for="item in this.arr" :key="item.id">
              <div style="display:flex;justify-content: space-between">
                  <div>
                      <p style="margin:0">{{item.song}}</p>
                      <p style="margin:0">{{item.singer}}</p>
                  </div>
                  <div style="float: left;">
                      <img style="width:30px;float: left" src="../../assets/aka.png" alt="">
                      <img style="width:30px;float: left" src="../../assets/a16.png" alt="">
                  </div>
              </div>
               </div>
          </li>
      </ol>
      </div>
      

  </el-main>
</el-container>
</template>


<script>
import axios from "axios";

export default {
    data(){
        return{
            id:location.href.split("?"),
            arr:[],
            song:[],
            IP:"http://127.0.0.1:3003"
        }
    },
    methods:{
    
        djbf(){
            this.$router.push("/Bofang");
        }
    },
    created(){
        axios.post('http://192.168.43.31:3003/song').then(msg=>{
            for(let i= 0;i<msg.data.length;i++){
                if(msg.data[i]._id===this.id[1]){
                    this.arr.push(msg.data[i])
                }
            }
        })
        // console.log(this.arr);
        axios.post('http://192.168.43.31:3003/Music').then(msg=>{
            console.log(msg.data);
            
            for(let i= 0;i<msg.data.length;i++){
                if(msg.data[i]._id===this.id[1]){
                    this.song.push(msg.data[i])
                }
            }
    })
    },
    
};
</script>

<style scoped>
ul > li {
  list-style: none;
}
ul > li > p {
  color: white;
}
</style>