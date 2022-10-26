import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const { Provider } = DataContext;

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    popular: [],
    newMusic: [],
  });
  const [showMobileNav, setShowMobileNav] = useState(false);

  const updateData = (data) =>
    setData((prevState) => ({ ...prevState, ...data }));

  return (
    <Provider value={{ updateData, data, showMobileNav, setShowMobileNav }}>
      {children}
    </Provider>
  );
};

const useData = () => useContext(DataContext); //custom hook

export { DataProvider, useData };
