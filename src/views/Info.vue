<template>
    <div>
        <button type="button" @click="add()">添加</button>

        <div><h1>TodoList</h1></div>
        <input v-model="inputValue"/>
        <div>
        <button @click="buttonclick" v-if="show">测试{{text}}</button>
            <div v-for="(item,index) of Newlist">{{item.name}}--{{index}}</div>
        </div>
        <button @click="tianjia">添加</button>
        <div>
            <!--组件多种写法-->
            <!--第一种-->
            <!-- <todo-item v-for="(item,index) in list" :key="item" :content="item" :index="index"-->
            <!--@zidel="delMethod"></todo-item>-->
            <!--第二种-->
            <div is="todo-item" v-for="(item,index) in list" :key="item" :content="item" :index="index"
                 @zidel="delMethod"></div>
        </div>
        ----------------------------------
        <!--父子组件数据传递demo1,使用ref完成计数器-->
<!--        <div>-->
<!--            <counter @change="makeCount" ref="count1"></counter>-->
<!--            <counter @change="makeCount" ref="count2"></counter>-->
<!--            <div>{{total}}</div>-->
<!--        </div>-->
        <!--父子组件数据传递demo2,单向数据流测试和第二种方法实现计数器-->
        <div>
            <counter :content="1" @change1="handleclick"></counter>
            <counter :content="1" @change1="handleclick"></counter>
            <div>{{total1}}</div>
        </div>
        -------------------------------------------------------
        <!--   插槽slot   study  -->
        <div>
            <!--直接调用父组件的原生事件-->
            <slotTest @click.native="handletest">
            <!--使用插槽的方法向子组件传递大量数据，保证代码整洁性-->
            <!--    加上slot属性后，子组件中可分开使用插槽   -->
                <div slot="header"> header </div>
                <div slot="footer"> footer </div>
            </slotTest>

        </div>
    </div>
</template>
<script>
  import store from '@/store/index.js'
  import TodoItem from '../components/TodoItem'
  import Counter from '../components/Counter'
  import SlotTest from '../components/SlotTest'

  export default {
    name: 'info',
    store,
    components: {
        'todo-item': TodoItem,
        'counter': Counter,
        'slotTest': SlotTest,

    },
    data () {
      return {
        inputValue: '',
          list: [],
          Newlist: [{name:'dalei'},{name:'sea'},{name:'dong'}],
          text: '',
          text1: 1,
          text2: 2,
          show: true,
          total: 0,
          total1: 2,
      }
    },

    methods: {
        buttonclick() {
            this.text = this.text1 + this.text2;
            // this.show = !this.show;
            this.Newlist.sort();
        },
      add () {
        store.commit('increase')
        console.log('h')
      },
      tianjia () {
        this.list.push(this.inputValue)
          console.log(this.list);
        this.inputValue = ''
      },
      delMethod (index) {
        this.list.splice(index, 1)
      },
        makeCount () {
            this.total = this.$refs.count1.number + this.$refs.count2.number;
        },
        handleclick (value) {
            this.total1 += value;
        },
        handletest () {
            ;
        },
    }
  }

</script>

<style scoped>

</style>
