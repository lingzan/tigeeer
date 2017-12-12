import Vue from 'vue'
import Router from 'vue-router'

import User from '../views/user/index'
import Center from '../views/user/center'

import Login from '../views/account/login'
import Register from '../views/account/register'
import Fwd from '../views/account/fwd'
import Check from '../views/account/check'
import Reset from '../views/account/reset'

import Active from '../views/account/Active'

import Confirm from '../views/account/confirm'
import Profile from '../views/index/profile'
import Upload from '../views/index/upload'
import Detail from '../views/index/detail'
import Guests from '../views/user/guest'

import Index from '../views/index/index'
import Project from '../views/index/project'
import Illustration from '../views/index/illustration'
import Photography from '../views/index/photography'
import About from '../views/index/about'
import Order from '../views/index/order'
import Pay from '../views/index/pay'
import Templates from '../views/index/templates'
import Icon from '../views/index/icon'

Vue.use(Router)

const routes = [
    {
        path: '/user/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/user/guest',
        name: 'Guests',
        component: Guests
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/user/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/pay/:id',
        name: 'Pay',
        component: Pay
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/',
        name: 'Index',
        redirect: '/illustration',
        component: Index,
        children: [{
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/illustration',
            name: 'Illustration',
            component: Illustration
        },
        {
            path: '/photography',
            name: 'Photography',
            component: Photography
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/icon',
            name: 'Icon',
            component: Icon
        },
        {
            path: '/templates',
            name: 'Templates',
            component: Templates
        }]
    },
    {
        path: '/center',
        name: 'Center',
        component: Center
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/reset/:username',
        name: 'Reset',
        component: Reset
    },
    {
        path: '/fwd',
        name: 'Fwd',
        component: Fwd
    },
    {
        path: '/check/:username',
        name: 'Check',
        component: Check
    },
    {
        path: '/active/:username',
        name: 'Active',
        component: Active
    },
    {
        path: '/confirm/:id',
        name: 'Confirm',
        component: Confirm
    }
]

const router = new Router({
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem('userToken')) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})
export default router
