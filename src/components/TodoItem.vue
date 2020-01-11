<template>
    <li @click="del">{{content}}</li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['content', 'index'],
    methods: {
      del () {
        this.$emit('zidel', this.index)
      }
    }
  }
</script>

<style scoped>

</style>
