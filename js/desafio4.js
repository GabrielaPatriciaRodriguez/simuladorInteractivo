/*Mi proyecto: Sera una aplicacion que permita conocer la recaudacion del dia de un Resto Bar 
de acuerdo al consumo total de cada mesa disponible.*/

/* Funcion llamada por la proxima funcion. Esta funcion permite conocer el total de cada mesa */

function totalMesa(numMesa) {
    let total = parseFloat(prompt("Ingrese el total de la mesa: " + numMesa));
    return total;
}

/* Esta funcion me dira la recaudacion del dia, en base al numero de mesas. El iterador comienza
en 1 y recaudacion esta en 0. El while tiene la condicion de que mientras el iterador sea menor 
o igual al numero de mesas recaudacion sera igual a recaudacion mas el totalMesa (llama a esta funcion)
i: primero es mesa 1 y la recaudacion es por ej $100, luego i es mesa 2 y su recaudacion es por ej $ 200, 
recaudacion aumenta a $300, i pasa a ser mesa 3, recaudacion aumenta nuevamente. Y asi hasta que
i sea <= al numero de mesas (que determino el usuario que estaban habilitadas, operativas ese dia) y 
termina el ciclo tirando el alert. */

function recaudacionDia(numerosMesas) {
    let i = 1;
    let recaudacion = 0;
    while (i <= numerosMesas) {
        recaudacion = recaudacion + totalMesa(i);
        i++;
    }
    alert("El total de las mesas del dia es $ " + recaudacion + ", mesas habilitadas: " + numerosMesas);
}

/* Es lo primero que va a ejecutar el programa, para que el usuario sepa de que se trata el programa. */

function principal() {
    alert("Se trata de una aplicacion que permite conocer la recaudacion del dia de acuerdo al consumo total de cada mesa disponible");
    let mesasHabilitadas = parseInt(prompt("Ingrese el total de mesas habilitadas hoy"));
    recaudacionDia(mesasHabilitadas);
}

principal();
/* Llamo a la funcion main para que muestre un alerta al usuario, donde explique en que
consiste el programa. Y que el usuario ingrese el total de mesas habilitadas en el dia. Luego ejecuto la funcion
recaudacionDia, que a su vez llama a la funcion totalMesa. */

