<template>
    <div class="tigger" 
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="50">
        <section v-for="project in projects" :key="project.id" class="tigger-item">
            <div class="tigger-flex">
                <div class="tigger-title">{{project.name}}</div>
                <div class="tigger-descrip">{{project.description}}</div>
            </div>
            <img class="tigger-img" :src="project.path" alt="tigger img">           
        </section>
        <LoadMore v-if="loading || isOver" :text="loadingText"></LoadMore>
        <Cfooter></Cfooter>
    </div>
</template>

<script>
    import LoadMore from '../../components/loading/more'
    import Cfooter from '../../components/footer/cfooter'
    import {mapGetters, mapActions} from 'vuex'

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
            ...mapGetters(['projects'])
        },
        methods: {
            ...mapActions([
                'projectsAction'
            ]),
            async loadMore () {
                if (this.loading || this.isOver) {
                    return
                }
                this.loading = true
                const res = await this.projectsAction({
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
            this.projectsAction({
                page: 1,
                type: 5
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
        components: { LoadMore, Cfooter }
    }
</script>

<style type="text/sass" lang="scss">
    .tigger {
        max-width: 1450px;
        margin: 0 auto;
        padding:0 100px 0;
        border-top: 1px solid #1d2126;

        &-item {
            margin-top: 200px;

            &:first-child {
                margin-top: 170px
            }

        }
        &-flex {
            display: flex;
        }
        &-title {
            flex: 1;
            margin-right: 90px;

            font-size: 28px;
            font-weight: bold;
            color: #2cc086;
        }
        &-descrip {
            flex: 2;

            font-size: 16px;
            line-height: 1.625;
            color: rgba(255, 255, 255, 0.87);
        }
        &-img {
            width: 100%;
            margin-top: 42px; 
        }
    }

</style>
