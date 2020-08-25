<style scoped>

.row {
margin-top:10vh;
margin-bottom:10vh;
    max-height: 250px;
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    scrollbar-width: thin;
    align-items:center;
    justify-content:center;
    scrollbar-color:#444054 #2F243A;
}

</style>

<template>

<div>
<Navbar />
    <Carousel />
    <div class="row" v-for="k in 3" v-bind:key="k.id">
        <div v-for="n in 10" v-bind:key="n.id">
            <Card />
        </div>
    </div>
    <Carousel />
    <div class="row" v-for="k in 3" v-bind:key="k.id">
        <div v-for="n in 10" v-bind:key="n.id">
            <Card />
        </div>
    </div>
</div>

</template>

<script>

// @ is an alias to /src
import Card from '@/components/card.vue'
import Carousel from '@/components/carousel.vue'
import Navbar from '@/components/navbar.vue'
export default {
    name: 'home',
    components: {
        Card,
        Carousel,
        Navbar
    }
}

</script>
