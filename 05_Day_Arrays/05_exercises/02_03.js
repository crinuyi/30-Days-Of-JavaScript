const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart[0] != 'Meat')
    shoppingCart.unshift('Meat')

if(shoppingCart[shoppingCart.length-1] != 'Sugar')
    shoppingCart.push('Sugar')

let allergicToHoney = true;
if(allergicToHoney)
    if(shoppingCart.includes('Honey'))
        shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

console.log(shoppingCart)