<script setup>
  import { RouterView } from "vue-router";
  import MainNavbar from "@/components/MainNavbar.vue";
  import FooterBar from "@/components/FooterBar.vue";
  </script>
  
  <template>
    <div class="flex flex-col min-h-screen p-3 font-workSans">
      <MainNavbar />
  
      <!-- Main content grows to fill the available space -->
      <div class="flex-1">
        <RouterView />
      </div>
  
      <!-- Sticky footer at bottom -->
      <FooterBar />
    </div>
  </template>
  
  <style>
  </style>
  