import { useState } from "react";
import { QTY, COLORS } from "../constant";
import { Select } from "./Select";

export function RolexDetail({ rolex, onClickAdd }) {
  const [form, setForm] = useState({ qty: null, color: null });
  return (
    <div className="flex flex-col mt-4 space-y-4 dark:text-white lg:flex-row-reverse">
      {/* Rolex image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center  h-full bg-gradient-to-br from-purple-500 from-5% via-pink-500 via-40% to-blue-500 rounded-lg overflow-hidden"> 
          <img className="animate-float" src={rolex.src} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Rolex text details */}
        <div className="text-5xl font-black md:text-9xl">
          {rolex.title}
        </div>
        <div className="font-medium md:text-xl">
          {rolex.description}
        </div>
        <div className="flex space-x-6">
          <div className=" text-3xl font-extrabold md:text-6xl">
            {rolex.price} $
          </div>
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
          />
          <Select
            value={form.color}
            onChange={(color) => setForm({ ...form, color })}
            title={"color"}
            options={COLORS}
          />
        </div>
        {/* Rolex buttons and links */}
        <div className="space-x-10">
          <button
            onClick={() => onClickAdd(rolex, form.qty, form.color)}
            className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"
          >
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}