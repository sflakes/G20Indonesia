<template>
  <div class="container mx-auto relative">
    <div class="subContainer">
      <Navbar />
    </div>
    <Banner />
    <!-- <Countdown /> -->
    <!-- <Batiks class="top-96"/> -->
    <div class="pinisi">
      <MainSection />
    </div>
    <ListOfArticles />
    <Summits />
    <Countdown />
    <EngagementGroup />
    <Explore />
    <KnowMore />
    <Footer />    
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import MainSection from "./components/MainSection.vue";
import ListOfArticles from "./components/ListOfArticles.vue";
import Countdown from "./components/Countdown.vue";
import Batiks from "./components/Batiks.vue";
import KnowMore from "./components/KnowMore.vue"
import Summits from "./components/Summits.vue";
import EngagementGroup from "./components/EngagementGroup.vue";
import Explore from "./components/Explore.vue";
import Footer from "./components/Footer.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  min-height: 100vh;
}

.pinisi {
  height: 100%;
  background: -o-linear-gradient(
      45deg,
      rgba(220, 38, 38, 0.9),
      rgba(236, 34, 34, 0.493)
    ),
    url("./assets/pinisi.jpg");
  background: linear-gradient(
      45deg,
      rgba(220, 38, 38, 0.9),
      rgba(236, 34, 34, 0.493)
    ),
    url("./assets/pinisi.jpg");
  background-size: cover;
  background-position-x: right;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
