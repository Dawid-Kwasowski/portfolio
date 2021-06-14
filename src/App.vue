<template>
  <div class="wrapper">
    <NavBar />
    <WebSection sectionID="aboutMe">
      <template #header>
        <header class="header" name="header">
          <p class="description">Cześć, jestem</p>
          <h1 class="heading">Dawid Kwasowski</h1>
          <p class="description description--highlighted">Junior Front-End Developer</p>
        </header>
      </template>
      <template #content>
        <Card />
      </template>
    </WebSection>
    <WebSection sectionID="skills">
      <template #header>
        <header class="header">
          <h1 class="heading">Umiejętności</h1>
        </header>
      </template>
      <template #content>
        <ListOfSkills />
      </template>
    </WebSection>
    <WebSection sectionID="projects">
      <template #header>
        <header class="header">
          <h1 class="heading">Projekty</h1>
        </header>
      </template>
      <template #content>
        <div class="thumbnails">
          <Thumbnail
            projectName="Huddle"
            address="https://dawid-kwasowski.github.io/simple-landing-page/"
          >
            <template #image>
              <img src="@/assets/images/huddle-thumbnail.png" alt="" />
            </template>
          </Thumbnail>
          <Thumbnail
            projectName="IP-Tracker"
            address="https://dawid-kwasowski.github.io/ip-tracker/"
          >
            <template #image>
              <img src="@/assets/images/ip-tracker-tumbnail.png" alt="" />
            </template>
          </Thumbnail>
          <Thumbnail
            projectName="Spaghetti Code"
            address="https://dawid-kwasowski.github.io/spaghetti-code/"
          >
            <template #image>
              <img src="@/assets/images/spaghetti-thumnail.png" alt="" />
            </template>
          </Thumbnail>
        </div>
      </template>
    </WebSection>
    <WebSection sectionID="contact">
      <template #header>
        <header class="header">
          <h1 class="heading">Stay in touch</h1>
        </header>
      </template>
      <template #content>
        <Footer />
      </template>
    </WebSection>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import WebSection from "./components/WebSection";
import ListOfSkills from "./components/ListOfSkills";
import Footer from "./components/Footer";
import Thumbnail from "./components/Thumbnail";
export default {
  name: "App",
  components: {
    NavBar,
    Card,
    WebSection,
    ListOfSkills,
    Footer,
    Thumbnail,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap");
// simple reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-size: 16px;
  background: $Rich-Black;
  font-family: "Ubuntu", sans-serif;
}

a {
  text-decoration: none;
  color: $White;
  font-weight: lighter;
}

ul {
  list-style: none;
}

.wrapper {
  color: $White;
}
.thumbnails {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.description {
  font-size: 1.3rem;
  @include mq(Desktop) {
    font-size: 1.6rem;
  }
  margin-bottom: $main-spacing;

  &--highlighted {
    color: $Blue-Bell;
  }
}

.heading {
  font-size: 2.3rem;
  margin: $main-spacing * 2.5;
  font-weight: 300;
}

.horizontal-line {
  background: $Medium-Slate-Blue;
  width: 100%;
  height: 1px;
  margin: $main-spacing * 2 0;
}
</style>
