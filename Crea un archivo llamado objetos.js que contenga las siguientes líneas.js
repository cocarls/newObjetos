//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
var persona = {
    nombre: "carlos",
    apellido: "coronado",
    edad: 18,
    altura: 1.69,
    eresDesarrollador: true
};

//Una variable que obtenga tu edad a partir del objeto anterior
var edad = persona.edad;

//Una lista que contenga el objeto con tus datos personales 
// y un nuevo objeto con los datos personales de tus dos mejores amig@s
var lista = [ persona, 
    
    {nombre: "jose",apellido: "hernandez", edad:19, altura: 1.70, eresDesarrollador: false},
    {nombre: "maria",apellido: "gutierrezz", edad:20, altura: 1.61, eresDesarrollador: false},
    

]

 
//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
var listaOrdenada = lista.sort(function(a,b){
    return a.edad - b.edad;
});
console.log(listaOrdenada)