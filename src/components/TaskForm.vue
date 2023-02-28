<template>
    <div>
        <h1> Create task </h1>
        <form @submit.prevent="addTask">
            <label for="taskName"> Name </label>
            <input type="taskName" id="taskName" v-model="taskName" required>
            <br />
            <label for="category"> Category </label>
            <select name="category" id="category" v-model="category"> 
                    <option value="Important">Important</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Quick">Quick</option>
            </select>
            <br />
            <button type="submit"> Create </button>
        </form>
    </div>
  </template>
  
  <script>
//   import axios from 'axios';
  
  export default {
    data() {
      return {
        message: '',
      };
    },
    methods: {
        async addTask() {
    try {
        const taskName = this.taskName;
        const category = this.category;
        console.log(taskName, category);
    } catch (error) {
        console.log(error);
    }
        }
    }
  };
  </script>
  