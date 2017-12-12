<template>
    <div class="order">
        <header>
            <p class="reset-title">Check your orders</p>
            <p class="account-instro">Check order infomation here and downlod files</p>
        </header>
        <section>
            <div class="order-th">
                <div class="order-th-3">Item</div>
                <div class="order-th-1">Resolution</div>
                <div class="order-th-1">File size</div>
                <div class="order-th-1">Price</div>
                <div class="order-th-1"></div>
            </div>
            <div class="order-td">
                <div class="order-td-3 order-item">
                    <img class="order-item-img" src="../../assets/flow/1.jpg">
                    <div class="order-item-info">
                        <p class="order-item-name">Man holding a sword</p>
                        <p class="order-item-id">Order number: 2883739489</p>
                        <p class="order-item-time">2017-08-29</p>
                    </div>
                </div>
                <div class="order-td-1">6000x4000px</div>
                <div class="order-td-1">6.5Mb</div>
                <div class="order-td-1">￥5.00</div>
                <div class="order-td-1"><button class="order-download">Download</button></div>
            </div>
            <div class="order-td">
                <div class="order-td-3 order-item">
                    <img class="order-item-img" src="../../assets/flow/1.jpg">
                    <div class="order-item-info">
                        <p class="order-item-name">Man holding a sword</p>
                        <p class="order-item-id">Order number: 2883739489</p>
                        <p class="order-item-time">2017-08-29</p>
                    </div>
                </div>
                <div class="order-td-1">6000x4000px</div>
                <div class="order-td-1">6.5Mb</div>
                <div class="order-td-1">￥5.00</div>
                <div class="order-td-1"><button class="order-download">Download</button></div>
            </div>
            <div class="order-td">
                <div class="order-td-3 order-item">
                    <img class="order-item-img" src="../../assets/flow/1.jpg">
                    <div class="order-item-info">
                        <p class="order-item-name">Man holding a sword</p>
                        <p class="order-item-id">Order number: 2883739489</p>
                        <p class="order-item-time">2017-08-29</p>
                    </div>
                </div>
                <div class="order-td-1">6000x4000px</div>
                <div class="order-td-1">6.5Mb</div>
                <div class="order-td-1">￥5.00</div>
                <div class="order-td-1"><button class="order-download">Download</button></div>
            </div>                
        </section>

        <Cfooter></Cfooter>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Cfooter from '../../components/footer/cfooter'

    export default {
        name: 'fwd',
        data () {
            return {
                pwdIcon: 'icon-yanjing',
                pwdType: 'password',
                btn: false,
                status: '',
                active: '',
                user: {
                    username: '',
                    pwd: '',
                    areaCode: 86
                }
            }
        },
        methods: {
            ...mapActions(['login']),
            submits () {
                this.status = 'send'
                let that = this
                if (this.btn) {
                    this.login({
                        user: this.user,
                        cb: function () {
                            that.$router.replace('/')
                        }
                    })
                }
            },
            valite () {
                if (this.user.username && this.user.pwd) {
                    this.btn = true
                    this.active = 'active'
                } else {
                    this.btn = false
                    this.active = ''
                }
            }
        },
        mounted: function () {
        },
        components: { Cfooter }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .reset-title {
        font-size: 50px;
        line-height: 1;
    }
    .account-instro {
        width: 400px;
        margin: 12px auto 0;
        color: #787b7f;
        font-size: 16px;
    }
    .order {
        header {
            margin: 94px 0 80px;
            font-size: 26px;
            line-height: 1;
            text-align: center;
        }
        section {
            width: 870px;
            margin: 0 auto;
        }

        &-th {
            display: flex;
            height: 41px;

            font-size: 14px;
            line-height: 41px;
            text-align: center;
            background: #191c20;

            &-3 {
                flex: 3;
            }
            &-1 {
                flex: 1;
            }
        }

        &-td {
            display: flex;
            padding:15px 20px;
            margin-top: 10px;
            text-align: center;
            align-items:center;
            background: #191c20;

            &-3 {
                flex: 3;
                text-align: left;
            }
            &-1 {
                flex: 1;
            }
        }

        &-item {
            display: flex;
            align-items: center;
            &-img {
                width: 80px;
                height: 80px;
                margin-right: 14px;
            }
            &-info {
                flex: 1;
            }
            &-name {
                font-size: 18px;
                line-height: 1;
                color: #dedede;
            }
            &-id,
            &-time {
                margin-top: 8px;
                font-size: 14px;
                line-height: 1;
                color: #787b7f;
            }
        }
        &-download {
            width: 110px;
            height: 40px;

            border-radius: 4px;
            background-color: #2cc086;
        }
    }
</style>
