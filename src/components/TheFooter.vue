<template>
  <footer class="footer">
    <div class="container">
      <div class="flex justify-between items-center gap-4 sm:gap-10 sm:flex-row flex-col">
        <div class="grow-0 shrink-0 sm:text-left text-center">
          <p class="">{{ $t("footer.label.0") }}</p>
          <p class="">{{ $t("footer.label.1") }}</p>
        </div>
        <div class="grow-0 shrink-0">
          <a class="flex item-center gap-2 sm:text-[14px] text-[12px]" href="mailto:info.icc.kz@gmail.com">
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
