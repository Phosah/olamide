<template>
    <div class="max-w-6xl mx-auto py-8 px-4">
      <!-- Hero Section with Photo -->
      <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-8 shadow-lg">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Profile Photo (Optional) -->
          <div class="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shadow-xl">
            <!-- Replace with actual image -->
            <img 
              :src="Olamide"
              alt="Olamide Dada Victoria" 
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <!-- Fallback initials if no photo -->
            <span v-if="showInitials" class="text-6xl font-bold text-gray-600">OD</span>
          </div>
  
          <!-- Name and Title -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Olamide Dada Victoria
            </h1>
            <p class="text-xl md:text-2xl text-blue-600 font-medium mb-4">
              Business Analysis Student | Finance Professional
            </p>
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-blue-600 text-white-100 rounded-full text-sm">
                Business Analysis
              </span>
              <span class="px-4 py-2 bg-yellow-500 text-white-100 rounded-full text-sm">
                Financial Reporting
              </span>
              <span class="px-4 py-2 bg-green-600 text-white-100 rounded-full text-sm">
                Process Improvement
              </span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Professional Summary -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 pb-2 inline-block">
          About Me
        </h2>
        <div class="text-gray-700 leading-relaxed space-y-4 text-lg">
          <p>
            I am <strong>Olamide Dada Victoria</strong>, a Business Analysis student at George Brown College, 
            pursuing a career at the intersection of business analysis and finance. With a strong background 
            in accounting and financial reporting, I bring analytical expertise, attention to detail, and a 
            data-driven approach to solving business problems.
          </p>
          <p>
            My experience in finance has strengthened my ability to interpret data, assess risks, and evaluate 
            organizational performance. These core skills support my development as a Business Analyst who can 
            clearly define business needs, develop data-informed solutions, and enhance overall decision-making.
          </p>
          <p>
            I am passionate about applying business analysis techniques to improve financial processes, optimize 
            operations, and support value-driven organizational outcomes. I am continuously expanding my knowledge 
            through practical learning and technical proficiency in key tools such as <strong>Excel, QuickBooks, 
            Jira, Miro, and Canva</strong>.
          </p>
          <p>
            With a growing foundation in business requirements documentation, stakeholder collaboration, and 
            process improvement, I am committed to building a career as a finance-focused Business Analyst who 
            helps organizations achieve efficiency, growth, and innovation.
          </p>
        </div>
      </div>
  
      <!-- Key Strengths -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 pb-2 inline-block">
          Key Strengths
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-800 mb-1">Analytical Expertise</h3>
              <p class="text-gray-600">Strong foundation in data interpretation, risk assessment, and performance evaluation</p>
            </div>
          </div>
  
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-800 mb-1">Attention to Detail</h3>
              <p class="text-gray-600">98% accuracy in payroll and invoicing, reducing discrepancies by 25%</p>
            </div>
          </div>
  
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-800 mb-1">Process Improvement</h3>
              <p class="text-gray-600">Improved reporting accuracy by 15% and reduced audit time by 20%</p>
            </div>
          </div>
  
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-800 mb-1">Stakeholder Collaboration</h3>
              <p class="text-gray-600">Experience in cross-functional teamwork and requirement gathering</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Contact CTA -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white-100">
        <h2 class="text-2xl font-bold mb-4">Let's Connect</h2>
        <p class="mb-6 text-lg">Interested in working together or learning more about my experience?</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a 
            href="mailto:Olamide.Dada@georgebrown.ca" 
            class="px-6 py-3 bg-white-100 text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Email Me
          </a>
          <RouterLink 
            to="/resume" 
            class="px-6 py-3 bg-yellow-500 text-white-100 rounded-lg font-semibold hover:bg-yellow-600 transition-all"
          >
            View Resume
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Olamide from '@/assets/olamide.jpeg'
  
  const showInitials = ref(false)
  
  const handleImageError = () => {
    showInitials.value = true
  }
  </script>

<!-- <template>
    <About />
    <WorkWithMe />
</template>

<script setup lang="ts">
import About from "@/components/About.vue";
import WorkWithMe from "@/components/WorkWithMe.vue";
</script> -->