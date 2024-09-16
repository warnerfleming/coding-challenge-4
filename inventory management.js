//Task 1

const inventory = [
        {name: 'Battery', price: 80, quantity: 20, lowstocklevel: 5},
        {name: 'Charger', price: 20, quantity: 50, lowstocklevel: 20},
        {name: 'Case', price: 30, quantity: 10, lowstocklevel: 15},
        {name: 'Headphones', price: 40, quantity: 12, lowstocklevel: 10},
        {name: 'Speaker', price: 100, quantity: 3, lowstocklevel: 8}
]


//Task 2
 
function displayProductDetails (inventory) {
    inventory.forEach(item =>  {
    if (item.quantity > item.lowstocklevel) {
     console.log(`${item.name}, Price: $${item.price}, Quantity: ${item.quantity}, In Stock`)
    } else {
      console.log(`${item.name}, Price: $${item.price}, Quantity: ${item.quantity}, Low Stock`)
   }}   
   )}
displayProductDetails(inventory)

//Task 3

 let unitsSold = 6

function updateStock  (inventory,unitsSold){
   let headStock = inventory[3];
    let newstock =  headStock.quantity - unitsSold;

    if (newstock === 0)
      console.log("Headphones after sales: Out of Stock")
    else if (newstock < headStock.lowstocklevel)
        console.log("Headphones after sales: Low Stock")
    else 
    console.log("")
     }
   updateStock(inventory,unitsSold)

//Task 4
function checkLowStock (inventory) {
    inventory.forEach(item => {
    if (item.quantity <= item.lowstocklevel)
        console.log(`${item.name} stock is low`)


}  )
}

checkLowStock(inventory)

//Task 5 

function calculateInventoryValue (inventory) {
    return inventory.reduce((totalValue, item) =>  {
    return totalValue + (item.quantity * item.price)}, 0)
};

console.log(calculateInventoryValue(inventory))

