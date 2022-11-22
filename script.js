class productos{
    constructor(id, categoria, tipo, nombre, precio, stock, img){
        this.id = id
        this.categoria = categoria
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.img = img
    }
}

const perfume1 = new productos(1,"perfumeria","perfume","Kaiak Vital Femenino",4722,5,"./img/perfume1.jpg")
const perfume2= new productos(2,"perfumeria","perfume","Frescor Ekos Pataqueira",3346,5,"./img/perfume2.jpg")
const perfume3 = new productos(3, "perfumeria","perfume","Essencial Eau De Parfum Femenino",11230,5,"./img/perfume3.jpg")
const perfume4 = new productos(4,"perfumeria","perfume","Kriska Sonhos",3703,5,"./img/perfume4.jpg")
const perfume5 = new productos(5,"perfumeria","perfume","Natura Homem Car.agio",10770,5,"./img/perfume5.jpg")
const crema1 = new productos(6,"cuidados diarios", "crema","Pulpa Hidratante para Manos Ekos Castaña",1385,5,"./img/crema1.jpg")
const crema2 = new productos(7,"cuidados diarios", "crema","Tododia Hidratante Lichia y Flor de Cassis",1603,5,"./img/crema2.jpg")
const crema3 = new productos(8,"cuidados diarios", "crema","Hidratante de cuerpo Ekos Breu Branco",868,5,"./img/crema3.jpg")
const crema4 = new productos(9,"cuidados diarios", "crema","Hidratante Corporal Hojas de Limón y Guanabana",1196,5,"./img/crema4.jpg")
const crema5 = new productos(10,"cuidados diarios", "crema","Crema Nutritiva Corporal Tododia Dátiles y Canela ",2061,5,"./img/crema5.jpg")
const cabello1 = new productos(11,"cabello","shampoo","Repuesto Shampoo Liso y Suelto",735,5,"./img/cabello1.jpg")
const cabello2 = new productos(12,"cabello","acondicionador","Repuesto Acondicionador Liso y Suelto",662,5,"./img/cabello2.jpg")
const cabello3 = new productos(13,"cabello","shampoo","Repuesto Shampoo Revitalización Post-Química",735,5,"./img/cabello3.jpg")
const cabello4 = new productos(14,"cabello","shampoo","Repuesto Shampoo reequilibrante",884,5,"./img/cabello4.jpg")
const cabello5 = new productos(15,"cabello","shampoo","Shampoo Ekos Patauá",1096,5,"./img/cabello5.jpg")
const maquillaje1 = new productos(16,"maquillaje","labial","Labial Ultra Hidratante FPS15 UNA",1908,5,"./img/maquillaje1.jpg")
const maquillaje2 = new productos(17,"maquillaje","mascara","Máscara Una secret",2989,5,"./img/maquillaje2.jpg")
const maquillaje3 = new productos(18,"maquillaje","corrector","Corrector alta cobertura UNA",1755,5,"./img/maquillaje3.jpg")
const maquillaje4 = new productos(19,"maquillaje","páletas","Maxi Paleta de Sombras Intenso",5793,5,"./img/maquillaje4.jpg")
const maquillaje5 = new productos(20,"maquillaje","delineador","Delineador Líquido de Ojos",1290,5,"./img/maquillaje5.jpg")

let arrays = [perfume1, perfume2, perfume3, perfume4, perfume5, crema1, crema2, crema3, crema4, crema5, cabello1, cabello2, cabello3, cabello4, cabello5, maquillaje1, maquillaje2, maquillaje3, maquillaje4, maquillaje5]

// ---------------------------------------------------------------------------------------------------

let main = document.getElementById("main")
let carrito = document.getElementById("carrito")
let input = document.getElementById("input")

let arrayCarrito = []



const renderizar = (arrayProductos) => {
    main.innerHTML = ""

    for (const producto of arrayProductos) {
        let divColumna = document.createElement("div")
        divColumna.classList.add("columna")
        divColumna.innerHTML = 
            `
            <div class="img"><img src=${producto.img}></div>
            <div class="h5"><h5>${producto.nombre}</h5></div>
            <div class="p"><p>$${producto.precio}</p></div>
            <div class="stock"><p>Quedan ${producto.stock} u.</p></div>
            <div class="boton"><button class="button" id="${producto.id}">Agregar al carrito</button></div>
            `
    
            main.append(divColumna)
        }

        let botones = document.getElementsByClassName("button")
        for (const boton of botones) {
            boton.addEventListener("click", agregarCarrito)
        }
}

const agregarCarrito = (e) => {
    console.dir(e.target.id)

    let buscado = arrays.find(producto => producto.id == e.target.id)
    let posicion = arrayCarrito.findIndex(producto => producto.id == e.target.id)

    if(posicion != -1){
        arrayCarrito[posicion] = {
            id: arrayCarrito[posicion].id, 
            nombre: arrayCarrito[posicion].nombre, 
            precio: arrayCarrito[posicion].precio, 
            img: arrayCarrito[posicion].img, 
            unidades: arrayCarrito[posicion].unidades + 1, 
            subtotal: arrayCarrito[posicion].precio * (arrayCarrito[posicion].unidades + 1)
        }
    }
    else{
        arrayCarrito.push({
            id: buscado.id, 
            nombre: buscado.nombre, 
            precio: buscado.precio, 
            img: buscado.img, 
            unidades: 1, 
            subtotal: buscado.precio
        })
    }

    renderizarCarrito()
}

const eliminarItem = (id) => {
    const productoId = id
    arrayCarrito = arrayCarrito.filter((producto) => producto.id !== productoId)

    renderizarCarrito()
}

const renderizarCarrito = () => {
    carrito.innerHTML = ""
    for (const item of arrayCarrito) {
        carrito.innerHTML +=
        `
        <div class="carrito">
            <img class="imgCarrito" src=${item.img}>
                <div
                    <h5 class="h5Carrito">${item.nombre}</h5>
                    <p class="pCarrito">${item.unidades}</p>
                    <p class="pCarrito">$ ${item.subtotal}</p>
                </div>
                <div class="boton"><button onclick="eliminarItem(${item.id})" class="button">Eliminar del carrito</button></div>
        </div>
        `
    }

    guardarStorage()
}

const guardarStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
}

const fnInput = () =>{
    let filtrado = arrays.filter(producto => producto.nombre.includes(input.value))
    renderizar(filtrado)
}

renderizar(arrays)
input.addEventListener("input", fnInput)
document.addEventListener("DOMContentLoaded", () => {
    arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || []
    renderizarCarrito()
})


