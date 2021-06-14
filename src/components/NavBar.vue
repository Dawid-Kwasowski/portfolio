<template>
  <div class="hamburger-wrapper" v-show="!isDesktop">
    <button
      :class="[isActive ? 'hamburger--active' : '', 'hamburger']"
      @click="toggleBurger"
    >
      <div class="hamburger__box">
        <div class="hamburger__inner"></div>
      </div>
    </button>
  </div>
  <nav :class="[isActive ? 'navigation--active' : '', 'navigation']">
    <ul class="navigation__menu">
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        class="navigation__menu-item"
      >
        <a @click.self="toggleBurger" :href="item.anchor">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isActive: false,
      isDesktop: matchMedia("(min-width:800px)").matches,

      navigationItems: [
        { name: "O mnie", anchor: "#aboutMe" },
        { name: "Umiejętności", anchor: "#skills" },
        { name: "Projects", anchor: "#projects" },
        { name: "Kontakt", anchor: "#contact" },
      ],
    };
  },
  methods: {
    toggleBurger() {
      return this.isDesktop ? null : (this.isActive = !this.isActive);
    },
  },
};
</script>

<style lang="scss">
.hamburger-wrapper {
  display: flex;
  justify-content: flex-end;
}
.hamburger {
  padding: $main-spacing;
  background: transparent;
  display: inline-block;
  cursor: pointer;
  border: none;
  margin: $main-spacing;

  &__box {
    display: inline-block;
    width: 40px;
    height: 20px;
    position: relative;
  }

  &__inner {
    @include hamburger-line;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background 0.2s ease-in-out;
  }

  &__inner::before,
  &__inner::after {
    @include hamburger-line;
    content: "";
    left: 0;
    transition: transform 0.3s ease-in;
  }

  &__inner::before {
    top: -10px;
  }

  &__inner::after {
    top: 10px;
  }

  &--active &__inner {
    background: transparent;
  }

  &--active &__inner::before {
    transform: translateY(10px) rotate(45deg);
  }
  &--active &__inner::after {
    transform: translateY(-10px) rotate(-45deg);
  }
}

.navigation {
  background: $Rich-Black;
  padding: $main-spacing;
  transform: translateX(-100%);
  transition: transform ease-in-out 0.3s;
  @include mq(Desktop) {
    transform: translateX(0);
    background: $Rich-Black;
    height: auto;
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
  }
  &__menu {
    font-size: 3rem;
    display: flex;
    height: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: $main-spacing * 4;

    @include mq(Desktop) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      font-size: 1.2rem;
      height: 100%;
      margin: 0;
    }
  }
  &__menu-item {
    padding: 5px;
    margin-bottom: $main-spacing * 1.5;
    border-bottom: 1px solid $Medium-Slate-Blue;
    transition: background 0.3s ease-in-out;
    @include mq(Desktop) {
      border: none;
      margin-right: $main-spacing / 2;
      padding: $main-spacing;
    }
    &:hover {
      background: $Medium-Slate-Blue;
    }
    &--focused {
      background: $Medium-Slate-Blue;
    }
  }

  &--active {
    transform: translateX(0);
    height: 100vh;
  }
}
</style>
