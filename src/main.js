import Vue from 'vue'
import App from './app'
import routes from './router'
import Router from 'vue-router'
import store from './store/'

import './assets/scss/style.scss'

Vue.use(Router)

window.router = new Router({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        window.scrollTo(0, 0)
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
    document.title = to.name
    next()
})
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
