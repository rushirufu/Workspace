const application = new Vue({
  el: "#App",
  data: {
    Titulo: "Hola Vue",
    tituloArray: "Array Frutas - Inserte Solo Frutas ",
    tituloObjeto: "Objeto Frutas: ",
    arrayFrutas: [],
    objetoFrutas: [
      { nombreFruta: "Manzana", cantidad: 0 },
      { nombreFruta: "Pera", cantidad: 2 },
      { nombreFruta: "Durazno", cantidad: 3 },
      { nombreFruta: "Melon", cantidad: 3 },
      { nombreFruta: "Coco", cantidad: 3 },
    ],
    inputFrutas: "",
    inputObFruta: "asdasd",
    inputObCantidad: "",
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
});
