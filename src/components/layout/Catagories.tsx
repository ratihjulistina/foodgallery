import React from "react";
import { Catagory } from "../menu/elements/Catagory";

export function Catagories() {
  return (
    <div
      id="Catagories"
      className="py-5 flex flex-col justify-between items-center max-h-max "
    >
      <Catagory filterKey="Breakfast" />
      <Catagory filterKey="Snacks" />
      <Catagory filterKey="Family Dinner" />
    </div>
  );
}
