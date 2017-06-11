<template>
	<div id="Home">
  <div class="content">
    <BannerView></BannerView>
    <div class="newsList">
      <ul>
        <li v-for="(item,index) in arrList">
            <!-- <a href="javascript:">
              <h2>{{index}}{{item.title}}</h2>
              <p>
                {{item.detail}}
              </p>
            </a> -->
            <router-link :to="'/article/'+item.id" >
              <h2>{{index}}{{item.title}}</h2>
              <p>
                {{item.detail}}
              </p>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
    
  </div>
</template>
<script>
  import BannerView from './Banner.vue'
  export default{
    data(){
      return{
        arrList:[]
      }
    },
    components:{
      BannerView
    },
    mounted(){
      //页面加载获取数据
      this.getIndexData();
    },
    methods:{
      getIndexData(){
        var _this = this;
        this.$http.get('src/data/index.data').then(function(res){
          _this.arrList = res.data;
          console.log(_this.arrList);
        }).catch(function(err){
          console.log('home'+err);
        });
      }
    }
  }
</script>