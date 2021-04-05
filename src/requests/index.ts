import axios from "axios";
import { FormValues } from "../types";

export const GETShoppingList = () => {
  return axios.get("/shopping_list/33");
};

export const GETItems = () => {
  return axios.get("/items");
};

export const GETItem = (id: string) => {
  return axios.get(`/items/${id}`);
};

export const POSTItems = (values: FormValues) => {
  return axios.post("/items", values);
};

export const PATCHShoppingList = (items: string[]) => {
  return axios.patch("/shopping_list", items);
};

export const POSTItemToShoppingList = (itemId: string) => {
  return axios.post("/shopping_list", itemId);
};
