<template>
    <div class="templates" 
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="50">
        <h2 class="illustration-title">More than 100,000 creatives like you have chosen Icondiary to showcase their work. When you see what’s possible, it’s easy to see why. Join the community. Stand out！</h2>
        <WaterFall :water-fall-img="templates"></WaterFall>
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
        name: 'Templates',
        data () {
            return {
                noticeFlag: true,
                result: [],
                MAX_WIDTH: 0,
                page: 1,
                loading: false,
                isOver: false,
                loadingText: 'loading more....'
            }
        },
        computed: {
            ...mapGetters([
                'templates'
            ]),
            waterfall () {
                const data = this.templates
                this.gap = 10
                this.INIT_HEIGHT = this.MAX_WIDTH < 679 ? 100 : this.MAX_WIDTH < 1024 ? 200 : this.MAX_WIDTH < 1280 ? 250 : 250
                this.rowWidth = 0
                this.row = []
                this.rows = []
                console.log('-----start', this.templates)
                if (typeof data === 'object' && data.constructor === Array) {
                    for (let i = 0; i < data.length; i++) {
                        var item = data[i]
                        var ratio = item.width / item.height
                        item.cw = Math.floor(this.INIT_HEIGHT * ratio)
                        item.ch = this.INIT_HEIGHT
                        if (this.rowWidth + this.gap + item.cw < this.MAX_WIDTH) {
                            this.rowWidth = this.rowWidth + this.gap + item.cw
                            item.parentStyle = {
                                width: item.cw + 'px',
                                height: (item.ch > 300 ? 300 : item.ch) + 'px',
                                margin: this.gap / 2 + 'px'
                            }
                            item.childStyle = {
                                'background-image': 'url(' + item.path + ')'
                            }
                            this.row.push(item)
                        } else {
                            let distance = this.MAX_WIDTH - this.rowWidth
                            let distanceRatio = distance / this.rowWidth
                            let plusWidth = 0
                            for (let j = 0; j < this.row.length; j++) {
                                let row = this.row[j]
                                let currentRatio = row.cw / row.ch
                                row.ch = row.ch + Math.floor(row.ch * distanceRatio)
                                row.cw = Math.round(row.ch * currentRatio)
                                if (j === this.row.length - 1) {
                                    row.cw = this.MAX_WIDTH - plusWidth - 11
                                }
                                plusWidth = plusWidth + row.cw + this.gap

                                row.parentStyle = {
                                    width: row.cw + 'px',
                                    height: (row.ch > 300 ? 300 : row.ch) + 'px',
                                    margin: this.gap / 2 + 'px'
                                }
                                row.childStyle = {
                                    backgroundImage: 'url(' + row.path + ')'
                                }
                                this.rows.push(row)
                            }
                            this.rowWidth = item.cw + this.gap
                            this.row = [item]
                        }
                    }

                    if (this.rows.length > 0) {
                        const distance = this.MAX_WIDTH - this.rowWidth
                        const distanceRatio = distance / this.rowWidth
                        let plusWidth = 0
                        for (let j = 0; j < this.row.length; j++) {
                            let row = this.row[j]
                            let currentRatio = row.cw / row.ch
                            row.ch = row.ch + Math.floor(row.ch * distanceRatio)
                            row.cw = Math.round(row.ch * currentRatio)
                            if (j === this.row.length - 1) {
                                row.cw = this.MAX_WIDTH - plusWidth - 11
                            }
                            plusWidth = plusWidth + row.cw + this.gap

                            row.parentStyle = {
                                width: row.cw + 'px',
                                height: (row.ch > 300 ? 300 : row.ch) + 'px',
                                margin: this.gap / 2 + 'px'
                            }
                            row.childStyle = {
                                backgroundImage: 'url(' + row.path + ')'
                            }
                            this.rows.push(row)
                        }
                    }
                }
                return this.rows
            }
        },
        methods: {
            ...mapActions([
                'templatesAction'
            ]),
            async loadMore () {
                if (this.loading || this.isOver) {
                    return
                }
                this.loading = true
                const res = await this.templatesAction({
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
            this.MAX_WIDTH = document.body.clientWidth || document.documentElement.clientWidth
            this.MAX_WIDTH = this.MAX_WIDTH - 100
            const res = await this.templatesAction({
                page: 1,
                type: 2
            })
            this.result = res
        },
        mounted () {
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                if (document.body.scrollTop) {
                    document.scrollTop.scrollTop = 0
                } else {
                    document.documentElement.scrollTop = 0
                }
            })
        },
        components: { LoadMore, Cfooter, WaterFall }
    }
</script>

<style type="text/sass" lang="scss">
    .templates {
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

