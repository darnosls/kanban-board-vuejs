<template>
  <div
    :col-name="colName"
    class="column">
    <div class="h-column">
      <h2>{{ colName }}</h2>
    </div>

    <div class="c-body">
      <div v-for="(task, index) in taskList" :key="index">
        <card v-if="task.step == colName"
          @click.native="moveTask"
        >
          <h4>{{task.name}}</h4>
          <p>{{ task.description }}</p>
        </card>
      </div>
    </div>
  </div>
</template>
<script>

import { Card } from '@/components'
export default {
  components: {
    Card
  },
  props: {
    colName: {
      type: String,
      default: ""
    },
    tasks: {
      type: Array,
      default: () => ({})
    }
  },
  computed: {
    taskList(){
      return this.$store.getters.task;
    }
  },
  methods: {
    moveTask(){
      // this.$store.dispatch('moveTask', { payload: })
      //   .then(resp => {
      //     console.log(resp)
      //   })
    }
  }
}
</script>
<style>
.h-column {
  background-color: rgb(224, 125, 125);
  border: solid 1px;
}
.column {
  min-width: 10em;
  min-height: 25em;
  margin: 0.1em;
  background-color: rgb(204, 142, 142);
}
</style>
