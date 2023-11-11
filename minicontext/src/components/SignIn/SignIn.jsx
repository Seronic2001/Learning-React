import { useContext, useState } from "react"
import UserContext from "../../context/UserContext"

function SignIn() {
    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSignIn = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
  
    return(
        <>  
            <div className="flex flex-col gap-2 p-4 ">
                <div>Sign In</div>
                <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleSignIn}>Sign In</button>
            </div>
        </>
    )
}

export default SignIn