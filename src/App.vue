<template>
  <div id="app">
    <div>
      <h1>Kanban-Board Vue.js</h1>
    </div>
    <div class="row kanban-steps">
      <column
        v-for="(step, index) in steps"
        :key="index"
        :col-name="step"
        :tasks="taskList">
      </column>
    </div>
    <div class="row">
      <div class="add-tasks">
        <label for="task-name">Nome da tarefa</label>
        <input
          v-model="task.name"
          type="text"
          id="task-name"
          name="name"
        >
        <label for="task-description">Descreva a tarefa</label>
        <textarea
          v-model="task.description"
          rows="5"
          id="task-description"></textarea>
        <input
          type="button"
          value="Criar"
          @click="addTask"
        >
      </div>
      <!-- <CreateTask /> -->
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
      steps: ['backlog','todo','doing','done'],
      taskList: [{
          name: 'Comprar ingredientes principais',
          description: 'Ir ao açougue e comprar carne, linguiça e asinhas de frango',
          step: 'backlog'
        },
        {
          name: 'Preparar o molho',
          description: 'Preparar o molho com base nas informações encontradas no livro de receitas da vovó',
          step: 'doing'
        },
        {
          name: 'Bebidas',
          description: 'Passar na distribuidora de bebidas e comprar refrigerante',
          step: 'done'
        }],
        task: {
          name: '',
          description: '',
          step: 'backlog'
        }
    }
  },
  methods: {
    addTask() {
      let obj = new Object()
      obj.name = this.task.name
      obj.description = this.task.description
      obj.step = this.task.step
      this.taskList.push(obj)
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
