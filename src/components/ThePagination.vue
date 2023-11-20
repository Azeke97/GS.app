<template>
  <div class="example-five">
    <vue-awesome-paginate v-model="currentPage" :current-page="1"
                          :items-per-page="5"
                          :max-pages-shown="5"
                          :total-items="10">
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
</template>

<script>
import { ref } from 'vue'
import { VueAwesomePaginate } from 'vue-awesome-paginate'

export default {
  components: { VueAwesomePaginate },
  setup () {
    const currentPage = ref(1)
    return {
      currentPage
    }
  }
}
</script>

<style>
.example-five .pagination-container {
  border-radius: 5px;
  padding: 10px 0;
}

.example-five .paginate-buttons {
  width: 40px;
  height: 40px;
  margin-inline: 5px;
  cursor: pointer;
  background-color: #F9FAFB;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
}

.example-five .back-button {
  width: 70px;
}

.example-five .next-button {
  width: 70px;
}

.example-five .back-button svg {
  transform: rotate(180deg);
}

.example-five .active-page {
  background-color: #3B82F6;
  color: #fff;
}

.example-five .paginate-buttons:hover {
  background-color: #e5e5e5;

}

.example-five .active-page:hover {
  transition: all ease-in-out 0.2s;
  background-color: #355CF6;
  color: #fff;
}

.example-five .back-button:active,
.example-five .next-button:active {
  background-color: #dedede;
}
</style>
