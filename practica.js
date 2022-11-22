// ARRAYS --------------------------------------------------------------------------------------------------------------------------

class productos{
    constructor(id, categoria, tipo, nombre, precio, stock, img, unidades){
        this.id = id
        this.categoria = categoria
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.img = img
        this.unidades = unidades
    }
}

const perfume1 = new productos(1,"perfumeria","perfume","kaiak vital femenino",4722,5,"./img/perfume1.jpg",1)
const perfume2= new productos(2,"perfumeria","perfume","frescor ekos pataqueira",3346,5,"./img/perfume2.jpg",1)
const perfume3 = new productos(3, "perfumeria","perfume","essencial eau de parfum femenino",11230,5,"./img/perfume3.jpg",1)
const perfume4 = new productos(4,"perfumeria","perfume","kriska sonhos",3703,5,"./img/perfume4.jpg",1)
const perfume5 = new productos(5,"perfumeria","perfume","natura homem car.agio",10770,5,"./img/perfume5.jpg",1)
const crema1 = new productos(6,"cuidados diarios", "crema","pulpa hidratante para manos ekos castaña",1385,5,"./img/crema1.jpg",1)
const crema2 = new productos(7,"cuidados diarios", "crema","tododia hidratante lichia y flor de cassis",1603,5,"./img/crema2.jpg",1)
const crema3 = new productos(8,"cuidados diarios", "crema","hidratante de cuerpo Ekos Breu Branco",868,5,"./img/crema3.jpg",1)
const crema4 = new productos(9,"cuidados diarios", "crema","hidratante corporal hojas de limón y guanabana",1196,5,"./img/crema4.jpg",1)
const crema5 = new productos(10,"cuidados diarios", "crema","crema nutritiva corporal tododia dátiles y canela ",2061,5,"./img/crema5.jpg",1)
const cabello1 = new productos(11,"cabello","shampoo","repuesto shampoo liso y suelto",735,5,"./img/cabello1.jpg",1)
const cabello2 = new productos(12,"cabello","acondicionador","repuesto acondicionador liso y suelto",662,5,"./img/cabello2.jpg",1)
const cabello3 = new productos(13,"cabello","shampoo","repuesto shampoo revitalización post-química",735,5,"./img/cabello3.jpg",1)
const cabello4 = new productos(14,"cabello","shampoo","repuesto shampoo reequilibrante",884,5,"./img/cabello4.jpg",1)
const cabello5 = new productos(15,"cabello","shampoo","shampoo ekos patauá",1096,5,"./img/cabello5.jpg",1)
const maquillaje1 = new productos(16,"maquillaje","labial","labial ultra hidratante FPS15 UNA",1908,5,"./img/maquillaje1.jpg",1)
const maquillaje2 = new productos(17,"maquillaje","mascara","máscara UNA secret",2989,5,"./img/maquillaje2.jpg",1)
const maquillaje3 = new productos(18,"maquillaje","corrector","corrector alta cobertura UNA",1755,5,"./img/maquillaje3.jpg",1)
const maquillaje4 = new productos(19,"maquillaje","páletas","maxi paleta de sombras intenso",5793,5,"./img/maquillaje4.jpg",1)
const maquillaje5 = new productos(20,"maquillaje","delineador","delineador líquido de ojos",1290,5,"./img/maquillaje5.jpg",1)

let arrays = [perfume1, perfume2, perfume3, perfume4, perfume5, crema1, crema2, crema3, crema4, crema5, cabello1, cabello2, cabello3, cabello4, cabello5, maquillaje1, maquillaje2, maquillaje3, maquillaje4, maquillaje5]
let arrayProductos = []
let carrito = []



// VARIABLES --------------------------------------------------------------------------------------------------------------------------

// contador carrito
const contador = document.getElementById("contador")

// botón "vaciar carrito"
const vaciar = document.getElementById("vaciar")

// botón "finalizar compra"
const finalizar = document.getElementById("finalizar")

// monto total de la compra en carrito
const total = document.getElementById("total")

// buscador de productos
let input = document.getElementById("input")



