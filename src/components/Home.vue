<template>
  <div style="margin-bottom: 50px;">
    <Toolbar></Toolbar>
    <div style="padding:0 16px;">
      <Request v-model="request" :send="send"></Request>
      <Response :response="response"></Response>
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import Request from './Request'
import Response from './Response'
import request from '../helper/request'

export default {
  data () {
    return {
      request: {
        url: 'https://eits-comic.ga:1337/catalog?limit=3',
        method: 'get'
      },
      response: {
        status: '',
        statusText: '',
        data: '',
        headers: ''
      }
    }
  },
  components: {
    Toolbar,
    Request,
    Response
  },
  methods: {
    send () {
      request.send(this, this.request.method, this.request.url)
    }
  }
}
</script>

<style>
.req-wrapper, .res-wrapper {
  background-color: #fff;
  margin: 0 auto;
  max-width: 800px;
  min-height: 200px;
  padding-top: 20px;
  margin-bottom: 20px;
}

.req-wrapper > .q-tabs, .res-wrapper > .q-tabs {
  padding: 0;
}

.q-tab {
  text-transform: none;
  font-size: 12px;
  padding: 6px 30px;
}

.tab-target {
  padding: 20px;
}

pre {
  font-size: 13px;
  white-space: pre-wrap;
}

.item {
  height: 36px;
  font-size: 13px;
}

.item > .item-content {
  padding: 8px 0;
}

.shadow-bottom {
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.24);
}

@media screen and (max-width: 560px) {
  .req-wrapper, .res-wrapper {
    padding: 20px 16px;
  }
  .tab-target {
    padding: 20px 0;
  }
}
</style>
