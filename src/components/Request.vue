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
      <div ref="url-params">url params</div>
      <div ref="auth">auth</div>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>
