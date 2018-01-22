import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../components/Home.vue'
import Focus from '../components/Focus.vue'
import Column from '../components/Column.vue'
import Userinfo from '../components/Userinfo.vue'
import Article from '../components/Article.vue'
import ColumnList from '../components/ColumnList.vue'
import Userlogin from '../components/Userlogin.vue'
import Userreg from '../components/Userreg.vue'
import Write from '../components/Write.vue'
import ZanYourMom from '../components/ZanNiDaYe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path:'/home',
		component:Home
	},
	{
		path:'/focus',
		//component:Focus
		component:ZanYourMom
	},
	{
		path:'/column',
		component:Column
	},
	{
		path:'/write',
		component:Write
	},
	{
		path:'/userinfo',
		component:Userinfo

	},

	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/article/:id',
		component:Article
	},
	{
		path:'/column/:id',
		component:ColumnList
	},
	{
		path:'/user-login',
		component:Userlogin
	},
	{
		path:'/user-reg',
		component:Userreg
	}
  ]
})
