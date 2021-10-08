import React from "react";

const dataContext = {
  car: 0,
  setCar: () => {},
  data: [],
  setData: () => {}
};

const Context = React.createContext(dataContext);

const ContextProvider = ({children}) => {
  const [car, setCar] = React.useState(0);
  const [data, setData] = React.useState([]);
  const values = { 
    car, 
    setCar, 
    data, 
    setData 
  };
  return(
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export { dataContext, Context, ContextProvider }
export default ContextProvider;
