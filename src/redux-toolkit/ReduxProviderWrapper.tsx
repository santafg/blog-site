import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

type Props = {
  children: JSX.Element;
};

const ReduxProviderWrapper = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProviderWrapper;
