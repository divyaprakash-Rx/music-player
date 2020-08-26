

<template>

<mdb-navbar style="z-index: 0" dark color="transparent" scrolling>
    <!-- mdbNavbar brand -->
    <mdb-navbar-brand tag="router-link" to="/">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt />
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
        <mdb-navbar-nav left>
            <mdb-nav-item href="#" waves-fixed>Demo</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Demo</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Demo</mdb-nav-item>
            <!-- mdbDropdown -->
        </mdb-navbar-nav>
    </mdb-navbar-toggler>
</mdb-navbar>

</template>
<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
} from "mdbvue";

export default {
  name: "Navbar",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
