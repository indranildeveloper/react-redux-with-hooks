import React from "react";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="my-5">
        <h1 className="text-center">Cake and Ice Cream Shop</h1>
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
