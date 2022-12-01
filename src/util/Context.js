import { useContext, createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [dashboard, setDashboard] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [profile, setProfile] = useState(true)

    const showDashboard = () => {
        setDashboard(true)
        setAdmin(false)
        setProfile(false)
    }

    const showAdmin = () => {
        setAdmin(true)
        setDashboard(false)
        setProfile(false)
    }

    const showProfile = () => {
        setProfile(true)
        setAdmin(false)
        setDashboard(false)
    }

    return (<AppContext.Provider value={
        { showAdmin, showDashboard, showProfile, admin, profile, dashboard }
    }>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => useContext(AppContext)