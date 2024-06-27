//Facciamo in modo che lo script scriva in console tutti i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if(i % 3 == 0 && i % 5 == 0){ //Facciamo in modo che per i numeri che sono multipli di 3 e 5 lo script stampi "FizzBuzz"
        console.log(`FizzBuzz!`);
    } else if (i % 3 == 0){ //Facciamo in modo che per i numeri che sono multipli di 3 lo script stampi "fizz"
        console.log(`Fizz!`);
    } else if (i % 5 == 0){ //Facciamo in modo che per i numeri che sono multipli di 5 lo script stampi "Buzz"
        console.log(`Buzz!`);
    } 
}