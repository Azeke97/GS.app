<template>
  <div class="container">
    <div class="mb-5">
      <div class="sm:flex sm:items-center mb-[50px]">
        <div class="sm:flex-auto">
          <h1 class="sm:text-2xl text-xl font-semibold leading-6 text-gray-900">
            Пул иностранных предприятий
          </h1>
          <p class="mt-2 text-sm text-gray-700">
            Сведения об иностранных компаний
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
              class="flex items-center justify-center text-md font-medium rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-100 duration-300 active:shadow-lg active:shadow-blue-500 hover:shadow-lg hover:shadow-blue-500"
              type="button">
            <a class="sm:px-5 sm:py-2.5 px-4 py-2 flex items-center gap-1"
               href="https://docs.google.com/forms/d/1KFz9Sf2MKvHftmNcXXmWZ5EFxnMnCcqMgFLghXTI0Uw/viewform?pli=1&edit_requested=true"
               target="_blank">
              <span class="text-xl">+</span>
              Добавить клиента
            </a>
          </button>
        </div>
      </div>
      <div class="flex justify-end gap-10 mb-8">
        <div class="w-72">
          <label
              class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-500"
              for="4">Вид деятельности компании</label>
          <input v-model="searchString"
                 class="peer border-gray-300 border h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
                 placeholder="Введите текст"
                 type="text"/>

        </div>
        <div class="w-72 flex flex-col justify-between">
          <label
              class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-500"
              for="4">Цель интереса в Казахстане</label>
          <select id="frm-whatever"
                  v-model="target"
                  class="peer border-gray-300 border h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
                  name="whatever">
            <option class="py-4 px-2" value="">Выберите из списка</option>
            <option value="Заключение инвестиционного контракта">Заключение инвестиционного контракта</option>
            <option value="Продажа продукции">Продажа продукции</option>
            <option value="Услуги EPC">Услуги EPC</option>
          </select>
        </div>
        <div class="w-72 flex flex-col justify-between">
          <label
              class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-500"
              for="4">Страна</label>
          <input v-model="searchCountry"
                 class="peer border-gray-300 border h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
                 placeholder="Введите текст"
                 type="text"/>
        </div>

        <!--        <button v-on:click="sorting">Sorting</button>-->
      </div>
      <div class="flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="divide-y divide-gray-300">
                <thead class="bg-gray-50">
                <tr>
                  <th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">
                    №
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Наименование
                    компании
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Вид
                    деятельности
                    компании
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Страна
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Цель интереса в
                    Казахстан
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Дополнительные
                    детали целей
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Документ
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Заполняющая компания
                  </th>
                  <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Исполнитель и
                    контакты заполняющего
                  </th>

                  <th class="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col">
                    <span class="sr-only">Документ</span>
                  </th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(companies, index) in filteredWorkers"
                    :key="companies">
                  <td class="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {{ index + 1 }}
                  </td>
                  <td class="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {{ companies.company_name }}
                  </td>
                  <td class="whitespace-normal px-3 py-4 text-sm text-gray-500">{{ companies.OKED }}</td>
                  <td
                      class="whitespace-normal px-3 py-4 text-sm text-gray-500 max-w-[30%]">{{
                      companies.country
                    }}
                  </td>
                  <td class="whitespace-normal px-3 py-4 text-sm text-gray-500">{{ companies.target }}</td>
                  <td class="whitespace-normal px-3 py-4 text-sm text-gray-500">{{ companies.more }}</td>
                  <td class="whitespace-normal py-4 pl-3 pr-4 text-risht text-sm font-medium sm:pr-6">
                    <a :href="companies.docs" class="text-indigo-600 hover:text-indigo-900" target="_blank">
                      Скачать
                    </a>
                  </td>

                  <td class="whitespace-normal px-3 py-4 text-sm text-gray-500">{{ companies.company_fill }}</td>
                  <td class="whitespace-normal px-3 py-4 text-sm text-gray-500">{{ companies.executor }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <ThePagination/>
    </div>

  </div>

</template>

<script>
import ThePagination from '@/components/ThePagination.vue'
import axios from 'axios'

export default {
  components: { ThePagination },

  data () {
    return {
      input: '',
      companies: [],
      country: '',
      searchString: '',
      target: '',
      searchCountry: '',
      interval: null
    }
  },

  mounted () {
    this.gsAPICall()
    this.intervalFetchData()
  },

  computed: {
    filteredWorkers () {
      return this.companies.filter(c => {
        let isSearchString = true
        let isCountry = true
        let isTarget = true

        if (this.searchString.length) {
          isSearchString = c.OKED.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1
        }

        if (this.searchCountry.length) {
          isCountry = c.country.toLowerCase().indexOf(this.searchCountry.toLowerCase()) !== -1
        }

        if (this.target.length) {
          isTarget = c.target === this.target
        }

        return isSearchString && isCountry && isTarget
      })
    }

  },

  methods: {
    gsAPICall: function () {
      axios
        .get('https://script.google.com/macros/s/AKfycbwGMdmSld1v93XyyTZrElCfUluLPKnj6VP8TjYQE2aQAh7jKpydoQwKCmgmXdDl9hfw/exec')
        .then(response => {
          this.companies = response.data.data
          console.log(response.data.data)
        })
        .catch()
    },

    intervalFetchData: function () {
      setInterval(() => {
        this.gsAPICall()
      }, 60 * 60 * 1000)
    }
    // sorting: function () {
    //   this.companies.sort((a, b) => (a.companies > b.companies ? 1 : -1))
    // }
  }
}
</script>

<style>
</style>
