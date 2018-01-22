<template>
	<div id="mybanner">
		<div class="banner">
				<ul class="clearfix">
					<li v-for="item in bannerData">
						<img :src="item.img">
						<div class="text-box">
							<h2>{{item.title}}</h2>
							<p>&emsp;&emsp;{{item.detail}}</p>
						</div>
					</li>
				</ul>
			</div>

	</div>

</template>
<script type="text/javascript" src="../assets/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="../assets/js/swiper-4.1.0.min.js"></script>
<script type="text/javascript">
	export default{
		data(){
			return{
				bannerData:[]
			}
		},
		mounted(){
	    this.slider();
	    this.fetchData();
	  },
	  methods:{
	    slider(){
	      $(function(){
	        var mySwiper=new Swiper($('.banner')[0],{
	          auto:2000,
	          continuous:true,
	          crollbar: '.swiper-scrollbar',
	          callback:function(index,element){
	            $('.banner ol li').removeClass('active');
	            $('.banner ol li').eq(index).addClass('active');          }
	        });
	      })
	    },
	    fetchData(){
					var _this=this;
					this.$http.get('static/data/banner.data').then(function(result){
						//console.log(result);
						_this.bannerData=result.data;
					}).catch(function(err){
						console.log('Home',err)
					});
				}
	  }
	}

</script>
<style scoped>
	.banner{
		overflow: hidden;

	}
	
</style>
