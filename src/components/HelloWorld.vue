<template>
  <text style="color:red">{{name1}}</text>
</template>
<script>
var stream = weex.requireModule("stream");
export default {
  name: "",
  data() {
    return {
      name1: "helloworl1d"
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

