// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

// Styles
require('./assets/sass/style.scss');
require('font-awesome/css/font-awesome.css');

window.axios = axios;
window.apiBase = 'http://tasks-slim.dev/';

require('./config/vue-config');

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
