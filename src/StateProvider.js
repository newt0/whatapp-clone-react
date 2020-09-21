import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// set up data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);

// memo: StateProvider is what called higher order Components

// memo; I missed below: If you read what variables are defined in the previous code, you'll know the correct code.
//  <StateProvider value={useReducer(reducer, initialState)}>
// {children}
// </StateProvider>
