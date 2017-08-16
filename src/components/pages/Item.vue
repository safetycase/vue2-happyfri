<template>
	<div>
    	<MyHeader :title = 'title'></MyHeader>
    	<div>

    	</div>
	</div>
</template>

<script>
	import MyHeader from '../common/Header.vue'
  	export default {
		name: 'Item',
		components: {
			MyHeader
		},
		data(){
			return {
				title: '第一题'
			}
		}   
  	}

</script>

<style scoped>

</style>