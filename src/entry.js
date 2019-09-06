/*global Vue*/

/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');
const axios = require('axios');

/* eslint-disable no-new */
let vue = new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');
 

