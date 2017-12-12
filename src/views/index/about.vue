<template>
    <div class="about">
        <h2 class="about-title">More than 100,000 creatives like you have chosen Icondiary to showcase their work. When you see what’s possible, it’s easy to see why. Join the community. Stand out！</h2>
        <section class="about-portfolio">
            <img src="../../assets/images/about/1.jpg" alt="portfolio"/>
            <div class="about-flex">
                <div class="about-flex-left">Protfolio</div>
                <div class="about-flex-right">More than 100,000 creatives like you have chosen Icondiary to showcase their work. When you see what’s possible, it’s easy to see why. Join the community. Stand out from the crowd.</div>
            </div>
        </section>
        <section class="about-sell">
            <div class="about-swiper">
                <div class="about-swiper-container">
                    <img class="about-swiper-slider active" src="../../assets/images/about/2.jpg" alt="portfolio"/>
                    <img class="about-swiper-slider" src="../../assets/images/about/3.jpg" alt="portfolio"/>
                    <img class="about-swiper-slider" src="../../assets/images/about/4.jpg" alt="portfolio"/>
                    <img class="about-swiper-slider" src="../../assets/images/about/5.jpg" alt="portfolio"/>
                </div>
            </div>
            <div class="about-flex">
                <div class="about-flex-left">Sell & buy design work</div>
                <div class="about-flex-right">More than 100,000 creatives like you have chosen Icondiary to showcase their work. When you see what’s possible, it’s easy to see why. Join the community. Stand out from the crowd.</div>
            </div>
        </section>
        <section class="about-team">
            <h2 class="about-team-title">Team of tigeeer</h2>
            <div class="about-triangle"></div>
            <div class="about-team-member">
                <div class="about-team-avatar" :style="imgUrl2"></div>
                <div class="about-team-info">
                    <div class="about-team-flex">
                        <div class="about-team-box">
                            <h3 class="about-team-member-name">James Lawrence</h3>
                            <p class="about-team-member-position">Graphic design & UI design</p>
                            <p class="about-team-member-descrip">Hi there, I am a creative developer and designer, I enjoy building beautiful and thoughtful experiences. I like to mix code surprising visuals and pleasing interactions. I take my work seriously but not myself.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-team-member">
                <div class="about-team-avatar" :style="imgUrl2"></div>
                <div class="about-team-info">
                    <div class="about-team-flex">
                        <div class="about-team-box">
                            <h3 class="about-team-member-name">James Lawrence</h3>
                            <p class="about-team-member-position">Graphic design & UI design</p>
                            <p class="about-team-member-descrip">Hi there, I am a creative developer and designer, I enjoy building beautiful and thoughtful experiences. I like to mix code surprising visuals and pleasing interactions. I take my work seriously but not myself.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-team-pagination">
                <div class="about-team-pagination-item active"></div>
                <div class="about-team-pagination-item"></div>
                <div class="about-team-pagination-item"></div>
            </div>
        </section>
        <Cfooter></Cfooter>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import LoadMore from '../../components/loading/more'
    import Cfooter from '../../components/footer/cfooter'

    export default {
        name: 'index-flow',
        data () {
            return {
                intervalId: '',
                imgUrl1: 'background-image:url(' + require('../../assets/images/about/t1.jpg') + ')',
                imgUrl2: 'background-image:url(' + require('../../assets/images/about/t2.jpg') + ')',
                interId: ''
            }
        },
        computed: mapGetters({
            articles: 'articleList',
            scrollTop: 'getScrollTop'
        }),
        created () {
        },
        mounted () {
            let arr = document.getElementsByClassName('about-swiper-container')
            const w = arr[0].clientWidth
            let currentIndex = 1
            this.interId = setInterval(() => {
                arr[0].setAttribute('style', 'transform: translateX(' + -currentIndex * w + 'px)')
                currentIndex++
                if (currentIndex > 3) {
                    currentIndex = 0
                }
            }, 2000)
        },
        beforeRouteEnter: function (to, from, next) {
            next(vm => {
                document.body.scrollTop = 0
            })
        },
        beforeRouteLeave: function (to, from, next) {
            clearInterval(this.interId)
            if (document.body.scrollTop) {
                document.scrollTop.scrollTop = 0
            } else {
                document.documentElement.scrollTop = 0
            }
            next()
        },
        components: { LoadMore, Cfooter }
    }
