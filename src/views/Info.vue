<template>
    <div>
      <button type="button" @click="add()">添加</button>
    </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: 'info',
  store,
  methods: {
    add () {
      store.commit('increase')
      console.log('h')
    }
  }
}

</script>

<style scoped>

</style>
