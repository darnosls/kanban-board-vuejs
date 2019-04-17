<template>
  <div
    :title="title"
    :step="step"
    class="column">
    <div class="h-column">
      <h2>{{ title }}</h2>
    </div>

    <div class="c-body">
      <slot />
      <card>
        <h4>Tarefa</h4>
        <p>Tarefa em {{ step }}</p>
      </card>
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
    title: {
      type: String,
      default: ""
    },
    step: {
      type: String,
      default: "backlog"
    },
    cards: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      tasks: {
        task_1: {
          name: 'Tarefa 1',
          description: 'Primeira tarefa',
          step: 'todo'
        },
        task_2: {
          name: 'Tarefa 2',
          description: 'Segunda tarefa',
          step: 'Backlog'
        }
      }
    }
  }
};
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
