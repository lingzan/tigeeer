<template>
    <div class="illustration"
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="50">
        <h2 class="illustration-title">More than 100,000 creatives like you have chosen Icondiary to showcase their work. When you see what’s possible, it’s easy to see why. Join the community. Stand out！</h2>
        <WaterFall :water-fall-img="icons"></WaterFall>
        <LoadMore v-if="loading || isOver" :text="loadingText"></LoadMore>
        <Cfooter></Cfooter>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import LoadMore from '../../components/loading/more'
    import WaterFall from '../../components/waterfall/waterfall'
    import Cfooter from '../../components/footer/cfooter'

    export default {
        name: 'index-flow',
        data () {
            return {
                page: 1,
                loading: false,
                isOver: false,
                loadingText: 'loading more...'
            }
        },
        computed: {
            ...mapGetters([
                'icons'
            ])
        },
        methods: {
            ...mapActions([
                'iconsAction'
            ]),
            async loadMore () {
                if (this.loading || this.isOver) {
                    return
                }
                this.loading = true
                const res = await this.iconsAction({
                    page: this.page + 1
                })
                if (res) {
                    this.loadingText = 'no more data'
                }
                this.loading = false
                this.isOver = res
                this.page++
            }
        },
        async created () {
            this.loading = true
            await this.iconsAction({page: 1, type: 2})
            this.loading = false
        },
        mounted () {
        },
        beforeRouteEnter: function (to, from, next) {
            document.body.scrollTop = 0
            next(vm => {
                console.log('scrollTop')
            })
        },
        beforeRouteLeave: function (to, from, next) {
            this.$store.dispatch('setScrollTop', document.body.scrollTop)
            next()
        },
        components: { LoadMore, Cfooter, WaterFall }
    }
</script>

<style type="text/sass" lang="scss">
    .illustration {
        // width: 1200px;
        // margin: 0 auto;
        padding:0 50px 0;
        border-top: 1px solid #1d2126;

        &-title {
            width: 950px;
            margin: 130px auto 158px;
            font-size: 34px;
            text-align: center;
            font-weight: 500;
            line-height: 1.32;
        }

    }
</style>
