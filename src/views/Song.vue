<style>

.img-wrap {
    overflow: hidden;
    height: 70vh;
    width: 100vw;
}

.song-img {
    height: auto;
    width: 100%;
    min-height: 100%;
}

</style>

<template>

<div>
    <Navbar />
    <div class="img-wrap">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" class="song-img" />
    </div>
    <Player />
</div>

</template>

<script>

import Navbar from '@/components/navbar.vue'
import Player from '@/components/player.vue'
export default {
    name: 'song',
    components: {
        Navbar,
        Player
    }
}

</script>
