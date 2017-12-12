<template>
    <div class="pay-line">
        <div class="pay">
            <h3 class="pay-tips">Cart</h3>
            <div class="pay-good">
                <div class="pay-left">
                    <img class="pay-left-img" src="../../assets/flow/2.jpg"/>
                    <div class="pay-left-info">
                        <div class="pay-left-name">Photo</div>
                        <div class="pay-left-name">Resolution</div>
                        <div class="pay-left-name">FileSize</div>
                        <div class="pay-left-name">price</div>
                    </div>
                </div>
                <div class="pay-right">
                    <div class="pay-right-name">Photo</div>
                    <div class="pay-right-name">Resolution</div>
                    <div class="pay-right-name">FileSize</div>
                    <div class="pay-right-name">price</div>
                </div>
            </div>
            <h3 class="pay-tips">Purchase</h3>
            <div class="pay-price">
                <div>Total:</div>
                <div>￥5.00</div>
            </div>
            <div class="pay-ways">
                <div class="pay-ways-title">Payment:</div>
                <div class="pay-ways-item">
                    <div><i class="icon-alipay"></i></div>
                    <div class="pay-ways-radio">
                        <input type="radio" checked="checked" name="ways">
                        <button></button>
                    </div>
                </div>
                <div class="pay-ways-item">
                    <div><i class="icon-paypal"></i></div>
                    <div class="pay-ways-radio">
                        <input type="radio" name="ways">
                        <button></button>
                    </div>
                </div>
            </div>
            <div class="pay-btn">
                <button>Continue</button>
            </div>
        </div>
        <Cfooter />
    </div>
</template>

<script>
    import Cfooter from '../../components/footer/cfooter'

    export default {
        name: 'pay',
        components: {
            Cfooter
        }
    }
</script>

<style type="text/sass" lang="scss">
    .pay-line {
        border: 1px solid #1d2126;
    }
    .pay {
        padding-top: 140px;
        width: 500px;
        margin: 0 auto;
        // padding-bottom: 150px;

        &-title {
            height: 50px;
            margin: 146px 0 100px;

            text-align: center;
            font-size: 50px;
            font-weight: 500;
            line-height: 1;
            color: #fff;
        }
        &-tips {
            margin-bottom: 19px;
            font-size: 30px;
            color: #2cc086;
        }
        &-good {
            display: flex;
            width: 500px;
            padding:15px 20px;
            margin: 10px 0 60px;
            text-align: center;
            align-items:center;
            background: #191c20;
            border-radius: 4px;

            &-3 {
                flex: 3;
                text-align: left;
            }
            &-1 {
                flex: 1;
            }
        }

        &-left {
            display: flex;
            align-items: center;

            &-img {
                width: 150px;
                height: 94px;
                margin-right: 25px;
            }
            &-info {
                flex: 1;
            }
            &-name {
                font-size: 18px;
                line-height: 1;
            }
            &-name {
                text-align: left;
                margin-bottom: 13px;
                font-size: 14px;
                line-height: 1;
                color: #787b7f;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &-right {
            margin-left: 16px;
            &-name {
                text-align: left;
                margin-bottom: 13px;
                font-size: 14px;
                line-height: 1;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &-price {
            display: flex;
            height: 56px;

            justify-content: space-between;
            align-items:center;
            padding: 0 20px;

            font-size: 18px;
            border-radius: 4px;
            background-color: #191c20;

        }

        &-ways {
            padding: 22px 22px 0;
            margin-top: 20px;
            border-radius: 4px;

            background: #191c20;

            &-title {
                font-size: 18px;
                margin-bottom: 10px;
            }
            &-item {
                display: flex;
                height: 97px;

                justify-content: space-between;
                align-items:center;

                color: #dedede;
                font-size: 22px;
                background-color: #191c20;
                border-bottom: 1px solid #272c33;

                &:last-child {
                    border-bottom: none;
                }
            }

            &-radio {
                position: relative;

                button {
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    border: solid 2px #5e6063;
                }

                input {
                    position: absolute;
                    top: 0;
                    left: 0;

                    width: 20px;
                    height: 20px;

                    opacity: 0;
                    z-index: 3;
                    cursor: pointer;
                }

                input:checked + button {
                    background-color: #2cc086;
                    border: solid 2px rgba(255, 255, 255, 0.87);
                }
            }
        }

        &-btn {
            margin-top: 40px;
            padding: 22px;
            background: #191c20;
            border-radius: 4px;

            button {
                width: 100%;
                height: 50px;

                line-height: 50px;
                color: #fff;
                border-radius: 4px;
                background-color: #2cc086;
            }
        }

        .icon-alipay {
            display: inline-block;
            width: 116px;
            height: 35px;
            margin-right: 10px;

            vertical-align: middle;
            background: url(../../assets/icons/zhifubao.png);
            background-size: cover;
        }

        .icon-paypal {
            display: inline-block;
            width: 160px;
            height: 35px;
            margin-right: 10px;

            vertical-align: middle;
            background: url(../../assets/icons/paypal.png);
            background-size: cover;
        }
    }
</style>
