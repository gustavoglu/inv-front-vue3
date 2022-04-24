<template>
  <div class="container-principal">
    <div class="inputs">
      <q-input square type="email" outlined v-model="email" label="Email" />
      <q-input
        square
        outlined
        v-model="password"
        type="password"
        label="Password"
      />

      <q-btn color="primary" @click="sendSignIn">Sign In</q-btn>
    </div>
  </div>
</template>

<script>
import { signIn } from "../services/authService";
import { ref } from "vue";
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const email = ref("");
    const password = ref("");

    async function sendSignIn() {
      const res = await signIn(email.value, password.value);
      if (res) router.push({ name: "Home" });
    }

    return { email, password, sendSignIn };
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