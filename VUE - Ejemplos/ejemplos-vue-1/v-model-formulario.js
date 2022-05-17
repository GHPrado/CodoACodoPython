var myObject = new Vue({
  el: '#app2',
  data: { 
    nombre: '',
    apellido: '',
    edad: '',
    cursos: [
      {nro: 1, nombre: 'HTML'},
      {nro: 2, nombre: 'CSS'},
      {nro: 3, nombre: 'JS'}
    ],
    modulo: 'Front-end'
  }
})