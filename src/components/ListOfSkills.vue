<template>
  <ul class="skill-list">
    <li v-for="skill in skills" :key="skill">
      <div class="skill">
        <header class="skill__header">
          <h1 class="skill__name">{{ skill.name }}</h1>
        </header>
        <div class="skill__tech-icon">
          <i :class="[skill.iconClass, 'icon']"></i>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "HTML",
          iconClass: "fab fa-html5",
        },
        {
          name: "CSS",
          iconClass: "fab fa-css3-alt",
        },
        { name: "SASS", iconClass: "fab fa-sass" },
        {
          name: "JS",
          iconClass: "fab fa-js-square",
        },
        {
          name: "Vue",
          iconClass: "fab fa-vuejs",
        },
        {
          name: "Bootstrap",
          iconClass: "fab fa-bootstrap",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.skill {
  background: $Gray;
  padding: $main-spacing * 2;
  height: 200px;
  width: 300px;
  margin: $main-spacing * 2;
  position: relative;
  cursor: pointer;

  .icon {
    font-size: 4rem;
    position: absolute;
    opacity: 0.3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: $Medium-Slate-Blue;
    transform: translateY(5%);

    @include mq(Desktop) {
      transform: translate(5%, 5%);
    }
  }
}
</style>
