<template>
  <div>
    {{ updateParams }}
    <div class="params-wrapper" v-for="(param, index) in params" :key="index">
      <input @keyup="updateUrl(index, $event)" class="params-key" :placeholder="isLast(index) ? 'new key' : null" v-model="param.key">
      <input @keyup="updateUrl(index, $event)" class="params-value" :placeholder="isLast(index) ? 'value' : null" v-model="param.value">
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
      if (params.length > 0) {
        let lastParam = params[params.length - 1]
        if (lastParam.key !== '' || lastParam.value !== '') {
          params.push({ key: '', value: '' })
        }
      }
      else {
        params.push({ key: '', value: '' })
      }

      this.params = params
    }
  },
  methods: {
    updateUrl (index, event = null) {
      let url = this.url
      url = url.substring(0, url.indexOf('?') + 1) + this.getQueryStringFromParamsArray(this.params)

      this.setUrl(url)
      if (event && this.isLast(index)) {
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
