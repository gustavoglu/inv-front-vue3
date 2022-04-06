<template>
  <div v-if="modelValue" class="loading-container">
    <q-circular-progress
      color="white"
      size="50px"
      indeterminate
    ></q-circular-progress>
  </div>
</template>

<script>
export default {
  props: { modelValue: Boolean },
};
</script>

<style >
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>