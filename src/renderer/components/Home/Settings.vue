<template>
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
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        url: ''
      }
    },
    computed: {
      ...mapGetters([
        'getUrl'
      ])
    },
    methods: {
      ...mapMutations([
        'setUrl'
      ]),
      start () {
        this.webview.loadURL(this.getUrl)
      }
    },
    watch: {
      url (newUrl, oldUrl) {
        this.setUrl(newUrl)
      }
    },
    mounted () {
      this.url = this.getUrl
    }
  }
</script>

<style scoped>
.container {
  width: 100%;
  padding: 1rem;
}
</style>
