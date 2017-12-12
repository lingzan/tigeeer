<template>
    <div class="photography" 
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="50">
        <div class="photography-banner">
                <img src="https://pacdn.500px.org/12696613/622fb6dfa8f3f831c5e5a84e4acc8b3d17286aee/cover_2048.jpg?3">
                <div class="photography-banner-cover"></div>
                <div v-if="noticeFlag" class="photography-scroll-notice"><i class="icon-mouse"></i>Scroll to see more</div>
        </div>
        <div class="photography-wrap">
            <div class="clearfix">
                <ColumnFall v-for="item in waterfall" :key="item.id" :columnfall="item"></ColumnFall>
            </div>
            <LoadMore v-if="loading || isOver" :text="loadingText"></LoadMore>
            <Cfooter />
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import LoadMore from '../../components/loading/more'
    import Cfooter from '../../components/footer/cfooter'
    import ColumnFall from '../../components/columnfall/columnfall'

    import Tool from '../../util/tool'

    export default {
        name: 'photographys',
        data () {
            return {
                noticeFlag: true,
                result: [],
                MAX_WIDTH: 0,
                page: 1,
                loading: false,
                isOver: false,
                photographyCache: [],
                loadingText: 'loading more....'
            }
        },
        computed: {
            ...mapGetters([
                'photographys'
            ]),
            waterfall () {
                // console.log(this.waterfall)
                const data = this.photographys
                this.gap = 10
                this.INIT_HEIGHT = this.MAX_WIDTH < 679 ? 100 : this.MAX_WIDTH < 1024 ? 200 : this.MAX_WIDTH < 1280 ? 250 : 250
                this.rowWidth = 0
                this.row = []
                this.rows = []
                let i = 0
                if (this.photographyCache.length > 0) {
                    i = this.photographyCache.length
                }
                if (typeof data === 'object' && data.constructor === Array) {
                    for (i; i < data.length; i++) {
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
                            console.log(this.MAX_WIDTH, this.rowWidth)
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
                            item.parentStyle = {
                                width: item.cw + 'px',
                                height: (item.ch > 300 ? 300 : item.ch) + 'px',
                                margin: this.gap / 2 + 'px'
                            }
                            item.childStyle = {
                                'background-image': 'url(' + item.path + ')'
                            }
                            this.row = [item]
                        }
                    }

                    if (this.row.length > 0) {
                        const distance = this.MAX_WIDTH - this.rowWidth
                        const distanceRatio = distance / this.rowWidth
                        console.log(this.MAX_WIDTH, this.rowWidth)
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
                this.rows = this.photographyCache.concat(this.rows)
                this.photographyCache = this.rows
                return this.rows
            }
        },
        methods: {
            ...mapActions([
                'photographysAction'
            ]),
            renderWater (arr) {
                Tool.waterFallFlow().render(arr)
            },
            async loadMore () {
                console.log(1)
                if (this.loading || this.isOver) {
                    return
                }
                this.loading = true
                const res = await this.photographysAction({
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
            const res = await this.photographysAction({
                page: 1,
                type: 2
            })
            this.result = res
        },
        mounted () {
            window.addEventListener('resize', function () {
            })
            window.addEventListener('scroll', () => {
                this.noticeFlag = false
            })
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
        components: { LoadMore, Cfooter, ColumnFall }
    }
</script>

<style type="text/sass" lang="scss">
    .photography {
        &-banner {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            transform: translateY(-64px);
            img {
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%)
            }
            &-cover {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 100px;
                background-image: linear-gradient(to bottom, rgba(19, 22, 27, 0), #13161b);
            }
        }
        &-wrap {
            position: absolute;
            top: 100%;
            width: 100%;
            padding: 56px 50px 0;
            background: #13161b;
        }
        &-scroll-notice {
            position: absolute;
            left: 50%;
            bottom: 20px;

            width: 160px;
            height: 40px;
            margin-left: -80px;

            font-size: 12px;
            line-height: 40px;
            text-align: center;
            border-radius: 100px;
            background-color: rgba(16, 19, 24, 0.7);
            box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.4);

            .icon-mouse {
                display: inline-block;
                width: 15px;
                height: 23px;
                margin-right: 8px;

                vertical-align: middle;
                background: url(../../assets/icons/mouse.png) no-repeat;
                background-size: cover;
            }
        }
    }
    .waterfall-item {
        background: #191c20;
        cursor: pointer;

        &:hover {
            .notice {
                opacity: 1;
            }
        }
        .notice {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            display: table;
            font-size: 16px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.6);
            transition: all .5s;

            span {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
            }
        }
    }
</style>
