<template>
    <div class="waterfall-container">
            <div class="waterfall-item" v-for="item in waterFallImg">
                <router-link :to="'/detail/' + item.id">
                    <img :src="item.path" />
                    <div class="waterfall-notice">
                        <span>{{item.name}}</span>
                    </div>
                </router-link>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'WaterFall',
        props: {
            waterFallImg: ''
        },
        computed: {
            prefix () {
                if (this.waterFallImg) {
                    return '/illustration'
                } else {
                    return ''
                }
            },
            n () {
                if (this.waterFallImg) {
                    return 15
                } else {
                    return 25
                }
            }
        },
        filters: {
            urlFilter (val) {
                return '/api/uploads/poster/' + val
            }
        },
        methods: {
            getImg (i) {
                console.log('../../assets/flow' + this.prefix + '/' + i + '.jpg')
                return require('../../assets/flow' + this.prefix + '/' + i + '.jpg')
            }
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .waterfall {
        &-container {
            margin-top: 50px;
            column-count: 1;
            column-gap: 20;
            counter-reset: item-counter;
        }
       
        &-item {
            position: relative;
            box-sizing: border-box;
            break-inside: avoid;
            counter-increment: item-counter;
            margin-bottom: 20px;

            &:hover {
                .waterfall-notice {
                    opacity: 1;
                }
            }
        }
        &-item img{
            // position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            font-size: 40px;
            box-sizing: border-box;
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

            // span {
            //     display: inline-block;
            //     height: 100%;
            //     vertical-align: middle;
            //     text-align: center;
            // }
             span:after {
                display:inline-block;
                width:0;
                height:100%;
                vertical-align:middle;
                content:"";
            }

        }
    }
     @media screen and (min-width: 414px) {
        .waterfall-container {
            column-count: 3;
        }
    }

    @media screen and (min-width: 1000px) {
        .waterfall-container {
            column-count: 4;
        }
    }
</style>