// FUNCIONES --------------------------------------------------------------------------------------------------------------------------

// rendizar productos en div principal
const renderizar = (arrayProductos) => {
    const contenedorProductos = document.querySelector("#contenedorProductos")
    contenedorProductos.innerHTML = ""

    for (const producto of arrayProductos) {
        const {id, nombre, precio, stock, img} = producto
        contenedorProductos.innerHTML += 
        `
        <div class="tarjeta">
            <div class="img"><img src=${img}></div>
            <div class="h5"><h5>${nombre}</h5></div>
            <div class="p"><p>$${precio}</p></div>
            <div class="stock"><p>Quedan ${stock} u.</p></div>
            <div class="boton">
            <button onclick="agregarCarrito(${id})" class="button" >Agregar al carrito</button>
            </div>
        </div>
        `
    }

}

// filtrar productos
const filtrar = () =>{
    let filtrado = arrays.filter(producto => producto.nombre.includes(input.value))
    console.log(filtrado)
    renderizar(filtrado)
}

// agregar productos al carrito
const agregarCarrito = (id) => {

    const h42 = document.getElementById("h4Carrito2")
    h42.classList.add("ocultar")
    h42.classList.remove("mostrar")

    const existe = carrito.some(producto => producto.id == id)

    if(existe){
        const producto = carrito.map(producto => {
            if(producto.id == id){
                producto.unidades++
            }
        })
    }
    else{
        const item = arrays.find((producto) => producto.id == id)
        carrito.push(item)
    }

    mostrarCarrito()
}

// renderizar carrito
const mostrarCarrito = () => {
    const divCarrito = document.getElementById("carrito")
    divCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const {id, nombre, img, unidades = 1, precio} = producto
        divCarrito.innerHTML +=
        `
        <div class="carrito">
            <img class="imgCarrito" src=${img}>
                <div>
                    <h5 class="h5Carrito">${nombre}</h5>
                    <p class="pCarrito">${unidades}</p>
                    <p class="pCarrito">$ ${precio * unidades}</p>
                </div>
                <div class="boton"><button onclick="eliminarCarrito(${id})" class="btnCarrito button">Quitar</button></div>
        </div>
        `
    })

    if(carrito.length == 0){
        divCarrito.innerHTML = 
        `
        <h4 class="h4Carrito">Tu carrito está vacío.</h4>
        `
    }

    contador.textContent = carrito.length

    total.innerText = carrito.reduce((acumulador, producto) => acumulador + producto.unidades * producto.precio, 0 )

    guardarStorage()
}

// eliminar productos del carrito
const eliminarCarrito = (id) => {
    const productoId = id
    carrito = carrito.filter((producto) => producto.id != productoId)
    mostrarCarrito()
}

// guardar sotorage
const guardarStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



// EVENTOS --------------------------------------------------------------------------------------------------------------------------

// local storage
document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []

    mostrarCarrito()
})

// carrito
window.addEventListener("DOMContentLoaded", (e) => {
    
    const menuBoton = document.getElementById("menu")
    const div = document.querySelector("header div div")
    
    menuBoton.addEventListener("click", (e) => {
        menuBoton.classList.toggle("salir");
        div.classList.toggle("visible")
        })
})

// vaciar carrito
vaciar.addEventListener("click", () =>{
    carrito.length = []

    const h42 = document.getElementById("h4Carrito2")
    h42.classList.add("ocultar")
    h42.classList.remove("mostrar")

    mostrarCarrito()
})

// finalizar compra
finalizar.addEventListener("click", () =>{

    const h42 = document.getElementById("h4Carrito2")
    h42.classList.add("mostrar")

    if(carrito.length == 0){

        h42.innerText = 
        `Aún no elegiste ningún producto.`
    }
    else{
        h42.innerText = 
        `¡Gracias por tu compra!`
    }
    
    carrito.length = []

    mostrarCarrito()
})

// buscador de productos
input.addEventListener("input", filtrar)



// LLAMADO DE FUNCIONES --------------------------------------------------------------------------------------------------------------------------
renderizar(arrays)














