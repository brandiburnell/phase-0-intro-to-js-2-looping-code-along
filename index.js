// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

const names = ["Brandi", "Tommy", "Brittany", "Nathan"];
const eventName = "wedding";

function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        console.log(messages[i]);
    }

    return messages;
}

writeCards(names, eventName);

function countDown(int) {
    while(int >= 0) {
        console.log(int);
        int --;
    }
}

countDown(10);