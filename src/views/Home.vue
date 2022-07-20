<template>
  <h3>{{content}}</h3>
</template>

<script lang="ts">
interface Message{
  content: string,
  type: string
}

import {defineComponent, toRefs} from "vue";
export default defineComponent({
  name: "Home",
  setup(){
    const message:Message = {
      content: "hello,vue3-Webpack-template-ts",
      type: "info"
    }
    return {
      ...toRefs(message)
    }
  }
})
</script>

<style scoped>
h3{
  padding: 20px 0;
  text-align: center;
}
</style>
