<template>
  <nav class="relative flex items-center justify-between mb-3">
    <ul
      class="hidden sm:flex space-x-2 md:space-x-6 text-black-300 text-sm md:text-base cursor-pointer"
    >
      <RouterLink
        v-for="item in NavLinks"
        :key="item.path"
        :to="item.path"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
      >
        {{ item.name }}
      </RouterLink>

      <!-- Dropdown for Education & Credentials -->
      <div class="relative group">
        <button
          class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        >
          Education & Credentials ▾
        </button>
        <div
          class="absolute left-0 mt-2 w-56 bg-white-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10"
        >
          <RouterLink
            v-for="subItem in EducationLinks"
            :key="subItem.path"
            :to="subItem.path"
            class="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-yellow-500"
          >
            {{ subItem.name }}
          </RouterLink>
        </div>
      </div>
    </ul>

    <!-- Mobile Menu Button -->
    <button
      @click="
        () => {
          isNavListOpen = !isNavListOpen;
          console.log('isNavListOpen:', isNavListOpen);
        }
      "
      class="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Menu v-if="!isNavListOpen" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>

    <!-- Mobile Menu -->
    <div
      v-show="isNavListOpen"
      class="absolute z-80 top-0 bottom-0 left-0 right-0 sm:hidden bg-black-100 "
    >
      <div class="flex flex-col p-4 space-y-4">
        <RouterLink
          v-for="item in NavLinks"
          :key="item.path"
          :to="item.path"
          @click="isNavListOpen = false"
          class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all py-2"
          active-class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
          >{{ item.name }}</RouterLink
        >
      </div>
    </div>

    <RouterLink
      to="/contact"
      class="md:w-48 px-4 py-2 text-center bg-black-200 text-white-100 rounded-md cursor-pointer hover:bg-yellow-500 hover:text-black transition-all"
    >
      Hire Me
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  // { name: 'Resume', path: '/resume' },
  { name: "Work Samples", path: "/work-samples" },
  { name: "Contact", path: "/contact" },
];

const isNavListOpen = ref(false);

const EducationLinks = [
  { name: "Education", path: "/education" },
  { name: "Certifications", path: "/certifications" },
  { name: "Transcripts", path: "/transcripts" },
  { name: "Awards & Recognition", path: "/awards" },
];
</script>

<style scoped>
/* Ensure dropdown works on mobile */
@media (max-width: 768px) {
  .relative.group:hover .absolute {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

<!-- <template>
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
</script> -->
