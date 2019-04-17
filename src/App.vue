<template>
  <div id="app">
    <div>
      <h1>Kanban-Board Vue.js</h1>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: center">
      <column
        v-for="(step, index) in steps"
        :key="index"
        :title="step"
        :step="index">
      </column>
    </div>
  </div>
</template>

<script>
import { Card, Column } from './components'

export default {
  name: 'app',
  components: {
    Card,
    Column
  },
  data() {
    return {
      steps: ['backlog','todo','doing','homolog','done']
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.kb-board {
  display: flex;
  flex-direction: column;
  justify-content: center
}

table {
  background-color: bisque;
  align-self: center;
}

td {
  border: 1px solid black;
}

table > thead > tr > th {
  background-color: bisque;
  min-width: 10em;
}

table > tbody {
  height: 25em;
}
</style>
