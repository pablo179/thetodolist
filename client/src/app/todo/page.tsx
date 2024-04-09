"use client";

import Item from "../../components/ItemComponent";
import { useItems } from "../../hooks/useItems";

export default function Home() {
  const { items, addItem, removeItem } = useItems();
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
    removeItem(id);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-2" >
      <form
        className="flex flex-row items-center w-1/2 min-w-72 my-3 border rounded-md border-slate-400 sticky"
        onSubmit={handleSubmit}
        aria-label="add elements"
      >
        <input
          className="w-full p-1 pl-3 font-light text-slate-800 rounded-md h-full text-sm outline-none"
          name="item"
          required
          type="text"
          placeholder="New todo"
        />
        <button
          className="w-12 h-full rounded-r-md text-slate-600 hover:text-cyan-600 scale-90 hover:scale-110 transition-transform
        "
          type="submit"
        >
          <span className="material-symbols-outlined w-full h-full mt-1 font-thin">
            add
          </span>
        </button>
      </form>
      <ul className="flex flex-col items-center w-full h-full gap-2 border-t overflow-y-scroll p-5">
        {items.map((item) => (
          <Item
            key={item.id}
            handleClick={createHandleRemoveItem(item.id)}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
}
