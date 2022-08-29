import React, { createContext, useContext, useReducer } from "react";
import chainInitStates from "./initialStates/chainInitStates";
import hotelInitStates from "./initialStates/hotelInitStates";
import chainReducer from "./reducers/chainReducer";
import hotelReducer from "./reducers/hotelReducer";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [hotelStates, hotelDispatch] = useReducer(
    hotelReducer,
    hotelInitStates
  );
  const [chainStates, chainDispatch] = useReducer(
    chainReducer,
    chainInitStates
  );

  return (
    <AppContext.Provider
      value={{ hotelStates, hotelDispatch, chainStates, chainDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useDataLayer = () => useContext(AppContext);

export default useDataLayer;
