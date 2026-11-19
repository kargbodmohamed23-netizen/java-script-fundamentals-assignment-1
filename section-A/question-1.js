let price = 45;
let quantity = 4;

// calculate and log total cost

let totalCost = price * quantity;
console.log(`Total Cost: ${totalCost}`);

// substraction discount

let discountedCost = totalCost - 15;
console.log(`Discounted Cost: ${discountedCost}`);

//  split cost among three feriends
let costSplit = totalCost / 3;
console.log(`Cost split per person: ${costSplit}`);

// THE LEFT OVER AMOUNT
let leftOverAmount = totalCost % 7;
console.log(`Left over amount: ${leftOverAmount}`);
