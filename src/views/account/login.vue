<template>
    <div class="login" >
        <Notice :text="error.msg" :show="notice" v-model="notice"></Notice>
        <header>
            <router-link to="/">
                <div class="login-logo"></div>
            </router-link>
            <p>Sign in to your account</p>
        </header>
        <section>
            <div class="account-input login-account">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" v-model="user.username" autocomplete="off">
            </div>
            <div class="account-input login-password">
                <div>
                    <label for="pwd">Password</label>
                    <router-link class="login-fwd" to="/fwd">forgot?</router-link>
                </div>
                <input type="password" id="pwd" ref="pwdType" name="pwd" v-model="user.pwd">
            </div>
            <div class="account-btn login-btn active" @click="submit()">
                Sign in
            </div>
            <div class="login-help clearfix">
                Not a member?<router-link to="/register" >Sign up now</router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Notice from '../../components/common/notice'
    export default {
        name: 'login',
        data () {
            return {
                pwdIcon: 'icon-yanjing',
                pwdType: 'password',
                btn: false,
                active: '',
                user: {
                    username: '',
                    pwd: ''
                },
                error: '',
                notice: false
            }
        },
        methods: {
            ...mapActions(['login']),
            async submit () {
                try {
                    await this.login({
                        user: this.user
                    })
                    this.$router.replace('/')
                } catch (e) {
                    this.notice = true
                    this.error = e
                }
            }
        },
        mounted: function () {
        },
        components: { Notice }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .login {
        min-height: 100%;
        border-top: 1px solid #1d2126;
        header {
            margin-top: 94px;
            font-size: 22px;
            line-height: 1;
            text-align: center;

            a {
                display: block;
                width: 125px;
                height: 70px;
                margin: 0 auto;
            }
        }
        section {
            display: block;
            width: 360px;
            margin: 0 auto;

            label {
                display: inline-block;
                margin-bottom: 10px;
                font-size: 15px;
                line-height: 1;
                color: rgba(255,255,255,.8);
            }

            input {
                display: block;
                width: 100%;
                height: 42px;
                padding: 10px 15px;
                line-height: 42px;
                color: #13161b;
                background: #dedede;
                border-radius: 6px;

                &.active {
                    background: red;
                }
            }
        }

        input:focus {
            background: #fafec0;
        }
        &-logo {
            width: 150px;
            height: 65px;
            margin: 0 auto;

            background: url(../../assets/tigeeer_87.png) no-repeat;
            background-size: 100% 100%;
        }
        .login-account {
            margin-top: 38px;
        }

        .login-password {
            margin-top: 29px;
        }
        &-fwd {
            margin-left: 15px;
            color: #787b7f;
            text-decoration: underline;
        }
        &-btn {
            margin-top: 50px;
            line-height: 42px;
            text-align: center;
            background: #a7a7a7;
            border-radius: 6px;
            color: rgba(33, 33, 33, 0.4);
            cursor: pointer;
            &.active {
                background: #2cc086;
                color: rgba(255,255,255,.87);
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
    }
</style>
