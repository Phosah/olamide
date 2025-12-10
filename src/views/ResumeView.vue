<template>
    <div class="max-w-6xl mx-auto py-8 px-4">
      <!-- Action Buttons - Top -->
      <!-- <div class="flex flex-wrap gap-4 justify-center mb-8 print:hidden">
        <button 
          @click="downloadResume" 
          class="px-6 py-3 bg-blue-100 text-white-100 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg inline-flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span>Download Resume (PDF)</span>
        </button>
        <button 
          @click="printResume" 
          class="px-6 py-3 bg-green-600 text-white-100 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg inline-flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
          </svg>
          <span>Print Resume</span>
        </button>
        <a 
          href="mailto:Olamide.Dada@georgebrown.ca" 
          class="px-6 py-3 bg-purple-600 text-white-100 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg inline-flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>Email Me</span>
        </a>
      </div> -->
  
      <!-- Resume Container -->
      <div id="resume-content" class="bg-white shadow-2xl rounded-lg overflow-hidden">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-100 to-blue-400 text-white-100 p-8 print:bg-blue-600">
          <h1 class="text-4xl md:text-5xl font-bold mb-2 text-center">DADA OLAMIDE VICTORIA</h1>
          <div class="flex flex-wrap justify-center gap-4 text-sm md:text-base mt-4">
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Olamide.Dada@georgebrown.ca</span>
            </div>
            <span class="text-blue-200">|</span>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>+1 (438) 347-6556</span>
            </div>
            <span class="text-blue-200">|</span>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Toronto, ON</span>
            </div>
          </div>
        </div>
  
        <!-- Main Content -->
        <div class="p-8 md:p-12">
          <!-- Objective -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Objective
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Motivated Information Systems Business Analysis postgraduate student seeking opportunities to contribute 
              skills in requirements elicitation, Agile collaboration, CRM/eCommerce systems, process mapping, and UAT. 
              Bringing strong analytical thinking, documentation abilities, and a commitment to developing scalable 
              digital solutions that support organizational transformation initiatives.
            </p>
          </section>
  
          <!-- Highlights of Qualifications -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Highlights of Qualifications
            </h2>
            <div class="grid md:grid-cols-2 gap-x-6 gap-y-2">
              <div class="flex items-start space-x-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <p class="text-gray-700">Strong knowledge of Agile/Scrum methodologies, including Jira and Confluence</p>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <p class="text-gray-700">Hands-on experience with CRM/eCommerce platforms: Salesforce, Dynamics 365, Shopify</p>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <p class="text-gray-700">Skilled in requirements gathering, stakeholder analysis, and functional documentation</p>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <p class="text-gray-700">Experienced in BPMN process modeling using Visio</p>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <p class="text-gray-700">Ability to write test cases and support UAT cycles</p>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <p class="text-gray-700">Strong communication, analytical thinking, and documentation skills</p>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <p class="text-gray-700">Background in financial analysis and administrative operations</p>
              </div>
            </div>
          </section>
  
          <!-- Technical Skills -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Technical Skills
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <p class="font-semibold text-gray-800 mb-2">Tools:</p>
                <p class="text-gray-700">Jira, Confluence, MS Office, Visio</p>
              </div>
              <div>
                <p class="font-semibold text-gray-800 mb-2">Techniques:</p>
                <p class="text-gray-700">Requirements Elicitation, User Stories, UAT, BPMN</p>
              </div>
              <div>
                <p class="font-semibold text-gray-800 mb-2">Accounting Tools:</p>
                <p class="text-gray-700">QuickBooks</p>
              </div>
            </div>
          </section>
  
          <!-- Education -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Education
            </h2>
            <div class="space-y-4">
              <div class="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 class="font-bold text-lg text-gray-800">Postgraduate Certificate – Information Systems Business Analysis</h3>
                  <p class="text-gray-700">George Brown College – Toronto, ON</p>
                </div>
                <p class="text-gray-600 font-semibold">Expected Completion: 2026</p>
              </div>
              <div class="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 class="font-bold text-lg text-gray-800">Bachelor of Science – Management & Accounting (Second Class Upper)</h3>
                  <p class="text-gray-700">Obafemi Awolowo University – Ile-Ife, Nigeria</p>
                </div>
                <p class="text-gray-600 font-semibold">May 2018 – September 2023</p>
              </div>
            </div>
            
            <div class="mt-4">
              <p class="font-semibold text-gray-800 mb-2">Certifications:</p>
              <ul class="space-y-1">
                <li class="flex items-start space-x-2 text-gray-700">
                  <span class="text-blue-600 font-bold">•</span>
                  <span>Associate Accounting Technician (AAT), ICAN – 2021</span>
                </li>
                <li class="flex items-start space-x-2 text-gray-700">
                  <span class="text-blue-600 font-bold">•</span>
                  <span>Associate Chartered Accountant (ACA, in view), ICAN – 2024</span>
                </li>
              </ul>
            </div>
          </section>
  
          <!-- Academic Projects -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Academic Projects
            </h2>
            <div class="space-y-4">
              <div>
                <div class="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 class="font-bold text-lg text-gray-800">CRM & eCommerce Integration Project</h3>
                  <p class="text-gray-600 font-semibold">George Brown College</p>
                </div>
                <ul class="space-y-1">
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Led requirements elicitation and user story development</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Designed BPMN workflows and mapped customer journeys</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Prepared UAT scripts and facilitated test simulations</span>
                  </li>
                </ul>
              </div>
              <div>
                <div class="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 class="font-bold text-lg text-gray-800">Business Systems Analysis & Design</h3>
                  <p class="text-gray-600 font-semibold">George Brown College</p>
                </div>
                <ul class="space-y-1">
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Participated in Agile sprints to deliver iterative prototypes</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Conducted stakeholder interviews and requirements sessions</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Created technical documentation and solution wireframes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
  
          <!-- Professional Experience -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Professional Experience
            </h2>
            <div class="space-y-6">
              <!-- Admin Officer -->
              <div>
                <div class="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 class="font-bold text-lg text-gray-800">Assistant Admin Officer</h3>
                    <p class="text-gray-700">Rapid Vigil Security Company Ltd — Lagos, Nigeria</p>
                  </div>
                  <p class="text-gray-600 font-semibold">(Jan 2025 – Aug 2025)</p>
                </div>
                <ul class="space-y-1">
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Improved reporting accuracy by 15% through structured validation checks</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Reduced audit review time by 20% via complete compliance documentation</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Strengthened decision-making by delivering weekly summaries, reducing delays by 10%</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Increased documentation consistency by 30% through template optimization</span>
                  </li>
                </ul>
              </div>
  
              <!-- Accounts Intern -->
              <div>
                <div class="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 class="font-bold text-lg text-gray-800">Accounts Intern (NYSC)</h3>
                    <p class="text-gray-700">Rapid Vigil Security Company Ltd — Lagos, Nigeria</p>
                  </div>
                  <p class="text-gray-600 font-semibold">(2024 – 2025)</p>
                </div>
                <ul class="space-y-1">
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Ensured 98% accuracy in payroll and invoicing for 250+ employees/vendors</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Reduced record discrepancies by 25% through improved data entry processes</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Contributed to a 15% faster month-end closing process</span>
                  </li>
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Enhanced expense tracking efficiency by 18% via monitoring improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
  
          <!-- Volunteer Experience -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Volunteer Experience
            </h2>
            <div class="space-y-4">
              <div>
                <div class="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 class="font-bold text-lg text-gray-800">Treasurer – Music Department</h3>
                  <p class="text-gray-600 font-semibold">(2020 – 2023)</p>
                </div>
                <ul class="space-y-1">
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Managed budgets over 1.2 million, reducing irregularities by 30%</span>
                  </li>
                </ul>
              </div>
              <div>
                <div class="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 class="font-bold text-lg text-gray-800">Secretary – NUASA Social Committee</h3>
                  <p class="text-gray-600 font-semibold">(2022 – 2023)</p>
                </div>
                <ul class="space-y-1">
                  <li class="flex items-start space-x-2 text-gray-700">
                    <span class="text-blue-600 font-bold">•</span>
                    <span>Coordinated 15+ meetings and maintained documentation accuracy at 100%</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
  
          <!-- Interests -->
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-3 border-blue-600 uppercase tracking-wide">
              Interests
            </h2>
            <p class="text-gray-700">
              Process improvement, technology research, documentation design, volunteering, reading, teamwork
            </p>
          </section>
        </div>
      </div>
  
      <!-- Action Buttons - Bottom -->
      <!-- <div class="flex flex-wrap gap-4 justify-center mt-8 print:hidden">
        <button 
          @click="downloadResume" 
          class="px-6 py-3 bg-blue-600 text-white-100 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg inline-flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span>Download Resume (PDF)</span>
        </button>
        <RouterLink 
          to="/contact" 
          class="px-6 py-3 bg-purple-600 text-white-100 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg inline-flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          <span>Contact Me</span>
        </RouterLink>
      </div> -->
    </div>
  </template>
  
  <script setup lang="ts">
  const downloadResume = () => {
    // Open the PDF resume file - update this path to your actual PDF location
    window.open('/Olamide_Dada_Resume.pdf', '_blank')
  }
  
  const printResume = () => {
    window.print()
  }
  </script>
  
  <style scoped>
  /* Print styles */
  @media print {
    .print\:hidden {
      display: none !important;
    }
    
    .print\:bg-blue-600 {
      background-color: #2563eb !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    #resume-content {
      box-shadow: none !important;
      border-radius: 0 !important;
    }
    
    body {
      margin: 0;
      padding: 0;
    }
  }
  
  .border-b-3 {
    border-bottom-width: 3px;
  }
  </style>