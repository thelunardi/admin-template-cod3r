import {createContext, useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import route from 'next/router'
import firebase from '../../config/firebase'
import User from '../../model/User'

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()
    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0].providerId,
        urlImage: firebaseUser.photoURL
    }
}

function handleCookie(isLogged: boolean) {
    if (isLogged) {
        Cookies.set('admin-template-auth', isLogged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth')
    }
}

interface AuthContextProps {
    user?: User
    loading?: boolean
    login?: (email: string, password: string) => Promise<void>
    register?: (email: string, password: string) => Promise<void>
    googleLogin?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    useEffect(() => {
        // verifica se o user já se logou em algum momento
        if(Cookies.get('admin-template-auth')) {
            // tenta obter um usuário já logado
            const cancel = firebase.auth().onIdTokenChanged(configSession)
            return () => cancel()
        }
        setLoading(false)
    }, []);



    async function configSession(firebaseUser) {
        if(firebaseUser?.email) {
            const user = await normalizedUser(firebaseUser)
            setUser(user)
            handleCookie(true)
            setLoading(false)
            return user.email
        }
        setUser(null)
        handleCookie(false)
        setLoading(false)
        return false
    }

    async function googleLogin() {
        try {
            setLoading(true)
            const response = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            await configSession(response.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function register(email, password) {
        try {
            setLoading(true)
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)

            await configSession(response.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email, password) {
        try {
            setLoading(true)
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)

            await configSession(response.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await configSession(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            googleLogin,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
