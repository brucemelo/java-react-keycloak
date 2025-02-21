import {useState} from 'react'
import './App.css'
import axiosInstance from "./appAxios.tsx";
import {useAppUser} from "./AppUserContext.tsx";


function App() {
    const [uuid, setUuid] = useState("")
    const {appUser} = useAppUser()

    const callService = () => {
        axiosInstance.get("/uuid")
            .then(response => {
                const result = response?.data
                setUuid(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <div>
                User:  {appUser?.username}
            </div>
            <h1>React + Java + Keycloak</h1>
            <div className="card">
                <button onClick={callService}>
                    Call Service
                </button>
                <div>
                    {uuid}
                </div>
            </div>
        </>
    )
}

export default App
