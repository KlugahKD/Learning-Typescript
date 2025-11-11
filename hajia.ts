// basic types,Arrays, and tuples //

// Basic Variables //
let productName:string;
let quantity:number;
let isInStock:boolean;

// Array //
let tags: Array<string>;
 
// Tuple //
let productInfo :[string , number , boolean];   


// Object Types, Interfaces, and Type Aliases //

// interface //
interface Product { 
id :number;
name:string;
price: number;
tags: string[];
description?: string;
createdAt: Date;
}
 
// Object //
let newProduct:Product = {
  id: 1,
  name: "ipad",
  price: 999.99,
  tags: ["electronic" , "tool"],
  description: "High grade phone",
  createdAt: new Date(),
}

// Type Alias //
let userID: (number|string)
userID: 123;
userID: "abena"


//Union Types, Literal Types, and Enums //
// Function //
function displayStatus(status: 'active' | 'inactive' | 'pending'): void {
  if (status === 'active') {
    console.log("The account is currently active.");
  } else if (status === 'inactive') {
    console.log("The account is inactive. Please reactivate.");
  } else if (status === 'pending') {
    console.log("The account activation is pending approval.");
  }
}

// Calling the function with each valid literal type
displayStatus('active');
displayStatus('inactive');
displayStatus('pending');

// Enum //
const enum ProductStatus { 
Active,
Inactive,
Pending
}

function displayStatusEnum(status: ProductStatus): void {
  switch (status) {
    case ProductStatus.Active:
      console.log("Product is active.");
      break;
    case ProductStatus.Inactive:
      console.log("Product is inactive.");
      break;
    case ProductStatus.Pending:
      console.log("Product status is pending.");
      break;
  }
}

displayStatusEnum(ProductStatus.Active);
displayStatusEnum(ProductStatus.Inactive);
displayStatusEnum(ProductStatus.Pending);
 
// Unknown //
let data: unknown=7;

   


