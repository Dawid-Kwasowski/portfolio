<template>
  <footer class="footer">
    <div class="contact">
      <p class="contact__info">
        <span class="contact__info--highlighted">Numer: </span>{{ phoneNumber }}
      </p>
      <p class="contact__info">
        <span class="contact__info--highlighted">Email: </span>{{ email }}
      </p>
      <div class="horizontal-line"></div>
      <p class="contact__info">
        <span class="contact__info--highlighted">Coded By: </span>{{ authorFullName }}
      </p>
    </div>
    <div class="form">
      <FormControls />
    </div>
  </footer>
</template>

<script>
import FormControls from "./FormControls.vue";
export default {
  components: {
    FormControls,
  },
  data() {
    return {
      phoneNumber: "+48 519 626 192",
      email: "dawidkwasowski@gmail.com",

      authorFullName: "Dawid Kwasowski",
    };
  },
};
</script>

<style lang="scss">
.footer {
  border-top: 5px solid $Medium-Slate-Blue;
  width: 100%;
  display: flex;
  background: $Gray;
  padding: $main-spacing * 3;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.form {
  @include mq(Desktop) {
    width: 50%;
  }
}

.contact {
  margin: $main-spacing * 3 0;
  text-align: left;
  @include mq(Mobile) {
    order: 2;
  }
  &__info {
    margin: $main-spacing;

    &--highlighted {
      color: $Blue-Bell;
    }
  }
}
</style>
