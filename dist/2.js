// { "framework": "Vue"} 

webpackJsonp([2],{

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\wutongyue\\Desktop\\真文件\\weex\\weex1\\src\\components\\UpDown.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cbc0e926"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
  "UpDown": {
    "height": "500",
    "backgroundColor": "rgba(0,185,149,1)",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "text-font": {
    "fontSize": "10",
    "color": "#ffffff"
  },
  "margin-right": {
    "marginRight": "2.5"
  },
  "text-left": {
    "marginLeft": "5"
  },
  "select": {
    "width": "133",
    "height": "23",
    "display": "flex",
    "alignItems": "center",
    "borderBottom": "1px solid #fff",
    "position": "relative"
  },
  "select-show": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "select-show-logo": {
    "height": "20",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "marginLeft": "2.5"
  },
  "select-show-img": {
    "width": "20",
    "height": "8"
  },
  "selectBox": {
    "width": "0",
    "backgroundColor": "#ffffff",
    "position": "absolute",
    "top": "25",
    "boxShadow": "4px 2px 6px #ccc",
    "overflow": "hidden"
  },
  "selectBox-ul": {
    "marginLeft": "20"
  },
  "selectBox-ul-li": {
    "height": "30",
    "display": "flex",
    "alignItems": "center"
  },
  "text-v-for": {
    "color": "#000000",
    "fontSize": "10"
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  name: 'UpDown',
  data: function data() {
    return {
      selectBoxBoo: false,
      arr: [{
        name: 'option1'
      }, {
        name: 'option2'
      }, {
        name: 'option3'
      }]
    };
  },

  methods: {
    showHidden: function showHidden(event) {
      var selectBox = this.$refs.selectBox;
      this.selectBoxBoo = !this.selectBoxBoo;
      if (this.selectBoxBoo) {
        animation.transition(selectBox, {
          styles: {
            width: '270px'
          },
          duration: 100, //ms
          timingFunction: 'ease',
          needLayout: false,
          delay: 0 //ms
        }, function () {});
      } else {
        animation.transition(selectBox, {
          styles: {
            // opacity:0
            width: '0px'
          },
          duration: 0, //ms
          timingFunction: 'ease',
          needLayout: false,
          delay: 0 //ms
        }, function () {});
      }
    },
    selectBoxLi: function selectBoxLi(index) {
      // 清除所有之前设定的样式
      for (var i in this.$refs.selectBoxLiDom) {
        this.$refs.selectBoxLiDom[i]['$el'].style.color = "";
      }
      // 单独对点击的容器进行相关设定
      this.$refs.selectBoxLiDom[index]['$el'].style.color = 'rgba(0, 185, 149, 1)';
      console.log(index);
    }
  },
  mounted: function mounted() {
    this.$refs.selectBoxLiDom[0]['$el'].style.color = 'rgba(0, 185, 149, 1)';
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["UpDown"]
  }, [_c('div', {
    staticClass: ["select"],
    on: {
      "click": _vm.showHidden
    }
  }, [_vm._m(0), _c('div', {
    ref: "selectBox",
    staticClass: ["selectBox"],
    on: {
      "click": function($event) {}
    }
  }, [_c('ul', {
    staticClass: ["selectBox-ul"]
  }, _vm._l((_vm.arr), function(item, index) {
    return _c('li', {
      staticClass: ["selectBox-ul-li"],
      on: {
        "click": function($event) {
          _vm.selectBoxLi(index)
        }
      }
    }, [_c('text', {
      ref: "selectBoxLiDom",
      refInFor: true,
      staticClass: ["text-v-for"]
    }, [_vm._v(_vm._s(item.name))])])
  }))], 1)]), _c('image', {
    staticClass: ["select-show-img"],
    staticStyle: {
      display: "block",
      width: "100px",
      height: "100px",
      zIndex: "1000"
    },
    attrs: {
      "src": "http://192.168.160.1:8081/src/assets/bagua.png"
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["select-show"]
  }, [_c('text', {
    staticClass: ["text-font", "margin-right"]
  }, [_vm._v("留置导尿管理")]), _c('div', {
    staticClass: ["select-show-logo"]
  })])
}]}
module.exports.render._withStripped = true

/***/ })

});