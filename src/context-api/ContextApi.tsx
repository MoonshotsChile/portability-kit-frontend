import React from "react";
import { GlobalState } from "./GlobalState";

const ContextApi = React.createContext<GlobalState>({
    login: true
});

export default ContextApi;
