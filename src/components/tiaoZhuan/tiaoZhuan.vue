<template>
	<div>
		<p>{{num}}</p>
		<p v-for="item in nameList">
			{{item.name}}----{{item.age}}
	    </p>
	</div>

</template>

<script type="es6">
import eventBus from '../../eventBus';
	export default{
		name:'tiao',
		data(){
			return {
				num:'kkk',
				nameList:[],
				huoDong:[]
			}
			
		},
		methods:{
			getdataName(){
				this.$http.get('/static/data.json').then((res)=>{
					if(res.data.data.errorCode == 1){
						console.log(res)
						const {
							data:{
								arr,
								array,
							},
						} = res.data;
					this.nameList = arr;
					this.huoDong = array;
					// this.nameList=res.data.data.arr;
					// this.huoDong=res.data.data.array;
					console.log(this.nameList);
					console.log(this.huoDong);
					}else{
						console.log('请求失败');
					}
				})
				.catch((err)=>{
					console.log(1)
				})

			}
		},
		beforeCreate(){
			var that = this;
			this.Bus.$on('sendToParent',function(msg){
				that.num = msg;
				// console.log(that.num)
			})
		},
		mounted(){
			this.getdataName();
		}
	}
</script>

<style lang='scss' scope>
</style>