export default function Item({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) {
  return (
    <li
      className="w-full p-1 border border-zinc-400 rounded-sm flex justify-between items-center px-4"
    >
      {text}
      <button className="h-full w-10 text-slate-700 hover:text-red-500" onClick={handleClick} >
        X
      </button>
    </li>
  );
}
