import { createContext, useContext, useReducer } from "react";

const stateContext = createContext();

const StateProvider = ({ initialState, children, reducer }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);
export default StateProvider;
export const useStateValue = () => {
  return useContext(stateContext);
};
