<template>
  <section class="my-14 py-4">
    <h2 class="mb-6 text-3xl text-center text-black-100">
      Why you should work with me
    </h2>

    <section class="md:flex md:space-x-6 mb-12 text-black-300">
      <section class="flex-1 flex space-x-3 mb-8">
        <div><img :src="ProblemSolving" alt="Problem solving" /></div>
        <div>
          <h4 class="font-extrabold">Problem Solving</h4>
          <p>
            I thrive on tackling complex challenges and turning them into
            opportunities. My problem-solving skills are a core asset, ensuring
            innovative solutions that meet your needs
          </p>
        </div>
      </section>

      <section
        class="flex-1 flex space-x-3 mb-8 pl-8 border-l border-dashed text-black-300"
      >
        <div><img :src="Approach" alt="Approach" /></div>
        <div>
          <h4 class="font-extrabold">User-Centric Approach</h4>
          <p>
            I put your users at the heart of every design and decision. With a
            deep commitment to delivering exceptional user experiences, I create
            designs that resonate and engage
          </p>
        </div>
      </section>
    </section>

    <section class="md:flex md:space-x-6">
      <section class="flex-1 flex space-x-3 mb-8">
        <div><img :src="Creativity" alt="Creativity" /></div>
        <div>
          <h4 class="font-extrabold">Creativity and Innovation</h4>
          <p>
            I'm a relentless explorer of creative possibilities. I thrive on
            pushing boundaries and reimagining what's possible with innovative
            ideas that captivate your audience and set you apart from the
            competition
          </p>
        </div>
      </section>

      <section
        class="flex-1 flex space-x-3 pl-8 border-l border-dashed text-black-300"
      >
        <div><img :src="Collaboration" alt="Collaboration" /></div>
        <div>
          <h4 class="font-extrabold">Collaboration (Teamwork)</h4>
          <p>
            Great things are achieved together. I value collaboration and bring
            a positive, constructive approach to every team. Let's create
            something amazing as a united force.
          </p>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
import ProblemSolving from "@/assets/problem-solving.png";
import Collaboration from "@/assets/collaboration.png";
import Creativity from "@/assets/creativity.png";
import Approach from "@/assets/approach.png";
</script>
