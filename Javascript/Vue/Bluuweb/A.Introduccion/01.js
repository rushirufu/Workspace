const application = new Vue({
  el: "#App",
  data: {
    Titulo: "Hola Vue",
    tituloArray: "Array Frutas - Inserte Solo Frutas ",
    tituloObjeto: "Objeto Frutas: ",
    arrayFrutas: [],
    objetoFrutas: [
      { nombreFruta: "Manzana", cantidad: 1 },
      { nombreFruta: "Pera", cantidad: 2 },
      { nombreFruta: "Durazno", cantidad: 3 },
      { nombreFruta: "Melon", cantidad: 4 },
      { nombreFruta: "Coco", cantidad: 5 },
    ],
    inputFrutas: "",
    inputObFruta: "asdasd",
    inputObCantidad: "",
    totalFrutas: 999999,
  },
  methods: {
    agregarFrutas() {
      this.arrayFrutas.push(this.inputFrutas);
      console.log(this.arrayFrutas);
      this.inputFrutas = "";
    },

    agregarItemObjetoFruta() {
      this.objetoFrutas.push({
        nombreFruta: this.inputObFruta,
        cantidad: this.inputObCantidad,
      });
      this.inputObFruta = "";
      this.inputObCantidad = "";
    },
  },
  computed: {
    sumarFrutas() {
      this.totalFrutas = 0;
      for (x of this.objetoFrutas) {
        this.totalFrutas = this.totalFrutas + x.cantidad;
      }
      return this.totalFrutas;
    },
  },
});
