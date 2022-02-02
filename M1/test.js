function remaining(budget,groceryItems){
    let result = 0;
    for(item of groceryItems){
        result += item;
    }

    return budget - result;
}

const budget = 500;
const totals = [125.75, 250.75, 345.25];

console.log(remaining(500,totals));

function printInvite(array){
    for(let i =0; i < array.length; i++){
        array[i] = `Dear ${array[i]}, you are cordially invited to my dinner party.`
    }

    return array;
}

console.log(printInvite(['Bob','Angela']));

