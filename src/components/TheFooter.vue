<template>
  <footer class="footer">
    <div class="container">
      <div class="flex justify-between items-center gap-10">
        <div class="grow-0 shrink-0 max-w-[300px]">
          <span class="">© 2023 Внешнеторговая палата Казахстана. Все права защищены.</span>
        </div>
        <div class="grow-0 shrink-0">
          <a class="flex item-center gap-2 text-[14px]" href="mailto:info.icc.kz@gmail.com">
            <img alt="" class="w-[18px]" src="/src/assets/images/mail.png">
            info.icc.kz@gmail.com
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
.footer {
  @apply bg-white flex items-center py-[30px];
  box-shadow: 0 4px 30px 0 #00000012;
  background: #e7e7e7;
}
</style>
