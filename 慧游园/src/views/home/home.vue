<template>
<div class="">
      <div class="top">
        <img src="../../assets/picture/wellBeing.png" alt="">
        <div class="search">
          <input type="text" v-model="keyword" placeholder="输入关键字">       
        </div>
        
        <div class="location"></div>
      </div>
      <SwiperCom style="width: 100%;" :gallery="gallery">
 
    </SwiperCom>
</div>
</template>
<script>
import SwiperCom from '../../components/swiperCom'
export default {
  name: "Home",
  components:{
			SwiperCom
		},
  data(){
    return{
     keyword:"",
     gallery:[
					"https://yimingmarket.oss-cn-beijing.aliyuncs.com/images/2021/06/22/16243670368195266.png",
					"https://yimingmarket.oss-cn-beijing.aliyuncs.com/images/2021/06/18/16240104796216034.png",
					"https://yimingmarket.oss-cn-beijing.aliyuncs.com/images/2021/06/18/16240105261813250.png",
					"https://yimingmarket.oss-cn-beijing.aliyuncs.com/images/2021/06/22/16243670368195266.png"
					
				]
    }
   },
   computed:{
   }   
};
</script>
<style scoped>
@import "../../assets/css/base.css";
  .top{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: aqua;
  }
  .top>img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  /* .search{
    height: 50px;
    writing-mode: vertical-lr;
    float: left;
  } */
  .top>input {
    height: max-content;
    padding-left: 24px;
    border: 0;
    border-radius: 5%;
    background-image: url(../../assets/iconfont/search.png);
    background-size: 9%;
    background-repeat: no-repeat;
    font-size: 18px;
}
</style>
