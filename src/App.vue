<template>
  <div id="app">
    <page/>
  </div>
</template>

<script>
import Page from './components/page.vue'

export default {
  components: {
    'Page': Page
  }
}
</script>

<style>
html {
  font-size: 62.5%;
}
body {
  font: 600 1em/1 "HelveticaNeue","HelveticaNeueLTStd",Helmet,Freesans,sans-serif;
}
p, ul, ol, dl, blockquote, pre, td, th, label, textarea, caption, details, figure {
  margin: 0;
  line-height: 1;
}
ul, ol {
  padding-left: 0;
  list-style: none;
}
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
input, label, button {
    float: none;
    margin: 0;
    padding: 0;
    border: 0 none;
    font: 400 1em/1 "HelveticaNeueLTStd",Helmet,Freesans,sans-serif;
}
</style>
