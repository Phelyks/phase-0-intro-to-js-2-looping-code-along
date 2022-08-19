
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards (writeCards,event){
    const thankYouCards = []
    for (let i = 0; i < writeCards.length; i++) {
        thankYouCards.push(`Thank you, ${writeCards[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown (num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}




