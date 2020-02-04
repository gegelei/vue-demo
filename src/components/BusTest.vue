<template>
    <div @click="handleBus">{{newContent}}</div>
</template>

<script>
  export default {
      props: ['content'],
      data: function() {
          return {
              msg: 66,
              newContent: this.content,
          }
      },
    name: 'BusTest',
    methods: {
        handleBus() {
            this.bus.$emit('changeBus',this.content);
        }
    },
      mounted: function () {
          var self = this;
          this.bus.$on('changeBus', function(val) {
              self.newContent = val;
          });
      }
  }
</script>


