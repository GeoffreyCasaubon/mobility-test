<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Repository</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="loading">
          <tr>
            <td colspan="2">Loading...</td>
          </tr>
        </template>

        <template v-else-if="items.length > 0">
          <tr 
            v-for="item in items" 
            :key="item.id"
            >
              <td>
                <a :href="item.url" target="_blank">{{ item.full_name }}</a>
              </td>
              <td>
                {{ item.description }}
              </td>
          </tr>
        </template>

        <template v-else>
          <tr>
            <td colspan="2">No items found.</td>
          </tr>
        </template>
      </tbody>
    </table>

    <PageButton
        v-for="page of pages"
        :page="page"
        :key="page"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_LIST, SET_LOADING } from '@/store'
import PageButton from '@/components/PageButton'

export default {
  name: 'List',
  components: { 
    PageButton
  },
  mounted() {
    this.$store.commit(SET_LOADING, true)
    this.$store.dispatch(FETCH_LIST)
    this.$store.commit(SET_LOADING, false)
  },
  computed: {
    ...mapGetters(['loading', 'items', 'total']),
    pages() {
      return Math.round(this.total / 20) > 10 ? 10 : Math.round(this.total / 20)
    }
  }
}

// rewrite the page computed
// use mapgetter to access store data because cleaner code here
// remove store import and access data with more logic way to do it
// clean HTML and open link in a new tab because it's external link so better for accessibility / UX
</script>

<style>
.container {
  margin: 0 auto;
}
table {
  width: calc(100% - 24px);
  margin: 12px;
  border-collapse: collapse;
}

td, th {
  border: 1px solid gray;
  padding: 8px;
  text-align: left;
}

th {
  background-color: lightgray;
  color: #2c3e50;
}
</style>