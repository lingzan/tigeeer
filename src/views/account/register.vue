<template>
    <div class="login " >
        <header>
            <router-link to="/">
                <div class="login-logo"></div>
            </router-link>
            <p>Let's get you started</p>
        </header>
        <section>
            <div class="account-input login-account">
                <label for="Username">Username</label>
                <input type="text" id="Username"  name="nickname" v-model="user.nickname" autocomplete="off">
            </div>
            <div class="account-input login-password">
                <div>
                    <label for="Email">Email</label>
                </div>
                <input type="text" id="pwd" ref="Email" name="username" v-model="user.username">
            </div>
            <div class="account-input login-password">
                <div>
                    <label for="pwd">Password</label>
                </div>
                <input type="text" id="pwd" ref="pwdType" name="pwd" v-model="user.pwd">
            </div>
            <div class="account-btn login-btn active" @click="submits()" >
                Sign up
            </div>
            <div class="login-help clearfix">
                <router-link to="/login" >Go back to sign in</router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Register',
        data () {
            return {
                pwdIcon: 'icon-yanjing',
                pwdType: 'password',
                btn: false,
                active: '',
                user: {
                    username: '',
                    pwd: '',
                    nickname: ''
                }
            }
        },
        methods: {
            ...mapActions(['register']),
            async submits () {
                if (this.btn) {
                    return
                }
                this.btn = true
                try {
                    const res = await this.register(this.user)
                    console.log(res)
                    this.$router.replace({path: '/confirm/' + res.data.id})
                } catch (e) {
                    alert(e.msg)
                }
                this.btn = false
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
</style>
