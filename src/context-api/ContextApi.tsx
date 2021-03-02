import React from 'react';
import { Userdata } from "../models/Userdata";
import { Recipient } from "../models/Recipient";
import { Profile } from "../models/Profile";
import { Product } from "../models/Product";
import { Transaction } from "../models/Transaction";
import { Bill } from "../models/Bill";

export type ContextProps = {
    userdata?: Userdata,
    products?: Product[],
    profile?: Profile,
    recipients?: Recipient[],
    transactions?: Transaction[],
    bills?: Bill[]
    showLogin: boolean
    accordions: {
        personalData?: boolean,
        contacts?: boolean,
        products?: boolean,
        transactions?: boolean,
        bills?: boolean
    },
    saveContext: Function
};

const initialState: ContextProps = {
    userdata: {},
    products: [],
    profile: {},
    recipients: [],
    transactions: [],
    bills: [],
    showLogin: false,
    accordions: {
        personalData: false,
        contacts: false,
        products: false,
        transactions: false,
        bills: false
    },
    saveContext: () => {}
}


const ContextApi = React.createContext<ContextProps> (initialState);


const ContextApiProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [context, setContext] = React.useState<ContextProps>(initialState);

    const saveContext = (newState: ContextProps) => {
        setContext(prevState => ({...prevState, ...newState}));
    };

    return (
        <ContextApi.Provider value={{
            userdata: context.userdata,
            products: context.products,
            profile: context.profile,
            recipients: context.recipients,
            transactions: context.transactions,
            bills: context.bills,
            accordions: context.accordions,
            showLogin: context.showLogin,
            saveContext
        }}>
            {children}
        </ContextApi.Provider>
    );
}


export { ContextApi, ContextApiProvider };
