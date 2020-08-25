<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    background-color:#000;
}
body,html{
height:100vh;
background-color:#000;

}
</style>

<template>

<div id="app">
    <router-view/>
</div>

</template>

<script>

window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('#app').scrollIntoView({
    behavior: 'smooth'
});

</script>
