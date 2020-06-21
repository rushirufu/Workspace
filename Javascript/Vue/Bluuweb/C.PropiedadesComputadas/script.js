const application = new Vue({
  el: "#App",
  data: {
    mensaje: "Hello World",
    contador: 0,
  },
  methods: {},
  computed: {
    invertirTexto() {
      return this.mensaje.split("").reverse().join("");
    },
    color() {
      return {
        "bg-succes": this.contador < 10,
        "bg-warning": this.contador > 10 && this.contador < 20,
        "bg-danger": this.contador >= 20,
      };
    },
  },
});
