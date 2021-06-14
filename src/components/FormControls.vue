<template>
  <teleport to="#modals">
    <transition
      name="fade"
      enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <Modals v-if="showModal" @close="toggleModal">
        <template #header>
          <h1>Uwaga !!!</h1>
        </template>
        <template #body>
          <p>Formularz nie jest jescze gotowy, proszę o cierpliwość!</p>
        </template>
      </Modals>
    </transition>
  </teleport>

  <form @submit.prevent="toggleModal">
    <div class="form-panel">
      <input
        type="text"
        v-model="userName"
        placeholder="Imię"
        required
        class="form-panel__input"
      />
      <input
        type="email"
        v-model="userEmail"
        required
        placeholder="example@mail.com"
        class="form-panel__input"
      />
      <textarea
        v-model="messageFromUser"
        class="form-panel__textarea"
        cols="40"
        rows="15"
        required
      ></textarea>
      <button class="form-panel__btn" type="submit">Wyślij wiadomość</button>
    </div>
  </form>
</template>

<script>
import Modals from "./Modals";
export default {
  components: {
    Modals,
  },
  data() {
    return {
      userName: "",
      userEmail: "",
      messageFromUser: "",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      return (this.showModal = !this.showModal);
    },
  },
};
</script>

<style lang="scss">
.form-panel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  &__input,
  &__textarea {
    width: 100%;
    border: 1px solid $White;
    padding: $main-spacing;
    margin: $main-spacing / 2;
    background: transparent;
    color: $White;
    outline: none;

    &:focus {
      border-color: $Blue-Bell;
    }
  }

  &__btn {
    width: 100%;
    max-width: 300px;
    background: $Medium-Slate-Blue;
    cursor: pointer;
    letter-spacing: 2px;
    border: none;
    outline: none;
    color: $White;
    text-transform: uppercase;
    font-size: 1rem;
    padding: $main-spacing;
  }
}
</style>
