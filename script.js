
let usuarioIngresado = prompt("Ingrese su nombre de usuario:")
let inicio = true
let primerMenu
let segundoMenu
let tercerMenu
let remeras = 4500
let pantalones = 7800
let zapatillas = 15000
let iva = 21

const saludo = (usuario) => {
    alert("¡Bienvenido, " + usuario)
}
const programa = () => {
    while (inicio == true) {
        primerMenu = parseInt(prompt(
            'Presione "1" para ir a la tienda.\n' +
            'Presione "0" para salir.'))
    
    
        if (primerMenu == 1) {
            alert("Ingresando a la tienda..")
    
            while (inicio == true) {
                segundoMenu = parseInt(prompt(
                    '¿Qué te gustaría comprar?\n\n' +
                    'LOS PRECIOS NO INCLUYEN IVA\n\n' +
                    'Presione "1" para comprar remeras: $' + remeras + '.\n' +
                    'Presione "2" para comprar pantalones: $' + pantalones + '.\n' +
                    'Presione "3" para comprar zapatillas: $' + zapatillas + '.\n\n' +
                    'Presione "0" para salir.'
    
                    ))
                if (segundoMenu == 0) {
                    alert('Saliendo del menú tienda..')
                    break
                } else if (segundoMenu == 1) {
                    alert(
                        'Haz elegido comprar remeras.\n\n' +
                        'El precio final es: $' + (remeras + (remeras * iva / 100)))
                } else if (segundoMenu == 2) {
                    alert(
                        'Haz elegido comprar pantalones.\n\n' +
                        'El precio final es: $' + (pantalones + (pantalones * iva / 100)))
                } else if (segundoMenu == 3) {
                    alert(
                        'Haz elegido comprar zapatillas.\n\n' +
                        'El precio final es: $' + (zapatillas + (zapatillas * iva / 100)))
                } else {
                    alert('Ingrese una opción valida.')
                }
    
                if(segundoMenu == 1 || segundoMenu == 2 || segundoMenu ==3){
                    while(inicio == true){
                        tercerMenu = parseInt(prompt(
                            'Presione "1" para confirmar compra.\n' + 
                            'Presione "2" para cancelar compra.'))
    
                        if(tercerMenu == 1){
                            alert('¡Gracias por su compra!')
                            break
                        } else if(tercerMenu == 2){
                            alert('Cancelando su compra..')
                            break
                        } else{
                            alert('Ingrese una opción válida.')
                        }
                    }
                    
                }
            }
        } 
        else if (primerMenu == 0) {
            alert('¡Gracias por tu visita!')
            break
        } 
        else {
            alert('Ingrese una opción válida.')
        }
    }
}

saludo(usuarioIngresado)
programa()