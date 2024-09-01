import React from "react";
import { ColorPicker } from "./ColorPicker";

export const Overlay = () => {
  return (
    <section className="absolute top-[30%] left-32 z-10 hidden lg:block">
      <h1 className="text-5xl font-bold text-black tracking-widest">jiasbd</h1>
      <p className="text-lg text-gray-700 mt-5 hidden sm:block w-[700px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil
        perspiciatis fugit adipisci nulla veniam atque in aperiam! Nostrum
        corrupti officiis ullam velit quam similique aut dignissimos facere
        ipsum tempora.
      </p>
      <h1 className="text-4xl text-gray-800 font-mono mt-10 uppercase">
        koisrjuijikert
      </h1>
      <ColorPicker glassPart ={"body"} />
      <ColorPicker glassPart ={"tapa"} />
      <ColorPicker glassPart ={"watter"} />
      <button className="p-2 border rounded-lg">asdasd</button>
    </section>
  );
};
