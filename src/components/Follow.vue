<template>
	<div id="Home">
  <div class="content mt40">
    <div class="newsList">
      <ul>
        <li v-for="(item,index) in arrList">
          <a href="javascript:">
            <h2>{{item.title}}</h2>
            <p>
              {{item.detail}}
            </p>
          </a>
          </li>
      </ul>
    </div>
  </div>
    
  </div>
</template>
<script>
  export default{
    data(){
      return{
        arrList:[]
      }
    },
    mounted(){
      //页面加载获取数据
      this.getFollowData();
    },
    methods:{
      getFollowData(){
        var _this = this;
        this.$http.get('src/data/follow.data').then(function(res){
          _this.arrList = res.data;
          console.log(_this.arrList);
        }).catch(function(err){
          console.log('home'+err);
        });
      }
    }
  }
</script>
<style scoped>
  .mt40{
    margin-top: 30px;
  }
</style>