<template>
	<div id="vote">
		<button class="against" v-on:click="reduce(buZan)">踩 {{myBuZan}}</button>
		<button class="agree" v-on:click="plus(zan)">赞 {{myZan}} </button>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			'zan':0,
			'buZan':0,
			'plusFlag':0,
			'reduceFlag':0
		},
		data(){
			return{
				myZan:'',
				myBuZan:''
			}
		},
		methods:{

			plus(zan){

					console.log(zan);
					if(this.plusFlag==0){
						
						this.myZan=zan;
						this.plusFlag++;
					}
					
					this.myZan++;
				
				this.$emit('my-event',this.myZan,this.myBuZan)
			},
			reduce(buZan){

					console.log(buZan);
					if(this.reduceFlag==0){
						
						this.myBuZan=buZan;
						this.reduceFlag++;
					}
					
					this.myBuZan++;
				
				this.$emit('my-event',this.myZan,this.myBuZan)
			}
		}
	}
</script>
<style type="text/css" scoped>
	#vote{
		
		width: 80%;
		height: 30px;
		
		margin: 5px auto 0;
		text-overflow: clip;
	}
	*{
		font-size: 15px;
	}
	.agree{
			
			float: right;
			height: 100%;
			width: 3rem;
			background-color: red;
			/*background-image: url("../assets/img/agree.ico");*/
		}
		.against{
			float:right ;
			height: 100%;
			width: 3rem;
			background-color: green;
			margin-left: 10px;
			/*background-image: url("../assets/img/agree.ico");*/
		}
		button{
			border-style: none;
			color: white;

		}
</style>