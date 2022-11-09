//VARIABLES
let validador = true
let validadorConfirmar = true
let menuPrincipal
let menuTienda
let menuTalles
let menuCantidades
let menuConfirmar
let menuFiltrar
let unidades
let total = 0
let buscarPrecios
let buscarProductos

//CONSTRUCTORES
class prendas {
    constructor(tipo) {
        this.tipo = tipo
    }
}
const superior = new prendas("REMERAS")
const inferior = new prendas("PANTALONES")
const calzados = new prendas("ZAPATILLAS")

const arrayPrendas = [superior, inferior, calzados]

//--------------------------------------------------------------------------------------------------------------

class prendasPorUnidad {
    constructor(nombre, talle, precio) {
        this.nombre = nombre
        this.talle = talle
        this.precio = precio
    }
}
const remera1 = new prendasPorUnidad("REMERA", "S", 2850)
const remera2 = new prendasPorUnidad("REMERA", "M", 2900)
const remera3 = new prendasPorUnidad("REMERA", "L", 2950)
const pantalon1 = new prendasPorUnidad("PANTALON", "38", 3400)
const pantalon2 = new prendasPorUnidad("PANTALON", "40", 3450)
const pantalon3 = new prendasPorUnidad("PANTALON", "42", 3500)
const zapatillas1 = new prendasPorUnidad("ZAPATILLAS", "38", 6750)
const zapatillas2 = new prendasPorUnidad("ZAPATILLAS", "40", 6800)
const zapatillas3 = new prendasPorUnidad("ZAPATILLAS", "42", 6850)

const arrayPrendasPorUnidad = [remera1, remera2, remera3, pantalon1, pantalon2, pantalon3, zapatillas1, zapatillas2, zapatillas3]

//--------------------------------------------------------------------------------------------------------------

//FUNCIONES

const primerMenu = () => {
    let opciones = parseInt(prompt(
        "PRIMER MENÚ.\n\n" +
        "Presione 1 para ir a la TIENDA.\n" +
        "Presione 2 para ir al CARRITO.\n" +
        "Presione 0 para SALIR"))
    return opciones
}

//--------------------------------------------------------------------------------------------------------------

const segundoMenu = (productoTipo1, productoTipo2, productoTipo3) => {
    let opciones = parseInt(prompt( //puede ser function
        "SEGUNDO MENÚ.\n\n" +
        "Presione 1 para comprar " + productoTipo1 + ".\n" +
        "Presione 2 para comprar " + productoTipo2 + ".\n" +
        "Presione 3 para comprar " + productoTipo3 + ".\n" +
        "Presione 4 para FILTRAR por precios.\n" +
        "Presione 5 para BUSCAR por productos.\n\n" +
        "Presione 0 para VOLVER."))

    return opciones
}

//--------------------------------------------------------------------------------------------------------------

const tercerMenu = (productoTalle1, productoTalle2, productoTalle3) => {
    let opciones = parseInt(prompt(
        "TERCER MENÚ.\n\n" +
        "Presione 1 para elegir talle " + productoTalle1 + ".\n" +
        "Presione 2 para elegir talle " + productoTalle2 + ".\n" +
        "Presione 3 para elegir talle " + productoTalle3 + ".\n" +
        "Presione 0 para VOLVER."))
    return opciones
}

const buscar = () => {
    buscarProductos = prompt("Escriba para buscar: REMERA ó PANTALON ó ZAPATILLAS").toUpperCase()
    const filtrarPorProductos = arrayPrendasPorUnidad.filter((productoFiltrado) => productoFiltrado.nombre == buscarProductos)
    
    for (const producto of filtrarPorProductos) {
            alert(producto.nombre + " " + producto.precio)
    }         
}

const filtrar = () => {
    buscarPrecios = parseInt(prompt("¿Hasta que precio quieres buscar?"))
    const filtrarPorPrecios = arrayPrendasPorUnidad.filter((prendaFiltrada) => prendaFiltrada.precio < buscarPrecios)

    for (const precios of filtrarPorPrecios) {
        alert(precios.nombre + " " + precios.precio)
    }
}


