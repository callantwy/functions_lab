// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

function sumArray(array){
    sum = 0
    for (var currentNum of array){
        sum += currentNum
    }
    return sum
}

console.log(sumArray(myNumbers))



// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.

function findEvens(array){
    var evens = []
    for (var number of array){
        var result = number % 2
        //console.log(result) 
        if (result === 0 ){
            evens.push(number)
        }
    }
    return evens
}
console.log(findEvens(myNumbers))






// Part 2

var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.

function totalCost(bill){
    var cost = 0
    for (var objectChecker of bill){
        cost += objectChecker['price']
    }
    return cost
}

console.log(totalCost(myBill))

// 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.

function customersMeal(bill,name){
    var meal = []
    for (var objectChecker of bill){
        if (name === objectChecker['customer'] ){
            meal.push(objectChecker['meal'])
        }
    }
    return meal
}

console.log(customersMeal(myBill,'Upul'))

// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.

function customersMealPrice(bill,name){
    var cost = 0
    for (var objectChecker of bill){
        if (name === objectChecker['customer'] ){
            cost += objectChecker['price']
        }
    }
    return cost
}

console.log(customersMealPrice(myBill,'Upul'))



// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.

function averageCost(bill){
    var cost = 0
    var counter = 0
    for (var objectChecker of bill){
        counter += 1
        cost += objectChecker['price']
    }
    return cost/counter
}

console.log(averageCost(myBill))


// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  }
}



// 3.a. Log out the the bodyBuilder's strength - the value should be 2.

// 3.b. Use the workOut function to update the bodyBuilder's strenth.

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.