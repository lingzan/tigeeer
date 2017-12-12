<template>
    <div class="modal">
       <h2 class="modal-tips">Payment <i></i></h2>
       <p class="modal-content">Payment success?</p>
       <div class="modal-btn">
           <button>Close</button>
           <button>Yes</button>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            text: ''
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .modal {
        width: 540px;
        height: 263px;
        border-radius: 4px;
        background-color: #191c20;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.5);

        i{
            position: absolute;
            top: 8px;
            right: 22px;


            width: 30px;
            height: 30px;

            background: url(../../assets/icons/close.png) no-repeat; 
            background-size: contain;
            background-position: center;
        }

        &-tips {
            position: relative;
            padding: 20px;

            color: #dedede;
            font-size: 22px;
            line-height: 66px;
            border-bottom: #272c33;
        }
        &-content {
            padding: 22px;

            font-size: 16px;
            line-height: 22px;
            color: #dedede;
        }

        &-bnt {
            margin-top: 20px;
            text-align: right;
            button {
                width: 100px;
                height: 38px;
                margin-left: 30px;

                text-align: center;
                border-radius: 4px;

            }
        }
    }
</style>
