<template>
	<div id="myJoke">
		
				
				<div class="jokeList">
					<ul>
						<li v-for="(item,index) in arrList">
							<a href="conText.html">
								<h2>{{item.title}}</h2>
								<p v-html>{{item.detail}}</p>
							</a>
							
							<ZanYa :zan="[item.agree,item.against]" @my-event="getZan"></ZanYa>
						</li>
						
					</ul>	
				</div>
			
	</div>
	
</template>


<script type="text/javascript">
	import ZanYa from './ZanYa.vue'
	export default{
		components:{
			ZanYa
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
				
				getZan(zan,buZan){
					this.yes=zan;
					this.no=buZan;
				}
				
			}
		}
	</script>
	<style type="text/css">
		
		p{
			font-size: 12px;
		}
		.jokeList{
			padding:2rem 0;
		}
		.jokeList li{
			margin: 0 auto;
			width: 80%;
			
			background-color: #fff;
			margin-bottom: 16px;
			padding: 15px 20px;
			border: 1px solid #e8e8e8;
		}
		
		
	</style>