//--------------------------------------------------------------------------------------------------------------

//indica el resumen de tu compra a partir del tercer menú 
const resumenDeCompra = (productoNombre, productoTalle) => {
    return "ELEGISTE " + productoNombre + " TALLE " + productoTalle + "."
}

//--------------------------------------------------------------------------------------------------------------

//realiza la suma total del producto más iva a partir del tercer menú
const sumaIva = (valor, unidades) => {
    return (valor * 1.21) * unidades
}

//--------------------------------------------------------------------------------------------------------------

//almacena la cantidad de unidades a comprar a partir del tercer menú
const funcionCantidades = () => {
    let opciones = parseInt(prompt(
        "CUARTO MENÚ.\n\n" +
        "¿Cuántas unidades deseas comprar?"))
    return opciones
}

//--------------------------------------------------------------------------------------------------------------

//consulta la confirmación de compra a partir del cuarto menú(funciónCantidades)
const confirmador = () => {
    while (validador == true) {
        menuConfirmar = parseInt(prompt( //puede ser una function
            "QUINTO MENÚ.\n\n" +
            "Presione 1 para AGREGAR al carrito.\n" +
            "Presione 0 para CANCELAR."))

        if (menuConfirmar == 1) {
            alert("AGREGANDO AL CARRITO...")
            break
        }
        else if (menuConfirmar == 0) {
            alert("CANCELANDO...")
            break
        }
        else {
            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
        }
    }
}

const confirmadorFinal = () => {
    alert(totalCompra(arrayTotalCompra))

    while (validador == true) {
        menuConfirmar = parseInt(prompt( //puede ser una function
            "QUINTO MENÚ.\n\n" +
            "Presione 1 para CONFIRMAR la compra.\n" +
            "Presione 2 para ELIMINAR el carrito.\n" +
            "Presione 0 para CANCELAR la compra."))

        if (menuConfirmar == 0) {
            alert("VOLVIENDO AL MENÚ PRINCIPAL...")
            break
        }
        else if (menuConfirmar == 1) {
            alert("¡GRACIAS POR TU COMPRA!...")
            break
        }
        else if (menuConfirmar == 2) {
            alert("ELIMINANDO CARRITO...")

        }
        else {
            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
        }
    }
}

//--------------------------------------------------------------------------------------------------------------

const totalCompraPorUnidad = (cantidadPorUnidad) => {
    return "El precio es $" + cantidadPorUnidad
}

const totalCompra = (array) => {
    for (const unidades of array) {
        total += unidades
    }
    return "Tu compra total es $" + total + "."
}

let arrayTotalCompra = []

//--------------------------------------------------------------------------------------------------------------

