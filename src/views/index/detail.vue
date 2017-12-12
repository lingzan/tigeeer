<template>
    <div class="detail">
        <div class="detail-left">
            <section>
                <img :src="collectDetail.path">
                <p>{{collectDetail.description}}</p>
            </section>
            <div v-if="noticeFlag" class="detail-scroll-notice"><i class="icon-mouse"></i>Scroll to see more</div>
        </div>
        <div class="detail-right">
            <div class="detail-right-box">
                <div class="detail-close">
                    <button @click="closeDetail"></button>
                </div>
                <div class="detail-designer">
                    <div class="detail-designer-avatar"></div>
                    <div class="detail-designer-info">
                        <p class="detail-designer-name">{{collectDetail.user_name}}</p>
                        <p class="detail-designer-time">Posted at Aug 28,2017</p>
                    </div>
                </div>
                <div class="detail-ps">
                    <h3 class="detail-ps-title">{{collectDetail.name}}</h3>
                    <p class="detail-ps-description">{{collectDetail.description}}</p>
                </div>
                <router-link to="/order/5"><button class="detail-ps-download"><i class="detail-icon-download"></i>Download</button></router-link>

                <ul class="detail-share">
                    <li class="detail-share-wechat"></li>
                    <li class="detail-share-weibo"></li>
                    <li class="detail-share-qq"></li>
                    <li class="detail-share-qzone"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'fwd',
        data () {
            return {
                noticeFlag: true
            }
        },
        computed: {
            ...mapGetters(['collectDetail'])
        },
        methods: {
            ...mapActions(['collectDetailAction']),
            closeDetail () {
                this.$router.go(-1)
            }
        },
        created () {
            const id = this.$route.params.id
            this.collectDetailAction(id)
        },
        mounted () {
            document.querySelector('body').setAttribute('class', 'subnav-fix')
            window.addEventListener('scroll', () => {
                this.noticeFlag = false
            })
        },
        beforeRouteLeave (to, from, next) {
            document.querySelector('body').setAttribute('class', '')
            next()
        },
        components: {}
    }
</script>
<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .detail {
        width: 100%;
        height: 100%;
        padding-top: 2px;
        display: flex;
        background: #000;

        &-left {
            flex: 1;
            padding-right: 370px;
            margin-right: 4px;

            img {
                width: 100%;
                margin-bottom: 40px;
            }

            p,
            div {
                margin-bottom: 40px;
                padding: 0 50px;
                font-size: 16px;
                line-height: 26px;
                color: rgba(255, 255, 255, 0.8);
            }
        }
        &-right {
            position: fixed;
            top: 60px;
            right: 0;
            flex-shrink: 0;
            width: 365px;
            height: 100%;

            background: #191c20;
            &-box {
                background: #191c20;
            }
        }
        &-scroll-notice {
            position: absolute;
            left: 50%;
            bottom: 20px;

            width: 160px;
            height: 40px;
            margin-left: -265px;
            padding: 0 !important;

            font-size: 12px !important;
            line-height: 40px !important;
            text-align: center;
            border-radius: 100px;
            background-color: rgba(16, 19, 24, 0.7);
            box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.4);

            .icon-mouse {
                display: inline-block;
                width: 15px;
                height: 23px;
                margin-right: 8px;

                vertical-align: middle;
                background: url(../../assets/icons/mouse.png) no-repeat;
                background-size: cover;
            }
        }
        &-close {
            padding: 20px 20px 14px 0;
            text-align: right;

            button {
                width: 23px;
                height: 23px;

                background-color: rgba(255, 255, 255, 0.3);
                background: url(../../assets/icons/remove.png) no-repeat;
                background-size: contain;

                &:hover {
                    background: url(../../assets/icons/remove_hover.png) no-repeat;
                    background-size: contain;
                }
            }
        }
        &-designer {
            display: flex;
            padding: 0 20px 23px;
            border-bottom: 1px solid #272c33;

            &-avatar {
                width: 50px;
                height: 50px;
                margin-right: 12px;

                background: #f2f2f2;
                background-size: contain;
                border-radius: 50%;
            }

            &-info {
                flex: 1;
            }
            &-name {
                color: #2cc086;
                font-size: 22px;
                line-height: 1;
                font-weight: 600;
            }
            &-time {
                margin-top: 8px;
                font-size: 14px;
                line-height: 1;
                color: #787b80;
            }
        }
        &-ps {
            padding: 16px 20px 30px;
            border-bottom: 1px solid #1f2328;

            &-title {
                height: 33px;

                font-size: 22px;
                font-weight: 400;
                line-height: 33px;
                color: rgba(255,255,255,.8);
            }
            &-description {
                margin-top: 8px;
                font-size: 16px;
                line-height: 20px;
                color: #787b7f;
            }
        }

        &-ps-download {
            width: 325px;
            height: 44px;
            line-height: 44px;
            margin: 40px 0 0 20px;

            color: #dedede;
            font-weight: 600;
            text-align: center;
            border-radius: 4px;
            background-color: #2cc086;
        } 
        &-icon-download {
            display: inline-block;
            width: 21px;
            height: 20px;
            margin-right: 10px;
            margin-top: -5px;

            vertical-align: middle;

            background: url(../../assets/icons/download.png) no-repeat;
            background-size: contain;
        }
        &-share {
            position: absolute;
            bottom: 57px;
            display: flex;
            padding: 21px 36px;

            > li {
                width: 36px;
                height: 36px;
                margin: 0 19px;

                border-radius: 50%;
            }
            &-wechat {
                background: #dedede;
                background: url(../../assets/icons/wechat.png) no-repeat;
                background-size: contain;
            }
            &-weibo {
                background: #dedede;
                background: url(../../assets/icons/weibo.png) no-repeat;
                background-size: contain;
            }
            &-qq {
                background: #dedede;
                background: url(../../assets/icons/qq.png) no-repeat;
                background-size: contain;
            }
            &-qzone {
                background: #dedede;
                background: url(../../assets/icons/qzone.png) no-repeat;
                background-size: contain;
            }
        }
    }
</style>
