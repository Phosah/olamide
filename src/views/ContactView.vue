<template>
    <div class="max-w-6xl mx-auto py-8 px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          I'm always open to discussing business analysis opportunities, collaboration, or answering questions about my work.
        </p>
      </div>
  
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="space-y-6">
          <div class="bg-white-100 rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <!-- Email -->
            <div class="flex items-start space-x-4 mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-800 mb-1">Email</h3>
                <a href="mailto:Olamide.Dada@georgebrown.ca" class="text-blue-600 hover:underline">
                  Olamide.Dada@georgebrown.ca
                </a>
              </div>
            </div>
  
            <!-- Phone -->
            <div class="flex items-start space-x-4 mb-6">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-800 mb-1">Phone</h3>
                <a href="tel:+14383476556" class="text-green-600 hover:underline">
                  +1 (438) 347-6556
                </a>
              </div>
            </div>
  
            <!-- Location -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-800 mb-1">Location</h3>
                <p class="text-gray-600">71 Orleans Drive</p>
                <p class="text-gray-600">Scarborough, Toronto, ON M1C 4S9</p>
                <p class="text-gray-600">Canada</p>
              </div>
            </div>
          </div>
  
          <!-- Social Links / Resume Download -->
          <!-- <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white-100">
            <h2 class="text-2xl font-bold mb-6">Quick Actions</h2>
            <div class="space-y-4">
              <a 
                href="/path-to-resume.pdf" 
                download
                class="flex items-center space-x-3 bg-white-100 text-blue-600 rounded-lg p-4 hover:bg-gray-100 transition-all"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span class="font-semibold">Download Resume</span>
              </a>
              <RouterLink 
                to="/resume"
                class="flex items-center space-x-3 bg-white-100 text-blue-600 rounded-lg p-4 hover:bg-gray-100 transition-all"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span class="font-semibold">View Full Resume</span>
              </RouterLink>
              <a 
                href="https://www.linkedin.com/in/yourprofile" 
                target="_blank"
                class="flex items-center space-x-3 bg-white-100 text-blue-600 rounded-lg p-4 hover:bg-gray-100 transition-all"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span class="font-semibold">LinkedIn Profile</span>
              </a>
            </div>
          </div> -->
  
          <!-- Availability -->
          <div class="bg-green-50 rounded-lg shadow-lg p-8 border-2 border-green-200">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 class="font-semibold text-lg text-gray-800">Currently Available</h3>
            </div>
            <p class="text-gray-700">
              Open to full-time Business Analyst positions, internships, and freelance projects starting Spring 2026.
            </p>
          </div>
        </div>
  
        <!-- Contact Form -->
        <div class="bg-white-100 rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-gray-700 font-semibold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
  
            <!-- Email -->
            <div>
              <label for="email" class="block text-gray-700 font-semibold mb-2">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
  
            <!-- Subject -->
            <div>
              <label for="subject" class="block text-gray-700 font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Business Inquiry"
              />
            </div>
  
            <!-- Message -->
            <div>
              <label for="message" class="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full px-6 py-3 bg-blue-600 text-white-100 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
  
            <!-- Note -->
            <p class="text-sm text-gray-600 text-center">
              * All fields are required. I'll respond within 24-48 hours.
            </p>
          </form>
  
          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            <p class="font-semibold">Thank you for your message!</p>
            <p class="text-sm">I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
  
      <!-- FAQ Section -->
      <!-- <div class="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 class="font-semibold text-lg text-gray-800 mb-2">What types of projects are you interested in?</h3>
            <p class="text-gray-700">
              I'm particularly interested in business analysis roles focused on financial systems, CRM integration, 
              process improvement, and digital transformation projects.
            </p>
          </div>
          <div>
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Are you available for remote work?</h3>
            <p class="text-gray-700">
              Yes, I'm open to both remote and on-site opportunities in the Toronto area, with flexibility for 
              hybrid arrangements.
            </p>
          </div>
          <div>
            <h3 class="font-semibold text-lg text-gray-800 mb-2">What is your expected graduation date?</h3>
            <p class="text-gray-700">
              I'm expected to complete my postgraduate certificate in Information Systems Business Analysis at 
              George Brown College in 2026.
            </p>
          </div>
          <div>
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Do you offer consulting services?</h3>
            <p class="text-gray-700">
              I'm open to discussing consulting opportunities, particularly for small to medium-sized projects 
              involving requirements gathering, process documentation, or business analysis.
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const showSuccess = ref(false)
  
  const handleSubmit = () => {
    // In a real application, you would send this data to a backend
    // For now, we'll just show a success message
    showSuccess.value = true
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:Olamide.Dada@georgebrown.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    
    // Reset form
    setTimeout(() => {
      formData.name = ''
      formData.email = ''
      formData.subject = ''
      formData.message = ''
      showSuccess.value = false
    }, 3000)
  }
  </script>

<!-- <template>
    <div>
        <Contact />
    </div>
</template>

<script setup lang="ts">
    import Contact from "@/components/Contact.vue";
</script> -->