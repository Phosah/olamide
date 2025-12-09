<template>
  <section class="my-14 py-4">
    <h2 class="mb-6 text-3xl text-center text-black-100">About Me</h2>

    <section class="flex items-center space-x-8">
      <div class="w-1/4">
        <div class="w-max flex flex-col items-center">
          <h3 class="mb-2 md:text-2xl text-black-100 font-medium">Who am I?</h3>

          <component
            :is="QuestionMarkIcon"
            class="w-20 h-20 shrink-0 text-white"
            aria-hidden="true"
          ></component>
        </div>
      </div>

      <p
        class="w-3/4 pl-8 border-l border-dashed text-black-300 text-sm md:text-base"
      >
        I am a highly motivated and detail-oriented Product Design professional
        with a passion for creating exceptional user experiences. I help
        businesses transform their ideas into intuitive designs by turning
        complex concepts into visually appealing and user-friendly designs that
        bring ideas to life. What sets me apart from the rest of the creative
        crowd is my obsession with the user. My design journey isn't just about
        making things pretty (although I love doing that too), but it's all
        about crafting seamless experiences that users can't get enough of.
      </p>
    </section>
  </section>
</template>

<script setup>
import QuestionMarkIcon from "./icons/QuestionMarkIcon.vue";
</script>
