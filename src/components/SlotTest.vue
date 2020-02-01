<template>
    <div>
        <slot name="header"></slot>
        <div>{{msg}}</div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
  export default {
      data: function() {
          return {
                msg: 66
          }
      },
    name: 'SlotTest',
    methods: {

    }
  }
</script>


