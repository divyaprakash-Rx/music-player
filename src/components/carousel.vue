<template>
    <section class="carousel-section">
      <section>
      <router-link to="/song">
        <mdb-carousel :interval="3000" :items="captionsCarousel" controlls captions indicators></mdb-carousel>
        </router-link>
      </section>
    </section>
</template>

<script>
import {
  mdbCarousel,
} from "mdbvue";

export default {
  name: "Carousel",
  components: {
    mdbCarousel,
  },
  data() {
    return {
      carousel: 2,
      multi: 2,
      captionsCarousel: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
          mask: "black-strong",
          alt: "First Slide",
          caption: {
            animation: "slideInRight",
            title: "Song 1",
            text: "song 1"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
          mask: "black-strong",
          caption: {
            animation: "slideInRight",
            title: "Song 2",
            text: "Song 2"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
          mask: "black-strong",
          caption: {
            animation: "slideInRight",
            title: "Song 3",
            text: "Song 3"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel-section{
margin-bottom:10vh;
}
</style>
