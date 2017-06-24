<template>
  <div class="shadow-1 req-wrapper" style="margin-top:40px;">
    <div style="text-align: center;">
      <q-select class="select" type="list" v-model="value.method" :options="methods"></q-select>
      <input @keyup.enter="send()" class="url" v-model="value.url" placeholder="https://enter.request.url">
      <button style="margin-bottom: 5px;" class="primary outline" @click="send()">send</button>
    </div>
    <q-tabs :refs="$refs" class="white shadow-bottom" default-tab="body">
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
      <div ref="url-params">
        <UrlParams :url="value.url" :setUrl="setUrl"></UrlParams>
      </div>
      <div ref="auth">auth</div>
    </div>
  </div>
</template>

<script>
  import UrlParams from './UrlParams'

  export default {
    props: ['value', 'send'],
    data () {
      return {
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
        ]
      }
    },
    methods: {
      setUrl (url) {
        this.value.url = url
      }
    },
    components: {
      UrlParams
    }
  }
</script>

<style scoped>
input.url {
  max-width: 580px;
  padding-left: 10px;
  padding-bottom: 6px;
  margin-left: 20px;
  width: 100%;
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
}
</style>
