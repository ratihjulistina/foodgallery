"use client";

import { IGlobalState } from "../types/types.d";
import { createContext } from "react";

export const GlobalStateContext = createContext<IGlobalState | undefined>(
  undefined
);
