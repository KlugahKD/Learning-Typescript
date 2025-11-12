// basic types,Arrays, and tuples //
// Basic Variables //
var productName;
var quantity;
var isInStock;
// Array //
var tags;
// Tuple //
var productInfo;
// Object //
var newProduct = {
    id: 1,
    name: "ipad",
    price: 999.99,
    tags: ["electronic", "tool"],
    description: "High grade phone",
    createdAt: new Date(),
};
// Type Alias //
var userID;
userID: 123;
userID: "abena";
//Union Types, Literal Types, and Enums //
// Function //
function displayStatus(status) {
    if (status === 'active') {
        console.log("The account is currently active.");
    }
    else if (status === 'inactive') {
        console.log("The account is inactive. Please reactivate.");
    }
    else if (status === 'pending') {
        console.log("The account activation is pending approval.");
    }
}
// Calling the function with each valid literal type
displayStatus('active');
displayStatus('inactive');
displayStatus('pending');
function displayStatusEnum(status) {
    switch (status) {
        case 0 /* ProductStatus.Active */:
            console.log("Product is active.");
            break;
        case 1 /* ProductStatus.Inactive */:
            console.log("Product is inactive.");
            break;
        case 2 /* ProductStatus.Pending */:
            console.log("Product status is pending.");
            break;
    }
}
displayStatusEnum(0 /* ProductStatus.Active */);
displayStatusEnum(1 /* ProductStatus.Inactive */);
displayStatusEnum(2 /* ProductStatus.Pending */);
// Unknown //
var data = 7;
if (typeof data === "number")
    console.log(data.toFixed());
var flexibleData = "helllo";
console.log(flexibleData.toFixed());
function getItemDetails(item) {
    return item;
}
console.log(getItemDetails("hajia"));
console.log(getItemDetails(66));
console.log(getItemDetails(newProduct));
var productUpdate = {
    price: 1200,
    description: "Updated product description with discount"
};
console.log(productUpdate);
