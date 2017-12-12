<template>      
    <div class="user" 
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="50">
        <div class="user-info">
            <div class="user-edit">
                <router-link to="/user/profile"><button class="user-self-edit"><i class="icon-edit"></i>Edit profile</button></router-link>
            </div>
            <div class="user-avatar" :style="userAvatar"></div>
            <div class="user-name">{{user.user_cn_name}}</div>
            <p class="user-position">{{user.description}}</p>
        </div>
        <nav class="user-nav">
            <div :class="{'active': this.curr === '1'}" 
                 @click="switchTab('1')">Illustration</div>
            <div :class="{'active': this.curr === '2'}"
                 @click="switchTab('2')">Icon</div>
            <div :class="{'active': this.curr === '3'}"
                 @click="switchTab('3')">Photography</div>
            <div :class="{'active': this.curr === '4'}"
                 @click="switchTab('4')">Templates</div>
        </nav>
        <section class="user-wrapper">
            <WaterFall :water-fall-img="userCollect"></WaterFall>
        </section>
    </div>
</template>

<script>
    import WaterFall from '../../components/waterfall/waterfall'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'subnav',
        props: {},
        data () {
            return {
                usernav: [
                    {
                        icon: 'icon-yaowohuida',
                        name: '邀我回答'
                    }
                ],
                subclassOne: 'user-subimg mb23',
                subclass: 'user-subimg',
                avatar: 'background:url(' + require('../../assets/icons/avatar.png') + ') no-repeat;background-size:contain',
                page: 1,
                pagesize: 10,
                curr: '1',
                userid: 0
            }
        },
        computed: {
            ...mapGetters(['user', 'userCollect']),
            userAvatar () {
                if (this.user) {
                    const style = 'background:url(/api/uploads/user/' + this.user.image + ') no-repeat;background-size:contain'
                    return this.user.image ? style : this.avatar
                }
            }
        },
        methods: {
            ...mapActions([
                'getUserInfo',
                'userCollectAction'
            ]),
            switchTab (curr) {
                if (this.curr === curr) {
                    return
                }
                this.curr = curr
                this.page = 1
                this.userCollectAction({
                    userid: this.userid,
                    page: this.page,
                    pagesize: this.pagesize,
                    type: this.curr
                })
            },
            async loadMore () {
                if (this.loading || this.isOver) {
                    return
                }
                this.loading = true
                const res = await this.userCollectAction({
                    userid: this.userid,
                    page: this.page + 1,
                    pagesize: this.pagesize,
                    type: this.curr
                })
                this.loading = false
                this.isOver = res
                this.page++
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
            })
        },
        created () {
            const id = this.$route.params.id ? this.$route.params.id : localStorage.getItem('userId')
            this.userid = id
            this.getUserInfo(id)
            this.userCollectAction({
                userid: id,
                page: 1,
                pagesize: this.pagesize,
                type: '1'
            })
        },
        components: { WaterFall }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .user {
        background: #13161b;
        border-top: 1px solid #1d2126;

        &-wrapper {
            padding: 0 50px;
        }
        &-info {
            margin-top: 30px;
        }
        &-avatar {
            width: 100px;
            height: 100px;
            margin: 0 auto;
        }
        &-name {
            margin-top: 18px;

            text-align: center;
            font-size: 35px;
            font-weight: bold;
            line-height: 1;
            color: #e4e4e4;
        }
        &-position {
            margin-top: 8px;

            font-size: 18px;
            line-height: 1;
            letter-spacing: 0.1px;
            text-align: center;
            color: #787b7f;
        }
        &-nav {
            display: flex;
            margin-top: 69px;
            padding: 7px 0;

            background-color: #191c20;
            justify-content:center;

            div {
                display: block;
                width: 130px;
                height: 38px;

                line-height: 38px;
                vertical-align: middle;
                font-weight: bold;
                text-align: center;
                border-radius: 4px;
                cursor: pointer;

                &.active {
                    background: #2cc086;
                    color: rgba(255, 255, 255, 0.87);
                }
            }
        }

        &-edit {
            height: 40px;
            padding-right: 50px;
            margin-bottom: 30px;

            text-align: right;
            button {
                width: 140px;
                height: 40px;

                font-weight: bold;
                background: #2cc086;
                border-radius: 4px;
                outline: none;
                text-align: center;
            }
        }

        .icon-edit {
            display: inline-block;
            width: 19px;
            height: 19px;
            margin-right: 6px;

            vertical-align: middle;
            background: url(../../assets/icons/edit.png) no-repeat;
            background-size: contain;
        }
    }
</style>
