 <template>
	<div class="beijing">
		<ul>
			<li>
				<span class="dizhi">
					<b class="a_city">北京</b>
					<i></i>
					<b class="a_city">烟台</b>
				</span>
				<span class="time">
					<b class="a_date">02月16日</b>
					<em>1.4折</em>
					<b class="a_date">
						<s>￥</s>
						100
					</b>
				</span>
			</li>
			<li>
				<span class="dizhi">
					<b class="a_city">北京</b>
					<i></i>
					<b class="a_city">呼和浩特</b>
				</span>
				<span class="time">
					<b class="a_date">02月19日</b>
					<em>1.5折</em>
					<b class="a_date">
						<s>￥</s>
						105
					</b>
				</span>
			</li>
			<li>
				<span class="dizhi">
					<b class="a_city">北京</b>
					<i></i>
					<b class="a_city">大连</b>
				</span>
				<span class="time">
					<b class="a_date">02月16日</b>
					<em>1.5折</em>
					<b class="a_date">
						<s>￥</s>
						140
					</b>
				</span>
			</li>
			<li>
				<span class="dizhi">
					<b class="a_city">北京</b>
					<i></i>
					<b class="a_city">长春</b>
				</span>
				<span class="time">
					<b class="a_date">02月24日</b>
					<em>1折</em>
					<b class="a_date">
						<s>￥</s>
						150
					</b>
				</span>
			</li>
			<li>
				<span class="dizhi">
					<b class="a_city">北京</b>
					<i></i>
					<b class="a_city">包头</b>
				</span>
				<span class="time">
					<b class="a_date">02月17日</b>
					<em>1.9折</em>
					<b class="a_date">
						<s>￥</s>
						160
					</b>
				</span>
			</li>
			<li>
				<span class="dizhi">
					<b class="a_city">北京</b>
					<i></i>
					<b class="a_city">鄂尔多斯</b>
				</span>
				<span class="time">
					<b class="a_date">02月16日</b>
					<em>2折</em>
					<b class="a_date">
						<s>￥</s>
						160
					</b>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'beijing'
	}
</script>

<style lang='scss' scope>
	.beijing{
		ul{
			width: 1200px;
			height: 102px;
			display: flex;
			li{
				position: relative;
				flex:1;
				border: 1px solid #eee;
				background: #f4f9ff;
				span{
					b{
						width: 70px;
					    overflow: hidden;
					    height: 30px;
					    text-align: center;
					    font: 14px/30px Microsoft yahei;
					}
					i{
						display: block;
						width: 30px;
						height: 20px;
						position: absolute;
						top:30px;
						left: 85px;
						background: url(../../assets/img/icon_index.png) no-repeat -569px -163px;
					}
					.a_city:nth-of-type(1){
						position: absolute;
						top: 25px;
						left: 20px;
					}
					.a_city:nth-of-type(2){
						position: absolute;
						top: 25px;
						left: 110px;
					}
				}
				.time{
					b{
						width: 60px;
					    overflow: hidden;
					    height: 30px;
					    text-align: center;
					    font: 12px/30px Microsoft yahei;
					}
					em{
						display: block;
						width: 36px;
						height: 20px;
						background: green;
						border-radius: 25px;
						position: absolute;
						top: 70px;
						left: 90px;
						line-height: 20px;
						color: #fff;
					}
					.a_date:nth-of-type(1){
						position: absolute;
						top: 65px;
						left: 20px;
					}
					.a_date:nth-of-type(2){
						position: absolute;
						top: 65px;
						left: 130px;
						color: #f55;
					}
				}
				&:hover{
					border: 1px solid #4599ff;
				}
			}
		}
	}
</style>