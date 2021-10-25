<template>
  <div id="app">
    <Input title="ac" :ref="refForm.ac" v-model="form.ac"/>
    <Input title="pw" :ref="refForm.pw" v-model="form.pw"/>
    <Input title="captcha" :ref="refForm.captcha" v-model="form.captcha"/>
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
        console.log(this.form[key])
        if (!utilTool.checkStr(this.form[key], `${key}`)) {
          this.refForm[key] = key
        }
        return
      }
    }
  }
}
</script>

<style>
</style>
