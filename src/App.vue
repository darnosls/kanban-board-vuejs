<template>
  <div id="app">
    <div>
      <h1>Kanban-Board Vue.js</h1>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: center">
      <column
        v-for="(step, index) in steps"
        :key="index"
        :col-name="step"
        :tasks="taskList">
      </column>
    </div>
  </div>
</template>

<script>
import { Column } from './components'

export default {
  name: 'app',
  components: {
    Column
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
          description: 'Preparar o molho com base nas informações encotradas no livro de receitas da vovó',
          step: 'doing'
        },
        {
          name: 'Bebidas',
          description: 'Passar na distribuidora de bebidas e comprar refrigerante',
          step: 'done'
        }]
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
