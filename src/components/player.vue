<style>
.player{
display:flex;
justify-content:center;
align-items:center;
}
.play, .pause{
background-color:#000;
border:0;
}
.play>img{
width:100px;
}
.pause>img{
width:100px;
}
.start{
color:#fff;
}
</style>
<template>

<div>
    <main>
        <section class="player">
                <div class="timer">
                    <p class="start">{{ currentlyTimer }}</p>
                    <p class="end">
                        {{ totalTimer }}
                    </p>
                                </div>
            <div class="controls">
                <button class="play" v-if="!isPlaying" @click="play">
                    <img src="../assets/play-button.svg" alt=""/>
                </button>
                <button class="pause" v-else @click="pause">
                <img src="../assets/pause-button.svg" alt=""/>
                </button>
            </div>
        </section>
    </main>
</div>

</template>

<script>

import {
    formatTimer
}
from "./timer";
export default {
    name: "Player",
    data() {
        return {
            current: {},
            isPlaying: true,
            currentlyTimer: "00:00",
            player: new Audio()
        };
    },
    methods: {
        listenersWhenPlay() {
                this.player.addEventListener("timeupdate", () => {
                    var playerTimer = this.player.currentTime;
                    this.currentlyTimer = formatTimer(playerTimer);
                    this.current.percent = (this.player.currentTime * 100) / this.current.seconds;
                    this.current.isPlaying = true;
                });
            },
            play(song) {
                if (typeof song.src !== "undefined") {
                    this.current.isPlaying = false;
                    this.current = song;
                    this.player.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
                }
                this.player.play();
                this.isPlaying = true;
                this.listenersWhenPlay();
            },
            pause() {
                this.player.pause();
                this.isPlaying = false;
            }
    },
    mounted() {
        this.player.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
        this.player.play();
        this.listenersWhenPlay();
    },
    beforeDestroy(){
    this.player.pause();
    }
};

</script>
