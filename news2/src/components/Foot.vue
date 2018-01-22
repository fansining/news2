<template>
	<div class="foot-btn">
      <ul>
        <!-- <li class="home"><a href="index.html"></a></li>
        <li class="write"><a href="#"></a></li> -->
        <!-- <li class="my"><a href="mydoc.html"></a></li> -->

		<router-link  class="home" tag="li"  to="/home">
        	<a href="mydoc.html"></a>
        </router-link>

		<router-link  class="write" tag="li"  to="/write">
        	<a href="mydoc.html"></a>
        </router-link>

        <router-link  class="my" tag="li"  to="/userinfo">
        	<a ></a>
        </router-link>
      </ul>
    </div>
</template>
<style type="text/css" scoped>
    .foot-btn{
        height: 4%;
    }
</style>