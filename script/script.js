//Facciamo in modo che lo script scriva in console tutti i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
    //Facciamo in modo che per i numeri che sono multipli di 3 lo script sampi "fizz"
    if(i % 3 == 0){
        console.log(`Fizz!`)
    } else if (i % 5 == 0){
        console.log(`Buzz!`)
    }
}