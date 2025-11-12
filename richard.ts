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