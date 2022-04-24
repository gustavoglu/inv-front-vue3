<template>
  <div class="container-principal">
    <q-card>
      <q-card-section>
        <div class="inputs">
          <q-input square outlined v-model="name" label="Name" />
          <q-input square type="email" outlined v-model="email" label="Email" />
          <q-input
            square
            outlined
            v-model="password"
            type="password"
            label="Password"
          />
          <q-input
            square
            outlined
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
          />
          <q-btn color="primary" @click="sendRegister">Register</q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { register } from "../services/authService";
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    async function sendRegister() {
      const res = await register(
        name.value,
        email.value,
        password.value,
        confirmPassword.value
      );
      if (res) this.$router.push({ name: "Login" });
    }

    return { name, email, password, confirmPassword, sendRegister };
  },
};
</script>

<style>
.container-principal {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}
</style>