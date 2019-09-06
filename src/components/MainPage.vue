<template>
  <div>
    <div class="header">
      <text>header</text>
    </div>
    <div class="body">
            <div class="left">
                    <div class="content" ref="main" :style="{ height: this.leftHeight + 'px' }">
                        <scroller scroll-direction="vertical">
                            <div class="list">
                              <div>0</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>1</div>
                              <div>2</div>
                            </div>
                        </scroller>
                    </div>
                <div class="qcode">二维码</div>
            </div>
           <div class="right" :style="{ height: this.rightHeight + 'px' }">
                  <scroller scroll-direction="vertical">
                      <div class="list">
                        <slot></slot>
                      </div>
                  </scroller>
            </div>
     
    </div>
  </div>
</template>

<script>
	module.exports = {
        name: 'MainPage',
		data: function() {
			return {
        leftHeight: 200,
        rightHeight: 200
			}
		},
		methods: {
            
		},
		created: function() {
           console.log(weex.config.env.deviceHeight)
 
      // Vue.prototype.deviceWidth  = weex.config.env.deviceWidth ;
      // Vue.prototype.deviceHeight = weex.config.env.deviceHeight;
      // Vue.prototype.realHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750; 
		},
    mounted: function() {
        var me = this;
        var animation = weex.requireModule('animation');
        var modal = weex.requireModule('modal');
        
        me.leftHeight = parseInt(me.realHeight) - 200;
        me.rightHeight = parseInt(me.realHeight) - 100;
    }
	}
</script>

<style scoped>
  .header {
    height: 100px;
    border-bottom-width: 1px;
    border-style: solid;
  }
  .body {
    display: flex;
    flex-direction: row;
  }

  .left {
    width: 100px;
    border-right-width: 1px;
    border-style: solid;
  }

  .right {
    width: 650px;
  }

  .content {
    margin-bottom: 100px;
  }

  .list {
    display: absolute;
  }

  .qcode {
      position: absolute;
      bottom: 0;
      height: 100px;
  }
</style>
