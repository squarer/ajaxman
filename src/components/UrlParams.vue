<template>
  <div>
    {{ updateParams }}
    <div class="params-wrapper" v-for="(param, index) in params" :key="index">
      <input @keyup="updateUrl(index)" class="params-key" :placeholder="isLast(index) ? 'new key' : null" v-model="param.key">
      <input @keyup="updateUrl(index)" class="params-value" :placeholder="isLast(index) ? 'value' : null" v-model="param.value">
      <button :style="isLast(index) ? { visibility: 'hidden' } : null" @click="remove(index)" tabindex="-1">
        <i>remove_circle_outline</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'setUrl'],
  data () {
    return {
      params: [{ key: '', value: '' }]
    }
  },
  computed: {
    updateParams () {
      let url = this.url
      let queryString = ''
      if (url.indexOf('?') !== -1) {
        queryString = url.substring(url.indexOf('?') + 1)
      }

      let params = this.getParamsArrayFromQueryString(queryString)
      if (!this.hasTrailingParams(params)) {
        params.push({ key: '', value: '' })
      }

      this.params = params
    }
  },
  methods: {
    updateUrl (index) {
      let url = this.url
      url = url.substring(0, url.indexOf('?') + 1) + this.getQueryStringFromParamsArray(this.params.slice(0))

      this.setUrl(url)
      if (this.isLast(index)) {
        this.addParams()
      }
    },
    isLast (index) {
      return index + 1 === this.params.length
    },
    addParams () {
      this.params.push({ key: '', value: '' })
    },
    remove (index) {
      this.params.splice(index, 1)
      this.updateUrl(index)
    },
    getQueryStringFromParamsArray (params) {
      if (this.hasTrailingParams(params)) {
        params.pop()
      }
      let queryString = ''
      for (let [index, param] of params.entries()) {
        if (index !== 0) {
          queryString += '&'
        }
        queryString += param.key + '=' + param.value
      }

      return queryString
    },
    getParamsArrayFromQueryString (queryString) {
      queryString = new URLSearchParams(queryString)
      let params = []
      for (let pair of queryString.entries()) {
        params.push({ key: pair[0], value: pair[1] })
      }

      return params
    },
    hasTrailingParams (array) {
      if (array.length === 0) {
        return false
      }
      let lastItem = array[array.length - 1]
      if (lastItem.key === '' && lastItem.value === '') {
        return true
      }
      return false
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
