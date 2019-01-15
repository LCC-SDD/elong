<template> 
	<div class="footers">
		<div class="footer_info">
			<dl>
				<dt>加盟合作</dt>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						酒店加盟
					</router-link>
				</dd>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						开放平台
					</router-link>
				</dd>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						代理合作
					</router-link>
				</dd>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						广告服务
					</router-link>
				</dd>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						商家中心
					</router-link>
				</dd>
			</dl>
			<dl>
				<dt>关于艺龙</dt>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						酒店大全
					</router-link>
				</dd>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						国际酒店
					</router-link>
				</dd>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						校园招聘
					</router-link>
				</dd>
				<dd>
					<router-link to='/tiaoZhuan/tiaoZhuan'>
						联系我们
					</router-link>
				</dd>
			</dl>
			<dl>
				<dt>艺龙APP下载</dt>
				<dd></dd>
			</dl>
			<dl>
				<dt>艺龙官方微信</dt>
				<dd></dd>
			</dl>
			<dl>
				<dt>艺龙官方小程序</dt>
				<dd></dd>
			</dl>
		</div>
		<div class="footer_copy">
			 © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved. 
			 <a href="javascript:void(0)">
			 	京ICP证010011号
			 </a>
			 <a href="javascript:void(0)">
			 	 京公网安备11010502026059号
			 </a>
			 &nbsp;&nbsp;&nbsp;
			 <a href="javascript:void(0)">
			 	经营执照
			 </a>
		</div>
		<div class="footer_img">
			<a href="javascript:void(0)"></a>
			<a href="javascript:void(0)"></a>
			<a href="javascript:void(0)"></a>
			<a href="javascript:void(0)"></a>
			<a href="javascript:void(0)"></a>
			<a href="javascript:void(0)"></a>
		</div>
		<!-- {{msg}} -->
		<bvu></bvu>
		<!-- <input type="text" v-model='msg'>  -->
	</div>
</template>

<script>
import bvu from './b';
import eventBus from '../../eventBus.js';
	export default{
		name:'footers',
		data(){
			return{
				num:'00000',
			}
		},
		components:{
			bvu
		},
		methods:{
			// btn(e){
			// 	this.msg=e;
			// }
		},
		// beforeCreate(){
		// 	var that = this;
		// 	eventBus.$on('sendToParent',function(msg){
		// 		that.num = msg;
		// 	})
		// }
	}
</script>
	
<style lang='scss' scope>
@import '../../assets/scss/footer.scss';
</style>