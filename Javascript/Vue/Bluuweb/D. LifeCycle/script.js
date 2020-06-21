const application = new Vue({
  el: "#App",
  data: {
    message: "LifeCyle Vue 2",
  },
  created() {
    console.log("Create");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },

  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },
});
