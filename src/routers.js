/**
 * Create by zechun.chen on 2016/12/22
 * 路由规则
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        component:require('./App'),
        children:[
            {
                path:'/home',
                name:'home',
                component:require('./pages/home')
            }
        ]
    }
];

const router = new VueRouter({
    routes:routes,
    linkActiveClass:'active',
    history:true
});

export default router;