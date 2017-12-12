<template>
    <div class="account-input login-account">
        <label :for="email">Email</label>
        <input type="text" id="email" @input="valite()" name="email" v-model="user.username" autocomplete="off">
    </div>
</template>

<script>
    export default {
        name: 'TigerInput',
        props: {
            
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .account-input{
        display: block;
        width: 400px;
        margin: 0 auto;

        label {
            display: inline-block;
            margin-bottom: 10px;
            font-size: 18px;
            line-height: 1;
            color: #dedede;
        }

        input {
            display: block;
            width: 100%;
            height: 54px;
            padding: 10px 15px;
            line-height: 54px;
            color: #13161b;
            background: #dedede;
            border-radius: 6px;

            &.active {
                background: red;
            }
        }
    }
</style>
