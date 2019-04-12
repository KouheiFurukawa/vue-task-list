<template>
  <div>
    <textarea v-model="text" @change="CHANGE_INPUT(text)"></textarea>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import * as types from '../../store/mutation-types';
  export default {
    name: 'TextareaComp',
    data () {
      return {
        inputTitle: ''
      }
    },
    methods: {
      ...mapActions([
        types.CHANGE_INPUT,
      ]),
    },
    computed: {
      ...mapState(['inputTitle'])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
