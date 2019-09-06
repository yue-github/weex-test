// { "framework": "Vue"} 

webpackJsonp([0],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(42)
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
__vue_options__.__file = "C:\\Users\\wutongyue\\Desktop\\真文件\\weex\\weex1\\src\\components\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 41:
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

var stream = weex.requireModule("stream");
exports.default = {
  name: "",
  data: function data() {
    return {
      arr: [{
        name: 'wutongyue'
      }, {
        name: 'lowingshan'
      }],
      name1: "home123"
    };
  },
  mounted: function mounted() {
    stream.fetch({
      method: "post",
      type: "json",
      url: "https://coral3.com/yes/public/api/test"
    }, function (res) {
      if (res.ok) {
        console.log(res);
      } else {}
    });
    // 	this.name=this.name.replace(/('')*/g,function($1,$2){
    // 		return '<br>'
    // 	})
    // 	console.log(this.name)
  }
};

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.arr), function(item, key) {
    return _c('div', {
      key: key
    }, [_c('text', {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v(_vm._s(item.name))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

});