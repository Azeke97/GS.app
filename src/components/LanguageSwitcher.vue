<template>
  <select id="frm-whatever"
          class="peer border-gray-300 border sm:h-10 h-8 rounded-md bg-gray-50 px-4 font-700 outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
          name="whatever"
          @change="switchLanguage">
    <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`"
            :selected="locale === sLocale"
            :value="sLocale"
            class="py-4 px-2">{{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>
<script>
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

export default {
  name: 'LanguageSwitcher',
  setup () {
    const { t, locale } = useI18n()
    const supportedLocales = Tr.supportedLocales
    const switchLanguage = async (event) => {
      const newLocale = event.target.value
      await Tr.switchLanguage(newLocale)
    }
    return { t, locale, supportedLocales, switchLanguage }
  }
}
</script>
