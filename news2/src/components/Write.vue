<template>
	<div id="write">
		<div class="inside" v-show="!show"></div>
		<div class="content">
			
				
				<h2 class="title">&emsp;&hearts; 看看大家都在说什么 &hearts;</h2>
				<div id="myComments">
					<ul class="commentList">
						<li v-for="item in commentsList">
							<p><strong>{{item.user}}</strong></p>
							<p>{{item.detail}}</p>
							<zanYa></zanYa>
						</li>

					</ul>
				
			</div>
			</div>
			<div v-show="show">
				
				<button id="myTalk"  v-on:click="show=!show">我有话要说</button>

			</div>
			
			<div id="myWrite" v-show="!show">
				<label>编辑你的内容吧&hearts;</label><br>
				<textarea cols="20" rows="8" class="textContent"></textarea>
				<input type="submit" id="mySubmit" v-on:click="[show=!show,clearIt()]">
			</div>
		
	</div>
</template>
<script type="text/javascript" src="../assets/js/jquery-1.7.2.js"></script>

<script type="text/javascript">
import ZanYa from './ZanYa.vue'
export default{
	components:{
		ZanYa
	},
	mounted(){
		console.log("WEISHENM ");
		this.fetchData();
	},
	data(){
		return{
			commentsList:[],
			show:true
		}
	},

	methods:{
		
		clearIt:function(){
			
			var text=$(".textContent").val();
			console.log("内容："+text);
			$(".commentList").append("<li>"+text+`<zanYa></zanYa>`+"</li>");
			console.log("get");
			$(".textContent").val("");
			console.log($(".commentList"));
		},
		fetchData:function(){
			var _this=this;
			this.$http.get('static/data/write.data').then(function(res){
					//console.log(res.data[id]);
					_this.commentsList=res.data;
					console.log(_this.commentsList);
				}).catch(function(err){
					console.log('评论:',err);
				})
			}
		}
	}
	</script>

	<style >
	/*#write{
		margin-top:0.6rem;
	}*/
	.content{
		width: 95%;
		margin-top: 30px;
	}
	#myComments{
		background-color: white;
		min-height: 20px;

		margin: 0 auto;

	}
	#myComments ul{
		margin: 5px;
	}
	#myComments ul li{

		font-size: 15px;
		padding: 10px 0 15px 0;
		margin: 0 15px 0 15px;
	}
	#myComments ul li:not(:last-child){
		border-bottom: 1px solid #ccc;
	}
	#myTalk{
		width: 100%;
		
		background-color: #FF9933;
		border: 1px solid white;
		color: white;
		height: 2rem;
		margin-top: 0.3rem;
		margin-bottom: 2rem;
		text-align: center;
	}
	#myWrite{
		margin: 10px auto 10px auto;
		position: fixed;
		z-index: 10;
		width: 100%;
		bottom: 40px;
	}
	label{
		display: inline-block;
		width: 100%;
		height: 2rem;
		padding:0 10px;
		line-height: 2rem;
		color: #fff;
		font-size: 18px;
		background-color: #FF9933;
	}
	
	textarea{
		border-style: none;
		text-align: left;
		background-color: #fff;
		width: 100%;
		font-size: 18px;
		resize:none;
	}
	#mySubmit{
		width: 95%;
		background-color: #FF9933;
		color: #EEFFAA;
		height: 2rem;
		margin-bottom:0.1rem;
		width: 100%;
		background-color: #FF9933;
		
	}
	.title{
		background-color: #ccc;
		height: 2rem;
		line-height: 2rem;
	}
	.inside{
		top: -10px;
		margin:0;
		padding: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		position: fixed;
		background: rgba(0,0,0,0.5);
	}
	.noCover{
		/*position: fixed;*/
	}
	</style>