</script>

<style type="text/sass" lang="scss">
    .about {
        max-width: 1425px;
        margin:  0 auto;
        padding:0 87px 0;
        border-top: 1px solid #1d2126;

        &-triangle {
            width: 41px;
            height: 43px;
            margin: 35px auto 0;
            background: #191c20; 
            background: url(../../assets/images/about/triangle.png) no-repeat;
            background-size: contain;
        }
        &-title {
            width: 950px;
            margin: 130px auto 158px;
            color: rgba(255,255,255,.87);
            font-size: 34px;
            text-align: center;
            font-weight: 500;
            line-height: 1.32;
        }
        &-portfolio {
            padding: 70px;
            background: #191c20;

            img {
                width: 100%;
                box-shadow: 0 0 55px rgba(0,0,0,.15);
            }
        }
        &-sell {
            padding: 70px;
            margin-top: 100px;
            background: #191c20;

            img {
                width: 100%;
            }
        }
        &-flex {
            display: flex;
            margin-top: 40px;

            &-left {
                flex: 1;
                font-size: 30px;
                font-weight: bold;
                line-height: 1;
            }
            &-right {
                flex: 1;
                font-size: 16px;
                line-height: 1.5;
            }
        }
        &-swiper {
            width: 100%;
            overflow: hidden;
        }
        &-swiper-container {
            display: flex;
            transition: all .5s;
        }
        &-swiper-slider {
            display: flex;
            width: 100%;
            height: 100%;
        }

        &-team {
            width: 820px;
            margin: 175px auto 0;

            &-title {
                height: 40px;
                font-size: 40px;
                font-weight: 600;
                line-height: 1;
                text-align: center;
            }
            &-member {
                position: relative;
                margin-top: 90px;
                text-align: right;
                &:nth-child(even) {
                    text-align: left;

                    .about-team-avatar {
                        right: 0;
                        padding-left: 150px;
                        padding-right: 0;
                        background-size: cover;
                    }
                    .about-team-info {
                        padding: 40px 157px 40px 57px;
                    }
                }
                &-name {
                    margin-bottom: 6px;

                    font-size: 28px;
                    line-height: 1;
                    font-weight: bold;
                    letter-spacing: 2.5px;
                }
                &-position {
                    font-size: 15px;
                    line-height: 1;
                    color: #9b9b9b;
                }
                &-descrip {
                    max-height: 84px;
                    margin-top: 34px;

                    font-size: 14px;
                    color: #9b9b9b;
                    line-height: 21px;
                    overflow: hidden;


                }

            }
            &-avatar {
                position: absolute;
                top: 25px;

                width: 404px;
                height: 228px;
                padding-right: 150px;

                background-color: red;
                background-size: cover;
            } 
            &-info {
                display: inline-block;
                width: 532px;
                height: 280px;
                padding: 25px 57px 25px 157px;

                font-size: 14px;
                line-height: 1.36;
                background-color: #191c20;
                text-align: left;
            }

            &-flex {
                display: flex;
                align-items: center;
                height: 100%;
            }
            &-box {
                flex: 1;
            }
            &-pagination {
                display: flex;
                justify-content:center;
                margin-top: 40px;
                text-align: center;

                &-item {
                    width: 10px;
                    height: 10px;
                    margin: 0 10px;

                    border-radius: 12px;
                    background: #4a4a4a;
                    cursor: pointer;

                    &.active {
                        background: #2cc086;
                    }
                }
            }
        }
    }
</style>
