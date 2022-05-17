var agregarElementos = new Vue({
    el: '#ej_agregar',
    data: {
        titulo: "Supermercado Juan",
        subtitulo: "Agregando productos",
        productos: [
            { nombre: "Leche", cantidad: 10 },
            { nombre: "Café", cantidad: 3 },
            { nombre: "Azúcar", cantidad: 11 },
            { nombre: "Té", cantidad: 4 },
            { nombre: "Arroz", cantidad: 5 }
        ],
        nuevoProducto: '',
        total: 0
    },
    methods:{
        agregarProducto(){
            this.productos.push({nombre: this.nuevoProducto, cantidad: 0});
            this.nuevoProducto = '';
        },
        agregarProductoConIf(){
            if (this.nuevoProducto != "") {
                this.productos.push({ nombre: this.nuevoProducto, cantidad: 0});
                this.nuevoProducto = '';
                document.getElementById("aviso").innerHTML = "";
            } else {
                document.getElementById("aviso").innerHTML = "Falta producto!";
                alert("Caja de texto vacía!")
            }    
        }
    },
    computed: {
        sumarProductos() {
        //Esta función muestra la sumatoria total de cantidades de productos.
          this.total = 0;
          for (producto of this.productos) {
            this.total += producto.cantidad; //acumulador
            //this.total = this.total + producto.cantidad; //acumulador
          }
          return this.total;
        }
      }
})
