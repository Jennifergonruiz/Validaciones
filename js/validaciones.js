1 // validar nombre
    /**verificar que es un string
     * verificar que solo hay letras 
     * verificar que no haya números ni caracteres especiales
     */
    /**
     * Funcion para validar un texto
     * @param {string} nombre
     * @return {boolean} boolean true or false
     */
    function validarNombre(nombre){
        const name = nombre.trim(); // con trim elimina los espacios sobrantes delante y detras
        // console.log("sin liampiar: ", nombre, " y limpio: ", name)
        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/; // la parte roja con letras es lenguaje reyes para validar //lo amarillo es para agrupar // el + es para repetir las veces que quiera
        //if(!pattern.test(input.value)){
        if (typeof name !== 'string'|| name === "" || !pattern.test(name)){ //la exclamacion (!) hace la frase negativa, esta preguntando si name no es un string || comprobar que no sea un caracter vacio || para evitar que el usuario meta cosas que no sean letras, solo pude poner letras
            console.log("entro en el if")
            
            return false
        } else {
            return true
        }
    }
    console.log(validarNombre(" Maria Jose ")) 
    console.log(validarNombre("            ")) 
    console.log(validarNombre(" Add83eyn72 ")) 



2 // validar email
    /**verificar que el @ este bien colocado y se vea (ejemplo@email)
     * verificar que termine en .com o .es (extension del servidor)
     * restringir los servidores de email o verificar el email por otro lado
     */
    function validarEmail(email){
        const correo = email.trim(); // con trim elimina los espacios sobrantes delante y detras
        const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // la parte roja con letras es lenguaje reyes para validar //lo amarillo es para agrupar // el + es para repetir las veces que quiera
        // console.log("sin liampiar: ", nombre, " y limpio: ", name)
        if (typeof correo !== 'string'|| correo === "" || !pattern.test(correo)){ //la exclamacion (!) hace la frase negativa, esta preguntando si name no es un string || comprobar que no sea un caracter vacio || para evitar que el usuario meta cosas que no sean letras, solo pude poner letras
            console.log("entro en el if")
            
            return false
        } else {
            return true
        }
    }
    console.log(validarEmail(" jennifer@email.com "))
    console.log(validarEmail(" 68768@gmail.com "))
    console.log(validarEmail(" 68768@js "))
    
3 // validar URL

    function validarURL(url1){
        const url = url1.trim(); // con trim elimina los espacios sobrantes delante y detras
        const pattern = /\/(\w+)\/(\w+)(\?{1}.*)?$/; // la parte roja con letras es lenguaje reyes para validar //lo amarillo es para agrupar // el + es para repetir las veces que quiera
        // console.log("sin liampiar: ", nombre, " y limpio: ", name)
        if (typeof url !== 'string'|| url === "" || !pattern.test(url)){ //la exclamacion (!) hace la frase negativa, esta preguntando si name no es un string || comprobar que no sea un caracter vacio || para evitar que el usuario meta cosas que no sean letras, solo pude poner letras
        console.log("entro en el if")
        
            return false
        } else {
            return true
        }
    }
    console.log(validarURL(" https://www.w3schools.com/ "))
    console.log(validarURL(" http:/barcelonageeks.com/como-validar-una-url-usando-una-expresion-regular-en-javascript "))
    console.log(validarURL(" httresion-regular-en-javascript/ "))

4 // validar fecha

    function validarFecha(fecha1){
        const fecha = fecha1.trim();
        const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
        if (typeof fecha !== 'string'|| fecha === "" || !pattern.test(fecha)){
            console.log("entro en el if")

            return false
        } else {
            return true
        }
    }
    console.log(validarFecha(" 2023/04/09 "))
    console.log(validarFecha("  "))
    console.log(validarFecha(" 09/04/2023 "))


5 // validar tiempo (hora)

    function validarHora(hora1){
    const hora = hora1.trim();
    const pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (typeof hora !== 'string'|| hora === "" || !pattern.test(hora)){
        console.log("entro en el if")

        return false
    } else {
        return true
    }
}
    console.log(validarHora(" 2023/04/09 "))
    console.log(validarHora("  "))
    console.log(validarHora(" 09/04/2023 "))


6 // validar fecha de control

function validarHora(hora1){
    const hora = hora1.trim();
    const pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (typeof hora !== 'string'|| hora === "" || !pattern.test(hora)){
        console.log("entro en el if")

        return false
    } else {
        return true
    }
}
    console.log(validarHora(" 2023/04/09 "))
    console.log(validarHora("  "))
    console.log(validarHora(" 09/04/2023 "))

7 // validar mes
8 // validar semana
9 // validar numero
10 // validar intervalo
11 // validar télefono
    /**verificar que es un número
     * limitar la entrada de números a 9
     * 
     */
12 // validar término de búsqueda
13 // validar color favorito