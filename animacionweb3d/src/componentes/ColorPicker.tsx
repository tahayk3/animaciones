import React from "react";

import { store } from "../store";

export const ColorPicker = ({ glassPart }: { glassPart: string }) => {

    const changeColor = (color:string) =>{
        switch(glassPart){
            case "body":
                store.items.body = color;
                break;
            case "tapa":
                store.items.tapa = color;
                break;
            case "watter":
                store.items.watter = color;
                break;

        }
    }

  return (
    <div className="flex gap-5 mt-2 items-center">
      <h1 className="text-lg text-gray-800 font-bold w-[90px]">{glassPart}</h1>
      <span
        onClick={() => changeColor("red")}
        className="h-6 w-6 bg-red-500 rounded-full inline-flex cursor-pointer"
      ></span>
      <span
        onClick={() => changeColor("green")}
        className="h-6 w-6 bg-green-500 rounded-full inline-flex cursor-pointer"
      ></span>
      <span
        onClick={() => changeColor("yellow")}
        className="h-6 w-6 bg-yellow-500 rounded-full inline-flex cursor-pointer"
      ></span>
      <span
        onClick={() => changeColor("blue")}
        className="h-6 w-6 bg-blue-500 rounded-full inline-flex cursor-pointer"
      ></span>
    </div>
  );
};
