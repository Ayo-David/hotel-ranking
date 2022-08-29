import React from "react";
import { AppProvider } from "./src/context/Provider";
import AppNavContainer from "./src/navigaations";

export default function App() {
  return (
    <AppProvider>
      <AppNavContainer />
    </AppProvider>
  );
}
