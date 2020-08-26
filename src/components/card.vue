<style scoped>

#card {
    max-height: 200px;
    max-width:200px;
    margin-left: 30px;
    scroll-behaviour:smooth;
    transition:2s;
    overflow:hidden;
}

#title {
    font-size: 15px;
    color: #fff;
}

#card-body {
    background-color: #000;
}

</style>

<template>

<mdb-card id="card">
    <mdb-view hover>
        <router-link to="/song">
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </router-link>
    </mdb-view>
    <mdb-card-body id="card-body">
        <mdb-card-title id="title">Song</mdb-card-title>
    </mdb-card-body>
</mdb-card>

</template>

<script>

import {
    mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbMask, mdbView
}
from 'mdbvue';

export default {
    name: 'Card',
    components: {
        mdbCard,
        mdbCardImage,
        mdbCardBody,
        mdbCardTitle,
        mdbMask,
        mdbView
    }
};

</script>
