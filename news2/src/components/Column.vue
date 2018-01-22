<template>
	<div id="myHome">
		<div class="content">
			<div class="content_box">
				
				<div class="column">
					<ul class="myUl">
						<li  v-for="(item,index) in arrList" class="myLi">
							<!-- <a href="conText.html">
								
							</a> -->
							<router-link :to="'./column/'+item.id" tag="a">
								<h2>{{item.title}}</h2>
								<ul class="imgs">
									<li v-for="item1 in item.img">
										<img :src="item1">
									</li>
								</ul>
								<p>{{item.detail}}</p>
								
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>


<script type="text/javascript">
	export default{
		
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('static/data/column.data').then(function(result){
						//console.log(result);
						_this.arrList=result.data;
					}).catch(function(err){
						console.log('Home',err)
					});
				}
			}
		}
	</script>


<style type="text/css" scoped>
	.content{
		width: 95%;
	}
	h2{
		text-align: center;
		height: 25px;
		line-height: 25px;
		font-size: 20px;
	}
	.myUl{
		margin: 20px auto;
	}
	.column h2{
		color: black;
		background-color: #CCFFFF;
	}
	.column .myLi{
		border-bottom:1px solid #ccc;
		width: 90%;
		margin:10px auto;
		background-color: white;

	}
	.column .imgs{
		margin: 0 auto;
		width: 100%;
		height: 5rem;
	}
	.column p{
		display: inline-block;
		margin:10px; 
		text-indent: 2em;
		font-size: 12px;
	}
	.column img{

		float: left;
		/*border:1px solid red;*/
		margin:5px;
		width: 46%
		
	}
</style>