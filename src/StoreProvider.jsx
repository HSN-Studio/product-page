import React, { useContext, useState } from "react";
import { createContext } from "react";

const storeContext = createContext();
const setstoreContext = createContext();
function StoreProvider({ children }) {
  const [store, setstore] = useState({
    applicationUrl: "http://localhost:3000/",
    cart: [],
    lightBoxVisibility: false,
  });
  return (
    <>
      <storeContext.Provider value={store}>
        <setstoreContext.Provider value={setstore}>
          {children}
        </setstoreContext.Provider>
      </storeContext.Provider>
    </>
  );
}

export default StoreProvider;
export { storeContext, setstoreContext };
