<template>
    <div>
      <button type="button" @click="add()">{{msg}}</button>
    </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: 'info',
  store,
    data() {
      return {
          msg: 'hello'
      }

    },
  methods: {
    add () {
      store.commit('increase')
    }
  }
}

</script>

<style scoped>

</style>
