<template>
  <main>
    <div class="container">
      <div class="mb-5">
        <div class="sm:flex sm:items-center mb-[50px]">
          <div class="sm:flex-auto">
            <h1 class="sm:text-2xl text-xl font-semibold leading-6 text-gray-900">
              {{ $t("nav.title") }}
            </h1>
            <p class="mt-2 text-sm text-gray-700">
              {{ $t("nav.desc") }}
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
                {{ $t("nav.button") }}
              </a>
            </button>
          </div>
        </div>
        <div class="flex justify-end gap-10 mb-8">
          <div class="w-72">
            <label
                class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-500"
                for="4">{{ $t("nav.filters.label.0") }}</label>
            <input v-model="searchString"
                   :placeholder="$t('nav.filters.placeholder')"
                   class="peer border-gray-300 border h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
                   type="text"/>

          </div>
          <div class="w-72 flex flex-col justify-between">
            <label
                class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-500"
                for="4">{{ $t("nav.select.label") }}</label>
            <select id="frm-whatever"
                    v-model="target"
                    class="peer border-gray-300 border h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
                    name="whatever">
              <option class="py-4 px-2" value="">{{ $t("nav.select.options.0") }}</option>
              <option value="Заключение инвестиционного контракта">{{ $t("nav.select.options.1") }}</option>
              <option value="Продажа продукции">{{ $t("nav.select.options.2") }}</option>
              <option value="Услуги EPC">{{ $t("nav.select.options.3") }}</option>
            </select>
          </div>
          <div class="w-72 flex flex-col justify-between">
            <label
                class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-500"
                for="4">{{ $t("nav.filters.label.1") }}</label>
            <input v-model="searchCountry"
                   :placeholder="$t('nav.filters.placeholder')"
                   class="peer border-gray-300 border h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
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
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.0") }}
                    </th>
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.1") }}
                    </th>
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.2") }}
                    </th>
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.3") }}
                    </th>
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.4") }}
                    </th>
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.5") }}
                    </th>
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.6") }}
                    </th>
                    <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                      {{ $t("table.title.7") }}
                    </th>

                    <th class="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col">
                      <span class="sr-only">{{ $t("table.title.8") }}</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="(companies, index) in filteredWorkers"
                      :key="companies">
                    <td class="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {{ index + 1 }}
                    </td>
                    <td class="whitespace-normal py-3 px-3 text-sm font-medium text-gray-900">
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
                      <a v-if="companies.docs" :href="companies.docs" class="text-indigo-600 hover:text-indigo-900"
                         target="_blank">
                        {{ $t("table.download") }}
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
      <div v-if="loading" class="flex justify-center mt-20">
        <the-spinner/>
      </div>

      <div v-if="companies.length > perPage" class="flex justify-end example-five">
        <vue-awesome-paginate v-model="page"
                              :items-per-page="perPage"
                              :max-pages-shown="5"
                              :on-click="onChangePage"
                              :total-items="companies.length">
          <template #prev-button>
          <span class="flex items-center justify-around">
            <svg
                fill="black"
                height="8"
                viewBox="0 0 24 24"
                width="8"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
            </svg>
            Prev
          </span>
          </template>

          <template #next-button>
          <span class="flex items-center justify-around">
            Next
            <svg
                fill="black"
                height="8"
                viewBox="0 0 24 24"
                width="8"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
            </svg>
          </span>
          </template>
        </vue-awesome-paginate>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import { VueAwesomePaginate } from 'vue-awesome-paginate'
import TheSpinner from '@/components/Spinner.vue'
import { useI18n } from 'vue-i18n'

export default {
  components: { TheSpinner, VueAwesomePaginate },

  data () {
    return {
      input: '',
      companies: [],
      page: 1,
      perPage: 10,
      country: '',
      searchString: '',
      target: '',
      searchCountry: '',
      interval: null,
      loading: false
    }
  },

  setup () {
    const { t } = useI18n()
    return { t }
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
      }).splice((this.page - 1) * this.perPage, this.perPage)
    }
  },

  methods: {
    gsAPICall: function () {
      this.loading = true
      axios
        .get('https://script.google.com/macros/s/AKfycbwGMdmSld1v93XyyTZrElCfUluLPKnj6VP8TjYQE2aQAh7jKpydoQwKCmgmXdDl9hfw/exec')
        .then(response => {
          this.companies = response.data.data
          console.log(response.data.data)
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false
        })
    },

    intervalFetchData: function () {
      setInterval(() => {
        this.gsAPICall()
      }, 60 * 60 * 1000)
    },

    onChangePage (page) {
      this.page = page
    }
  },

  watch: {
    searchString (v) {
      this.page = 1
    },

    searchCountry (v) {
      this.page = 1
    },

    target (v) {
      this.page = 1
    }
  }
}
</script>
