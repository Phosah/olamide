<template>
  <main class="font-quicksand max-w-7xl mx-auto px-4 py-4">
    <Hero />
    <!-- <About /> -->
    <!-- <Projects /> -->
    <!-- <WorkWithMe /> -->
    <!-- <Services /> -->
    <Testimonials />
    <!-- <Contact /> -->
    <!-- <FooterBar /> -->
  </main>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import WorkWithMe from "@/components/WorkWithMe.vue";
import Services from "@/components/Services.vue";
import Testimonials from "@/components/Testimonials.vue";
// import Contact from "@/components/Contact.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>

<style>
h2 {
  /* font-family: "dm"; */
  font-family: "DM Serif Display", serif;
}
</style>
