<template>
		<div class="box">
       <div class="time1">{{time}}</div>
       <div class="time2">2017年8月2日，星期三</div>
       <div class="time3">
          <span>&lt;</span>
          <strong>2017年7月</strong>
          <span>&gt;</span>
       </div>
       <div class="time4">
          <ul>
          	<li>一</li>
          	<li>二</li>
          	<li>三</li>
          	<li>四</li>
          	<li>五</li>
          	<li>六</li>
          	<li>日</li>
          </ul>
       </div>
       <div class="time5">
          <!-- <span class="color">1</span>
          <span class="active">2</span> -->
          <span v-for='(item,index) in 42' :class='index<lastweek?"color":""'>{{lastday}}</span>
       </div>
	</div>
</template>

<script>
	export default {
		name:'car',
    data(){
      return {
        time:'16:15:47',
        time2:null,
        lastweek:0
      }
    },
    computed:{
      datas(){
        return new Date();
      }
    },
		mounted(){
     var time5=document.querySelector('.time5');
     var strong=document.querySelector('.time3 strong');
     var btn=document.querySelectorAll('.time3 span');

      setInterval(()=>{
        var d=new Date();;
        this.time = fornum(d.getHours())+':'+fornum(d.getMinutes())+':'+fornum(d.getSeconds());
        // console.log(fornum(d.getHours())+':'+fornum(d.getMinutes())+':'+fornum(d.getSeconds()))
      },1000)

     // 2.让time1本地时间小于10的时候前面加0
       function fornum(v){
       	// 9之前的数字前面加0
       	// 返回 数值<10?真值:假值
          return v<10?'0'+v:v;
       }
      // 3.time2里面写入时间
        var d1=new Date();
        this.time2=d1.getFullYear()+'年'+(d1.getMonth()+1)+'月'+d1.getDate()+'日,'+'星期'+forweek(d1.getDay());
        //4. 把星期改为汉字
         function forweek(i){
        	  var arr=['日','一','二','三','四','五','六']
            return arr[i] 
        }
        
        // 5.获取某个月最后一天
        function lastd(year,month){
        	return new Date(year,month,0).getDate();
        }
        // 6.获取这个月第一天是星期几
        function noww(year,month){
        	var week=new Date(year,(month-1),1).getDay();
        	if(week==0){
        		week=7;
        	}
        	return week;
        }
        // 7.设置time5盒子里的具体日期
        var d=new Date();
        
        var thiss = this;
        function setdate(){
            // 上个月的最后一天
            var lastday=lastd(d.getFullYear(),d.getMonth());
            // 这个月的最后一天
            var nowday=lastd(d.getFullYear(),(d.getMonth()+1));
            // 这个月第一天星期几
            var nowweek=noww(d.getFullYear(),(d.getMonth()+1));

            thiss.lastday = (lastday--)
	        var str='';
	        // 上个月最后一天星期几
	        var lastweek=nowweek-1;
	        var chu=1;
	        if(lastweek==0){
	        	lastweek=7;
	        }
          thiss.lastweek = lastweek;
          console.log(lastweek)
	        for(var i=0;i<42;i++){
	        	if(i<lastweek){
	        		// 上个月日期的实现方式
	            	str='<span class="color">'+(lastday--)+'</span>'+str;
	        	}else if(i>=nowday+lastweek){
	        		// 下个月日期的实现方式
                    str+='<span class="color">'+(chu++)+'</span>'
	        	 }else{
	        	 	// 本月i-lastweek+1每一个span对应的数字
	        	 	var class1=d.getDate()==(i-lastweek+1)?'active':'';
	        	 	if(d.getFullYear()!=new Date().getFullYear()||d.getMonth()!=new Date().getMonth()){
	        	 		class1='';
	        	 	}
                    str+='<span class='+class1+'>'+(i-lastweek+1)+'</span>'
	        	}
	        }
	        // time5.innerHTML=str;
	        // 把strong里的字加入到网页中
	        strong.innerHTML=d.getFullYear()+'年'+(d.getMonth()+1)+'月';
        }
        setdate();
        // 点击左按钮，返回上个月日期
        btn[0].onclick=function(){
        	d.setMonth(d.getMonth()-1);
        	setdate()
        }
        // 点击右按钮，返回下个月日期
        btn[1].onclick=function(){
        	d.setMonth(d.getMonth()+1);
        	setdate()
        }
		}
	}

</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	html,body{
		width: 100%;
		height: 100%;
		background: #abcdef;
	}
      .box{
        width: 400px;
        height: 400px;
        background: #666;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        overflow: hidden;
      }
      .time1{
      	width: 100%;
      	height: 50px;
      	font-size: 30px;
      	line-height: 50px;
      	color: #fff;
      	padding-left: 70px; 
      }
      .time2{
      	width: 100%;
      	height: 50px;
      	font-size: 20px;
      	line-height: 50px;
      	color: blue;
      	padding-left: 70px;
      }
      .time3{
      	width: 100%;
      	height: 50px;
      	padding-left: 70px; 
      }
      .time3 span{
      	float: left;
      	width: 25px;
      	height: 50px;
      	background: #fff;
      	color: #000;
      	line-height: 50px;
      	text-align: center;
      	font-size: 20px;
      	font-weight: bold;
      }
      .time3 strong{
      	float: left;
      	width: 200px;
      	height: 50px;
      	margin: 0 auto;
      	font-size: 25px;
      	line-height: 50px;
      	text-align: center;
      	color: #fff;
      }
      .time4{
      	width: 245px;
      	height: 35px;
      	margin-left: 80px;
      }
      ul li{
      	width: 35px;
      	height: 35px;
      	float: left;
      	color: #fff;
      }
      .time5{
      	width: 245px;
      	height: 210px;
      	margin-left: 70px;
      }
      .time5 span{
      	float: left;
      	width: 35px;
      	height: 35px;
      	color: #000;
      	text-align: center;
      	line-height: 30px;
      }
      .time5 .color{
      	color: #ccc;
      }
      .time5 .active{
      	background: red;
      }
</style>