const programa = () => {
    while (validador == true) {
        menuPrincipal = primerMenu()

        if (menuPrincipal == 0) {
            alert("¡GRACIAS POR TU VISITA!")
            break
        }
        else if (menuPrincipal == 1) {
            alert("INGRESANDO A LA TIENDA...")

            while (validador == true) {
                menuTienda = segundoMenu(arrayPrendas[0].tipo, arrayPrendas[1].tipo, arrayPrendas[2].tipo)

                if (menuTienda == 0) {
                    alert("SALIENDO DEL MENÚ TIENDA...")
                    break
                }
                else if (menuTienda == 1) {
                    alert("INGRESANDO AL MENÚ " + arrayPrendas[0].tipo + "...")

                    while (validador == true) {
                        menuTalles = tercerMenu(arrayPrendasPorUnidad[0].talle, arrayPrendasPorUnidad[1].talle, arrayPrendasPorUnidad[2].talle)

                        if (menuTalles == 0) {
                            alert("SALIENDO DEL MENÚ TALLES...")
                            break
                        }
                        else if (menuTalles == 1) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[0].nombre, arrayPrendasPorUnidad[0].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[0].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else if (menuTalles == 2) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[1].nombre, arrayPrendasPorUnidad[1].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[1].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else if (menuTalles == 3) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[2].nombre, arrayPrendasPorUnidad[2].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[2].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else {
                            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                        }
                    }
                }
                else if (menuTienda == 2) {
                    alert("INGRESANDO AL MENÚ " + arrayPrendas[1].tipo + "...")

                    while (validador == true) {
                        menuTalles = tercerMenu(arrayPrendasPorUnidad[3].talle, arrayPrendasPorUnidad[4].talle, arrayPrendasPorUnidad[5].talle)

                        if (menuTalles == 0) {
                            alert("SALIENDO DEL MENÚ TALLES...")
                            break
                        }
                        else if (menuTalles == 1) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[3].nombre, arrayPrendasPorUnidad[3].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[3].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else if (menuTalles == 2) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[4].nombre, arrayPrendasPorUnidad[4].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[4].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else if (menuTalles == 3) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[5].nombre, arrayPrendasPorUnidad[5].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[5].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else {
                            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                        }
                    }
                }
                else if (menuTienda == 3) {
                    alert("INGRESANDO AL MENÚ " + arrayPrendas[2].tipo + "...")

                    while (validador == true) {
                        menuTalles = tercerMenu(arrayPrendasPorUnidad[6].talle, arrayPrendasPorUnidad[7].talle, arrayPrendasPorUnidad[8].talle)

                        if (menuTalles == 0) {
                            alert("SALIENDO DEL MENÚ TALLES...")
                            break
                        }
                        else if (menuTalles == 1) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[6].nombre, arrayPrendasPorUnidad[6].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[6].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else if (menuTalles == 2) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[7].nombre, arrayPrendasPorUnidad[7].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[7].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else if (menuTalles == 3) {
                            alert(resumenDeCompra(arrayPrendasPorUnidad[8].nombre, arrayPrendasPorUnidad[8].talle))

                            while (validador == true) {
                                menuCantidades = funcionCantidades()

                                if (menuCantidades > 0) {
                                    unidades = sumaIva(arrayPrendasPorUnidad[8].precio, menuCantidades)
                                    alert(totalCompraPorUnidad(unidades))
                                    arrayTotalCompra.push(unidades)
                                    break
                                }
                                else {
                                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                                }
                            }
                            confirmador()
                        }
                        else {
                            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                        }
                    }
                }
                else if (menuTienda == 4) {
                    alert("INGRESANDO AL FILTRADOR DE PRECIOS.")

                    while (validador == true) {
                        menuFiltrar = parseInt(prompt(
                            "Presione 1 para FILTRAR por precios. \n" +
                            "Presione 0 para VOLVER."))

                        if (menuFiltrar == 0) {
                            alert("SALIENDO DEL MENÚ FILTRAR...")
                            break
                        }
                        else if (menuFiltrar == 1) {
                            filtrar()
                        }
                        else {
                            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                        }
                    }
                }
                else if (menuTienda == 5){
                    alert("INGRESANDO AL BUSCADOR DE PRODUCTOS.")

                    while (validador == true) {
                        menuFiltrar = parseInt(prompt(
                            "Presione 1 para BUSCAR productos. \n" +
                            "Presione 0 para VOLVER."))

                        if (menuFiltrar == 0) {
                            alert("SALIENDO DEL MENÚ BUSCAR...")
                            break
                        }
                        else if (menuFiltrar == 1) {
                            buscar()
                        }
                        else {
                            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                        }
                    }
                }
                else {
                    alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
                }
            }
        }
        else if (menuPrincipal == 2) {
            alert("INGRESANDO AL CARRITO...")
            confirmadorFinal()
        }
        else {
            alert("INGRESE UNA ÓPCIÓN VÁLIDA.")
        }
    }
}


programa()












