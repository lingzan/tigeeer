<template>
    <div class="notice" v-if="show">
        {{text}}
        <i @click="closeNotice"></i>
    </div>
</template>

<script>
    export default {
        name: 'Notice',
        model: {
            prop: 'show',
            event: 'clickHandle'
        },
        props: {
            text: '',
            show: false
        },
        methods: {
            closeNotice () {
                const show = !this.show
                this.$emit('clickHandle', show)
            }
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .notice {
        position: relative;
        height: 46px;

        color: #dedede;
        font-size: 14px;
        text-align: center;
        line-height: 46px;
        background-color: #ec5658;

        i{
            position: absolute;
            top: 8px;
            right: 22px;

            width: 30px;
            height: 30px;

            background: url(../../assets/icons/close.png) no-repeat; 
            background-size: 16px;
            background-position: center;
            cursor: pointer;

            &:hover {
                background: url(../../assets/icons/remove_hover.png) no-repeat;
                background-size: 16px;
                background-position: center;
            }
        }
    }
</style>
