<template>
  <header
    class="flex flex-col md:flex-row space-y-4 items-center md:justify-between mb-20 py-6 px-8 bg-blue-300 rounded-md"
  >
    <div class="md:w-2/3 md:pr-12 text-3xl">
      <p class="mb-4">Hi there!</p>
      <p class="text-white-100">I am <span class="text-gray-800">Olamide Victoria Dada</span> , a business guru based in Ontario, Canada.</p>
    </div>

    <div class="md:transform md:translate-y-28">
      <img :src="Olamide" alt="Olamide" class="h-72 rounded-full" />
    </div>
  </header>
</template>

<script setup>
import Olamide from "@/assets/olamide.jpeg";
</script>
