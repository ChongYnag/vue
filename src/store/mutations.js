/*
* @Author: 89305141@qq.com
* @Date:   2017-06-11 13:46:13
* @Last Modified by:   89305141@qq.com
* @Last Modified time: 2017-06-11 17:44:39
*/

'use strict';
import getters from './getters.js'
const state = {
	header:true,
	loading:false
}
const mutations={
	showHeader(state){
		state.header = true
	},
	hideHeader(state){
		state.header = false
	},
	showLoading(state){
		state.loading = true
	},
	hideLoading(state){
		state.loading = false
	}
}
export default{
	state,
	mutations,
	getters
}