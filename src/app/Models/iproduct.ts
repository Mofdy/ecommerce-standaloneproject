export interface IProduct {
    getCategories(): unknown;
    id: number;
    name: string;
    price: number;
    description ?: string;
    imageUrl?: string;
    categoryID: number;
    storeId: number;
    quantity: number;
    details?: any;
}
