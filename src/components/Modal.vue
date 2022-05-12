<template>
  <transition name="modal">
    <div v-if="modelValue" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2 class="title-modal">{{ title }}</h2>
            <button
              type="button"
              class="modal-close"
              @click="$emit('update:modelValue', false)"
            >
              <img src="../assets/close.svg" alt="Fechar Modal" />
            </button>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer">
            <button class="modal-button" @click="$emit('confirm')">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
    title: String,
  },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 576px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.title-modal {
  color: var(--text-tile);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.modal-body {
  margin: 20px 0;
}

.modal-button {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--purple-light);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: filter 0.2s;
  font-weight: 600;

  &:hover {
    filter: brightness(1.1);
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-close {
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  margin-bottom: 25px;

  &:hover {
    filter: brightness(0.8);
  }
}
</style>