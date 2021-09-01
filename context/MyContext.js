import React, { createContext, useState } from "react";

const MyContext = createContext({
    cnt: 0,
    setCnt: () => { }
});

export const MyProvider = MyContext.Provider;

export const MyContextProvider = (props) => {

    const setCnt = (cnt) => {
        setState({ ...state, cnt: cnt })
    }

    const initState = {
        cnt: 0,
        setCnt: setCnt
    }

    const [state, setState] = useState(initState)

    return (
        <MyContext.Provider value={state}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContext;