<template>
  <div style="display: flex; flex-flow: column; align-items: center">
  <el-tabs type="card" @tab-click="handleClick" style="width: 50%">
    <el-tab-pane label="入力">
      <el-card>
      <el-form>
        <el-form-item style="margin: 0" label="期限" />
        <el-input v-model="date" type="date"/>
      </el-form>
      <el-form style="margin-bottom: 2vh">
        <el-form-item style="margin: 0" label="タスク" />
        <el-input v-model="text" />
      </el-form>
      <el-button type="primary" @click="setItems(text, date); CHANGE_INPUT({date: '', text: ''})">{{button}}</el-button>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="タスク">
      <el-card>
        <el-table
          :data="todos"
          style="width: 100%">
          <el-table-column
            prop="text"
            label="Task">
          </el-table-column>
          <el-table-column
            prop="date"
            label="Date"
            width="180">
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
  </el-tabs>
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
      todos: []
    }
  },
  mounted () {
    const config = {
      apiKey: "AIzaSyBXEzRsVHyEzfquJb8riDoOjjBFsfzgelA",
      authDomain: "vueapp-95ce4.firebaseapp.com",
      databaseURL: "https://vueapp-95ce4.firebaseio.com",
      projectId: "vueapp-95ce4",
      storageBucket: "vueapp-95ce4.appspot.com",
      messagingSenderId: "486312547143"
    };
    firebase.initializeApp(config);
    const starCountRef = firebase.database().ref('todos');
    starCountRef.on('value', (snapshot) => {
      this.$store.state.todos = JSON.parse(snapshot.child('/').val()) || [];
    });
  },
  methods: {
    ...mapActions([
      types.ADD_TASK,
      types.CHANGE_INPUT,
    ]),
    writeUserData(text, date) {
      this.$store.state.todos.push({text, date});
      firebase.database().ref('todos').set(JSON.stringify(this.$store.state.todos));
    }
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
