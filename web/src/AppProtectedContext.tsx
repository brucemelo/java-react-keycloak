import React, {createContext} from 'react';
import {useAuth} from "react-oidc-context";
import {setupAxiosInterceptors} from "./appAxios.tsx";


const AppProtectedContext = createContext(null);

export const AppProtectedProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const auth = useAuth();

    if (!auth.isLoading && !auth.isAuthenticated) {
        void auth.signinRedirect();
    }

    if (auth.isLoading || !auth.isAuthenticated) {
        return <span>Login...</span>;
    }

    setupAxiosInterceptors(auth)
    return <AppProtectedContext.Provider value={null}>{children}</AppProtectedContext.Provider>;
};