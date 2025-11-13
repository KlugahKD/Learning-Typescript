let productName: string;
let quantity: number;
let IsInStock: boolean = true;

let tags: Array<String>=["electronics", "gadget"]

let productInfo: [string, number]

interface newProduct{
    id: number;
    name: string;
    price: number;
    tags: string;
    description?: string;
    createdAt: Date; 
}

let newProduct = {
    id: 404,
    name: 'HP Pavilion',
    price: 6800,
    tags: ["electronics", "computer"],
    description: "36 GB RAM 1TB SDD",
    createdAt: Date()

}

type UserID = number | string;

let userid: UserID = 11;
let userid1: UserID = "Username"

function displayStatus(status: 'active' | 'inactive' | 'pending'): void{
    console.log("The status is: ${status}");
}

displayStatus('active');
displayStatus('inactive');
displayStatus('pending');

enum productStatus {
    Active = 'Active',
    inactive = 'inactive',
    pending = 'pending',
}

function displayProductStatus(status: productStatus): void{
    console.log("The product status is: ${status}");
}

let data: unknown = 43;
data.toFixed();

if (typeof data == 'number'){
    console.log(data.toFixed());
}


let flexibleData: any;
flexibleData.toFixed();

function getItemDetails<T>(item: T): T {
    return item;
}

let stringItem = getItemDetails<string>("Tryput Item");
console.log(stringItem);

let numberItem = getItemDetails<number>(1);
console.log(numberItem);

type partialProduct = {
    id: number;
    name: string;
    price: number;
}

let partialProduct: Partial<partialProduct> = {
    name: "Partial Product",
}

let partialProduct1: Partial<partialProduct> = {
    id: 1,
    price: 200,
}