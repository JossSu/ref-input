<template>
  <div id="app">
    <Input title="ac" :refName="refForm.ac" v-model="form.ac" required="true" @clean="clean">
      <span slot="errMsg" v-if="showErrMsg.ac">規範 6-12位數，英數字</span>
    </Input>
    <Input title="pw" v-model="form.pw" required="true" @clean="clean">
      <span slot="errMsg" v-if="showErrMsg.pw">規範 6-12位數，英數字</span>
    </Input>
    <Input title="captcha" :refName="refForm.captcha" v-model="form.captcha" required="true" @clean="clean">
      <span slot="errMsg" v-if="showErrMsg.captcha">規範 6-12位數，英數字</span>
    </Input>
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
        // pw:'',
        captcha:''
      },
      form: {
        ac:'',
        pw:'',
        captcha:''
      },
      showErrMsg: {
        ac: false,
        pw: false,
        captcha: false
      }
    }
  },
  methods: {
    validate() {
      for (const key in this.form) {
        if (!utilTool.checkStr(this.form[key], key)) {
          this.showErrMsg[key] = true
        }
        this.handleRefName()
      }
    },
    clean() {
      let refForm = this.refForm
      Object.keys(refForm).forEach(function(key){ refForm[key] = "" })
    },
    handleRefName() {
      for(const key in this.refForm) {
        if (this.showErrMsg[key]) {
          this.refForm[key] = key
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
span {
  font-size: 8px;
  margin-left: 10px;
}
</style>
