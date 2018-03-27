<template>
  <div class="wrapper">
    <div class="settings">
      <div class="container">
        <div class="field">
          <label class="label">输入网址</label>
          <div class="control">
            <textarea class="textarea" placeholder="http(s)://..." v-model="url"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="start()">开始</button>
          </div>
        </div>
      </div>
    </div>
    <webview class="webview" src="https://www.baidu.com/" partition="persist:webviewsession"></webview>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        url: 'https://www.baidu.com/'
      }
    },
    methods: {
      start () {
        const webview = document.querySelector('.webview')
        webview.loadURL(this.url)
      }
    }
  }
</script>

<style>
html {
  overflow: hidden;
}
.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.wrapper .settings {
  width: 300px;
  border-right: 1px solid #bbb;
}
.wrapper .webview {
  flex: auto;
}
</style>
