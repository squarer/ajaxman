<template>
  <div class="shadow-1 res-wrapper">
    <q-tabs :refs="$refs" class="white shadow-bottom" default-tab="data">
      <q-tab name="data">
        Data
      </q-tab>
      <q-tab name="headers">
        Headers
      </q-tab>
      <span v-if="response.status != ''" :class="'label shadow-1 text-white '+ labelColorClass">{{ response.status }} {{ response.statusText }}</span>
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
.tab-target {
  height: 500px;
  overflow-y: auto;
  padding-bottom: 0;
}

.tab-target::-webkit-scrollbar {
  background-color: #ccc;
  height: 8px;
  width: 8px;
}

.tab-target::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 5px;
  height: 30px;
}

span.label {
  position: absolute;
  right: 0;
  margin-right: 10px;
  height: 40px;
}

@media screen and (max-width: 920px) {
  span.label {
    position: initial;
    flex: 0 1 auto;
    margin-left: 10px;
  }
}

@media screen and (max-width: 560px) {
  span.label {
    margin-right: 0;
  }
}
</style>
