function calculateTax(amount){
    let tax = amount * 0.1;
    return tax;
}
console.log(calculateTax(100));


function convertToUpperCase(text){
    let capitalized = text.toUpperCase();
    return capitalized;
}
console.log(convertToUpperCase("duke"))

function findMaximum(num1, num2){
    let biggest = Math.max(num1, num2);
    return biggest;
}
console.log(findMaximum(100, 50))


function isPalindrome(word){
    let lower = word.toLowerCase();
    let reversed = lower.split('').reverse('').join('');
    return lower === reversed;
}
console.log(isPalindrome("mimim"))


function calculateDiscountedPrice(originalPrice, discountPercentage){
    let discountPrice = originalPrice * (discountPercentage/100);
    let discountAmount = originalPrice - discountPrice; 
    return discountAmount
}
console.log(calculateDiscountedPrice(100,0));






// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };