<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="modal__header">
        <slot name="header">
          <h2>Hello am Happy Modal</h2>
        </slot>
      </div>
      <div class="modal__body">
        <slot name="body">
          <p>Hmmm where are the other modals</p>
        </slot>
        <button @click="closeModal" class="button">Rozumiem</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      return this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.modal {
  width: 400px;
  padding: $main-spacing * 3;
  margin: 100px auto;
  background: $White;
}

.backdrop {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.button {
  width: 100%;
  height: 40px;
  margin: 20px 0;
  border: 1px solid $Blue-Bell;
}
</style>
