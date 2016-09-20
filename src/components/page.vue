<template>
  <div id="page">
    <div id="left">
      <filter-box :filter="filter" v-for="filter in filters"/>
    </div>
    <div id="center">
      <clients/>
    </div>
  </div>
</template>

<script>
import Filter from './left/filter.vue'
import Clients from './center/clients.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters({ 
    filters: 'filters'
  }),
  components: {
    'filter-box' : Filter,
    'clients' : Clients
  }
}
</script>

<style scoped>
#left {
  float: left;
  position: relative;
  height: 100%;
  width: 250px;
  margin: 0 5px 0 0;
  padding: 0;
}
#right {
  float: right;
  position: relative;
  width: 200px;
  margin: 0 0 0 5px;
}
#center {
  position: relative;
  overflow: hidden;
  margin: 0 0 0 5px;
  padding: 0;
}
</style>
