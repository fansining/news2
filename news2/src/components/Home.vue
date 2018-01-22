<template>
	<div id="myHome">
		<div class="content">
			
			<BannerView></BannerView>
			<div class="newsList">
				<ul>
					<li v-for="(item,index) in arrList">
						<!--  <a href="conText.html">
							<h2>{{index}}.{{item.title}}</h2>
							<p>{{item.detail}}</p>
						</a> -->
						<router-link :to="'./article/'+item.id" tag="a">
							<h2>{{index+1}}.{{item.title}}</h2>
							<img :src="item.img">
							<p>{{item.detail}}</p>
							
						</router-link>
					</li>
					
				</ul>
			</div> 

		</div>
	</div>
	
</template>
<style type="text/css" >
.content {
	margin: 8% auto;
	width: 95%;
}
.newsList{
	width:100%;
	 margin:0 auto;
	}
.newsList ul{ 
	padding:0 0.4rem;
}
.newsList ul li{ margin:5px 10px;color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;min-height: 2rem;}
.newsList ul li h2{min-height:0.9rem; font-size:0.8rem; overflow:hidden;padding-bottom: 5px;}
.newsList ul li p{
	text-indent:2em;
	min-height:1.8rem;
	margin-top:0.05rem;
	overflow:hidden;
	font-size: 0.6rem;
}
.newsList ul li img{width:90%;margin:0 auto;border: 5px solid rgba(125,125,125,0.5);}
</style>


<script type="text/javascript">
		//import NavView from './Nav.vue'
		import BannerView from './Banner.vue'
		export default{
			data(){
				return{
					arrList:[]
				}
			},
			components:{
				BannerView
				//NavView
			},
			mounted(){
				//获取数据
				this.fetchData();
			},
			methods:{
				fetchData(){
					var _this=this;
					this.$http.get('static/data/index.data').then(function(result){
						//console.log(result);
						_this.arrList=result.data;
					}).catch(function(err){
						console.log('Home',err)
					});
				}
			}
		}
</script>