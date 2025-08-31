import { Product } from "./product";

export interface ProductResponseModel extends Response{
    data:Product[],
}