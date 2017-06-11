/*
* @Author: 89305141@qq.com
* @Date:   2017-06-11 21:02:06
* @Last Modified by:   89305141@qq.com
* @Last Modified time: 2017-06-11 21:15:02
*/

'use strict';
export const normalDate = (time)=>{
	if(time){
		var oDate = new Date();
		oDate.setTime(time);
		var y =oDate.getFullYear();
		var M = oDate.getMonth()+1;
		var d = oDate.getDate();

		var h = oDate.getHours();
		var m = oDate.getMinutes();
		var s = oDate.getSeconds();
		return y+"-"+M+"-"+d+" "+h+":"+m+":"+s;
	}
}