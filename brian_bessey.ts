
// ---------- Part 1: Basic Types, Arrays, and Tuples ----------
let productName: string = "Phone";
let quantity: number = 10;
let isInStock: boolean = true;

let tags: string[] = ["electronics", "device"];
let tagsAlt: Array<string> = ["tech", "gadget"];

let productInfo: [string, number, boolean] = ["Phone", 599, true];

// ---------- Part 2: Object Types, Interfaces, and Type Aliases ----------
interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
  description?: string;
  createdAt: Date;
}

const newProduct: Product = {
  id: 1,
  name: "Headphones",
  price: 199,
  tags: ["audio", "wireless"],
  createdAt: new Date(),
  description: "Noise-cancelling"
};

type UserID = number | string;
let userId: UserID = 101;
userId = "user-101";

// ---------- Part 3: Union Types, Literal Types, and Enums ----------
function displayStatus(status: "active" | "inactive" | "pending"): void {
  console.log("Status:", status);
}
displayStatus("active");
displayStatus("inactive");
displayStatus("pending");

const enum ProductStatus {
  Active,
  Inactive,
  Pending
}

function displayStatusEnum(status: ProductStatus): void {
  if (status === ProductStatus.Active) console.log("Active");
  else if (status === ProductStatus.Inactive) console.log("Inactive");
  else console.log("Pending");
}

displayStatusEnum(ProductStatus.Active);
displayStatusEnum(ProductStatus.Pending);

let data: unknown = 45;
if (typeof data === "number") console.log(data.toFixed(1));

let flexibleData: any = "Test";
console.log(flexibleData.toUpperCase());

// ---------- Part 4: Generics and Utility Types ----------
function getItemDetails<T>(item: T): T {
  return item;
}
console.log(getItemDetails("Laptop"));
console.log(getItemDetails(250));
console.log(getItemDetails(newProduct));

let productUpdate: Partial<Product> = {
  price: 150,
  description: "Discounted version"
};
console.log("Product Update:", productUpdate);
