<template>
	<div id="myHome">
		<div class="jokeList">
			<ul>
				<li v-for="(item,index) in arrList">
					<a href="conText.html">
						<h2>{{item.title}}</h2>
						<p v-html>{{item.detail}}</p>
					</a>
					<div class="vote">
						<button class="against" v-on:click="reduce(item.against)">踩  {{item.against}}</button>
						<button class="agree" v-on:click="plus(item.agree)">赞  </button>{{item.agree}}

					</div>
				</li>

			</ul>	
		</div>
	</div>
	
</template>


<script type="text/javascript">
import BannerView from './Banner.vue'
export default{
	components:{
		BannerView
	},
	data(){

		return{
			arrList:[],
			yes:0,
			no:0

		}
	},
		// computed:{
		// 	zan:function(){
		// 		return this.item.agree+1;
		// 	}
		// },
		mounted(){
				//获取数据
				this.fetchData();
			},
			methods:{
				fetchData(){
					var _this=this;
					this.$http.get('static/data/focus.data').then(function(result){
						//console.log(result);
						_this.arrList=result.data;
					}).catch(function(err){
						console.log('Home',err)
					});
				},
				plus:function(agree){
					this.item.agree=agree++;
				}
				
			}
		}
		</script>
		<style type="text/css">
		button{
			border-style: none;
			color: white;
		}
		.jokeList{padding:0.3rem 0;}
		.jokeList li{
			margin: 0 auto;
			width: 80%;
			
			background-color: #fff;
			margin-bottom: 16px;
			padding: 18px 20px;
			border: 1px solid #e8e8e8;
		}
		.vote{
			color: white;
			margin-top: 10px;
			text-align: center;
			line-height: 0.5rem;
			font-size: 18px;
			width: 100%;
			height:0.5rem;
		}
		.agree{
			
			float: right;
			height: 100%;
			width: 1rem;
			background-color: red;
			/*background-image: url("../assets/img/agree.ico");*/
		}
		.against{
			float:right ;
			height: 100%;
			width: 1rem;
			background-color: green;
			margin-left: 10px;
			/*background-image: url("../assets/img/agree.ico");*/
		}
		</style>