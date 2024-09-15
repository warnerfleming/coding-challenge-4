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
       return  console.log(`${item.name} : In Stock`)
    } else {
      return  console.log(`${item.name} : Low Stock`)
   }}   
   )}
displayProductDetails(inventory)


