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
  const { ipcRenderer } = require('electron')

  export default {
    name: 'home',
    data () {
      return {
        url: 'https://www.baidu.com/',
        webview: undefined
      }
    },
    methods: {
      start () {
        this.webview.loadURL(this.url)
      }
    },
    mounted () {
      this.webview = document.querySelector('.webview')
      this.webview.addEventListener('dom-ready', () => {
        ipcRenderer.send('webview-loaded')
      })
    }
  }

  ipcRenderer.on('proxy-changed', (event, arg) => {
    console.log('proxy-changed')
  })
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
  border-top: 1px solid #bbb;
}
.wrapper .settings {
  width: 300px;
  border-right: 1px solid #bbb;
}
.wrapper .webview {
  flex: auto;
}
</style>
