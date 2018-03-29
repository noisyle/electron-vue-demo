<template>
  <div class="wrapper">
    <div class="settings">
      <div class="tabs is-boxed">
        <ul>
          <li class="is-active">
            <router-link to="/home/settings">
              <span class="icon is-small"><font-awesome-icon icon="cog"/></span>
              <span>设置</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home/proxy">
              <span class="icon is-small"><font-awesome-icon icon="globe"/></span>
              <span>代理</span>
            </router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
    <webview class="webview" :src="getUrl" partition="persist:webviewsession"></webview>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { ipcRenderer } from 'electron'

  export default {
    name: 'home',
    data () {
      return {
        webview: undefined
      }
    },
    computed: {
      ...mapGetters([
        'getUrl'
      ])
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
