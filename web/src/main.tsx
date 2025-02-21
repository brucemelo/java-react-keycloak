import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AppProtectedProvider} from "./AppProtectedContext.tsx";
import {AuthProvider} from "react-oidc-context";
import {AppUserProvider} from "./AppUserContext.tsx";


const oidcConfig = {
    authority: "http://localhost:8080/realms/master",
    client_id: "my-client",
    redirect_uri: window.location.origin,
};

const onSigninCallback = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
          <AppProtectedProvider>
              <AppUserProvider>
                  <App />
              </AppUserProvider>
          </AppProtectedProvider>
      </AuthProvider>
  </StrictMode>
)
