<template>
  <div class="card">
    <div class="card__img">
      <picture>
        <source
          srcset="@/assets/images/dawid-kwasowski-desktop.jpg"
          media="(min-width:1290px)"
        />
        <img src="@/assets/images/dawid-kwasowski-mobile.jpg" alt="" />
      </picture>
    </div>
    <div class="card__information">
      <h2 class="card__title">{{ aboutMe }}</h2>
      <div class="horizontal-line"></div>
      <p class="card__info">{{ information }}</p>

      <div class="card__socials">
        <a href="https://github.com/Dawid-Kwasowski" target="_blank">
          <i class="fab fa-github-square social social--github" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/DawidKwasowski.k/" target="_blank">
          <i class="fab fa-facebook-square social social--fb" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/dawidkwasowski/" target="_blank">
          <i class="fab fa-instagram social social--ig"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutMe: "Pare słów o mnie",
      information:
        "Jak już wspominałem nazywam się Dawid. Na codzień zajmuje się tworzeniem prostych aplikacji internetowych oraz stron. Historia z programowaniem zaczeła się w Technikum Informatycznym kiedy to doświadczyłem satysfakcji z tworzenia pierwszych Stron Internetowych. Aktualnie Sudiuje zaocznie Informatyke oraz szukam pracy jako Junior Front-End Developer aby nauczyć się tworzyć jeszcze bardziej niesamowite rzeczy!",
    };
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $Gray;
  width: 100%;
  max-width: 1200px;
  padding: $main-spacing * 5 $main-spacing;
  margin: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(5%);
    @include mq(Desktop) {
      transform: translate(5%, 5%);
    }
    z-index: -1;
    background: $Medium-Slate-Blue;
  }

  @include mq(Desktop) {
    width: 77%;
    font-size: 1.3rem;
    flex-direction: row;
  }

  &__img {
    margin: $main-spacing * 2;
  }

  &__title {
    font-size: 2.3rem;
  }

  &__information {
    margin: $main-spacing * 2;
    text-align: left;
    display: flex;
    letter-spacing: 1.5px;
    flex-direction: column;
    justify-content: space-evenly;
  }

  &__socials {
    padding: 10px 0;

    .social {
      display: inline-block;
      padding: 10px;
      border-bottom: 1px solid #fff;
      font-size: 2rem;
      margin-right: 10px;
      cursor: pointer;
      transition: color 0.8s ease-in-out, border-color 0.3s ease-in-out;
      text-align: center;

      &:hover {
        border-color: $Blue-Bell;
        color: $Blue-Bell;
      }
    }
  }
}
</style>
