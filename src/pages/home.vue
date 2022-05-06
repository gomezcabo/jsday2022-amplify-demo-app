<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
</script>

<template>
  <section class="h-full">
    <div class="text-center mt-4">
      <h1 class="text-5xl flex flex-col gap-2 font-bold text-gray-900">
        <span class="block text-gray-800">Welcome to our conference</span>
        <span class="block text-orange-600">Amplify Demo</span>
      </h1>
      <div class="w-full flex justify-center mt-16">
        <qrcode-vue value="https://github.com/gomezcabo/jsday2022-amplify-demo-app" :size="150" background="#f3f4f6" />
      </div>
    </div>
  </section>
</template>
