<template>
    <div>
        <button type="button" @click="add()">添加</button>

        <div><h1>TodoList</h1></div>
        <input v-model="inputValue"/>
        <button @click="tianjia">添加</button>
        <ul>
            <todo-item v-for="(item,index) in list" :key="item" :content="item" :index="index"
                       @zidel="delMethod"></todo-item>
        </ul>
    </div>
</template>

<script>
  import store from '@/store/index.js'
  import TodoItem from '../components/TodoItem'

  export default {
    name: 'info',
    store,
    components: {
      'todo-item': TodoItem
    },
    data () {
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      add () {
        store.commit('increase')
        console.log('h')
      },
      tianjia () {
        this.list.push(this.inputValue)
        this.inputValue = ''
      },
      delMethod (index) {
        this.list.splice(index, 1)
      },
    }
  }

</script>

<style scoped>

</style>
