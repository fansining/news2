<template>
	<div id="columnList">
		<div class="nav">
			<ul>
				<li class="l-btn" onclick="window.history.go(-1)"></li>
			</ul>
		</div>
		<div class="content">	
			<div class="cont">
				<p>{{columnData.title}}</p>
				<div class="pics">
					<ul>
						<li v-for="item1 in columnData.img">
							<img :src="item1">
						</li>
					</ul>
				</div>
				<!-- <div class="header clear">
					<img :src="articleData.author_face" alt=""/>
				</div>
				<div class="textBox" v-html="articleData.content">

				</div> -->
			</div> 
		</div>
		
	</div>
</template>
<script>
	export default{
		mounted(){
			this.fetchData(this.$route.params.id);

			//发送 隐藏footer的 action
			// if(this.$route.path.indexOf('article')>0){
			// 	this.$store.dispatch('hideFooter');
			// }
		},
		data(){
			return {
				columnData:{}
			}
		},
		watch:{
			$route(to){
				//console.log(to);
				var reg=/column\/\d+/;
				if(reg.test(to.path)){
					var columnId=this.$route.params.id || 0;

					this.fetchData(columnId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('static/data/columnList.data').then(function(res){
					//console.log(res.data[id]);
					_this.columnData=res.data[id-1];
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			}
		}
	}
</script>

<style scoped>

	

	.nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
	.nav ul{ width:20px;height:20px;padding-top:0.15rem;float: left;}
	.nav ul li{width:20px;height:20px; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}

	p{
		background-color:#990000;
		text-align: center;
		color: white;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.35rem;
	}
	
	.pics img{
		margin:5px;
		width: 46%;
		float: left;
	}
	.content{
		width: 95%;
	}
	
	
</style>