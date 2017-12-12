<template>
    <div class="profile" >
        <header>
            <p class="profile-title">Edit your profile</p>
            <p class="profile-instro">update your account infomation</p>
        </header>
        <section>
            <div class="account-input">
                <label for="avatar">Avatar</label>
                <div class="profile-pr">
                    <img id="previewImg" class="profile-avatar-cover" :src="userAvatar" />
                    <input type="file" class="profile-avatar" @change="previewImg" id="avatar" name="image" >
                    <button class="profile-save-avatar">Change picture</button>
                </div>
            </div>
            <div class="account-input profile-input">
                <label for="email">Username</label>
                <input type="text" id="email" name="email" v-model="user.user_cn_name" autocomplete="off">
            </div>
            <div class="account-input profile-input">
                <label for="email">Self introduction</label>
                <textarea class="profile-textarea" v-model="user.description" autocomplete="off"></textarea>
            </div>
            <div class="profile-operate">
                <button class="profile-save" @click="submits">Save change</button>
                <button class="profile-cancle">Cancle</button>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'fwd',
        data () {
            return {
                pwdIcon: 'icon-yanjing',
                pwdType: 'password',
                btn: false,
                status: '',
                active: '',
                avatar: require('../../assets/icons/avatar_80.png'),
                info: {
                    nickname: '',
                    description: ''
                },
                fileReader: new FileReader()
            }
        },
        computed: {
            ...mapGetters(['user']),
            userAvatar () {
                if (this.user) {
                    console.log(this.user.image)
                    return this.user.image || this.avatar
                }
            }
        },
        methods: {
            ...mapMutations(['updateUserLicense']),
            ...mapActions(['getUserInfo', 'updateUserInfo']),
            async submits () {
                if (this.btn) {
                    return
                }
                this.btn = true
                let formdata = new FormData()
                // console.log(this.user)
                formdata.append('image', document.getElementById('avatar').files[0])
                formdata.append('nickname', this.user.user_cn_name)
                formdata.append('description', this.user.description)
                try {
                    await this.updateUserInfo(formdata)
                    this.updateUserLicense(this.user)
                    localStorage.setItem('userLicense', JSON.stringify(this.user))
                    alert('修改成功')
                } catch (e) {
                    alert(e.msg)
                }
                this.btn = false
            },
            valite () {
                if (this.user.username && this.user.pwd) {
                    this.btn = true
                    this.active = 'active'
                } else {
                    this.btn = false
                    this.active = ''
                }
            },
            previewImg () {
                const $avatar = document.getElementById('avatar')
                const oFile = $avatar.files[0]

                // eslint-disable-next-line
                const rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i
                if (!rFilter.test(oFile.type)) { alert('You must select a valid image file!'); return }
                this.fileReader.readAsDataURL(oFile)
            }
        },
        created () {
            const id = this.$route.params.id ? this.$route.params.id : localStorage.getItem('userId')
            this.getUserInfo(id)
        },
        mounted: function () {
            this.fileReader = new FileReader()
            this.fileReader.onload = function (oFREvent) {
                console.log(1321)
                document.getElementById('previewImg').src = oFREvent.target.result
            }
        },
        components: {}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .profile {
        padding-top: 90px;
        border-top: 1px solid #1d2126;
        background: #13161b;

        &-pr {
            position: relative;
        }
        &-title {
            font-size: 50px;
            line-height: 1;
            text-align: center;
        }
        &-instro {
            width: 400px;
            margin: 12px auto 0;
            color: #787b7f;
            font-size: 16px;
            text-align: center;
        }
        label {
            display: inline-block;
            margin-bottom: 10px;
            font-size: 15px;
            line-height: 1;
            color: #dedede;
        }
        &-input {
            margin-top: 40px;

            input {
                display: block;
                width: 100%;
                height: 46px;
                padding: 10px 15px;
                line-height: 46px;
                color: #13161b;
                background: #dedede;
                border-radius: 4px;

                &.active {
                    background: red;
                }
            }
        }
        &-textarea {
            display: block;
            width: 100%;
            height: 108px;
            padding: 10px 15px;

            color: #13161b;
            border-radius: 4px;
            background-color: #dedede;
        }
        section {
            width: 572px;
            margin: 90px auto 0;
        }
       

        &-operate {
            margin-top: 40px;
            padding-bottom: 142px;

            button {
                height: 42px;

                text-align: center;
                border-radius: 4px;
            }
        }
        &-save-avatar {
            width: 150px;
            height: 42px;
            margin-right: 30px;
            margin-top: 19px;

            background: #2cc086;
            vertical-align: top;
            line-height: 42px;
            text-align: center;
            border-radius: 4px;
        }
        &-save {
            width: 150px;
            margin-right: 30px;

            background: #2cc086;
        }
        &-cancle {
            width: 106px;
            background: #787b7f;
        }
        &-avatar {

            position: absolute;
            top: 19px;
            left: 134px;
            width: 150px;
            height: 42px;
            opacity: 0;
            z-index: 3;
            line-height: 80px;

            &-cover {
                display: inline-block;
                position: relative;
                
                width: 80px;
                height: 80px;
                margin-right: 50px;
                border-radius: 50%;
                z-index: 1;
            }
        }

        input:focus {
            background: #fafec0;
        }
        textarea:focus {
            background: #fafec0;
        }
    }
</style>
