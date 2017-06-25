<template>
  <div>
    <Toolbar></Toolbar>
    <div class="shadow-1 req-wrapper" style="margin-top:40px;">
      <q-select type="list" :placeholder="method" v-model="method" :options="methods"></q-select>
      <input class="url" :value="url" placeholder="https://enter.request.url">
      <button style="margin-bottom: 5px;" class="primary outline">send</button>
      <q-tabs :refs="$refs" class="justified white" default-tab="body">
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
      <div style="padding: 20px;">
        <div ref="headers">headers</div>
        <div ref="body">body</div>
        <div ref="url-params">url params</div>
        <div ref="auth">auth</div>
      </div>
    </div>
    <div class="shadow-1 res-wrapper">
      Response
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar'

export default {
  data () {
    return {
      url: '',
      method: 'GET',
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
  components: {
    Toolbar
  }
}
</script>


<style scoped>
.req-wrapper, .res-wrapper {
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
  min-height: 200px;
  padding: 20px 0;
  margin-bottom: 20px;
}

.req-wrapper > .q-tabs {
  padding: 0;
}

.q-tab {
  text-transform: none;
  font-size: 12px;
}

.url {
  max-width: 580px;
  padding-left: 10px;
  padding-bottom: 6px;
  margin-left: 20px;
  width: 100%;
}

</style>
