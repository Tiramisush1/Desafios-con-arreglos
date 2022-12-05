function alwaysHungry(arr) {
    // tu código aquí
    let isMeal = null;
    for (let i = 0; i <arr.length; i++) {
        if ("comida"===arr[i]) {
            isMeal = "delicioso"
            console.log(isMeal);
        }
    }
    if (isMeal!=="delicioso") {
        console.log("tengo hambre");
    }
}
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);

alwaysHungry([4, 1, 5, 7, 2]);
