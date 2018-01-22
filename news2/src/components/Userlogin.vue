<!-- 
<template>
	<div id="user-login">
		<div class="nav">
			<ul>
				<li class="l-btn" onclick="window.history.go(-1)">
					
				</li>
				<li>
					<p>登录</p>
				</li>
				<li>
					<router-link to="/user-reg" tag="a">注册</router-link>
				</li>
				
			</ul>
			
		</div>
		<div class="content">	
			<div class="cont">
				

				<form >
					<div class="box">
						<div class="inputBox">
							<label for="name">帐号：</label>
							<input type="text" name="name" placeholder="请输入帐号" v-model="username"><br>
						</div>
						<div class="inputBox">
							<label>密码：</label>
							<input type="password" name="password" placeholder="请输入密码" v-model="password"><br>
						</div>
					</div>

					
					<input type="submit" class="submit" name="submit" value="登录" @click="login()"><br>
					
					<a href="#">忘记密码？</a>

					
					
				</form>
			</div> 
		</div>

		
		
	</div>
</template>
<script type="text/javascript" src="../assets/js/jquery-1.7.2.js"></script>
<script type="text/javascript">
export default{
	data(){
		return{
			username:'',
			password:''
		}
	},
	methods:{
		login(){
			this.$http.get('/api/login/getUsername')
			.then(function(res){
				console.log(res);
				console.log("yes");
				let params={
					username:this.username,
					password:this.password
				};
				return this.$http.post('/api/logon/createUsername',params);
			}).then(function(res){
				console.log(res);
			}).catch(function(rej){
				console.log(rej);
			});
		}

	}

}
</script>

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

-->


<template>
	<div id="app">
		<label for="username">账号：</label> 

		<input type="text" name="username" id="username" v-model="username" placeholder="请输入账号" >
		{{username}}
		<br>
		<label for="pwd">密码：</label>

		<input type="password" name="pwd" v-model="pwd"  placeholder="请输入密码">
		{{pwd}}
		<br>
		<input type="submit" name="submit" id="pwd" @click="login()">

	</div>

</template>
<script type="text/javascript">
export default{
	data(){
		return{
			username:'',
			pwd:''
		}

	},
	methods:{
		login(){
			this.$http.get('/api/login/getUsername')
			.then(function(response){
				console.log(response);
				let params={
					username:this.username,
					pwd:this.pwd
				};
				console.log("sending...");
				return this.$http.post('/api/login/createUsername',params);
			})
			.then(function(response){
				console.log(response);
			})
			.catch(function(reject){
				console.log(reject);
			});

		}
	}
}
</script>
<style type="text/css">

#app{
	margin-top: 50px;
}
</style>