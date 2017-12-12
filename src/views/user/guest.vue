<template>
    <div class="login flex-body" >
        <div class="flex-main">
            <header>
                <p class="reset-title">Join us</p>
                <p class="account-instro">Send an email with your design work to join us as adesigner</p>
            </header>
            <section>

                <div class="account-btn login-btn active" @click="submits()" style="margin-top:68px;">
                    Contact tigeeer
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
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
        components: {}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .reset-title {
        font-size: 50px;
        line-height: 1;
        color: #fff;
    }
    .login {
        header {
            margin-top: 94px;
            font-size: 26px;
            line-height: 1;
            text-align: center;

            a {
                display: block;
                width: 125px;
                height: 77px;
                margin: 0 auto;
            }
        }
        section {
            display: block;
            width: 400px;
            margin: 0 auto;

            label {
                display: inline-block;
                margin-bottom: 10px;
                font-size: 18px;
                line-height: 1;
                color: #dedede;
            }

            input {
                display: block;
                width: 100%;
                height: 54px;
                padding: 10px 15px;
                line-height: 54px;
                color: #13161b;
                background: #dedede;
                border-radius: 6px;

                &.active {
                    background: red;
                }
            }
        }
        &-logo {
            width: 125px;
            height: 77px;
            margin: 0 auto;

            background: url(../../assets/tigeeer_logo.png) no-repeat;
            background-size: 100% 100%;
        }
        .login-account {
            margin-top: 60px;
        }

        .login-password {
            margin-top: 20px;
        }
        &-fwd {
            margin-left: 22px;
            color: #787b7f;
            text-decoration: underline;
        }
        &-btn {
            margin-top: 52px;
            line-height: 54px;
            text-align: center;
            background: #a7a7a7;
            border-radius: 6px;
            color: rgba(33, 33, 33, 0.4);
            cursor: pointer;
            &.active {
                background: #2cc086;
                color: #fff;
            }
        }
        &-help {
            padding: 0 25px;
            margin-top: 14px;
            text-align: center;
            color: #f5bb42;
            font-size: pxToRem(16);
            line-height: 22px;
            color: #2cc086;

            a {
                color: #2cc086;
                text-decoration: underline;
            }
        }
    }
    .account-instro {
        width: 400px;
        margin: 12px auto 0;
        color: #787b7f;
        font-size: 16px;
    
    }
</style>
