<template>
<div v-bind:class="[classBox,classFilter]" id="Filter">
  <h4>{{filter.label}}</h4>
  <table>
    <tr>
      <td><span class="count">xxx</span><a title="TEST">TEST</a></td>
      <td><span class="squaredRadio"><span class="input"></span></span></td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  data: function () { 
    return {
      classBox: 'box',
      classFilter: this.filter.color
    }
  }
}
</script>

<style scoped>
div.box {
  margin: 0 0 5px 0;
}

div.box h4{
  height: 3.1rem;
  margin: 0;
  margin-bottom: 1px;
  padding: 0 8px 0 0;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 2;
  color: #ffffff;
  text-align: right;
  font-weight: normal;
}

div.box table {
  position: relative;
  display: block;
  width: 100%;
  max-height: 200px;
  overflow-y: auto; 
  margin: 0;
  border-collapse: separate;
  border-spacing: 1px;
  background: #c8c8c8;
}

div.box tr {
  color: #323232;
  background-color: #f3f3f3;
  cursor: pointer;
}

.box table tr .squaredRadio,
.box table tr:hover .squaredRadio {
  background-color: #FFFFFF;
  height: 16px;
  padding: 3px;
  width: 16px;
}

.box table tr span,
.box table tr:hover span {
    float: right;
}

.box table tr a {
    display: block;
    padding: 0 0 0 2px;
    color: #323232;
    font: 12px/1.3 arial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    max-width: 195px;
    line-height: 1.4;
}

.box table tr .squaredRadio span,
.box table tr:hover .squaredRadio span {
    background-color: #D6D6D6;
    cursor: pointer;
    height: 10px;
    width: 10px;
}
.box table tr:hover {
    color: #ffffff;
    background-color: #8d8d8d;
}
.box table tr.selected a,
.box table tr:hover a {
    color: #ffffff;
}
.box table tr span,
.box table tr:hover span {
    float: right;
}
.box table tr .count,
.box table tr:hover .count{
    min-width: 30px;
    margin-left: 5px;
    font: 12px arial;
    line-height: 1.4;
}
.box table tr:hover .squaredRadio span {
    background-color: #8D8D8D;
}
table td:nth-child(1) { 
  width: 95%;
}
table td{
  padding: 0;
  border: 1px solid #fff;
}
.blue h4{
  background-color: #1d212a;
}
.yellow h4{
  background-color: #772e06;
}
.brown h4{
  background-color: #e3881c;
}
.orange h4{
  background-color: #c44803;
}
div.blue {
    border: 1px solid #1d212a;
}
div.yellow {
    border: 1px solid #772e06;
}
div.brown {
    border: 1px solid #e3881c;
}
div.orange {
    border: 1px solid #c44803;
}
</style>
