<template>
  <div id="app">
    <div>
      <h1>Kanban-Board Vue.js</h1>
    </div>
    <div class="kb-board">
      <table>
        <thead>
          <tr>
            <th>Backlog</th>
            <th>To Do</th>
            <th>Doing</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
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
  display: flex;
  flex-direction: column;
  justify-content: center
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
