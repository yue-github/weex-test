<template>
    <div>
        <div v-for="(item,key) in arr" v-bind:key="key">
            <text style="color:red">{{item.name}}</text>
        </div>
    </div>
  
</template>
<script>
var stream = weex.requireModule("stream");
export default {
  name: "",
  data() {
    return {
        arr:[
            {
                name:'wutongyue'
            },
            {
                name:'lowingshan'
            }
        ],
      name1: "home123"
    };
  },
  mounted() {
    stream.fetch(
      {
        method: "post",
        type: "json",
        url: "https://coral3.com/yes/public/api/test"
      },
      res => {
        if (res.ok) {
          console.log(res);
        } else {
        }
      }
    );
    // 	this.name=this.name.replace(/('')*/g,function($1,$2){
    // 		return '<br>'
    // 	})
    // 	console.log(this.name)
  }
};
</script>

