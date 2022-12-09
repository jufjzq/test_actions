<template>
  <div id="app" v-fit="fitOption">
    <header></header>
    <aside class="left"></aside>
    <main></main>
    <aside class="right"></aside>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fitOption: {
        width: 3840,
        height: 2160,
        mode: 'scale',
      },
    }
  },
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: 50px 1fr;
  grid-column-gap: 20px;
}
header {
  background: gray;
  grid-area: 1 / 1 / 2 / 4;
}
aside {
  background-color: gold;
}
aside.left {
  grid-area: 2 / 1 / 3 / 2;
}
main {
  grid-area: 2 / 2 / 3 / 3;
  background-color: #000000ff;
}
aside.right {
  grid-area: 2 / 3 / 3 / 4;
}
</style>
