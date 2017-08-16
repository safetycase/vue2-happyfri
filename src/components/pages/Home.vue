<template>
	<div>
    	<MyHeader :title = 'title'></MyHeader>
    	<div>
    		<div class="home_logo item_container_style"></div>
    		<router-link to="item" class="start button_style" ></router-link>
    	</div>
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
	.item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}
	.home_logo{
		background-image: url(../../assets/images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(../../assets/images/1-4.png);
    }
</style>