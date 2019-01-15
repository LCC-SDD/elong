<template> 
	<div class="page">
		<div class="bannerlb">
			<div class="left">
				<div class="emty">酒店</div>
				<div class="emty">机票</div>
				<div class="emty">火车票</div>
			</div>
			<div class="right">
				<div class="cate">
					<el-tabs  style="height: 200px;">
				    <el-tab-pane label="国内酒店">
						<p>
							目的地<el-input placeholder="请输入内容"></el-input>
						</p>
				    </el-tab-pane>
				    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
				  </el-tabs>
				</div>
				<div class="cate">2</div>
				<div class="cate">3</div>
			</div>
		</div>
		<div class="bannerlb">
			<div class="swiper-container">
    			<div class="swiper-wrapper">
        			<div class="swiper-slide swiper-slide1"></div>
        			<div class="swiper-slide swiper-slide2"></div>
        			<div class="swiper-slide swiper-slide3"></div>
        			<div class="swiper-slide swiper-slide4"></div>
        			<div class="swiper-slide swiper-slide5"></div>
    			</div>
	    		<!-- 如果需要分页器 -->
	    		<div class="swiper-pagination"></div>
			</div>
		</div>
		<!-- 登录展示个性内容 -->
		<div class="record">
			<div class="no_record_inf">
				<a href="javascript:void(0)">登录</a>
				<em>展示你的个性化内容</em>
			</div>
		</div>
		<!-- 手风琴效果 -->
		<div class="fold">
			<div class="fold_wrap">
				<ul>
					<li class='clifex clifex1'>
						<a href="javascript:void(0)">
							<h4>园林酒店</h4>
						</a>
					</li>
					<li class='clifex clifex2'>
						<a href="javascript:void(0)">
							<h4>情侣酒店</h4>
						</a>
					</li>
					<li class='clifex clifex3'>
						<a href="javascript:void(0)">
							<h4>设计师酒店</h4>
						</a>
					</li>
					<li class='clifex clifex4'>
						<a href="javascript:void(0)">
							<h4>青年旅社</h4>
						</a> 
					</li>
					<li class='clifex clifex5'>
						<a href="javascript:void(0)">
							<h4>特色客栈</h4>
						</a>
					</li>
					<li class='clifex clifex6'>
						<a href="javascript:void(0)">
							<h4>海岛酒店</h4>
						</a>
					</li>
					<li class='clifex clifex7'>
						<a href="javascript:void(0)">
							<h4>海外温泉</h4>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- 目的地指数 -->
		<div class="objective">
			<a href="javascript:void(0)">
				目的地指数
			</a>
			<span>
				覆盖全球75万家酒店，你想住的，我们都有
			</span>
		</div>
		<!-- 国内 -->
		<div class="dome">
			<a href="javascript:void(0)">
				<i></i>
				<em>国内</em>
			</a>
			<ul>
				<li class="dome_page mcly">
					<a href="javascript:void(0)">
						登高踏青
					</a>
				</li>
				<li class="dome_page mcly">
					<a href="javascript:void(0)">
						小憩温泉
					</a>
				</li>
				<li class="dome_page mcly">
					<a href="javascript:void(0)">
						天然氧吧
					</a>
				</li>
				<li class="dome_page mcly">
					<a href="javascript:void(0)">
						草原撒欢
					</a>
				</li>
				<li class="dome_page mcly">
					<a href="javascript:void(0)">
						小镇时光
					</a>
				</li>
				<li class="dome_page mcly">
					<a href="javascript:void(0)">
						美食之城
					</a>
				</li>
			</ul>
			<p>
				<a href="javascript:void(0)">更多>></a>
			</p>
		</div>
		<div class="theme">
			<ul class="wandou">
				<li>
					<div class="picture">
						<img src="../../assets/img/dgtq-hs.jpg" alt="">
					</div>
					<div class="city_name">
						黄山
					</div>
					<div class="scale">
						<p>春意撩人 登高踏青赏春色</p>
					</div>
				</li>
				<li>
					<div class="picture">
						<img src="../../assets/img/dgtq-ems.jpg" alt="">
					</div>
					<div class="city_name">
						峨眉山
					</div>
					<div class="scale">
						<p>阳春三月 闻着茶香去峨眉</p>
					</div>
				</li>
				<li>
					<div class="picture">
						<img src="../../assets/img/dgtq-wts.jpg" alt="">
					</div>
					<div class="city_name">
						五台山
					</div>
					<div class="scale">
						<p>迎春 祈福 登五台</p>
					</div>
				</li>
				<li>
					<div class="picture">
						<img src="../../assets/img/dgtq-ls.jpg" alt="">
					</div>
					<div class="city_name">
						庐山
					</div>
					<div class="scale">
						<p>亲近自然 春游庐山</p>
					</div>
				</li>
			</ul>
			<ul class="wandou">2</ul>
			<ul class="wandou">3</ul>
			<ul class="wandou">4</ul>
			<ul class="wandou">5</ul>
			<ul class="wandou">6</ul>
		</div>
		<!-- 海外 -->
		<div class="dome">
			<a href="javascript:void(0)">
				<i></i>
				<em>海外</em>
			</a>
			<ul>
				<li class="dome_page mcy">
					<a href="javascript:void(0)">
						文艺清新
					</a>
				</li>
				<li class="dome_page mcy">
					<a href="javascript:void(0)">
						面朝大海
					</a>
				</li>
				<li class="dome_page mcy">
					<a href="javascript:void(0)">
						别样建筑
					</a>
				</li>
				<li class="dome_page mcy">
					<a href="javascript:void(0)">
						浪漫主义
					</a>
				</li>
				<li class="dome_page mcy">
					<a href="javascript:void(0)">
						美丽都市
					</a>
				</li>
				<!-- <li class="dome_page mcy">
					<!-- <a href="javascript:void(0)">
					</a> -->
				<!-- </li> -->
			</ul>
			<p>
				<a href="javascript:void(0)">更多>></a>
			</p>
		</div>
		<div class="theme">
			<ul class="wd">
				<li>
					<div class="picture">
						<img src="../../assets/img/termini_it1_ld.jpg" alt="">
					</div>
					<div class="city_name">
						伦敦
					</div>
					<div class="scale">
						<p>风情英伦，帝国余韵</p>
					</div>
				</li>
				<li>
					<div class="picture">
						<img src="../../assets/img/termini_it1_qm.jpg" alt="">
					</div>
					<div class="city_name">
						清迈
					</div>
					<div class="scale">
						<p>泰北玫瑰，慢行古城</p>
					</div>
				</li>
				<li>
					<div class="picture">
						<img src="../../assets/img/termini_it1_jzd.jpg" alt="">
					</div>
					<div class="city_name">
						济州岛
					</div>
					<div class="scale">
						<p>最传统的浪漫，最神秘的自然</p>
					</div>
				</li>
				<li>
					<div class="picture">
						<img src="../../assets/img/termini_it1_lm.jpg" alt="">
					</div>
					<div class="city_name">
						罗马
					</div>
					<div class="scale">
						<p>永恒之城，魅力无限</p>
					</div>
				</li>
			</ul>
			<ul class="wd">2</ul>
			<ul class="wd">3</ul>
			<ul class="wd">4</ul>
			<ul class="wd">5</ul>
		</div>
		<!-- 超值特价票 -->
		<div class="offer">
			<a href="javascript:void(0)">
				超值特价票
			</a>
		</div>
		<!-- 机票 -->
		<div class="plane">
			<a href="javascript:void(0)">
				<i></i>
				机票
			</a>
			<ul v-for='city in $router.options.routes'>
				<li v-for='child in city.children' v-if='child.mcy'>
					<span class='city' v-for='son in child.children'>
						<router-link  :to="{path:city.path+'/'+child.path+son.path}">
							{{ son.citys }}
						</router-link>
					</span>
				</li>
			</ul>
			<div class="trick">
					<router-view></router-view>
			</div>
		</div> 
		<!-- 火车票 -->
	 	<div class="horizontal">
	 		<a href="javascript:void(0)">
	 			<i></i>
	 			火车票
	 		</a>
	 		<ul>
	 			<li class="chufa">
	 				<a href="javascript:void(0)">
	 					北京出发
	 				</a>
	 			</li>
	 			<li class="chufa">
	 				<a href="javascript:void(0)">
	 					上海出发
	 				</a>
	 			</li>
	 			<li class="chufa">
	 				<a href="javascript:void(0)">
	 					广州出发
	 				</a>
	 			</li>
	 			<li class="chufa">
	 				<a href="javascript:void(0)">
	 					深圳出发
	 				</a>
	 			</li>
	 			<li class="chufa">
	 				<a href="javascript:void(0)">
	 					天津出发
	 				</a>
	 			</li>
	 			<li class="chufa">
	 				<a href="javascript:void(0)">
	 					厦门出发
	 				</a>
	 			</li>
	 		</ul>
	 	</div>
	 	<div class="conte">
	 		<ul class="coner">1</ul>
	 		<ul class="coner">2</ul>
	 		<ul class="coner">3</ul>
	 		<ul class="coner">4</ul>
	 		<ul class="coner">5</ul>
	 		<ul class="coner">6</ul>
	 	</div>
	 	<!-- 旅游指南 -->
	 	<div class="guide">
	 		旅游指南
	 	</div>
	 	<div class="pic_rad">
	 		<div class="tab_pic_show">
	 			<ul>
	 				<li>
	 					<a href="javascript:void(0)">
	 						京郊民宿 吃热气腾腾火锅盆
	 					</a>
	 				</li>
	 				<li>
	 					<a href="javascript:void(0)">
	 						盘点江浙沪亲子酒店
	 					</a>
	 				</li>
	 				<li>
	 					<a href="javascript:void(0)">
	 						泸沽湖客栈的正确打开方式
	 					</a>
	 				</li>
	 				<li>
	 					<a href="javascript:void(0)">
	 						这个冬天 去惠斯勒滑雪
	 					</a>
	 				</li>
	 			</ul>
	 			<ol>
	 				<li>
	 					<img src="../../assets/img/17121251.jpg">
	 				</li>
	 				<li>
	 					<img src="../../assets/img/17121252.jpg">
	 				</li>
	 				<li>
	 					<img src="../../assets/img/17121253.jpg">
	 				</li>
	 				<li>
	 					<img src="../../assets/img/17121254.jpg">
	 				</li>
	 			</ol>
	 		</div>
	 		<div class="feiLv">
	 			<div class="left">
	 				<img src="../../assets/img/17121256.jpg">
	 				<p>
	 					<a href="javascript:void(0)">
	 						菲律宾 9座岛屿梦幻假期
	 					</a>
	 				</p>
	 			</div>
	 			<div class="right">
	 				<img src="../../assets/img/17121255.jpg">
	 				<p>
	 					<a href="javascript:void(0)">
	 						今冬北京 圣诞情浓
	 					</a>
	 				</p>
	 			</div>
	 		</div>
	 	</div>
	 	<!-- 客服 -->
	 	<div class="service">
	 		<ul>
	 			<li v-for='item in kefu'>
	 				<i></i>
	 				<span>{{item}}</span>
	 			</li>
	 		</ul>
	 	</div>
	</div>
