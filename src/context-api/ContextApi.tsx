import React from 'react';
import { Userdata } from "../models/Userdata";
import { Recipient } from "../models/Recipient";

export type ContextProps = {
    userdata?: Userdata,
    products?: [],
    profile?: {},
    recipients?: Recipient[],
    transactions?: {},
    saveContext: Function
};

const initialState: ContextProps = {
    userdata: {},
    products: [],
    profile: {},
    recipients: [],
    transactions: {},
    saveContext: () => {}
}


const ContextApi = React.createContext<ContextProps> (initialState);


const ContextApiProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [context, setContext] = React.useState<ContextProps>(initialState);

    const saveContext = (contextProps: ContextProps) => {
        const newContext: ContextProps = contextProps;
        setContext({...context, ...newContext});
    };

    return (
        <ContextApi.Provider value={{
            userdata: context.userdata,
            products: context.products,
            profile: context.profile,
            recipients: context.recipients,
            transactions: context.transactions,
            saveContext
        }}>
            {children}
        </ContextApi.Provider>
    );
}


export { ContextApi, ContextApiProvider };
