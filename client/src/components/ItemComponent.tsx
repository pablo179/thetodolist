"use client";
import { useItems, Item as ItemInterface } from "../hooks/useItems";
import { useState } from "react";

export default function Item({
  _id,
  title,
  status,
}: ItemInterface) {
  const { updateItem } = useItems();
  const [localStatus, setLocalStatus] = useState<boolean>(status);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked;
    updateItem({ _id, title,  status: newStatus});
    setLocalStatus(newStatus);
  }
  return (
    <li className="w-full p-1 border border-zinc-400 rounded-sm flex justify-between items-center px-4">
      <input
        type="checkbox"
        name="status"
        checked={localStatus}
        onChange={handleOnChange}
      />
      <p className={`text-slate-700 ${status ? "line-through" : ""}`}>
        {title}
      </p>
      <button
        className="h-full w-10 text-slate-700 hover:text-red-500"
      >
        X
      </button>
    </li>
  );
}
