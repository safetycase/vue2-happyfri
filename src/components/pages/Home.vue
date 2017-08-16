<template>
	<div>
    	<MyHeader :title = 'title'></MyHeader>
		<div>home_logo</div>
		<router-link to="item">开始</router-link>
	</div>
</template>

<script>
	import MyHeader from '../common/Header.vue'
  	export default {
		name: 'Home',
		components: {
			MyHeader
		},
		data(){
			return {
				title: '第一周'
			}
		}   
  	}

</script>

<style scoped>

</style>