import { useState, useEffect } from "react";
import { request } from "../utils/request";

export interface Item {
  _id: string;
  title: string;
  status: boolean;
}
export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = async (text: string) => {
    const body = { title: text};
    const createdTodo = await request("/todo", "POST", body);
    setItems((prevItems) => [...prevItems, createdTodo]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((i) => i._id !== id));
  };

  const getItems = async () => {
    const data = await request("/todo", "GET");
    setItems(data);
  }

  const updateItem = async (item: Item) => {
    const updatedTodo = await request(`/todo/${item._id}`, "PUT", item);
    setItems(items.map((i) => i._id === item._id ? updatedTodo : i));
  }

  useEffect(() => {
    getItems();
  }, [])

  return {
    items,
    addItem,
    removeItem,
    getItems,
    updateItem,
  };
};
