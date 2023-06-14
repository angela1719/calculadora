window.addEventListener('load', () => {
    // variables para calculadora con teclas
    let tempA = '' //esta variable almacenara cada numero clickeado en los botones y los juntara como string
    let tempB = ''
    let primerNum = 0 //esta variable convierte cada numero clickeado en los botones por medio de parseInt en numeros enteros
    let resultado = 0
    let operacion = '' //esta variable almacenara cada signo clickeado en los botones
    

    // variable calculadora front input
    let numeroA = 0
    // captura calculadora input front
    let calculo = document.querySelector('.calculoFront')
    calculo.addEventListener('blur', (e)=>{
        numeroA = calculo.value
        console.log(numeroA)
    })
    let numeroB = 0
    let calculo2 = document.querySelector('.calculoFront2')
    calculo2.addEventListener('blur', (e)=>{
        numeroB = calculo2.value
        console.log(numeroB)
    })
    let boton = document.querySelector('.botonEnviar')
    boton.addEventListener('click', (e)=>{
        e.preventDefault()
        let resultado = parseInt(numeroA) + parseInt(numeroB)
        let contenedorHijo = document.querySelector('.mostrarResultado')
        contenedorHijo.innerHTML = `<p>Resultado: ${resultado}</p>`
    })

    // captura evento calculadora front con teclas
    let numero1 = document.querySelector('.botonUno')
    numero1.addEventListener('click', (e)=>{
        tempA += numero1.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero2 = document.querySelector('.botonDos')
    numero2.addEventListener('click', (e)=>{
        tempA += numero2.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero3 = document.querySelector('.botonTres')
    numero3.addEventListener('click', (e)=>{
        tempA += numero3.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero4 = document.querySelector('.botonCuatro')
    numero4.addEventListener('click', (e)=>{
        tempA += numero4.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero5 = document.querySelector('.botonCinco')
    numero5.addEventListener('click', (e)=>{
        tempA += numero5.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero6 = document.querySelector('.botonSeis')
    numero6.addEventListener('click', (e)=>{
        tempA += numero6.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero7 = document.querySelector('.botonSiete')
    numero7.addEventListener('click', (e)=>{
        tempA += numero7.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero8 = document.querySelector('.botonOcho')
    numero8.addEventListener('click', (e)=>{
        tempA += numero8.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero9 = document.querySelector('.botonNueve')
    numero9.addEventListener('click', (e)=>{
        tempA += numero9.value
        document.querySelector('.inputResultado').value = tempA
    })
    let numero0 = document.querySelector('.botonCero')
    numero0.addEventListener('click', (e)=>{
        tempA += numero0.value
        document.querySelector('.inputResultado').value = tempA
    })
    let igual = document.querySelector('.botonIgual')
    igual.addEventListener('click', (e)=>{
        switch (operacion) {
                case '+':  
                resultado += primerNum + parseInt(tempA) 
                break;
                case '-':  
                resultado = resultado - (parseInt(tempA) - primerNum)
                break;
                case '*':  
                resultado *= primerNum * parseInt(tempA) 
                break;
                case '/':  
                resultado /= primerNum / parseInt(tempA) 
                break;
        
            default:
                break;
        }
       
        document.querySelector('.inputResultado').value = resultado
        primerNum = resultado
        resultado = 0
        tempA = ''
        console.log(tempA)
    
    })
    let suma = document.querySelector('.botonSuma')
    suma.addEventListener('click', (e)=>{
        if(tempA != ''){ // controla que tempA tenga un numero cargado antes de realizar la suma, ya que si viene vacio al tratar de convertirlo nos daria NaN(no es un numero,por lo tanto no se puede convertir)
            if(primerNum != ''){
                resultado += primerNum

            }
            
            primerNum = parseInt(tempA)
            operacion = '+'
            tempA = '' //aca la variable se resetea, para poder agregar mas numeros desde cero
        } 
        
    })
    let resta = document.querySelector('.botonResta')
    resta.addEventListener('click', (e)=>{
        if(tempA != ''){ // controla que tempA tenga un numero cargado antes de realizar la suma, ya que si viene vacio al tratar de convertirlo nos daria NaN(no es un numero,por lo tanto no se puede convertir)
            if(primerNum != ''){
                resultado -= primerNum

            }
            
            primerNum = parseInt(tempA)
            operacion = '-'
            tempA = '' //aca la variable se resetea, para poder agregar mas numeros desde cero
        } 
        
    })
    let multiplicacion= document.querySelector('.botonMultiplicar')
    multiplicacion.addEventListener('click', (e)=>{
        if(tempA != ''){ // controla que tempA tenga un numero cargado antes de realizar la suma, ya que si viene vacio al tratar de convertirlo nos daria NaN(no es un numero,por lo tanto no se puede convertir)
            if(primerNum != ''){
                resultado *= primerNum

            }
            
            primerNum = parseInt(tempA)
            operacion = '*'
            tempA = '' //aca la variable se resetea, para poder agregar mas numeros desde cero
        } 
    })

})