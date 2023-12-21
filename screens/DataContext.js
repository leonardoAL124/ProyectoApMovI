import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const buyProducts = (product) => {
        setCart([...cart, {...product}])
    }

    return <DataContext.Provider value={{ cart, setCart, buyProducts}}>{children}</DataContext.Provider>
};

export { DataContext, DataProvider };