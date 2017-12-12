<template>
    <div class="loading-more">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: 'loading-more',
        props: {
            text: {
                type: String,
                default: 'loading more...'
            }
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .loading-more {
        width: 100%;
        height: 50px;
        margin-top: 50px;

        text-align: center;
        line-height: 50px;
        color: #a6a6a6;
        background: #191c20;
        border-radius: 4px;
    }
</style>
