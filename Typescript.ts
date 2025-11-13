// INVENTORY MANAGEMENT SYSTEM

//Part 1: Basic Types, Arrays, and Tuples 
let productName: string = "Wireless Mouse";
let quantity: number = 100;
let isInStock: boolean = true;

// Array 
let tags: string[] = ["electronics", "gadget"];
let moreTags: Array<string> = ["accessory", "computer"];

// Tuple
let productInfo: [string, number, boolean] = ["Wireless Mouse", 29.99, true];


//Part 2: Object Types, Interfaces, and Type Aliases 
interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
  description?: string; 
  createdAt: Date;
}

let newProduct: Product = {
  id: 1,
  name: "Gaming Keyboard",
  price: 79.99,
  tags: ["electronics", "keyboard"],
  createdAt: new Date(),
};

type UserID = number | string;

let userId: UserID = 1234;



//Part 3: Union Types, Literal Types, and Enums
function displayStatus(status: "active" | "inactive" | "pending"): void {
  if (status === "active") console.log("Product is active and visible.");
  else if (status === "inactive") console.log("Product is inactive.");
  else console.log("Product is pending.");
}

displayStatus("active");
displayStatus("inactive");
displayStatus("pending");

const enum ProductStatus {
  Active,
  Inactive,
  Pending,
}

function displayEnumStatus(status: ProductStatus): void {
  switch (status) {
    case ProductStatus.Active:
      console.log("Product is active and visible.");
      break;
    case ProductStatus.Inactive:
      console.log("Product is inactive.");
      break;
    case ProductStatus.Pending:
      console.log("Product is pending approval.");
      break;
  }
 }

displayEnumStatus(ProductStatus.Active);
displayEnumStatus(ProductStatus.Inactive);
displayEnumStatus(ProductStatus.Pending);


// Explore any and unknown 
let data: unknown = 42;

if (typeof data === "number") {
  console.log(data.toFixed(2)); 
}

let flexibleData: any = "Hello World";
console.log(flexibleData.toUpperCase());


//  Part 4: Generics and Utility Types 
function getItemDetails<T>(item: T): T {
  return item;
}

console.log(getItemDetails("Laptop"));
console.log(getItemDetails(999));
console.log(getItemDetails(newProduct));

let productUpdate: Partial<Product> = {
  price: 69.99,
  description: "Discounted due to clearance sale"
}