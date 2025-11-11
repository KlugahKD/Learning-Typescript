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




