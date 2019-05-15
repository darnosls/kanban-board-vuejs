<template>
  <div id="app">
    <div>
      <h1>Kanban-Board Vue.js</h1>
    </div>
    <div class="row kanban-steps">
      <column
        v-for="(step, index) in steps"
        :key="index"
        :col-name="step">
      </column>
    </div>
    <div class="row">
      <CreateTask />
    </div>
  </div>
</template>

<script>
import { Column, CreateTask } from './components'

export default {
  name: 'app',
  components: {
    Column,
    CreateTask
  },
  data() {
    return {
      steps: ['backlog','todo','doing','done']
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

.kanban-steps {
  margin-bottom: 3em;
}

.row {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
