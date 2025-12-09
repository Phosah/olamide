<template>
  <section class="mb-8 border border-brown-100 rounded-md">
    <div class="mb-4">
      <img
        :src="project.img"
        :alt="project.alt"
        class="h-96 w-full object-cover rounded-md"
      />
    </div>

    <div class="px-8">
      <p class="text-black-100">
        <span class="font-semibold">{{ project.title }}</span> -
        {{ project.subtitle }}
      </p>

      <p class="mb-4 text-black-300 text-sm">
        {{ project.text }}
      </p>

      <div class="md:flex space-y-3 md:space-y-0 md:space-x-6 my-4">
        <div
          v-for="(tag, ix) in project.tags"
          :key="ix"
          :class="tag.bgColor"
          class="px-3 py-1 text-sm rounded-md font-semibold"
        >
          {{ tag.name }}
        </div>
      </div>

      <div class="flex items-center space-x-2 mb-4 text-sm font-medium">
        <p>View case study</p>

        <component
          :is="RightArrowTwoIcon"
          class="w-4 h-4 shrink-0 text-white"
          aria-hidden="true"
        ></component>
      </div>
    </div>
  </section>
</template>

<script setup>
import RightArrowTwoIcon from "./icons/RightArrowTwoIcon.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
