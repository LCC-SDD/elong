<template>
	<div >
			{{msg}}
		 <button @click='toAview'>传给兄弟组件</button> 
		<!-- 得到的父组件数据：{{msg}}    -->
	</div>
</template>

<script>
import eventBus from '../../eventBus';
	export default{
		name:'b',
		data(){
			return {
				msg:'123456'
			}
		},
		methods:{
			// but(){
			// 	this.$emit('sendToParent','啊啊啊啊啊啊啊');
			// }
			toAview(){
				this.$router.push({
					path:'/tiaoZhuan/tiaoZhuan'
				})
			}
		},
		destroyed(){
				this.Bus.$emit('sendToParent',this.msg);
			}
	}
</script>

<style>
	
</style>