<template>
  <div class="input">
    <div class="title">
      <div>{{title}}</div>
      <span v-show="required">*</span>
    </div>
    <input :placeholder="placeholder" :type="type||'text'" :value="value" :ref="refName" @input="change"/>
  </div>
</template>
<script>
export default {
  name: "Input",
  props:['placeholder', 'title', 'type', 'refName', 'value', 'required'],
  watch: {
    refName: {
      immediate: true,
      handler(val) {
        if(val && val !=='') {
          let refsName = this.refName
          this.$nextTick(function(){
            this.$refs[refsName].focus()
            this.$emit('clean')
          })
        }
      }
    }
  },
  methods: {
    change(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>
<style>
.input {
  display: flex;
  padding: 5px;
}
.title {
  display: flex;
  margin-right: 10px;
}
span {
  color: red;
}
</style>