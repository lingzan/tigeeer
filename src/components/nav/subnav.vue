<template>
    <div class="subnav">
        <ul class="subnav-left">
            <router-link to="/illustration" ><li><div class="subnav-logo"></div></li></router-link>
            <router-link :to="item.url" v-for="item in sub" :key="item"><li >{{item.name}}</li></router-link>
        </ul>
        <div class="subnav-right">
            <!-- <span class="subnav-lang">中文</span> -->
            <router-link v-if="isLogin" to="/upload" class="subnav-upload"><i class="icon-upload"></i>Upload</router-link>

            <span v-if="isLogin" class="subnav-user">
                    <div class="subnav-user-info" @click="goToCenter">
                        <img src="../../assets/icons/avatar.png">{{user.user_cn_name}}
                    </div>
                    <ul class="subnav-user-option">
                        <router-link to="/user/profile"><li><i class="icon-profile"></i>Profile</li></router-link>
                       <!--  <router-link to="/user/order"><li><i class="icon-order"></i>Orders</li></router-link>
                        <router-link to="/user/earning"><li><i class="icon-earning"></i>Earning</li></ router-link>-->
                        <li @click="signOut"><i class="icon-exit"></i>Sign out</li>
                    </ul>
            </span>
            <router-link v-if="!isLogin" to="/login" class="subnav-sign">Sign in</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        name: 'subnav',
        props: {
            subnavs: ''
        },
        data () {
            return {
                show: false
            }
        },
        computed: {
            ...mapGetters({user: 'getUserLicense'}),
            sub () {
                if (typeof this.subnavs !== 'undefined' && this.subnavs !== '') {
                    return this.subnavs
                } else {
                    return []
                }
            },
            isLogin () {
                return this.user.user_name ? this.user : false
            }
        },
        methods: {
            ...mapMutations(['clearUserInfo']),
            ...mapActions(['loginOut']),
            userOperateShow () {
                this.show = !this.show
            },
            goToCenter () {
                if (this.user.role > 1) {
                    this.$router.push('/user')
                } else {
                    this.$router.push('/user/guest')
                }
            },
            signOut () {
                this.show = false
                this.clearUserInfo()
                this.loginOut()
                localStorage.removeItem('userLicense')
                this.$router.push('/')
            }
        },
        mounted () {
        }
    }
</script>
<style type="text/sass" lang="scss">
    .subnav-fix .subnav {
        position: fixed !important;
        background: #13161b !important;
    }
</style>
<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    a.router-link-active {
        color: #fff !important;
        li {
            color: #fff !important;
        }
    }
    .subnav-sign.router-link-active {
        color: #2cc086 !important;
    }
    .subnav-sign.router-link-active:hover{
        color: #fff !important;
    }
    .subnav {
        position: relative;
        display: flex;
        padding: 0 40px;
        font-size: 14px;
        font-weight: bold;

        width:100%;
        height: 60px;

        line-height: 60px;
        background:  linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
        z-index: 3;

    
        &-lang {
            margin-right: 8px;
        }
        &-logo {
            width: 77px;
            height: 60px;
            background: url(../../assets/tigeeer_logo.png) no-repeat;
            background-size: 77px 36px;
            background-position: center;
        }
        &-left {
            flex: 1;
            box-sizing: border-box;
            

            a {
                position: relative;
                display: block;
                float: left;
                padding:0 14px;
                text-align: center;

                &:first-child {
                    padding-left: 0;
                }
            }

            li {
                height: 100%;
                color: rgba(255, 255, 255, 0.7);

                &.active {
                    color: #fff;
                }
                &:hover {
                    color: #fff;
                }
            }
        }
        &-right {
            flex-shrink:0;
            color: rgba(255, 255, 255, 0.7);
            line-height: 60px;

            span {
                padding: 0 20px;
                // margin-right: 20px;
                line-height: 60px;
                vertical-align: top;
            }
        }
        &-sign {
            display: inline-block;
            width: 90px;
            height: 30px;
            line-height: 28px;
            color: #2cc086;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #2cc086;
        }
        &-user {
            display: inline-block;
            padding: 0 !important;
            margin-right: 0 !important;
            border-radius: 4px;
            cursor: pointer;
            user-select: none;
            &:hover {
                color: rgba(255,255,255,.87);
            }
            &:hover  .subnav-user-info {
                background: #2cc086;
            }
            &:hover  .subnav-user-option {
                display: block;
            }
            img {
                width: 30px;
                height: 30px;
                margin-right: 8px;
                vertical-align: middle;
            }
            &-info {
                padding: 0 15px;

                
            }
            &-option {
                display: none;

                border-radius: 0 0 4px 4px;
                overflow: hidden;
                li {
                    display: block;
                    padding: 0 15px;
                    border-top: 1px solid #29b37c;
                    background: #2cc086;

                    &:hover {
                        background: #29b37c;

                        .icon-profile {
                            background: url(../../assets/icons/profile_white.png) no-repeat;
                            background-size: cover;
                        }
                        .icon-order {
                            background: url(../../assets/icons/order_white.png) no-repeat;
                            background-size: cover;
                        }
                        .icon-earning {
                            background: url(../../assets/icons/earning_white.png) no-repeat;
                            background-size: cover;
                        }
                        .icon-exit {
                            background: url(../../assets/icons/signout_white.png) no-repeat;
                            background-size: cover;
                        }

                        .icon-upload {
                            // background: url(../../assets/icons/upload_white.png) no-repeat;
                            background-size: cover; 
                        }
                    }

                }
                li {
                    line-height: 42px;
                    height: 42px;
                    font-weight: 400;
                    text-align: left;
                }
            }
        }
        &-upload {
            line-height: 60px;
            margin-right: 13px;
            color: rgba(255,255,255,.7);

            &:hover {
                .icon-upload {
                    background: url(../../assets/icons/upload_white.png) no-repeat;
                    background-size: cover; 
                }
            }
        }

        a:hover {
            color: rgba(255,255,255,.87);
        }
        &-sign:hover {
            background: #2cc086;
        }
    }
    .icon {
        &-profile {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-left: 6px;
            margin-right: 16px;

            vertical-align: middle;

            background: url(../../assets/icons/profile.png) no-repeat;
            background-size: cover;
        }
        &-order {
            display: inline-block;
            width: 17px;
            height: 19px;
            margin-left: 6px;
            margin-right: 16px;

            vertical-align: middle;

            background: url(../../assets/icons/order.png) no-repeat;
            background-size: cover;
        }
        &-earning {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-left: 6px;
            margin-right: 16px;
            vertical-align: middle;
            background: url(../../assets/icons/earning.png) no-repeat;
            background-size: cover;
        }
        &-exit {
            display: inline-block;
            width: 19px;
            height: 18px;
            margin-left: 6px;
            margin-right: 15px;

            vertical-align: middle;

            background: url(../../assets/icons/signout.png) no-repeat;
            background-size: cover;
        }

        &-upload {
            display: inline-block;
            width: 24px;
            height: 23px;
            margin-right: 6px;

            vertical-align: middle;

            background: url(../../assets/icons/upload.png) no-repeat;
            background-size: cover; 
        }
    }
</style>
