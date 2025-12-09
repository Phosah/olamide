<template>
  <section class="my-14 py-4">
    <h2 class="mb-6 text-3xl text-center text-black-100">Featured Projects</h2>

    <div v-for="(project, ix) in projects" :key="ix">
      <ProjectLayout :project="project" />
    </div>

    <div>
      <button
        class="block w-60 mx-auto mb-10 px-6 py-2 bg-black-200 text-white-100 rounded-md"
      >
        View more projects
      </button>

      <button
        class="block w-60 mx-auto px-6 py-2 bg-white text-black-200 font-medium border-2 border-black-200 rounded-md"
      >
        Hire me
      </button>
    </div>
  </section>
</template>

<script setup>
import ProjectLayout from "./ProjectLayout.vue";
import WorkPerk from "@/assets/workperk.png";
import SaveBud from "@/assets/savebud.png";

const projects = [
  {
    id: 1,
    title: "WORKPERK ",
    subtitle: "Free Lunch App",
    text: "WorkPerk offers a streamlined and user-friendly solution to address the issue of employee motivation and engagement.",
    // tags: ["UI/UX", "workplace", "free lunch", "case study"],
    tags: [
      {
        name: "UI/UX",
        bgColor: "bg-green-100",
      },
      {
        name: "workplace",
        bgColor: "bg-brown-100",
      },
      {
        name: "free lunch",
        bgColor: "bg-purple-100",
      },
      {
        name: "case study",
        bgColor: "bg-blue-100",
      },
    ],
    img: WorkPerk,
    alt: "WorkPerk",
  },
  {
    id: 2,
    title: "SAVEBUD",
    subtitle: "A Gamified Savings and Budgeting App",
    text: "SaveBud is a gamified savings and budgeting platform that transforms financial management into an engaging and rewarding experience",
    // tags: ["UI/UX", "savings", "budgeting", "gamification"],
    tags: [
      {
        name: "UI/UX",
        bgColor: "bg-green-100",
      },
      {
        name: "savings",
        bgColor: "bg-brown-100",
      },
      {
        name: "budgeting",
        bgColor: "bg-purple-100",
      },
      {
        name: "gamification",
        bgColor: "bg-blue-100",
      },
    ],
    img: SaveBud,
    alt: "WorkPerk",
  },
];
</script>
