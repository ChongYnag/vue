/*
* @Author: 89305141@qq.com
* @Date:   2017-06-11 13:46:03
* @Last Modified by:   89305141@qq.com
* @Last Modified time: 2017-06-11 17:44:13
*/

'use strict';

export default{
	showHeader:({commit})=>{
		commit("showHeader")
	},
	hideHeader:({commit})=>{
		commit("hideHeader")
	},
	showLoading:({commit})=>{
		commit("showLoading")
	},
	hideLoading:({commit})=>{
		commit("hideLoading")
	}
}