import React from "react";
import ChildrenForRedux from "./ChildrenForRedux.js";
import { Provider } from "react-redux";
import { store } from "./StoreRedux.js";

function App(){

  // this code is updated from vs code to bit bucket  

    return(
      <>
      <Provider store={store}>
      <ChildrenForRedux/>
      </Provider>
      </>
    )
}
export default App;