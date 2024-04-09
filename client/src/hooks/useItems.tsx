import { useState } from "react";
interface Item {
  id: string;
  text: string;
}
export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (text: string) => {
    const newItem = { id: Date.now().toString(), text: text };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return {
    items,
    addItem,
    removeItem,
  };
};
