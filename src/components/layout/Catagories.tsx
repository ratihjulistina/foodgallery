import React from "react";
import { Catagory } from "../menu/elements/Catagory";

export function Catagories() {
  return (
    <div id="Catagories" className="py-5">
      <Catagory filterKey="Breakfast" />
      <Catagory filterKey="Snacks" />
      <Catagory filterKey="Family Dinner" />
    </div>
  );
}
