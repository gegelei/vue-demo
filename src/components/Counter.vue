<template>
<!--    <div @click="add">{{number}}</div>-->
    <div @click="add1">{{NewContent}}</div>
</template>

<script>
  export default {
      //组件参数校验
      props: {
          //方法一，以数组形式，下例表示字符串和数组都可以
          // content: [String, Number],
          //方法二，以对象格式
          content: {
              type: [String, Number],   //类型
              required: false,  //是否必传
              //借助验证器
              // validator: function (val) {
              //     return (val.length < 3)
              // }
          }
      },
      data: function() {
          return {
              step: 1,
              number: 0,
              NewContent: this.content,
          }
      },
    name: 'Counter',
    methods: {
      add () {
          this.$data.number++;
          this.$emit('change');
      },
        add1 () {
            //直接操作父组件传的content会报错，在子组件中复制一份即可操作
            this.$data.NewContent += this.$data.step;
            this.$emit('change1', this.$data.step);
        },
    }
  }
</script>

<style scoped>

</style>
