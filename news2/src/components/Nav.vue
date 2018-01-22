<template>
	<div id="nav">
		<div class="nav">
      		<ul>
		        <!-- <li ><a href="#">hello</a></li>
		        <li class="active"><a href="#">Shellin</a></li>
		        <li><a href="#">LOL</a></li> -->
		        <router-link to="./home" tag="li" class="active" >
		        	<a href="#" >热点新闻</a>
		        </router-link>
		        
				

		        <router-link to="./column" tag="li" >
		        	<a href="#" >表情包</a>
		        </router-link>
		        <router-link to="./focus" tag="li"  >
		        	<a href="#" >搞笑段子</a>
		        </router-link>
      		</ul>
    	</div>
	</div>
</template>
<script type="text/javascript" src="../assets/js/jquery-1.7.2.js"></script>
<script type="text/javascript">
	
	export default{
		mounted(){
			this.myclick();
		},
		methods:{
			myclick:function(){
				//alert(this);
				$(".nav li").click(function(){
					$('.nav ul li').removeClass('active');
	            	//$('.nav ul li').eq(this).addClass('active');
	            	$('.nav ul li').eq($(this).index()).addClass('active');
				});
				
			}
		}
	}



</script>