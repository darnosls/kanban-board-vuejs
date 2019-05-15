<template>
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
</template>

<script>
export default {
  data() {
    return {
      task: {
          name: '',
          description: '',
          step: 'backlog'
        }
      }
  },
  methods: {
    addTask(){
      let payload = new Object()
      payload.name = this.task.name
      payload.description = this.task.description
      payload.step = this.task.step

      this.$store.dispatch('createTask', { payload })
    }
  }
}
</script>

<style>
.add-tasks {
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center
}
</style>

