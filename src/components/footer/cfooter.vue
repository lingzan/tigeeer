<template>
    <div class="footer">
        <div class="footer-item">
            <div class="footer-logo"></div>
            <div class="footer-options-item lh22">Tigeeer is a community of designers showing,selling or buying design works</div>
            <ul class="footer-share">
                <li class="footer-share-wechat"></li>
                <li class="footer-share-weibo"></li>
                <li class="footer-share-qq"></li>
                <li class="footer-share-qzone"></li>
            </ul>
        </div>
        <div class="footer-item">
            <h4 class="footer-tips">Product</h4>
            <ul class="footer-options">
                <router-link to="/illustration"><li class="footer-options-item">Illustration</li></router-link>
                <router-link to="/icon"><li class="footer-options-item">Icon</li></router-link>
                <router-link to="/photography"><li class="footer-options-item">Photography</li></router-link>
                <router-link to="/templates"><li class="footer-options-item">Templates</li></router-link>
                <router-link to="/project"><li class="footer-options-item">Projects</li></router-link>
            </ul>
        </div>
        <div class="footer-item">
            <h4 class="footer-tips">Contact & Join</h4>
            <ul class="footer-options">
                <a href="mailto:hello@tigeeer.com"><li class="footer-options-item">hello@tigeeer.com</li></a>
                <li class="footer-options-item">+86 159-0065-3214</li>
            </ul>
        </div>
        <div class="footer-item">
            <h4 class="footer-tips">Others</h4>
            <ul class="footer-options">
                <router-link to="/about"><li class="footer-options-item">About</li></router-link>
                <li class="footer-options-item">&copy;2017 Tigeeer</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer'
    }
</script>

<style type="text/sass" lang="scss">
    .footer {
        display: flex;
        width: 100%;
        margin-top: 200px;
        padding-bottom: 80px;

        justify-content: center;
        font-size: 16px;
        color: #787b7f;

        &-logo {
            width: 109px;
            height: 48px;
            margin-bottom: 20px;
            background: url(../../assets/icons/tigeeer_green.png) no-repeat;
            background-size: cover; 
        }
        &-item {
            max-width: 281px;
            margin-right: 80px;
            &:last-child {
                margin-right: 0;
            }
        }
        &-tips {
            color: rgba(255,255,255,.87);
            font-weight: 500;
            margin-bottom: 30px;
        }
        &-options {
            &-item {
                margin-bottom: 18px;
                color: #787b7f;
            }
        }
        a:hover li {
                    color: rgba(255,255,255,.87);
                }
        .lh22 {
            line-height: 22px;
        }
        &-share {
            display: flex;
            margin-top: 50px;

            > li {
                width: 30px;
                height: 30px;
                margin-right: 20px; 

                border-radius: 50%;
                cursor: pointer;
              
                
            }

            &-wechat {
                background: #dedede;
                background: url(../../assets/icons/wechat.png) no-repeat;
                background-size: contain;

                &:hover {
                    background: url(../../assets/icons/wechat_hover.png) no-repeat;
                    background-size: contain;
                }
            }
            &-weibo {
                background: #dedede;
                background: url(../../assets/icons/weibo.png) no-repeat;
                background-size: contain;
                &:hover {
                    background: url(../../assets/icons/weibo_hover.png) no-repeat;
                    background-size: contain;
                }
            }
            &-qq {
                background: #dedede;
                background: url(../../assets/icons/qq.png) no-repeat;
                background-size: contain;
                &:hover {
                    background: url(../../assets/icons/qq_hover.png) no-repeat;
                    background-size: contain;
                }
            }
            &-qzone {
                background: #dedede;
                background: url(../../assets/icons/qzone.png) no-repeat;
                background-size: contain;
                &:hover {
                    background: url(../../assets/icons/qzone_hover.png) no-repeat;
                    background-size: contain;
                }
            }
        }
    }
</style>
