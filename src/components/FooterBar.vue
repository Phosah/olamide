<template>
  <footer
    class="flex flex-col sm:flex-row space-y-3 items-center justify-between py-4"
  >
    <section class="flex space-x-4">
      <!-- <div class="inline-block p-2 bg-blue-100 rounded-full">
        <img :src="Instagram" alt="Instagram" class="h-4 w-4" />
      </div> -->

      <!-- <div class="inline-block p-2 bg-blue-100 rounded-full">
        <img :src="X" alt="X" class="h-4 w-4" />
      </div> -->

      <!-- <div class="inline-block p-2 bg-blue-100 rounded-full">
        <img :src="Behance" alt="Behance" class="h-4 w-4" />
      </div> -->

      <div class="inline-block p-2 bg-blue-100 rounded-full">
        <img :src="LinkedIn" alt="LinkedIn" class="h-4 w-4" />
      </div>

      <div class="inline-block p-2 bg-blue-100 rounded-full">
        <img :src="Gmail" alt="Gmail" class="h-4 w-6" />
      </div>
    </section>

    <p class="text-xs text-black-300 font-quicksand">Olamide Dada, 2025</p>

    <!-- This two components are different icons but show only the same Gmail icon. To fix -->
    <!-- <div>
      <component
        :key="GmailIcon"
        :is="GmailIcon"
        class="w-12 h-12 shrink-0 text-white"
        aria-hidden="true"
      ></component>
    </div> -->

    <!-- <div>
      <component
        :is="LinkedInIcon"
        class="w-12 h-12 shrink-0 text-white"
        aria-hidden="true"
      ></component>
    </div> -->
  </footer>
</template>

<script setup>
import Behance from "@/assets/behance.png";
import Gmail from "@/assets/gmail.png";
import Instagram from "@/assets/instagram.png";
import LinkedIn from "@/assets/linkedin.png";
import X from "@/assets/x.png";

import LinkedInIcon from "./icons/LinkedInIcon.vue";
import GmailIcon from "./icons/GmailIcon.vue";
</script>
