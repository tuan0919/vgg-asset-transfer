<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Login Page</h1>
          <v-form>
            <v-text-field label="Email" v-model="email" />
            <v-text-field label="Password" type="password" v-model="password" />
            <v-btn @click="login">Login</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log("Logging in with", this.email, this.password);
    },
  },
};
</script>
