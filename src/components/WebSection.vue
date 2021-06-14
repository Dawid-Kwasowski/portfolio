<template>
  <section :id="sectionID" class="section">
    <slot name="header"></slot>
    <div class="section__gapper"></div>
    <slot name="content"></slot>
  </section>
</template>

<script>
export default {
  props: ["sectionID"],
};
</script>

<style lang="scss">
.section {
  text-align: center;
  margin: $main-spacing * 8 $main-spacing * 2 0 $main-spacing * 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  &__gapper {
    margin: $main-spacing * 5;
  }
}
</style>