</template>

<script>
	export default {
		name:'page',
			data() {
		      return {
		        activeName: 'second',
		        kefu:[]
	      };
	    },
		methods:{
			handleClick(tab, event) {
	        console.log(tab, event);
	      }
		},
		mounted(){
			this.$http.get('../../../static/gounei.json')
			.then((response)=>{
			 	this.kefu=response.data.kefu;
			 }).catch((error)=>{
			 	console.log(error);
			 })
				// banner轮播
			 var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    speed:300,
				autoplay : {
				   delay:3000
			    },
			    effect : 'fade',
			    // 如果需要分页器
				pagination: {
				    el: '.swiper-pagination',
				    clickable:true,
				},
			  })   


			 // banner内选项卡
			 var emtys=document.querySelectorAll(".emty");
			 var cates=document.querySelectorAll(".cate");
			 cates[0].style.zIndex=1;
			 for(var i=0;i<emtys.length;i++){
			 	emtys[i].index=i;
			 	emtys[i].onclick=function(){
			 		for(var j=0;j<cates.length;j++){
			 			cates[j].style.zIndex=0;
			 		}
			 		cates[this.index].style.zIndex=1;
			 	}
			 }
			 // 国内选项卡
			 var liss=document.querySelectorAll('.mcly');
			 var mcy=document.querySelectorAll('.mcy');
			 var themes=document.querySelectorAll('.theme .wandou');
			 var wd=document.querySelectorAll('.theme .wd');
			 themes[0].style.zIndex=1;
			 wd[0].style.zIndex=1;
			 liss[0].classList.add('active');
			 mcy[0].classList.add('active');
			 for(var i=0;i<liss.length;i++){
			 	liss[i].index=i;
			 	liss[i].onclick=function(){
			 		for(var j=0;j<themes.length;j++){
			 			themes[j].style.zIndex=0;
			 			liss[j].classList.remove('active');
			 		}
			 		themes[this.index].style.zIndex=1;
			 		liss[this.index].classList.add('active');
			 	}
			 }
			 for(var i=0;i<mcy.length;i++){
			 	mcy[i].index=i;
			 	mcy[i].onclick=function(){
			 		for(var j=0;j<wd.length;j++){
			 			wd[j].style.zIndex=0;
			 			mcy[j].classList.remove('active');
			 		}
			 		wd[this.index].style.zIndex=1;
			 		mcy[this.index].classList.add('active');
			 	}
			 }


			 // 超值特价票
			 var citys=document.querySelectorAll('.city');
			 citys[0].classList.add('back');
			 for(let i=0;i<citys.length;i++){
			 	citys[i].onclick=function(){
			 		for(let j=0;j<citys.length;j++){
			 			citys[j].classList.remove('back');
			 		}
			 		citys[i].classList.add('back');
			 	}
			 }

			 var chufas=document.querySelectorAll('.chufa');
			 var coner=document.querySelectorAll('.coner');
			 coner[0].style.zIndex=1;
			 for(var i=0;i<chufas.length;i++){
			 	chufas[i].index=i;
			 	chufas[i].onclick=function(){
			 		for(var j=0;j<coner.length;j++){
			 			chufas[j].style.zIndex=0;
			 		}
			 		coner[this.index].style.zIndex=1;
			 	}
			 }



			 // 旅游指南选项卡
			 var tabs=document.querySelectorAll('.tab_pic_show>ul>li');
			 var imgs=document.querySelectorAll('.tab_pic_show>ol>li');
			 tabs[0].classList.add('dater');
			 imgs[0].style.zIndex=1;
			 for(var i=0;i<tabs.length;i++){
			 	tabs[i].index=i;
			 	tabs[i].onmouseover=function(){
			 		for(var j=0;j<imgs.length;j++){
			 			imgs[j].style.zIndex=0;
			 			tabs[j].classList.remove('dater');
			 		}
			 		imgs[this.index].style.zIndex=1;
			 		tabs[this.index].classList.add('dater');
			 	}
			 }
		}
	}
</script>

<style lang='scss' scope>
	@import '../../assets/scss/page.scss';
</style>