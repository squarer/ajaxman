<template>
  <div class="shadow-1 res-wrapper">
    <q-tabs :refs="$refs" class=" white" default-tab="data">
      <q-tab name="data">
        Data
      </q-tab>
      <q-tab name="headers">
        Headers
      </q-tab>
    </q-tabs>
    <!-- Targets -->
    <div class="tab-target">
      <div ref="data"><pre>{{ response.data }}</pre></div>
      <div ref="headers"><pre>{{ response.headers }}</pre></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['response']
  }
</script>
