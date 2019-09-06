<template>
  <div class="UpDown">

  		<div class="select" @click="showHidden">
  			<div class="select-show">
  				<text class="text-font margin-right">留置导尿管理</text>
  				<div class="select-show-logo">
  					
  				</div>
  				
  			</div>
  			<div class="selectBox" ref="selectBox" @click.stop="">
				<ul class="selectBox-ul">
					<li v-for="(item,index) in arr" class="selectBox-ul-li" @click="selectBoxLi(index)">
            <text class="text-v-for" ref="selectBoxLiDom">{{item.name}}</text>
          </li>
				</ul>
  			</div>
  		</div>
      <image class="select-show-img" style="display:block;width:100px;height:100px;z-index:1000" src="http://192.168.160.1:8081/src/assets/bagua.png"></image>

  </div>
</template>

<script>
const animation = weex.requireModule('animation');
export default {
  name: 'UpDown',
  data () {
    return {
       selectBoxBoo:false,
       arr:[
       	{
       		name:'option1'
       	},
       	{
       		name:'option2'
       	},
       	{
       		name:'option3'
       	}
       ]
    }
    
  },
  methods: {
      showHidden (event) {
      	const selectBox=this.$refs.selectBox;
      	this.selectBoxBoo=!this.selectBoxBoo;
      	if(this.selectBoxBoo){
  		  	animation.transition(selectBox, {
    		    styles: {
    		      width:'270px'
    		    },
    		    duration: 100, //ms
    		    timingFunction: 'ease',
    		    needLayout:false,
    		    delay: 0 //ms
    		  }, function () {
  		         
  		    })
      	}else{
          animation.transition(selectBox, {
    		    styles: {
    		         // opacity:0
                 width:'0px'
    		    },
    		    duration: 0, //ms
    		    timingFunction: 'ease',
    		    needLayout:false,
    		    delay: 0 //ms
  		    }, function () {
  		         
  		    })
      	}
		  	
      },
      selectBoxLi(index){
      	// 清除所有之前设定的样式
      	for(let i in this.$refs.selectBoxLiDom){
      		this.$refs.selectBoxLiDom[i]['$el'].style.color="";
      	}
      	// 单独对点击的容器进行相关设定
      	this.$refs.selectBoxLiDom[index]['$el'].style.color='rgba(0, 185, 149, 1)';
      	console.log(index)
       
      }

  },
  mounted(){
  	this.$refs.selectBoxLiDom[0]['$el'].style.color='rgba(0, 185, 149, 1)';
  }
}
</script>

<style scoped>
 .UpDown{
 	height:500px;
 	background-color:rgba(0, 185, 149, 1);
 	display:flex;
 	align-items: center;
 	justify-content: center;
 }
 .text-font{
 	font-size:10px;
 	color:#fff;
 }
 .margin-right{
 	margin-right:2.5px;
 }
 .text-left{
 	margin-left:5px;
 }
 .select{
 	width:133px;
 	height: 23px;
 	display:flex;
 	align-items: center;
 	border-bottom:1px solid #fff;
 	position:relative;
 }
 .select-show{
 	display:flex;
 	flex-direction: row;
 	align-items: center;
 	justify-content: center;
 }
 .select-show-logo{
 	height:20px;
 	display:flex;
 	align-items: center;
 	justify-content: center;
 	margin-left:2.5px;
 }
 .select-show-img{
 	width:20px;
 	height:8px;
 }
 .selectBox{
 	width:0px;
 	background-color:#fff;
 	position:absolute;
 	top:25px;
 	border-radius:0 0 5px 5px;
 	box-shadow:4px 2px 6px #ccc;
  overflow: hidden;
 }
 .selectBox-ul{
 	margin-left:20px;
 }
 .selectBox-ul-li{
 	height:30px;
 	display: flex;
 	align-items: center;
 }
 .text-v-for{
   color:#000;
   font-size:10px;
 }
</style>
