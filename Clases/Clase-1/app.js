// console.log("Hola Mundo");

// let array = [1,2,4,8];
// let arrayResultado = [1];
// for (let i = 1; i < array.length; i++) {
//     arrayResultado[i] = array[i] + arrayResultado[i-1];
// }
// console.log(arrayResultado);


for (let i = 0; i < 3; i++) {
    let equipo1 = prompt("Ingrese un equipo");
    let gol1 = parseInt(prompt("Goles que marcó"));
    let equipo2 = prompt("Ingrese un equipo");
    let gol2 = parseInt(prompt("Goles que marcó"));
    let punto1;
    let punto2;
    if (gol1 > gol2) {
        punto1 = 3;
        punto2 = 0;
    }
    else if (gol1 < gol2) {
        punto2 = 3;
        punto1 = 0;
    }
    else if(gol1 = gol2){
        punto1 = 1;
        punto2 = 1;
    }

    document.write("<tr>")
    document.write("<td>" + equipo1 + "</td>") 
    document.write("<td>" + gol1 + "</td>") 
    document.write("<td>" + punto1 + "</td>") 
    document.write("<td>" + equipo2 + "</td>") 
    document.write("<td>" + gol2 + "</td>") 
    document.write("<td>" + punto2 + "</td>") 
    document.write("</tr>")
}
