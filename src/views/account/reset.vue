<template>
    <div class="login" >
        <header>
            <router-link to="/">
                <div class="login-logo"></div>
            </router-link>
            <p>Reset your password</p>
            <p class="account-instro">Enter a new password in the input box below</p>
        </header>
        <section>
            <div class="account-input login-account">
                <label for="email">New password</label>
                <input type="password" id="email" name="email" v-model="user.password" autocomplete="off">
                <!-- <input type="hidden" v-model="user.areaCode" name=""> -->
            </div>
            <div class="account-input login-password">
                <label for="email">Confirm new password</label>
                <input type="password" id="email" name="email" v-model="user.password2" autocomplete="off">
                <!-- <input type="hidden" v-model="user.areaCode" name=""> -->
            </div>
            <div class="account-btn login-btn active" @click="submits()">
                Reset password
            </div>
        </section>
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
                active: 'active',
                user: {
                    username: '',
                    password: '',
                    password2: ''
                }
            }
        },
        methods: {
            ...mapActions(['reset']),
            async submits () {
                if (this.btn) {
                    return
                }
                this.btn = true
                console.log(this.$route)
                try {
                    this.user.username = this.$route.params.username
                    await this.reset(this.user)
                    this.$router.push('/')
                } catch (e) {
                    alert(e.msg)
                }
                this.btn = false
            },
            valite () {
                if (this.user.username && this.user.pwd) {
                    this.btn = true
                    this.active = 'active'
                } else {
                    this.btn = false
                    this.active = 'active'
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

    .account-instro {
        width: 400px;
        margin: 12px auto 0;
        color: #787b7f;
        font-size: 16px;
        line-height: 20px;
    
    }
</style>
