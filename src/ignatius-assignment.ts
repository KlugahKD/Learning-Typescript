
// TypeScript Data Types Assignment: "Inventory Management System"

// -------- Part 1: Basic Types, Arrays, and Tuples --------

// Declare Basic Variables
let productName: string = "Smartphone";
let quantity: number = 100;
let isInStock: boolean = true;

// Create an Array (two syntax examples)
let tags: Array<string> = ["electronics", "gadget"];
let tagsAlt: string[] = ["mobile", "device"];

// Define a Tuple
let productInfo: [string, number, boolean] = ["Smartphone", 1200, true];

// -------- Part 2: Object Types, Interfaces, and Type Aliases 

// Define an Interface
interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
  description?: string;
  createdAt: Date;
}

// Create an Object
const newProduct: Product = {
  id: 1,
  name: "Smartphone X",
  price: 999,
  tags: ["electronics", "gadget"],
  createdAt: new Date(),
  description: "A high-end smartphone with powerful features."
};

// Use a Type Alias
type UserID = number | string;

let userId: UserID = 101; // works with number
userId = "ABC123"; // also works with string

//  Part 3: Union Types, Literal Types, and Enums 

// Implement a Union Type Function (literal type)
function displayStatus(status: 'active' | 'inactive' | 'pending'): void {
  console.log(`Product status is: ${status}`);
}

displayStatus('active');
displayStatus('inactive');
displayStatus('pending');

// Use an Enum
const enum ProductStatus {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending"
}

// Update the function to use Enum
function displayStatusEnum(status: ProductStatus): void {
  console.log(`Product status is: ${status}`);
}

displayStatusEnum(ProductStatus.Active);
displayStatusEnum(ProductStatus.Inactive);
displayStatusEnum(ProductStatus.Pending);

// Explore any and unknown
let data: unknown = 42;

// data.toFixed(2);

if (typeof data === "number") {
  console.log(data.toFixed(2));
}

let flexibleData: any = "I can be anything!";
console.log(flexibleData.toUpperCase()); 

// Part 4: Advanced Topics (Generics and Utility Types) 

// Generic Function
function getItemDetails<T>(item: T): T {
  return item;
}

console.log(getItemDetails<string>("Laptop"));
console.log(getItemDetails<number>(2025));
console.log(getItemDetails<Product>(newProduct));

// Apply a Utility Type
let productUpdate: Partial<Product> = {
  price: 899,
  description: "Discounted version of Smartphone X."
};
