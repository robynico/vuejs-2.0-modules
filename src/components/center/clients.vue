<template>
  <div>
    <div class="header">
      <div class="search">
        <form method="post" onsubmit="return false;">
            <input type="search" placeholder="SEARCH" value="">
        </form>
      </div>
      <h4>RESULTS</h4>
    </div>
    <table class="prism dataList">
        <thead>
          <tr>
            <th v-for="field in fields">
              <span class="spanHeader" :title="field.label">{{field.label}}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients">
              <td v-for="field in fields">
                {{client[field.field]}}
              </td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters({ 
    clients: 'clients',
    fields: 'fields'
  }),
  methods: mapActions({ 
    init: 'init'
  }),
  created: () => {
    console.log(this.init)
  }
}
</script>

<style scoped>
.header{
  height: 3.1rem;
  margin: 0;
  margin-bottom: 1px;
  padding: 0 8px 0 0;
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 2;
  color: #ffffff;
  background-color: #013A57;
  text-align: left;
  font-weight: normal;
  float: left;
  width: 100%;
}
tbody tr:nth-child(even) {background: #f3f3f3;}
tbody tr:nth-child(odd) {background: #e7e7e7;}
thead th{
  padding: 4px;
}
table {
    width: 100%;
    margin: 0;
    text-align: left;
    border-collapse: separate;
    border-spacing: 1px;
    background: #f1f1f1;
    color: #5c5c5c;
    font-weight: normal;
    font-size: 1.5rem;
}
table td{
  border: 1px solid #ffffff;
  padding: 5px;
}
.search {
  float: left;
}
h4{
  float: left;
  width: 40%;
  margin: 0 0 0 8px;
  padding: 0;
  font-size: 1.5rem;
  line-height: 2;
  font-weight: normal;
}
.search input {
  padding: 0.4em;
  height: 3.1rem;
  width: 26.4rem;
  border: 1px solid #B8B8B8;
  background-color: #FFFFFF;
}
</style>
