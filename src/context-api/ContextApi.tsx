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

export const ContextApi = React.createContext<ContextProps> ({
    userdata: {},
    products: [],
    profile: {},
    recipients: [],
    transactions: {},
    saveContext: () => {}
});


const ContextApiProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [context, setContext] = React.useState<ContextProps>({
        userdata: {},
        products: [],
        profile: {},
        recipients: [],
        transactions: {},
        saveContext: () => {}
    });

    const saveContext = (props: ContextProps) => {
        const newContext: ContextProps = props;
        setContext({...context, ...newContext});
    };

    return (
        <ContextApi.Provider value={{
            userdata: {},
            products: [],
            profile: {},
            recipients: [],
            transactions: {},
            saveContext
        }}>
            {children}
        </ContextApi.Provider>
    );
}


export default ContextApiProvider;
