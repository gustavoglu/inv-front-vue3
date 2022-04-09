<template>
  <div class="main">
    <label class="input-label">{{ label }}</label>
    <input
      v-bind="$attrs"
      v-model="value"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script>
import { useField } from "vee-validate";
export default {
  props: { modelValue: {}, label: String, rule: Function },
  setup(props) {
    const { errorMessage, value } = useField("modelValue", props.rule, {
      initialValue: props.modelValue,
    });

    return { value, errorMessage };
  },
};
</script>

<style>
.input-label {
}

.main {
  display: flex;
  flex-direction: column;
}

.error-message {
  color: red;
}
</style>