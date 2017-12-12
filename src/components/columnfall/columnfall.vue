<template>
    <div class="columnfall-item" :style="columnfall.parentStyle">
        <router-link :to="'/detail/' + columnfall.id">
            <div class="columnfall-container" :style="columnfall.childStyle">
            </div>
            <div class="columnfall-notice"><span>{{columnfall.name}}</span></div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'ColumnFall',
        props: {
            columnfall: {}
        },
        mounted () {
        }
    }
</script>

<style lang="scss" type="text/sass" scoped>
    .columnfall {
        &-item {
            float:left;
            overflow:hidden;
            min-height:0;
            font-size:0;
            position:relative;
            background: #191c20;

            &:hover {
                .columnfall-notice {
                    opacity: 1;
                }
            }
        }
        &-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            background-size: cover;
            background-position: center;
        }

        &-notice {
            opacity: 0;
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;

            text-align: center;
            font-size: 16px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.6);
            transition: all .5s;

             span:after {
                display:inline-block;
                width:0;
                height:100%;
                vertical-align:middle;
                content:"";
            }

        }
    }
</style>
