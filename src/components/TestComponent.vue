<template>
    <div>
      <h1>Test Component</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        message: '',
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/protected', {
          withCredentials: true,
        });
        this.message = response.data;
      } catch (error) {
        console.error(error);
        this.message = 'Error retrieving message';
      }
    },
  };
  </script>
  