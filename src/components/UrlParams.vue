<template>
  <div>
    {{ getParams }}
    <div class="params-wrapper" v-for="(param, index) in params" :key="param">
      <input @keyup="isLast(index) ? addParams($event) : null" class="params-key" :placeholder="isLast(index) ? 'new key' : null" v-model="param.key">
      <input @keyup="isLast(index) ? addParams($event) : null" class="params-value" :placeholder="isLast(index) ? 'value' : null" v-model="param.value">
      <button :style="isLast(index) ? { visibility: 'hidden' } : null" @click="remove(index)" tabindex="-1">
        <i>remove_circle_outline</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data () {
    return {
      params: [{ key: '', value: '' }]
    }
  },
  computed: {
    getParams () {
      let params = (new URL(this.url)).searchParams
      let newParams = []
      for (let item of params) {
        newParams.push({ key: item[0], value: item[1] })
      }
      if (newParams.length > 0) {
        this.params = newParams
      }
    }
  },
  methods: {
    isLast (index) {
      return index + 1 === this.params.length
    },
    addParams (e) {
      if (e.target.value) {
        this.params.push({ key: '', value: '' })
      }
    },
    remove (index) {
      this.params.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.params-wrapper {
  display: flex;
}

.params-key {
  flex-grow: 1;
  margin-right: 15px;
}

.params-value {
  flex-grow: 2;
}

.params-wrapper > button {
  padding-right: 0.5em;
}

@media screen and (max-width: 560px) {
  .params-key, .params-value {
    width: 75px;
  }
}
</style>
