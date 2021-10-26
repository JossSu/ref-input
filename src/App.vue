<template>
  <div id="app">
    <Input title="ac" :refName="refForm.ac" v-model="form.ac" required="true"/>
    <Input title="pw" :refName="refForm.pw" v-model="form.pw" required="true"/>
    <Input title="captcha" :refName="refForm.captcha" v-model="form.captcha" required="true"/>
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
        // console.log(this.form[key])
        if (!utilTool.checkStr(this.form[key], key)) {
          this.refForm[key] = key
          console.log(this.refForm[key])
          break;
        }
      }
    }
  }
}
</script>

<style>
</style>
