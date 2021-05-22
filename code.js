// function captura() {
//     let correo = document.getElementById("correo_user").value
//     let password = document.getElementById("pass_user").value

//     if (correo != '' && password != '') {
//         Swal.fire({
//             icon: 'success',
//             title: 'Ingreso correcto',
//             text: 'Bienvenido al sistema'
//         })
//         setTimeout('location.href = "C:/Users/migus/Desktop/repaso=js/login.html"', 2000)
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Ingreso incorrecto',
//             text: 'Olvidaste tus credenciales'
//         })
//     }
// }

// function cambio_imagen() {
//     let imagen = document.querySelector("#imagen_paro")
//     imagen.src = "https://www.semana.com/resizer/tcOyuTTcArR8IykJWqhQ0EnHEH0=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/O6HSLT7ABNCQLHIFIRF462IJHA.jpeg"
// }

// function personas_paro() {
//     let personas = document.querySelector("#cant_personas").value
//     personas = parseInt(personas)
//     switch (personas) {
//         case 100:
//             Swal.fire({
//                 icon: 'info',
//                 title: 'Son pocas personas',
//                 text: 'El gobierno no pondra atención'
//             })
//             break
//         case 200:
//             Swal.fire({
//                 icon: 'info',
//                 title: 'Aumentaron, pero no son suficientes',
//                 text: 'El gobierno no pondra atención'
//             })
//             break
//         case 300:
//             Swal.fire({
//                 icon: 'info',
//                 title: 'Sigan asi, Aun no colocan atencion',
//                 text: 'El gobierno no pondra atención'
//             })
//             break
//         default:
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Viva el paro nacional',
//                 text: 'Tombo el que no salte!'
//             })
//     }
// }

// function ciclos() {
//     for (let estudiantes = 15; estudiantes <= 40; estudiantes++) {
//         console.log(estudiantes)
//     }

//     // let contador = 100
//     // while (contador <= 120) {
//     //     console.log(contador)
//     //     contador++
//     // }

//     // let contador = 70
//     // do {
//     //     console.log(contador)
//     //     contador++
//     // } while (contador <= 90)


// }

// function multiplicaciones() {
//     let valor_tabla_js = document.querySelector("#valor_tabla").value
//     let valor_max_tabla_js = document.getElementById("valor_max_tabla").value
//     let resultado = ''
//     for (let n = 0; n <= valor_max_tabla_js; n++) {
//         resultado = n * valor_tabla_js
//         console.log(valor_tabla_js + ' X ' + n + '=' + resultado)
//     }
// }

// function calculo_resultado(operacion) {
//     let valor_tabla_js = document.querySelector("#valor1_calculadora").value
//     let valor_max_tabla_js = document.getElementById("valor2_calculadora").value
//     let resultado_div = document.getElementById("resultado_calculadora")
//     let calculo
//     switch (operacion) {
//         case "suma":
//             calculo = parseInt(valor_tabla_js) + parseInt(valor_max_tabla_js)
//             break
//         case "resta":
//             calculo = parseInt(valor_tabla_js) - parseInt(valor_max_tabla_js)
//             break
//         case "multi":
//             calculo = parseInt(valor_tabla_js) * parseInt(valor_max_tabla_js)
//             break
//         case "divi":
//             calculo = parseInt(valor_tabla_js) / parseInt(valor_max_tabla_js)
//             break
//     }
//     resultado_div.innerHTML = `<h2>${calculo}</h2>`

// }

// function guardar_dato(operacion) {
//     let data
//     console.log(operacion)
//     if (localStorage.getItem("operacion_calculadora") == null) {
//         localStorage.setItem("operacion_calculadora", operacion)
//     } else {
//         data = localStorage.getItem("operacion_calculadora")
//         localStorage.setItem("operacion_calculadora", data + operacion)
//     }
// }


// function calcular_dato() {
//     let resultado_div = document.getElementById("resultado_calculadora")
//     if (localStorage.getItem("operacion_calculadora") == null) {
//         console.log('Dijite los numeros')
//         resultado_div.innerHTML = `<h2>Dijite la operación</h2>`
//     } else {
//         let operacion_calc = localStorage.getItem('operacion_calculadora')
//         let resultado = eval(operacion_calc)
//         resultado_div.innerHTML = `<h2>${resultado}</h2>`
//     }
// }

// function borrar() {
//     let resultado_div = document.getElementById("resultado_calculadora")
//     if (localStorage.getItem("operacion_calculadora") != null) {
//         resultado_div.innerHTML = '<h2>0</h2>'
//         localStorage.clear()
//     } else {
//         localStorage.clear()
//         resultado_div.innerHTML = `<h2>Dijite la operación</h2>`
//     }
// }


// function arreglos_vectores() {
//     let contenido_div = document.getElementById("lista_estudiantes")
//     let estudiantes = [{"asdas":25, "a":true},'bogota', 'Ximena', 'Andres', 'Alison', 'Diana', 'Miguel', 'Tomas', 'Jose']
//     let data = [1, 10, 102, 14, 15, 18, 25, 2, 230]
//         /*estudiantes.pop() //elimina al final
//         estudiantes.shift() //elimina al principio
//         estudiantes.push("Antonio") //Agregar elemento al final
//         estudiantes.unshift("Cristian") //agregar al principio
//         estudiantes.splice(1, 0, "Erika", "David") //Eliminar o agregar a partir de una posicion un elemento
//         estudiantes.concat(data) // une un arreglo con otro arreglo sin alterarlos
//         */
//         // data.sort((a, b) => a - b)
//         // data.sort(function(a, b) {
//         //     return a - b
//         // })
//         // estudiantes.reverse()


//     estudiantes.forEach(function(element, index) {
//         contenido_div.innerHTML += `<option value="${index}">${element}</option>`
//             //console.log(element + " Este elemento esta en la posicion numero " + index)
//     })
//     estudiantes.splice(estudiantes.indexOf('Diana'), 0, "Sindy")
//     console.log(estudiantes)
//         // contenido_div.innerHTML = estudiantes.includes('Alison')
//         // console.log(estudiantes.includes('Alison'))
//         // console.log(estudiantes)
// }

// function saludo(){
//     console.log("Hola que tal")
// }

// saludo = () => console.log("Hola que tal")

// let litros = 9 // la respuesta de la api
// const x = new Promise((resolve, reject) => {
//     if (litros == 9) {
//         console.log("El contenido es correcto")
//     } else {
//         reject("Hay demasiado/poco contenido dentro de la botella")
//     }
// })
let contenedor = document.getElementById("api_data")
let api_rick = fetch("https://rickandmortyapi.com/api/character")
let estado
let punto
    // console.log(api_rick)
api_rick.then(res => res.json())
    .then(data_rick => {
        console.log(data_rick)
        for (const foca of data_rick.results) {
            estado = foca.status;
            if (estado == "Alive") {
                punto = `<div class="estado1">${foca.status}</div>`
            } else {
                punto = `<div class="estado2">${foca.status}</div>`
            }
            contenedor.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${foca.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${foca.name}</h5>
              <p>${foca.species}</p>
              <p>${punto}</p>
            </div>
          </div>`
        }
    }).catch(error_rick => console.log(error_rick))