<style>
* {
  border: 20px seagreen solid;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  /*Tamano del documento*/
  width: 100vw;
  height: 100vh;

  /*    */
  background-color: #347af0;
  text-align: center;

  /*  Flex  */
  display: flex;
  flex-direction: column;
}
/* */
.LogoCompanyName {
  width: 30vw;
  height: auto;
}
</style>

<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "./components/views/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>