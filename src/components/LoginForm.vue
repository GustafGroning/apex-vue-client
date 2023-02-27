<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
        });
        const token = response.data.token;
        if (token) {
          // Save the token to localStorage or a cookie
          localStorage.setItem("token", token);
          this.$router.push("/homepage");
        } else {
          this.error = "Invalid email or password";
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
