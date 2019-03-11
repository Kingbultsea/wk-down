<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
        <UiButton :loading="loading" color="green" style="margin-top:10px;background: black" v-on:click="postData">提交内容</UiButton>
        <div>
            <h1>手机上的预览效果</h1>
            <div class="mobile-content" v-html="editorContent"></div>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import axios from 'axios'
    import { UiButton } from 'keen-ui';

    export default {
      name: 'wangeditor',
      data () {
        return {
            editorContent: '',
            loading: false
        }
      },
        components: {
            UiButton
        },
      methods: {
        getContent: function () {
            console.log(this.editorContent)
        },
        postData () {
            console.log(this.editorContent)
            alert(this.editorContent)
            return
            this.loading = true
            axios.post('url', {
                data: this.editorContent
            }).then((res) => {
                console.log(res.body)
                this.loading = false
            })
        }
      },
      mounted() {
        let editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
          editor.customConfig.pasteFilter = false
        editor.create()
          editor.customConfig.pasteFilterStyle = false
          console.log('?>?')
      }
    }
</script>

<style lang="scss">
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .mobile-content {
        text-align: left;
        width: 375px;
        padding-left: 25px;
        padding-right: 25px;
        box-sizing: border-box;
        border: 1px solid red;
        margin: 0 auto;
        h1 {
            font-size: 32px;
        }
        h2 {
            font-size: 24px;
        }
        h3 {
            font-size: 18.72px;
        }
        h4 {
            font-size: 16px;
        }
        h5 {
            font-size: 13.28px;
        }
        h6 {
            font-size: 12px;
        }
        p {
            font-size: 14px;
            width: 100%;
            overflow: hidden;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
        }
        img {
            display: inline-block;
        }
    }
</style>
