import { React} from 'react'
// import Axios from "axios";
import "./Login.css"

function Login() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     Axios.post("http://localhost:3000/auth/login", { 
    //         username, 
    //         password
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    return (
        <section className='form-background'>
            <h1>Login</h1>
            <form>
                <div className='form-sections'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="username"
                        required
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-sections'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="pass"
                        name="password"
                        autoComplete="current-password"
                        required
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='form-sections'>
                    <input
                        id="login-btn"
                        className='btn form-btn'
                        type="submit"
                        value="SIGN IN"
                    />
                    <p>New User?</p>
                </div>
            </form>
        </section>
    )
}

export default Login