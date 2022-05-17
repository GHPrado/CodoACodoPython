Vue.component('saludo', {
    template: "<h1>Hola Juan! (estático desde template)</h1>"
})

Vue.component('saludodos', {
    template: "<h1>{{msj}}</h1>",
    data(){//pasa a ser un método, deja de ser una propiedad
        return {
            msj: 'Hola Luis (dinámica y como componente)' 
        }
    }
})

Vue.component('saludotres', {
    //cuando tengo que utilizar más de una línea necesariamente usos los backticks (ALT + 96) y uso un contenedor
    template: ` 
        <div>
            <h1>{{msj}}</h1>
            <h2>{{titulo}}</h2>
            <p>{{parrafo}}</p>
        </div>
    `,
    data(){
        return {
            msj: 'Hola (dinámica y como componente)',
            titulo: "Título dinámico",
            parrafo: "Lorem bla bla bla....."
        }
    }
})

Vue.component('contador', {
    template: //html 
        `
        <div>
            <h3>Cantidad: {{num}}</h3>
            <button @click="num++">+</button>
            <button @click="num--">-</button>
        </div>
        `,
    // Ahora data en forma de función y puede retornar más de un dato
    data() {
        return {
            num: 0
        }
    }
})

var app = new Vue({
    el: '#app',
    // data: {
    //     msj: "Hola Mundo!"
    // }
})

