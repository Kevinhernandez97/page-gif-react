import { useCallback, useContext } from 'react';
import Context from '../../context/UserContext'
import loginServices from '../../services/getLogin'

export default function useUser () {
    const {jwt, setJWT} = useContext(Context)

    const login = useCallback(({username, password}) => {
        loginServices({username, password})
        .them(jwt => {
            setJWT(jwt)
        })
        .catch(err => {
            console.error(err)
        })
    }, [setJWT])

    const logout = useCallback (() => {
        setJWT(null)
    }, [setJWT])
    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}
