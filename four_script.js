// 4.Arreglo invertido
// Escribe una función que invierta los valores de un arreglo y los devuelva.
function reverse(arr) {
    // tu código aquí
    //
    let reverseArr=[]
    for (let i = 0; i < arr.length; i++) {
        reverseArr.push(arr[(arr.length-1)-i])
    }
    arr = reverseArr
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]