<template> 
	<div class="headers">
		<div class="contenter">
			<div class="logo"></div>
			<div class="right">
				<div class="branch-top">
					<ul>
						<li><a href="javascript:viod(0)">里程商城</a></li>
						<li>|</li>
						<li><a href="javascript:viod(0)">在线客服</a></li>
						<li>|</li>
						<li class="english">
							<a href="javascript:viod(0)">
								English
							</a>
						</li>
						<li class="zi">
							<a href="javascript:viod(0)">
								简体版
							</a>
							<a href="javascript:viod(0)">
								繁体版
							</a>
						</li>
					</ul>
				</div>
				<span class="one_panic">
					<i></i>
					<em class="xu">小程序</em><br>
					<em class="ti">体验更轻盈</em>
					<div class="only_xcx"></div>
				</span>
				<span class="one_shou">
					<i></i>
					<em>手机版</em><br>
					<em>专享五折起</em>
					<div class="only_phone"></div>
				</span>
				<span class="one_phone">
					<i></i>
					<em>7×24 客服电话</em><br>
					<b>4009-333-333</b>
					<div class="on_phonnum"></div>
				</span>
			</div>
		</div>
		<div class="nav">
			<ul v-for='item in $router.options.routes'>
				<li v-for='child in item.children' >
					<router-link :to="{path:item.path+'/'+child.path}">
						{{ child.tabs }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'headers',
		components:{

		},
		methods:{
			
		}
	}
</script>

<style lang='scss' scope>
@import '../../assets/scss/tongyongyangshi.scss';
	.headers{
		@include wg(100%,115px);
		@include background(#fff);
		/*overflow: hidden;*/
		position: relative;
		.contenter{
			@include wg(1200px,62px);
			background: #fff;
			margin: 0 auto;
			.logo{
				@include wg(130px,48px);
				@include mt(14px);
				float: left;
				background:url(../../assets/img/icon201706.png) no-repeat -658px 0px;
			}
			.right{
				@include wg(860px,42px);
				float: left;
				@include mt(14px);
				@include ml(210px);
					.branch-top{
						@include wg(350px,21px);
						@include ml(10px);
						li{
							margin:0 2px;
							float: left;
							color:#a5b2b2;
							text-align: center;
							line-height: 22px;
							a{
								display: inline-block;
								@include fs(12px);
								@include wg(58px,22px);
								color:#a5b2b2;
								line-height: 22px;
								&:hover{
									color: #ff5555;
								}
							}
						}
						.english{
							position: absolute;
							z-index: 999;
							left: 572px;
						}
						.zi{
							@include wg(74px,87px);
							outline: 1px solid #a5b2b2;
							position: absolute;
							left: 564px;top: 15px;
							z-index: 900;
							display: none;
							a{
								display: inline-block;
								@include wg(58px,28px); 
							}
							a:nth-of-type(1){
								@include mt(30px);
							}
						}
						.english:hover .zi{
							display: block;
							position: absolute;
							z-index: 500;
						}
					}
					.one_panic{
						display: inline-block;
						@include wg(150px,42px);
						position: absolute;
						top: 15px;
						left: 775px;
						i{
							display: inline-block;
							@include wg(42px,42px);
							background: url(../../assets/img/icon201706.png) no-repeat -127px -763px;
							float: left;
						}
						.xu{
							display: inline-block;
							@include wg(52px,18px);
							float: left;
							color: #09bb07;
							@include ml(10px);
							line-height: 18px;
							@include fs(14px);
						}
						.ti{
							display: inline-block;
							@include wg(80px,18px);
							float: left;
							color: #09bb07;
							@include ml(10px);
							line-height: 18px;
							@include fs(14px);
						}
						.only_xcx{
							@include wg(240px,115px);
							position: absolute;
							top: 48px;
							left: 0;
							z-index: 999;
							background: url(../../assets/img/icon201706.png) no-repeat -397px -174px;
							display: none;
						}
						&:hover .only_xcx{
							display: block;
						}
					}	
					.one_shou{
						display: inline-block;
						@include wg(150px,42px);
						position: absolute;
						top: 15px;
						left: 935px;
						i{
							@include wg(42px,42px);
							display: inline-block;
							background: url(../../assets/img/com_icon01.gif) no-repeat;
							float: left;
						}
						em{
							@include ml(10px);
							color: #ff6a6a;
    						font: 14px/18px Microsoft yahei;
						}
						.only_phone{
							@include wg(217px,92px);
							position: absolute;
							top: 48px;
							left: 0;
							z-index: 999;
							background: url(../../assets/img/icon201706.png) no-repeat -465px -56px;
							display: none;
						}
						&:hover .only_phone{
							display: block;
						}
					}
					.one_phone{
						@include wg(180px,42px);
						display: inline-block;
						position: absolute;
						top: 15px;
						left: 1100px;
						i{
							@include wg(42px,42px);
							display: inline-block;
							background: url(../../assets/img/icon201706.png) no-repeat -42px -762px;
							float: left;
						}
						em{
							float: left;
						    color: #999;
						    font: 14px/18px Microsoft yahei;
						    padding: 0 0 0 10px;
						}
						b{
							    color: #2064c8;
							    font-size: 18px;
							    font-weight: 0px;
							    width: 124px;
							    @include mt(30px);
							    @include ml(10px);
						}
						.on_phonnum{
							@include wg(184px,116px);
							border: 1px solid #ccc;
							position: absolute;
							top: 48px; 
							left: 0;
							display: none;
						}
						&:hover .on_phonnum{
							display: block;
						}
					}
			}
		}
		.nav{
			@include wg(100%,40px);
			background: #2064c8;
			position: absolute;
			bottom: 0;
			ul{
				@include wg(483px,40px);
				@include ml(75px);
				display: flex;
				li{
					text-align: center;
					flex: 1;
					text-align: center;
					border-right:1px solid #3774ce;
					a{
						@include fs(14px);
						color: #fff;
						line-height: 40px;
					}
					&:hover{
						background: #0053ac;
					}
				}
				li:nth-of-type(1){
					background: #003679;
				}
			}
		}
	}
</style>