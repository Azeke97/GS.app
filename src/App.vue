<template>
  <div class="flex justify-between flex-col min-h-screen">
    <the-header class="mb-10"/>
    <main class="mb-auto">
      <the-table class="mb-10"/>
    </main>
    <the-footer/>
  </div>
</template>

<script setup>
import TheTable from '@/components/TheTable.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'</script>

<style scoped>

</style>
