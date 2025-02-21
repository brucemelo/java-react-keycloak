import React, {createContext, useContext, useEffect, useState} from 'react';
import axiosInstance from "./appAxios.tsx";
import {AppUser} from "./app-user.ts";


interface AppUserContextProps {
    appUser: AppUser | null;
    setAppUser: React.Dispatch<React.SetStateAction<AppUser | null>>;
}

const AppUserContext = createContext<AppUserContextProps | undefined>(undefined);

export const useAppUser = (): AppUserContextProps => {
    const context = useContext(AppUserContext);
    if (!context) {
        throw new Error('useAppUser must be used within a AppUserProvider');
    }
    return context;
};

export const AppUserProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [appUser, setAppUser] = useState<AppUser | null>(null);
    const [isAppUserLoaded, setAppUserLoaded] = useState(false);

    useEffect(() => {
        axiosInstance.get(`/users/auth`).then(response => {
            setAppUser(response.data);
            setAppUserLoaded(true);
        }).catch(() => {
            setAppUser(null);
        });
    }, [])

    if (!isAppUserLoaded) {
        return <span>Loading user...</span>;
    }

    const value = {appUser, setAppUser};
    return <AppUserContext.Provider value={value}>{children}</AppUserContext.Provider>;
};