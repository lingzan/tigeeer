<template>
    <div class="index">
        <router-view> 
        </router-view>
    </div>
</template>

<script>
    import SubNav from '../../components/nav/subnav'

    export default {
        name: 'index',
        data () {
            return {
            }
        },
        components: { SubNav },
        beforeRouteEnter (to, from, next) {
            console.log('sada', to, from)
            document.body.scrollTop = 0
            next()
        }
    }
</script>

<style type="text/sass" lang="scss">
   .index {
        background: #13161b;
        &-search {
            padding: 8px 16px !important;
            background: #fff;
            border-bottom: 1px solid #f2f2f2;

            a {
                background: #f2f2f2;
            }
        }
        &-subimg {
            position: fixed;
            left: 0;
            bottom: 0;

            width: 100%;
            height: 3.0625rem;

            border-top: 1px solid #f2f2f2;

            li {
                color: rgba(0,0,0,.25);
            }

            i {
                width: auto;
                height: auto;
                font-size: 1.375rem;
                color: rgba(0,0,0,.25);
            }
        }
        

        .icon-tanzi3 {
        }
        .icon-faxian {
            
        }
        .icon-xaioxi2 {
            
        }
        .icon-wode2 {
            
        }
   }
</style>
