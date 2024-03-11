import { createContext } from "react";

const defaultValue = {
  locale: "english",
  setLocale: () => {},
};

export default createContext(defaultValue);
