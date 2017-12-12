<template>
    <div id="app" class="">
        <SubNav :subnavs="subnavs"/>
        <router-view></router-view>
        <div class="app-top" @click="backTop" v-if="needToTop"></div>
    </div> 
</template>

<script>
import SubNav from './components/nav/subnav'
import Cfooter from './components/footer/cfooter'

export default {
    name: 'app',
    data () {
        return {
            subnavs: [
                {'name': 'Illustration', 'url': '/illustration'},
                {'name': 'Icon', 'url': '/icon'},
                {'name': 'Photography', 'url': '/photography'},
                {'name': 'Templates', 'url': '/templates'},
                {'name': 'Projects', 'url': '/project'},
                {'name': 'About', 'url': '/about'}
            ],
            subclass: 'index-subimg',
            needToTop: false
        }
    },
    methods: {
        backTop () {
            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop = 0
            } else {
                document.body.scrollTop = 0
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 60 || document.body.scrollTop > 60) {
                this.needToTop = true
            } else {
                this.needToTop = false
            }
        })
    },
    components: { SubNav, Cfooter }
}
</script>

<style type="text/sass" lang="scss">
    @import './style/mixin.scss';
    @import './assets/css/reset.css';
@font-face {
    font-family: tigeeer;
    src: url('./assets/font/tigeeer.woff'),
         url('./assets/font/tigeeer.ttf'),
         url('./assets/font/tigeeer.eot'),
         url('./assets/font/tigeeer.svg');
}
body,html {
    min-width: 320px;
    min-height: 100%;
    font-family: tigeeer, helvetica neue, -apple-system,SF UI Text,  Arial,PingFang SC,Hiragino Sans GB, Helvetica, WenQuanYi Micro Hei,sans-serif;
    font-size: 16px;
    background: #13161b;
}
*{
    outline: 0;
    margin:0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.clearfix:before {
    content: '';
    display: block;
}
.clearfix:after {
    content: '';
    display: block;
    clear: both;
    zoom: 1;
    overflow: hidden;
}
a {
    text-decoration: none;
    color: rgba(255,255,255,.87);
}
li {
    list-style: none;
}
input::placeholder{
    color: rgba(0, 0, 0, 0.3)
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(255,255,255,.87);
    min-height: 100%;
    
    // margin-top: 60px;
}

.speakContentBox{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    padding: 0 0 0;
    overflow: auto;
    overflow-x: hidden;
    background: #f2f2f2;
    -webkit-overflow-scrolling: touch;
}
.scrollContentBox{
    position: relative;
    min-height: 105%;
    z-index: 2;
}
/*flex 布局 解决移动端输入框弹出问题*/
.flex{
    &-body {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: vertical;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-flex-direction: column;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    &-main {
        position: relative;
        height: 100%;
        width: 100%;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        overflow: hidden;
    }

    &-other {
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        -ms-flex-negative: 0;
        flex-shrink: 0;
    }
}

.speakBox{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.mb10 {
    margin-bottom: 10px;
}
.subnav-fix .app-top {
    display: none;
}
.app-top {
    position: fixed;
    bottom: 17px;
    right: 17px;

    width: 30px;
    height: 30px;
    background: url(./assets/icons/back_to_top.png) no-repeat;
    background-size: cover;
    z-index: 3;
    cursor: pointer;
}
// ::selection {
//     background:#2cc086; 
//     color:rgba(255,255,255,.8);
// }
</style>
