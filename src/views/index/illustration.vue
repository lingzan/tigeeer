<template>
    <div class="illustration"
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="50">
        <h2 class="illustration-title">More than 100,000 creatives like you have chosen Icondiary to showcase their work. When you see what’s possible, it’s easy to see why. Join the community. Stand out！</h2>
        <WaterFall :water-fall-img="illustrations"></WaterFall>
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
        name: 'Illustration',
        data () {
            return {
                page: 1,
                loading: false,
                isOver: false,
                loadingText: 'loading more...'
            }
        },
        computed: {
            ...mapGetters(['illustrations'])
        },
        methods: {
            ...mapActions(['illustrationsAction']),
            async loadMore () {
                if (this.loading || this.isOver) {
                    return
                }
                this.loading = true
                const res = await this.illustrationsAction({
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
        created () {
            this.illustrationsAction({page: 1, type: 1})
        },
        mounted () {
        },
        beforeRouteEnter (to, from, next) {
            if (document.body.scrollTop) {
                document.scrollTop.scrollTop = 0
            } else {
                document.documentElement.scrollTop = 0
            }
            next()
        },
        components: { LoadMore, Cfooter, WaterFall }
    }
</script>

<style type="text/sass" lang="scss">
    .illustration {
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
