<template>
    <nav class="flex items-center justify-between mb-3">
    <ul
      class="flex space-x-2 md:space-x-6 text-black-300 text-sm md:text-base cursor-pointer"
    >
    <RouterLink
        v-for="item in NavLinks"
        :key="item.path"
        :to="item.path"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >{{ item.name }}</RouterLink
      >
      <!-- <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/resume">Resume</router-link></li> -->
    </ul>

    <p
      class="md:w-48 px-4 py-2 text-center bg-black-200 text-white-100 rounded-md cursor-pointer"
    >
      Hire me
    </p>
  </nav>
</template>

<script setup lang="ts">
const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' }
]
</script>