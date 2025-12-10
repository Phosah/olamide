<template>
    <div class="max-w-6xl mx-auto py-8 px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Academic Transcripts</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Official and unofficial transcripts documenting my academic achievements and coursework.
        </p>
      </div>
  
      <!-- Notice -->
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-lg">
        <div class="flex items-start space-x-3">
          <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Privacy & Verification Notice</h3>
            <p class="text-gray-700">
              For privacy reasons, detailed transcripts are available upon request. Official transcripts 
              can be sent directly from the issuing institutions for verification purposes.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Transcript Cards -->
      <div class="space-y-8">
        <!-- George Brown College Transcript -->
        <div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
          <div class="flex items-start space-x-6">
            <div class="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
  
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-800">George Brown College</h3>
                  <p class="text-lg text-gray-700 font-medium">Postgraduate Certificate - Information Systems Business Analysis</p>
                  <p class="text-gray-600 mt-1">Toronto, Ontario, Canada</p>
                </div>
                <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold mt-2 md:mt-0">
                  In Progress
                </span>
              </div>
  
              <div class="mb-6">
                <h4 class="font-semibold text-lg text-gray-800 mb-3">Academic Standing</h4>
                <p class="text-gray-700 mb-2">
                  Currently enrolled and maintaining strong academic performance in the postgraduate program. 
                  Expected completion: 2026.
                </p>
              </div>
  
              <div class="mb-6">
                <h4 class="font-semibold text-lg text-gray-800 mb-3">Key Courses Completed</h4>
                <div class="grid md:grid-cols-2 gap-2 text-gray-700">
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Business Requirements Analysis</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Systems Analysis & Design</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Agile Project Management</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>CRM & eCommerce Systems</span>
                  </div>
                </div>
              </div>
  
              <div class="flex flex-wrap gap-3">
                <button 
                  @click="requestTranscript('GBC')"
                  class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Request Official Transcript
                </button>
                <button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                  View Course List
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Obafemi Awolowo University Transcript -->
        <div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
          <div class="flex items-start space-x-6">
            <div class="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
  
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-800">Obafemi Awolowo University</h3>
                  <p class="text-lg text-gray-700 font-medium">Bachelor of Science - Management & Accounting</p>
                  <p class="text-gray-600 mt-1">Ile-Ife, Osun State, Nigeria</p>
                </div>
                <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold mt-2 md:mt-0">
                  Second Class Upper
                </span>
              </div>
  
              <div class="mb-6">
                <h4 class="font-semibold text-lg text-gray-800 mb-3">Academic Achievement</h4>
                <div class="bg-green-50 rounded-lg p-4 border border-green-200 mb-4">
                  <div class="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p class="text-sm text-gray-600 mb-1">Classification</p>
                      <p class="text-xl font-bold text-green-700">Second Class Upper</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-600 mb-1">Duration</p>
                      <p class="text-xl font-bold text-green-700">May 2018 - Sept 2023</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-600 mb-1">Major</p>
                      <p class="text-xl font-bold text-green-700">Management & Accounting</p>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  Graduated with honors (equivalent to GPA 3.5-4.0), demonstrating strong performance in 
                  accounting, financial management, and business administration coursework.
                </p>
              </div>
  
              <div class="mb-6">
                <h4 class="font-semibold text-lg text-gray-800 mb-3">Major Coursework</h4>
                <div class="grid md:grid-cols-2 gap-2 text-gray-700">
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Financial Accounting</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Management Accounting</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Auditing & Taxation</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Corporate Finance</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Business Statistics</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Strategic Management</span>
                  </div>
                </div>
              </div>
  
              <div class="flex flex-wrap gap-3">
                <button 
                  @click="requestTranscript('OAU')"
                  class="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
                >
                  Request Official Transcript
                </button>
                <button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                  View Full Course List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Verification Information -->
      <div class="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-white">
        <h2 class="text-2xl font-bold mb-6">Transcript Verification</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-300">For Employers & Institutions</h3>
            <p class="text-gray-300 mb-4">
              Official transcripts can be requested directly from the institutions listed above. I'm happy 
              to facilitate this process and provide authorization for transcript release.
            </p>
            <div class="space-y-2 text-sm">
              <p class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Official transcripts sent directly to employers</span>
              </p>
              <p class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Digital or physical copies available</span>
              </p>
              <p class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Verification through official channels</span>
              </p>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-green-300">Contact Information</h3>
            <div class="space-y-3">
              <div>
                <p class="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:Olamide.Dada@georgebrown.ca" class="text-white hover:text-blue-300">
                  Olamide.Dada@georgebrown.ca
                </a>
              </div>
              <div>
                <p class="text-sm text-gray-400 mb-1">Phone</p>
                <a href="tel:+14383476556" class="text-white hover:text-blue-300">
                  +1 (438) 347-6556
                </a>
              </div>
              <p class="text-sm text-gray-400 mt-4">
                I typically process transcript requests within 2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const requestTranscript = (institution: string) => {
    // Create a mailto link for transcript requests
    const subject = `Official Transcript Request - ${institution}`
    const body = `Hello,
  
  I would like to request an official transcript from ${institution}. Please let me know the process and any required documentation.
  
  Thank you,
  Olamide Dada Victoria`
    
    window.location.href = `mailto:Olamide.Dada@georgebrown.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
  </script>