///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const calculateTotal = (cart) => {
    const total = cart.reduce((accumulator, food) => {
        return accumulator + food.price;
    }, 0); 

    return total; 
}; 

const totalAmount = calculateTotal(cart); 
console.log(totalAmount); 





// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const taxAmount = cartTotal * tax;
    const finalPrice = cartTotal + taxAmount - couponValue;
    return finalPrice;
  };
  
  // Example usage
  const cartTotal = 100;
  const couponValue = 10;
  const tax = 0.06;
  
  const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
  console.log(finalPrice);

  



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 

    A customer object would have these 4 properties. 
    First is the customer's first and last name, their phone number and email. 
    All of these are essential to identifying the customer and the items that they ordered from the restaurant. 
*/

/*







*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    firstName: "Isir",
    lastName: "Osman",
    email: "iosman16@gmail.com",
    phoneNumber: "6515003653"
  };
  
  console.log(customer.firstName);     
  console.log(customer.lastName);      
  console.log(customer.email);         
  console.log(customer.phoneNumber);

  