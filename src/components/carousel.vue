<template>
    <section class="carousel-section">
      <section>
        <mdb-carousel :interval="3000" :items="captionsCarousel" controlls captions indicators></mdb-carousel>
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
            title: "Light mask",
            text: "First text"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
          mask: "black-strong",
          caption: {
            animation: "slideInRight",
            title: "Strong mask",
            text: "Second text"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
          mask: "black-strong",
          caption: {
            animation: "slideInRight",
            title: "Slight mask",
            text: "Third text"
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
