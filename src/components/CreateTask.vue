<template>
  <div class="add-tasks">
    <label for="task-name">Nome da tarefa</label>
    <input
      type="text"
      id="task-name"
      name="name"
    >
    <label for="task-description">Descreva a tarefa</label>
    <textarea
      rows="5"
      id="task-description"></textarea>
    <input
      type="button"
      value="Criar"
    >
  </div>
</template>

<style>
.add-tasks {
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center
}
</style>

