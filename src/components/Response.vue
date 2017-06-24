<template>
  <div class="shadow-1 res-wrapper">
    <span v-if="response.status != ''" :class="'label shadow-1 text-white '+ labelColorClass">{{ response.status }} {{ response.statusText }}</span>
    <q-tabs :refs="$refs" class="white" default-tab="data">
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
    props: ['response'],
    computed: {
      labelColorClass () {
        return this.response.status === 200 ? 'bg-primary' : 'bg-red'
      }
    }
  }
</script>

<style scoped>
span.label {
  float: right;
  margin-right: 10px;
  height: 40px;
}

@media screen and (max-width: 560px) {
  span.label {
    margin-right: 0;
  }
}
</style>
