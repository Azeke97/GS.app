import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../src/components/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    // route level code-splitting
    // this generates a separate chunk (add.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

function json () {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadSheet.getSheets()[0]
  const data = sheet.getDataRange().getValue()
  const jsonData = convertToJson(data)
  return ContentService.createTextOutput(JSON.stringify(jsonData)).setMimeType(ContentService.MimeType.JSON)
}

function convertToJson (data) {
  const headers = data[0]
  const rawData = data.slice()
  const json = []
  rawData.forEach((data) => {
    const Object = {}
    for (let i = 0; i < headers.length; i++) {
      Object[headers[i]] = data[i]
    }

    json.push(Object)
  })

  return json
}

function doGet (e) {
  const path = e.parameter.path
  return json(path)
}
