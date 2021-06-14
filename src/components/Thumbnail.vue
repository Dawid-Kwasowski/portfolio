<template>
  <div class="thumbnail">
    <a :href="address" target="_blank">
      <slot name="image"> </slot>
      <h3 class="project-title">{{ projectName }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  props: ["address", "projectName"],
};
</script>

<style lang="scss">
.thumbnail {
  width: 400px;
  background: $Gray;
  padding: 30px;
  margin: 10px;
  border-top: 3px solid $Medium-Slate-Blue;

  img {
    width: 100%;
  }

  .project-title {
    margin: 10px;
  }
}
</style>
