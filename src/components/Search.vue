<template>
  <div class="search">
    <label>
      Search
      <input 
        type="text" 
        v-model="search" 
        @change="fetchResults"
        required
      />
      <div v-if="error" class="error"> You must enter a search</div>
    </label>
  </div>
</template>

<script>
import { FETCH_LIST } from '@/store'

export default {
  name: 'Search',
  data () {
    return {
      search: this.initialSearch,
      error:false
    }
  },
  props: {
    initialSearch: {
      type: String,
      default: ''
    },
  },
  methods: {
    fetchResults () {

      if(this.search === ''){ 
        this.error = true
      }else{
        this.error = false
        this.$store.dispatch(FETCH_LIST, { search: this.search })
      }

    }
  }
}

// add props to get the initial version of the code
// add error handleing to avoid empty calls and remove this logic from store
</script>

<style scoped>
.search {
  margin: 12px;
}

label {
  font-weight: bold;
  margin-right: 12px;
}

.error{
  color:red;
}
</style>


