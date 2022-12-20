import { createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    let [user, setUser] = useState(()=>localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)
    let [loading, setLoading] = useState(true)

    const navigate  = useNavigate ()

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://192.168.33.11:8000/token/', {
            method:'POST',
            headers:{
                'content-Type' : 'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
            navigate('/')
        }else{
            alert('Login ou mot de passe incorrect')
        }
    }

    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authToken')
        navigate('/Login')
    }

    let updateToken = async () => {
        console.log('Update token called')
        let response = await fetch('http://192.168.33.11:8000/token/refresh/', {
            method:'POST',
            headers:{
                'content-Type' : 'application/json'
            },
            body:JSON.stringify({'refresh':authToken.refresh})
        })
        let data = await response.json()

        if(response.status === 200){
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
        }else{
            logoutUser()
        }
    }

    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
    } 

    useEffect(()=> {
        let fourMinutes = 1000*60*4
        let interval = setInterval(()=> {
            if(authToken){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    },  [authToken, loading])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}