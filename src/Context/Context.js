import { createContext } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props) {
    const globalValue = {
    };
    return (
        <AppContext.Provider value={globalValue}>
            {props.children}
        </AppContext.Provider>
    );
}