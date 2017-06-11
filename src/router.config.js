/*
* @Author: 89305141@qq.com
* @Date:   2017-06-11 13:10:47
* @Last Modified by:   89305141@qq.com
* @Last Modified time: 2017-06-11 20:32:48
*/

'use strict';
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import Userinfo from './components/Userinfo.vue'
import Article from './components/Article.vue'
export default[
	{
		path:'/home',
		component:Home
	},{
		path:'/Follow',
		component:Follow
	},{
		path:'/Column',
		component:Column
	},{
		path:'/user-info',
		component:Userinfo
	},{
		path:'/article/:id',
		component:Article
	},{
		path:'/',
		redirect:'/home'
	},{
		path:'*',
		redirect:'/hone'
	}
]