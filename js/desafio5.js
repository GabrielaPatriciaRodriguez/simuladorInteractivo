/* Cree 2 clases -Clase mesa, que tiene una propiedad monto y un metodo para recargar el 10%
si es compra financiada- y -Clase Local Comercial, que tiene 2 propiedades, mesasHabilitadas
y totalRecaudacion, que en principio se encuentra en cero. Este Local comercial tiene un 
metodo recaudacionDia, que tiene un while, el iterador comienza en 1 representado a la mesa 1,
y la condicion es mientras que iterador sea menor o igual a mesasHabilitadas, ejecuta el codigo
que esta adentro, es decir manda un alert diciendo que se va a sumar el total de la mesa 1,
mesa 2, y asi sucesivamente, hasta el numero que le paso el usuario de mesas habilitadas.
luego le pregunta el monto de la mesa y si es compra en efectivo o 2 si es compra con tarjeta.
En este ultimo caso aplica el recargo del 10% llamando a ese metodo. Luego total recaudacion es 
la suma de totalRecaudacion y el monto de la mesa, i++ va sumando mesa a mesa, hasta que se 
cumple la condicion y tira un alert diciendo que el total de las mesas del dia es igual a 
totalRecaudacion y la cantidad de mesas habilitadas.
Posteriormente, creo una constante bar que es un nuevo objeto LocalComercial y pido que ingrese
la cantidad de mesas habilitadas, y este llama a la funcion recaudacionDia, iniciando asi
el simulador. */

class Mesa {
    constructor(monto) {
        this.monto = monto;
    }
    /* Sumar recargo del 10% por compra financiada */
    sumaRecargoDiez() {
        this.monto = Math.round(this.monto * 1.10); 
    }
}

class LocalComercial {
    constructor(mesasHabilitadas) {
        this.mesasHabilitadas = mesasHabilitadas;
        this.totalRecaudacion = 0;
    }
    
    recaudacionDia() {
        let i = 1;
        
        while (i <= this.mesasHabilitadas) {
            alert("Se va a sumar el total de la mesa: " + i);
            let monto = parseFloat(prompt("Ingrese Monto de la mesa"));
            let medioPago = parseInt(prompt("Ingrese 1 si es efectivo, ingrese 2 si es tarjeta de credito"));
            let mesa = new Mesa(monto, i);
            
            if (medioPago == 2) {
               mesa.sumaRecargoDiez(); 
            }
            
            this.totalRecaudacion = this.totalRecaudacion + mesa.monto;
            i++;
        }

        alert("El total de las mesas del dia es $ " + this.totalRecaudacion + ", mesas habilitadas: " + this.mesasHabilitadas);
    }
}
const bar = new LocalComercial(parseInt(prompt("ingrese la cantidad de mesas habilitadas")));
bar.recaudacionDia();