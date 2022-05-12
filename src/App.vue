<template>
  <div>
    <loading-full v-model="isLoading"></loading-full>

    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <input-app
          v-model="testeInput"
          label="Input Label"
          :rule="(value) => !!value || 'Campo Obrigatório'"
        ></input-app>

        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import LoadingFull from "@/components/LoadingFull";
import { useLoading } from "@/stores/loading";

// import InputApp from "@/components/InputApp";

export default {
  name: "LayoutDefault",

  components: {
    LoadingFull,
  },

  setup() {
    const loadingStore = useLoading();
    const { isLoading } = storeToRefs(loadingStore);

    return {
      isLoading,
      leftDrawerOpen: ref(false),
      testeInput: ref(""),
    };
  },
};
</script>
