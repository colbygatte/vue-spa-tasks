import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Tasks from '@/components/Tasks';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/tasks',
            name: 'Tasks',
            component: Tasks
        }
    ]
});
