<template>
  <header class="header">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="flex justify-start items-center flex gap-5 py-1">
          <div class="grow-0 shrink-0">
            <img alt="" class="w-[80px] sm:w-[120px]" src="/src/assets/images/header-logo.png">
          </div>
          <div class="grow-0 shrink-0">
            <img alt="" class="w-[60px] sm:w-[80px]" src="/src/assets/images/logo-footer.png">
          </div>
        </div>
        <language-switcher/>
      </div>
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'TheHeader',
  components: { LanguageSwitcher }
}
</script>

<style scoped>
.header {
  @apply lg:h-[60px] bg-white flex items-center;
  box-shadow: 0 4px 30px 0 #00000012;
}
</style>
