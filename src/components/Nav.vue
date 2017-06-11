<template>
	<div id="Nav">
		<div class="nav">
		<ul>
	    	<!-- <li class="active">
	    		<a href="javascript:;">首页</a>
	    	</li>
	    	<li class="">
	    		<a href="javascript:;">关注</a>
	    	</li>
	    	<li class="">
	    		<a href="javascript:;">栏目</a>
	    	</li> -->
	    	<router-link to="/home" tag="li" active-class="active">
	    		<a href="javascript:">首页</a>
	    	</router-link>
	    	<router-link to="/Follow" tag="li" active-class="active">
	    		<a href="javascript:">关注</a>
	    	</router-link>	
	    	<router-link to="/Column" tag="li" active-class="active">
	    		<a href="javascript:">栏目</a>
	    	</router-link>		
	    </ul>
	</div>
	</div>
</template>
<script>
	
</script>