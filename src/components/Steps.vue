<template>
  <div
    :steps="steps"
    class="kb-board">
    <table>
      <thead>
        <tr>
          <th v-for="item in steps" :key="item">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="item in steps" :key="item"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    steps: {
      type: Array,
      default: ()=>({})
    }
  },
  data() {
    return {
      stage_taks: ['backlog','todo','doing','done']
    }
  }
}
</script>

<style>
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
