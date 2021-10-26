<template>
  <div id="app">
    <Input title="ac" :refName="refForm.ac" v-model="form.ac" required="true" @clean="clean"/>
    <Input title="pw" :refName="refForm.pw" v-model="form.pw" required="true" @clean="clean"/>
    <Input title="captcha" :refName="refForm.captcha" v-model="form.captcha" required="true" @clean="clean"/>
    <button @click="validate">Submit</button>
  </div>
</template>

<script>
import Input from './components/Input'
import utilTool from '../common/js/common.js'

export default {
  name: 'App',
  components: {
    Input
  },
  data() {
    return {
      refForm: {
        ac:'',
        pw:'',
        captcha:''
      },
      form: {
        ac:'',
        pw:'',
        captcha:''
      }
    }
  },
  methods: {
    validate() {
      for (const key in this.form) {
        if (!utilTool.checkStr(this.form[key], key)) {
          this.refForm[key] = key
          break;
        }
      }
    },
    clean() {
      let refForm = this.refForm
      Object.keys(refForm).forEach(function(key){ refForm[key] = "" })
    }
  }
}
</script>

<style>
</style>
