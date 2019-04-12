<template>
  <div>
    <HeadComp></HeadComp>
    <div>
      <span>期限</span>
      <textarea v-model="date"></textarea>
    </div>
    <div>
      <span>タスク</span>
      <textarea v-model="text"></textarea>
    </div>
    <button @click="ADD_TASK(`タスク：${text}　期限：${date}`); CHANGE_INPUT({date: '', text: ''})">{{button}}</button>
    <StringComp></StringComp>
    <div>
      <div v-for="item in items">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'
import StringComp from '@/components/modules/StringComp'
import { mapActions, mapState } from 'vuex'
import * as types from '../store/mutation-types';

export default {
  name: 'HelloWorld',
  data () {
    return {
      button: '登録',
    }
  },
  methods: {
    ...mapActions([
      types.ADD_TASK,
      types.CHANGE_INPUT,
    ]),
  },

  components: {
    HeadComp,
    TextareaComp,
    StringComp,
  },
  computed: {
    ...mapState(['items', 'inputTitle']),
    text: {
      get () {
        return this.$store.state.inputTitle.text
      },
      set (value) {
        this.$store.commit('CHANGE_INPUT', {data: {text: value, date: this.$store.state.inputTitle.date}});
      }
      },
    date: {
      get () {
        return this.$store.state.inputTitle.date
      },
      set (value) {
        this.$store.commit('CHANGE_INPUT', {data: {text: this.$store.state.inputTitle.text, date: value}});
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
