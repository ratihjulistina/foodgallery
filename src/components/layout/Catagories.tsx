import React from "react";
import { CardBlog } from "../menu/elements/CardBlog";
import { LatestPost } from "../menu/elements/LatestPost";
import { Catagory } from "../menu/elements/Catagory";

export function Catagories() {
  return (
    <div id="Catagories">
      <Catagory filterKey="Breakfast" />
      <Catagory filterKey="Snacks" />
      <Catagory filterKey="Family Dinner" />
    </div>
  );
}
