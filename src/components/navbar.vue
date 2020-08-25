

<template>

<mdb-navbar style="z-index: 0" dark color="transparent" scrolling>
    <!-- mdbNavbar brand -->
    <mdb-navbar-brand tag="a" target="_blank" href="https://mdbootstrap.com/">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt />
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
        <mdb-navbar-nav left>
            <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
            <!-- mdbDropdown -->
        </mdb-navbar-nav>
        <!-- Search form -->
        <form>
            <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed />
        </form>
    </mdb-navbar-toggler>
</mdb-navbar>

</template>
<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbInput,
  mdbNavbarBrand,
} from "mdbvue";

export default {
  name: "Navbar",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbNavbarBrand,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
