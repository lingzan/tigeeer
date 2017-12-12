<template>
    <div class="upload" >
        <header>
            <p class="upload-title">Upload your work</p>
            <p class="upload-instro">FIll in the following blanks and upload images</p>
        </header>
        <section>
            <h3 class="upload-column">Project details</h3>
            <div class="account-input upload-input">
                <label for="email">Title (Required)</label>
                <input type="text" id="email" name="name" placeholder="Title of your work" v-model="collect.name" autocomplete="off">
            </div>
            <div class="account-input upload-input">
                <label for="email">Description</label>
                <textarea class="upload-textarea" name="instro" placeholder="Description of your work" v-model="collect.instro" autocomplete="off"></textarea>
            </div>
        </section>
        <section>
            <h3 class="upload-column">Content (Required)</h3>
            <div class="account-input upload-file-box">
                <span><i class="icon-addimg"></i>Add images</span>
                <input type="file" id="email" name="image[]" placeholder="Title of your work" >
            </div>
            <div class="upload-file-progress">
                <div class="upload-file-loading"></div>
            </div>
        </section>
        <section class="upload-img-box clearfix">
            <div class="upload-img-show">
                <div class="upload-img-close">
                    <button></button>
                </div>
                <div class="upload-img-url" :style="imgUrl"></div>
                <div class="upload-img-title">Caption</div>
                <textarea class="upload-img-content" placeholder="Caption of this photo..."></textarea>
            </div>
            <div class="upload-img-show">
                <div class="upload-img-close">
                    <button type="button"></button>
                </div>
                <div class="upload-img-url" :style="imgUrl"></div>
                <div class="upload-img-title">Caption</div>
                <textarea class="upload-img-content" >More than 100,000 creatives like you have chosen Icondiary to showcase their work. When you see what’s possible, it’s easy to see why. Join the community. Stand out from the crowd.</textarea>
            </div>
        </section>
           <!--  <section>
                <h3 class="upload-column">Attachment (Required)</h3>
                <div class="account-input upload-file-box">
                    <span><i class="icon-addatt"></i>Add Attachment</span>
                    <input type="file" id="email" name="email" placeholder="Title of your work" >
                </div>
                <div class="upload-file-progress">
                    <div class="upload-file-loading"></div>
                </div>
            </section> -->
         <section>
                <h3 class="upload-column">Select category of your work</h3>
                <div class="category-flex">
                    <div class="category-item" :class="{'active': curr === '1'}" @click="selectCategory('1')">llustration</div>
                    <div class="category-item" :class="{'active': curr === '2'}" @click="selectCategory('2')">Icon</div>
                    <div class="category-item" :class="{'active': curr === '3'}" @click="selectCategory('3')">Photography</div>
                    <div class="category-item" :class="{'active': curr === '4'}" @click="selectCategory('4')">Templates</div>
                </div>

                <input type="hidden" name="type" :value="curr">
                <input type="hidden" name="userid" :value="userid">
        </section>
        <div class="upload-btn">
            <!-- <button class="upload-preview">Preview</button> -->
            <button type="button" class="upload-publish" @click="submits">Publish</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: 'upload',
        data () {
            const userid = localStorage.getItem('userId')
            return {
                btn: false,
                curr: '',
                collect: {
                    name: '',
                    instro: '',
                    image: '',
                    userid: userid
                }
            }
        },
        methods: {
            ...mapActions(['addCollect']),
            submits () {
                if (this.btn) {
                    const collect = {
                        userid: this.userid,
                        instro: this.collect.instro,
                        name: this.name,
                        type: this.curr
                    }
                    const formdata = new FormData()
                    formdata.append('image', document.getElementById('avatar').files[0])
                    formdata.append('name', this.collect.name)
                    formdata.append('description', this.user.description)
                    formdata.append('userid', this.userid)
                    this.addCollect(collect)
                }
            },
            selectCategory (type) {
                this.curr = type
            }
        },
        mounted: function () {
        },
        components: {}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    textarea::-webkit-input-placeholder {
        color: rgba(120, 123, 127, 0.8)
    }
    textarea:-moz-placeholder {
        color: rgba(120, 123, 127, 0.8)
    }
    textarea::-moz-placeholder {
        color: rgba(120, 123, 127, 0.8)
    }
    input:-ms-input-placeholder{
        color: rgba(120, 123, 127, 0.8)
    }

    .category-flex {
        display: flex;
    }
    .category-item {
        width: 150px;
        height: 42px;
        
        margin-right: 24px;
        font-size: 16px;
        line-height: 42px;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);

        border-radius: 4px;
        background-color: #191c20;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &.active {
            color: rgba(255,255,255,.87);
            background: #2cc086;
        }
    }
    .upload {
        margin: 0 auto;
        padding-top: 90px;
        border-top: 1px solid #1d2126;
        background: #13161b;

        &-pr {
            position: relative;
        }
        &-title {
            font-size: 45px;
            line-height: 1;
            text-align: center;
        }
        &-column {
            font-size: 30px;
            margin-bottom: 30px;
            color: #2cc086;
        }
        &-instro {
            width: 400px;
            margin: 16px auto 0;
            color: #787b7f;
            font-size: 18px;
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
            &:last-child {
                margin-top: 40px;
            }
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
            min-height: 108px;
            padding: 10px 15px;

            color: #13161b;
            border-radius: 4px;
            background-color: #dedede;

            &:focus {
                background: #fafec0;
            }
        }

        section {
            width: 672px;
            margin: 90px auto 0;
        }
       

        &-file-box {
            position: relative;
            width: 100%;
            height: 100px;
            background: #191c20;
            display: flex;
            align-items: center;
            justify-content:center;
            border: 1px dashed #979797;
            border-radius: 4px;
            cursor: pointer;

            input {
                display: block;
                position: absolute;
                top: 0;
                left: 0;

                width: 100%;
                height: 100px;

                opacity: 0;
                z-index: 3;
                cursor: pointer;
            }
        }
        &-file-progress {
            width: 100%;
            height: 12px;
            margin-top: 15px;

            border-radius: 4px;
            background-color: #191c20;
        }
        &-file-loading {
            width: 50%;
            height: 12px;
            margin-top: 18px;

            border-radius: 4px;
            background-color: #2cc086;
        }

        &-btn {
            display: flex;
            width: 672px;
            margin: 90px auto 0;
            padding-bottom: 200px;

            button {
                flex: 1;
                height: 42px;
                border-radius: 4px;
                border: solid 1px #2cc086;
            }
        }
        &-preview {
            margin-right: 20px;
            color: #2cc086;
            background-color: rgba(44, 192, 134, 0.05);
        }
        &-publish {
            margin-left: 20px;
            background-color: #2cc086;
        }
        &-img {
            &-box {
                margin-top: 25px !important;
                // display: flex;
                // justify-content: justify;
            }
            &-show {
                width: 324px;
                background: red;
                border-radius: 4px;
                background-color: #191c20;
                background-size: cover;
                border: solid 1px #4a4a4a;
                margin-right: 24px;
                float: left;

                &:last-child{
                    margin-right: 0;
                }
            }
            &-url {
                width: 320px;
                height: 146px;
                margin: 0 auto;
                background: #051316;
            }
            &-title {
                padding-left: 10px;
                margin: 40px 0 12px;
                font-size: 14px;
                line-height: 1;
                color: rgba(222, 222, 222, 0.87);

            }
            &-content {
                width: 100%;
                height: 110px;
                min-height: 110px;
                padding: 10px;
                margin-bottom: 10px;
                font-size: 14px;
                line-height: 18px;
                color: #787b7f;
                background: #051316;
                border-radius: 1px;
                border-left: 10px solid #191c20;
                border-right: 10px solid #191c20;
            }
            &-close {
                height: 20px;
                margin: 12px 0 20px;
                text-align: right;

                button {
                    width: 20px;
                    height: 20px;
                    margin-right: 12px;
                    background: url(../../assets/icons/remove.png) no-repeat;
                    background-size: contain;
                    cursor: pointer;

                    &:hover {
                        background: url(../../assets/icons/remove_hover.png) no-repeat;
                        background-size: contain;
                    }
                }
            }
        }

        input:focus {
            background: #fafec0;
        }
        

        .icon {
            &-addimg {
                display: inline-block;
                width: 23px;
                height: 20px;
                margin-right: 12px;

                vertical-align: middle;
                background: url(../../assets/icons/photo.png) no-repeat;
                background-size: cover;
            }
            &-addatt {
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-right: 7px;

                vertical-align: middle;
                background: url(../../assets/icons/attachment.png) no-repeat;
                background-size: cover;
            }
        }
    }
</style>
