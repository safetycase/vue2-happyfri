<template>
	<div>
		<header>
			<span>{{title}}</span>
		</header>
		<div>home_logo</div>
		<router-link to="item">开始</router-link>
	</div>
</template>

<script>
  	export default {
		name: 'Home',
		data(){
			return {
				title: '第一周'
			}
		}   
  	}

</script>

<style>
  	
</style>