<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-100 to-blue-300 text-white-100 py-20 px-4 rounded-lg mb-8">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Profile Image -->
          <div class="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
            <img 
              :src="Olamide" 
              alt="Olamide Dada Victoria" 
              class="w-full h-full object-cover"
              @error="showInitials = true"
            />
            <span v-if="showInitials" class="text-8xl font-bold text-white/80">OD</span>
          </div>

          <!-- Hero Content -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-5xl md:text-6xl text-[#0b0b0c] font-bold mb-4 leading-tight">
              Olamide Dada Victoria
            </h1>
            <p class="text-2xl md:text-3xl font-light mb-6 text-gray-600">
              Business Analyst | Finance Professional
            </p>
            <p class="text-lg md:text-xl mb-8 text-[#111021] font-medium leading-relaxed max-w-2xl">
              Bridging business analysis and finance to drive data-informed solutions, 
              optimize processes, and deliver organizational value.
            </p>
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <RouterLink 
                to="/resume"
                class="px-8 py-3 bg-blue-700 border border-solid border-transparent cursor-pointer text-white-100 rounded-xl font-semibold hover:bg-transparent transition duration-300 shadow-xl hover:shadow-xl hover:text-blue-700 hover:border-2 hover:border-solid hover:border-blue-700"
              >
                View Resume
              </RouterLink>
              <RouterLink 
                to="/contact" 
                class="px-8 py-3 bg-transparent border-2 border-gray-100 text-gray-100 rounded-xl font-semibold hover:text-white-100 hover:bg-gray-100 transition-all"
              >
                Get In Touch
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="max-w-6xl mx-auto mb-12 px-4">
      <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
        <!-- <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div class="text-4xl font-bold text-blue-600 mb-2">98%</div>
          <div class="text-gray-600 text-sm">Payroll Accuracy</div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div class="text-4xl font-bold text-green-600 mb-2">250+</div>
          <div class="text-gray-600 text-sm">Employees Managed</div>
        </div> -->
        <!-- <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div class="text-4xl font-bold text-purple-600 mb-2">30%</div>
          <div class="text-gray-600 text-sm">Process Improvement</div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div class="text-4xl font-bold text-yellow-600 mb-2">2+</div>
          <div class="text-gray-600 text-sm">Certifications</div>
        </div> -->
      </div>
    </section>

    <!-- What I Do -->
    <section class="max-w-6xl mx-auto mb-12 px-4"> 
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">What I Do</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-1">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Requirements Analysis</h3>
          <p class="text-gray-600 leading-relaxed">
            Gathering and documenting business requirements, user stories, and acceptance criteria 
            using Agile methodologies and industry-standard tools.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-1">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Process Improvement</h3>
          <p class="text-gray-600 leading-relaxed">
            Analyzing current workflows, identifying inefficiencies, and designing optimized 
            processes that reduce costs and improve operational efficiency.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-1">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Financial Analysis</h3>
          <p class="text-gray-600 leading-relaxed">
            Leveraging accounting expertise to analyze financial data, assess risks, and provide 
            insights that support strategic business decisions.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Overview -->
    <section class="max-w-6xl mx-auto mb-12 px-4">
      <div class=" rounded-lg px-4 md:p-8 md:p-12 text-white-100">
        <h2 class="text-3xl text-gray-800 font-bold mb-8 text-center">Core Competencies</h2>
        <!-- <div class="grid md:grid-cols-2 gap-8"> -->
        <div class="flex w-full md:px-10 items-start justify-between text-sm md:text-base">
          <div>
            <h3 class="text-xl font-semibold mb-4 mr-2 text-blue-500">Business Analysis</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-[#111021]">Agile/Scrum Methodologies</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-[#111021]">Requirements Elicitation</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-[#111021]">Process Modeling (BPMN)</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-[#111021]">UAT & Testing</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-500">Technical Tools</h3>
            <div class="space-y-3 text-[#111021]">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Jira & Confluence</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>MS Visio & Miro</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Salesforce, Dynamics 365</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Excel & QuickBooks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Preview -->
    <section class="max-w-6xl mx-auto mb-12 px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-32"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">CRM & eCommerce Integration</h3>
            <p class="text-gray-600 mb-4">
              Led requirements gathering and process mapping for integrating CRM and eCommerce 
              platforms, improving customer data management.
            </p>
            <RouterLink 
              to="/work-samples" 
              class="text-blue-600 hover:underline font-semibold inline-flex items-center"
            >
              View Details
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </RouterLink>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-r from-green-500 to-green-600 h-32"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Business Systems Analysis</h3>
            <p class="text-gray-600 mb-4">
              Participated in Agile sprints to deliver system prototypes and created comprehensive 
              technical documentation.
            </p>
            <RouterLink 
              to="/work-samples" 
              class="text-green-600 hover:underline font-semibold inline-flex items-center"
            >
              View Details
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Snapshot -->
    <section class="max-w-6xl mx-auto mb-12 px-4">
      <div class="bg-gradient-to-r from-white-50 to-white-50 rounded-lg p-8 border-2 border-purple-200">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Education & Credentials</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-xl">
            <div class="flex items-center space-x-1 mb-3">
              <div class="w-12 h-12  rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800">George Brown College</h3>
                <p class="text-sm text-gray-600">Postgraduate Certificate - ISBA</p>
              </div>
            </div>
            <span class="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              Expected 2026
            </span>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-xl">
            <div class="flex items-center space-x-1 mb-3">
              <div class="w-12 h-12  rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800">ICAN Certifications</h3>
                <p class="text-sm text-gray-600">AAT (2021) • ACA </p>
              </div>
            </div>
            <span class="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white-100 rounded-full text-sm font-semibold">
              Professional Credentials
            </span>
          </div>
        </div>
        <div class="text-center mt-6">
          <RouterLink 
            to="/education" 
            class="inline-block px-6 py-3 bg-blue-600 text-white-100 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            View Full Education History
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <!-- <section class="max-w-6xl mx-auto mb-8 px-4">
      <div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-12 text-center text-white-100">
        <h2 class="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p class="text-xl mb-8 text-blue-100">
          Let's discuss how I can contribute to your organization's success
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink 
            to="/contact" 
            class="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
          >
            Contact Me
          </RouterLink>
          <a 
            href="/path-to-resume.pdf" 
            download
            class="px-8 py-4 bg-transparent border-2 border-white text-white-100 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Olamide from '@/assets/olamide-1.jpeg';

const showInitials = ref(false)
</script>

<!-- <template>
  <main class="font-quicksand max-w-7xl mx-auto px-4 py-4">
    <Hero /> -->
    <!-- <About /> -->
    <!-- <Projects /> -->
    <!-- <WorkWithMe /> -->
    <!-- <Services /> -->
    <!-- <Testimonials /> -->
    <!-- <Contact /> -->
    <!-- <FooterBar /> -->
  <!-- </main>
</template> -->
<!-- 
<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import WorkWithMe from "@/components/WorkWithMe.vue";
import Services from "@/components/Services.vue";
import Testimonials from "@/components/Testimonials.vue"; -->
<!-- // import Contact from "@/components/Contact.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>

<style>
h2 {
  /* font-family: "dm"; */
  font-family: "DM Serif Display", serif;
}
</style> -->
