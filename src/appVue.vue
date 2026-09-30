<template>
  <div style="margin-top: 20px; padding: 20px; border: 2px solid green;">
    <h2>Parte em Vue</h2>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Nova tarefa Vue..." />
    <button @click="addTask">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const newTask = ref("")
const addTask = () => {
  alert("Tarefa Vue: " + newTask.value)
  newTask.value = ""
}
</script>
<template>
  <div class="todo-container vue">
    <h2>📗 Lista Vue</h2>
    <div class="input-box">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Nova tarefa..." />
      <button @click="addTask">Add</button>
    </div>
    <ul>
      <li v-for="(t, i) in tasks" :key="i">
        {{ t }} <span @click="removeTask(i)">❌</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const newTask = ref("")
const tasks = ref([])

const addTask = () => {
  if (!newTask.value.trim()) return
  tasks.value.push(newTask.value)
  newTask.value = ""
}
const removeTask = (i) => {
  tasks.value.splice(i, 1)
}
</script>