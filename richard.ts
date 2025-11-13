let productName: string;
let quantity: number;
let isINStock: boolean;
let tags: Array<string>;
let productInfo: [string, number, boolean];

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
    name: "Mackbook Pro",
    price: 25000.00,
    tags: ["electronics", "laptop"],
    description: "M4 Chip with 16GB RAM",
    createdAt: new Date(),
};

type UserID = string | number;
let userId: UserID = "user327";
let userId2: UserID = 327;



function displayStatus(status: "Active" | "Inactive" | "Pending"): void {
    console.log(`The status is: ${status}`);
}

displayStatus("Active");
displayStatus("Inactive");
displayStatus("Pending");


enum ProductStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

function displayProductStatus(status: ProductStatus): void {
    console.log(`The product status is: ${status}`);
}

displayProductStatus(ProductStatus.Active);
displayProductStatus(ProductStatus.Inactive);
displayProductStatus(ProductStatus.Pending);


//Exploring any and unknown types
let data: unknown = 10;
data.tofixed();

if (typeof data === "number") {
    console.log(data.toFixed());
}

let flexibleData: any = 20;
flexibleData.toFixed();





//Using the generic function
function getItemDetails<T>(item: T): T {
    return item;
}

let stringItem = getItemDetails<string>("Sample String Item");
console.log(stringItem);

let numberItem = getItemDetails<number>(100);
console.log(numberItem);



//Utility Types
type PartialProduct {
    id: number;
    name: string;
    price: number;
}

let partialProduct: Partial<PartialProduct> = {
    name: "Partial Product",
};

let partialProduct2: Partial<PartialProduct> = {
    id: 2,
    price: 150.00,
};