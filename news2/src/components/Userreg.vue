
<template>
	<div id="user-login">
		<div class="nav">
			<ul>
				<li class="l-btn" onclick="window.history.go(-1)">
					
				</li>
				<li>
					<p>注册</p>
				</li>
				
			</ul>
			
		</div>
		<div class="content">	
			<div class="cont">
				

				<form action="" method="get">
					<div class="box">
						<div class="inputBox">
							<label>手机：</label>
							<input type="text" name="name" placeholder="请输入11位手机号"><br>
						</div>
						<div class="inputBox">
							<label>昵称：</label>
							<input type="password" name="password" placeholder="4-20个字符"><br>
						</div>
						<div class="inputBox">
							<label>密码：</label>
							<input type="password" name="password" placeholder="6-20个数字或字母"><br>
						</div>
					</div>
					
					
					<input type="submit" class="submit" name="submit" value="注册"><br>
					
			

					
					
				</form>
			</div> 
		</div>

		
		
	</div>
</template>


<style scoped>

.nav{

	width:100%; 
	position:fixed;
	top:0;
	left:0; 
	background:#00CCCC; 
	border-bottom:1px 
	solid #e8eaec; 
	z-index:99;}
	.nav ul{

		
		margin:0 auto;
	}

	.nav ul .l-btn{
		width:20px;
		height:20px; 
		background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; 
		margin:0.1rem 0 0 0.38rem;}
	.nav ul li{
		top: 50%;
		width: 5.35rem;
		text-align: center;
		color: white;
		height:20px; 
		margin:0 0 0 0.38rem;
	}

	.nav p{
		text-align: center;
		height: 20px;
		line-height: 20px;
		font-size: 18px;
	}
	.nav a{
		font-size: 12px;
		color: yellow;
	}
	.nav li:nth-child(2){
		position: relative;
		left: 20%;
		top: 15%;

	}
	.nav li:nth-child(3){
		float: right;
	}


.content{
	width: 95%;
	
	margin:8% auto; 
	background:#f2f4f5; 

	padding-bottom: 3rem;
	min-height: 8.7rem;
}
	
	.content input{
		font-size: 18px;
		height: 30px;
	}
	.content .submit{
		margin-top: 0.3rem;
		width: 100%;
		background-color: #FF9933;
		color: white;
		border-radius: 0.1rem;
	}

	.inputBox{

		background-color: #fff;
		width: 100%;
		height: 30px;

	}
	.inputBox:first-child{
		border-radius: 0.1rem 0.1rem 0 0;
		border-bottom: 1px solid #ddd;
	}
	.inputBox:nth-child(2){
		border-radius: 0 0 0.1rem 0.1rem;
	}
	.inputBox label{
		margin-left: 5px;
	}
	.box{
		box-shadow: 1px 1px 10px #DDDDDD,-1px -1px 10px #DDDDDD;
		border-radius: 0.1rem;

	}
	.content a{
		margin-top: 10px;
		float: right;
	}

			</style>
