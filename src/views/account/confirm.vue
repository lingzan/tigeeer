<template>
    <div class="login" >
        <header>
            <p class="title">Almost there...</p>
            <div class="eamil-check"></div>
            <p class="account-instro">Please verify your email address. we've sent a confirmation email to you. Click the confirmation link in that email to beigin useing Tigeeer.</p>
            <p class="account-instro">Didn't receive the email? Check your Spam floder. It may have been caught by a filter. If you still don't see it, you can <span @click="resendEmail">resend the confirmation email.</span></p>
        </header>
     <!--    <section>
            <div class="account-btn login-btn active" @click="submits()">
                Check my email
            </div>
        </section> -->
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: 'Confirm',
        data () {
            return {
                pwdIcon: 'icon-yanjing',
                pwdType: 'password',
                btn: false,
                status: '',
                active: 'active',
                user: {
                    username: '',
                    pwd: '',
                    areaCode: 86
                }
            }
        },
        methods: {
            ...mapActions(['resendEmailAction']),
            async resendEmail () {
                const id = this.$route.params.id

                try {
                    await this.resendEmailAction(id)
                    alert('发送成功')
                } catch (e) {
                    alert(e.msg)
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
    .login {
        border-top: 1px solid #1d2126;
        header {
            margin-top: 94px;
            font-size: 26px;
            line-height: 1;
            text-align: center;
            .title {
              font-size: 50px;
              font-weight: 500;
              line-height: 1.0;
              text-align: center;
            }
            a {
                display: block;
                width: 125px;
                height: 77px;
                margin: 0 auto;
            }
        }
        section {
            display: block;
            width: 700px;
            margin: 0 auto;

            label {
                display: inline-block;
                margin-bottom: 10px;
                font-size: 15px;
                line-height: 1;
                color: #dedede;
            }

            input {
                display: block;
                width: 100%;
                height: 46px;
                padding: 10px 15px;
                line-height: 46px;
                color: #13161b;
                background: #dedede;
                border-radius: 6px;

                &.active {
                    background: red;
                }
            }
        }
        &-logo {
            width: 134px;
            height: 67px;
            margin: 0 auto;

            background: url(../../assets/tigeeer_87.png) no-repeat;
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
            width: 400px;
            margin: 62px auto 0;
            line-height: 46px;
            text-align: center;
            background: #a7a7a7;
            border-radius: 6px;
            color: rgba(33, 33, 33, 0.4);
            cursor: pointer;
            &.active {
                background: #2cc086;
                color: rgba(255,255,225,.87);
            }
        }
        &-help {
            padding: 0 25px;
            margin-top: 40px;
            text-align: center;
            color: #f5bb42;
            font-size: pxToRem(16);
            line-height: 1;
            color: #2cc086;

            a {
                color: #2cc086;
                text-decoration: underline;
            }
        }
        input:focus {
            background: #fafec0;
        }
    }

    .account-instro {
        width: 700px;
        margin: 20px auto 0;
        color: #787b7f;
        font-size: 18px;
        line-height: 26px;
        
        span {
          color: #2cc086;
          text-decoration: underline;
        }
    }
</style>
