<template>
  <div>
    <Toolbar></Toolbar>
    <div style="padding:0 16px;">
      <div class="shadow-1 req-wrapper" style="margin-top:40px;">
        <div style="text-align: center;">
          <q-select class="select" type="list" v-model="method" :options="methods"></q-select>
          <input class="url" v-model="url" placeholder="https://enter.request.url">
          <button style="margin-bottom: 5px;" class="primary outline" @click="send()">send</button>
        </div>
        <q-tabs :refs="$refs" class="white" default-tab="body">
          <q-tab name="headers">
            Headers
          </q-tab>
          <q-tab name="body">
            Body
          </q-tab>
          <q-tab name="url-params">
            Url Params
          </q-tab>
          <q-tab name="auth">
            Auth
          </q-tab>
        </q-tabs>
        <!-- Targets -->
        <div class="tab-target">
          <div ref="headers">headers</div>
          <div ref="body">body</div>
          <div ref="url-params">url params</div>
          <div ref="auth">auth</div>
        </div>
      </div>
      <Response :response="response"></Response>
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import Response from './Response'
import request from '../helper/request'

export default {
  data () {
    return {
      url: '',
      method: 'get',
      methods: [
        {
          label: 'GET',
          value: 'get'
        },
        {
          label: 'POST',
          value: 'post'
        },
        {
          label: 'PUT',
          value: 'put'
        },
        {
          label: 'DELETE',
          value: 'delete'
        }
      ],
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
    Response
  },
  methods: {
    send () {
      request.send(this, this.method, this.url)
    }
  }
}
</script>

<style>
.req-wrapper, .res-wrapper {
  margin: 0 auto;
  max-width: 800px;
  min-height: 200px;
  padding: 20px 0;
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

input.url {
  max-width: 580px;
  padding-left: 10px;
  padding-bottom: 6px;
  margin-left: 20px;
  width: 100%;
}

.tab-target {
  padding: 20px;
}

pre {
  font-size: 13px;
  white-space: pre-wrap;
}

@media screen and (max-width: 840px) {
  input.url {
    max-width: 400px;
  }
}

@media screen and (max-width: 670px) {
  input.url {
    max-width: 300px;
  }
}

@media screen and (max-width: 560px) {
  input.url {
    max-width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
  .select {
    display: block;
  }
  button {
    margin-top: 30px;
    width: 100%;
  }
  .req-wrapper, .res-wrapper {
    padding: 20px 16px;
  }
  .tab-target {
    padding: 20px 0;
  }
}
</style>
