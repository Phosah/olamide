<template>
  <section class="my-14 py-4">
    <h2 class="mb-6 text-3xl text-center text-black-100">Testimonials</h2>

    <section class="md:flex md:space-x-4 space-y-4 md:space-y-0 text-black-300">
      <div class="p-3 border border-blue-100 rounded-md">
        <component
          :is="QuotationMarksIcon"
          class="w-12 h-12 shrink-0 text-white"
          aria-hidden="true"
        ></component>

        <p class="mb-4">
          I had the pleasure of working closely with Chinonye on the Savebud
          project, and I couldn't have asked for a better team-lead. Chinonye is
          a true creative visionary with an unparalleled passion for design. Her
          attention to detail, innovative ideas, and dedication to user-centric
          solutions were nothing short of inspiring. I'll recommend working with
          her anytime
        </p>

        <p>- Precious Abachukwu</p>
        <p class="text-sm text-gray-300">Product Designer</p>
      </div>

      <div class="p-3 border border-blue-100 rounded-md">
        <component
          :is="QuotationMarksIcon"
          class="w-12 h-12 shrink-0 text-white"
          aria-hidden="true"
        ></component>

        <p class="mb-4">
          I had the pleasure of working closely with Chinonye on the Savebud
          project, and I couldn't have asked for a better team-lead. Chinonye is
          a true creative visionary with an unparalleled passion for design. Her
          attention to detail, innovative ideas, and dedication to user-centric
          solutions were nothing short of inspiring. I'll recommend working with
          her anytime
        </p>

        <p>- Precious Abachukwu</p>
        <p class="text-sm text-gray-300">Product Designer</p>
      </div>
    </section>

    <aside class="flex justify-between my-4">
      <div>
        <component
          :is="LeftArrowIcon"
          class="w-6 h-6 shrink-0 text-white"
          aria-hidden="true"
        ></component>
      </div>

      <div>
        <component
          :is="RightArrowIcon"
          class="w-6 h-6 shrink-0 text-white"
          aria-hidden="true"
        ></component>
      </div>
    </aside>
  </section>
</template>

<script setup>
import QuotationMarksIcon from "./icons/QuotationMarksIcon.vue";
import RightArrowIcon from "./icons/RightArrowIcon.vue";
import LeftArrowIcon from "./icons/LeftArrowIcon.vue";
</script>
