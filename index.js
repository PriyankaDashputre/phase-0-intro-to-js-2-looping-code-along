// Code your solutions in this file
function writeCards(names, value) {
let messageNames = [];
    for (let i = 0; i < names.length; i++) {
    messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);

}
return messageNames;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
function countDown(value){
    let countup = 10;
    while (countup >= 0) {
        console.log(countup--)
    } 
    return countup;
}
countDown(10);