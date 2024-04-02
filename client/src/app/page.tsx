"use client"

import Item from "../components/ItemComponent";
import { useItems } from "../hooks/useItems"
export interface Item {
  id: string;
  text: string;
}

export default function Home() {
  const { items, addItem, removeItem } = useItems()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("item");
    const isValid = input instanceof HTMLInputElement && input.value;
    if (isValid) {
      addItem(input.value);
      input.value = "";
    }
  };
  const createHandleRemoveItem = (id: string) => () => {
    removeItem(id)
  }

  return (
    <div>
      <h1>Mi prueba</h1>
      <form
        className="flex flex-col items-center m-auto w-1/2 my-3 gap-2"
        onSubmit={handleSubmit}
        aria-label="agregar elementos a la lista"
      >
        <label className="w-full text-left text-white text-2xl" htmlFor="item">
          TODO List
        </label>
        <input
          className="w-full p-1 border border-zinc-400 rounded-sm text-black"
          name="item"
          required
          type="text"
          placeholder="Escribe un item"
        />
        <button className="w-1/2 mt-2 bg-zinc-400 rounded-sm" type="submit">
          Añadir
        </button>
      </form>
      <ul className="flex flex-col items-center m-auto w-1/2 min-h-80 gap-2 text-white">
        {items.map((item) => (
          <Item key={item.id} handleClick={createHandleRemoveItem(item.id)} {...item} />
        ))}
      </ul>
    </div>
  );
}
