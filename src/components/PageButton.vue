<template>
  <button 
		class="button"
    @click="changePage" 
    > 
      {{ page }}
  </button>
</template>

<script>
import { FETCH_LIST } from '@/store'

export default {
  name: 'PageButton',
  props: {
    page :{
      type: Number,
      required : true
    }
  },
  methods: {
    changePage() {
      this.$store.dispatch(FETCH_LIST, { page: this.page })
    }
  }
}

// hard type the props to clean code
</script>

<style>
  .button {
    margin: 0 8px;
    font-weight: bold;
  }
</style>