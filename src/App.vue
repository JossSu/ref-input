<template>
  <div id="app">
    <Input title="ac" :refName="refForm.ac" v-model="form.ac" required="true" @clean="clean">
      <span slot="errMsg" v-if="showErrMsg.ac">規範 6-12位數，英數字</span>
    </Input>
    <Input title="pw" v-model="form.pw" required="true" @clean="clean" @change="validate">
      <span slot="errMsg" v-if="showErrMsg.pw">規範 4位數，英數字</span>
    </Input>
    <Input title="captcha" :refName="refForm.captcha" v-model="form.captcha" required="true" @clean="clean" @change="validate">
      <span slot="errMsg" v-if="showErrMsg.captcha">規範 4位數，英數字</span>
    </Input>
    <button @click="submit">Submit</button>
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
  watch: {
    form: {
      deep: true,
      handler() {
        this.validate()
      }
    }
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
        } else {
          this.showErrMsg[key] = false
        }
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
    },
    submit() {
      this.validate()
      this.handleRefName()
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
